document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (!form || !status) {
    return;
  }

  var WEBHOOK_URL = "https://n8n.srv1179774.hstgr.cloud/webhook/contact-form";
  var submitButton = form.querySelector(".form-submit");

  // If a page links here with e.g. contact.html?source=missed-calls (the
  // Quick Assessment page does this), use that as source_page instead of
  // the "contact" default already set on the hidden field in the markup.
  var sourceParam = new URLSearchParams(window.location.search).get("source");
  if (sourceParam) {
    form.source_page.value = sourceParam;
  }

  function showStatus(message, isError) {
    status.textContent = message;
    status.hidden = false;
    status.classList.toggle("form-status--error", Boolean(isError));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var payload = {
      name: form.name.value.trim(),
      business_name: form.business_name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
      source_page: form.source_page.value
    };

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending…";
    }

    var encoded = Object.keys(payload)
      .map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(payload[key]);
      })
      .join("&");

    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encoded
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status);
        }

        form.hidden = true;
        showStatus("Thanks — that's sent. I'll reply personally, usually within a couple of days.", false);
      })
      .catch(function () {
        showStatus("Something went wrong sending that. Please try again, or email hello@dfootprint.co.uk directly.", true);

        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Send";
        }
      });
  });
});
