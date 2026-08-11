document.addEventListener("DOMContentLoaded", function () {
  var automationField = document.getElementById("automation");
  var volumeField = document.getElementById("volume");
  var jobValueField = document.getElementById("job_value");
  var calculateBtn = document.getElementById("calculate-btn");
  var status = document.getElementById("form-status");
  var resultBox = document.getElementById("estimate-result");
  var amountEl = document.getElementById("estimate-amount");
  var explanationEl = document.getElementById("estimate-explanation");
  var calloutBox = document.getElementById("estimate-callout");
  var talkThroughLink = document.getElementById("talk-through-link");

  if (!automationField || !volumeField || !jobValueField || !calculateBtn) {
    return;
  }

  var WEEKS_PER_MONTH = 4.33;

  // Fixed, modest, stated-up-front assumptions — deliberately conservative.
  // Each one is spelled out in the explanation text, never hidden.
  var AUTOMATIONS = {
    "missed-calls": {
      rate: 0.1,
      rateLabel: "1 in 10 (10%)",
      unit: "call",
      subject: "calls a week",
      explain: function (volume, jobValue, weeklyLeak, monthlyAmount) {
        return (
          "At roughly " + volume + " calls a week, even a modest " + this.rateLabel +
          " going unanswered is about " + fmt1(weeklyLeak) + " missed " + unitWord(weeklyLeak, "call") +
          " a week. If every one of those would've become a £" + fmtInt(jobValue) +
          " job, that's roughly " + fmtMoney(monthlyAmount) + " a month walking away."
        );
      }
    },
    "appointment-reminders": {
      rate: 0.1,
      rateLabel: "1 in 10 (10%)",
      unit: "job",
      subject: "booked jobs a week",
      explain: function (volume, jobValue, weeklyLeak, monthlyAmount) {
        return (
          "At roughly " + volume + " booked jobs a week, even a modest " + this.rateLabel +
          " turning into a no-show is about " + fmt1(weeklyLeak) + " wasted " + unitWord(weeklyLeak, "trip") +
          " a week. At your average job value, that's roughly " + fmtMoney(monthlyAmount) +
          " a month sitting empty."
        );
      }
    },
    "appointment-scheduler": {
      rate: 0.05,
      rateLabel: "1 in 20 (5%)",
      unit: "enquiry",
      subject: "enquiries a week",
      explain: function (volume, jobValue, weeklyLeak, monthlyAmount) {
        return (
          "At roughly " + volume + " enquiries a week, even a modest " + this.rateLabel +
          " drifting to whoever replies first while you're still going back and forth on a time is about " +
          fmt1(weeklyLeak) + " lost " + unitWord(weeklyLeak, "booking") + " a week. At your average job value, that's roughly " +
          fmtMoney(monthlyAmount) + " a month walking away."
        );
      }
    },
    "review-requests": {
      rate: 0.2,
      rateLabel: "1 in 5 (20%)",
      unit: "job",
      subject: "finished jobs a week",
      isMoney: false,
      explain: function (volume, jobValue, weeklyLeak, monthlyAmount) {
        return (
          "At roughly " + volume + " finished jobs a week, even a modest " + this.rateLabel +
          " of customers leaving a review if they were simply asked is about " + fmt1(weeklyLeak) +
          " extra " + unitWord(weeklyLeak, "review") + " a week — roughly " + fmtInt(monthlyAmount) +
          " more a month. Reviews build up gradually rather than paying out immediately, so this isn't a £-per-month figure the way the others are — it's more about the shape of your reputation a year from now."
        );
      }
    }
  };

  function fmt1(n) {
    return n.toFixed(1).replace(/\.0$/, "");
  }

  function fmtInt(n) {
    return Math.round(n).toLocaleString("en-GB");
  }

  function fmtMoney(n) {
    return "£" + fmtInt(n);
  }

  function unitWord(n, word) {
    return Math.abs(n - 1) < 0.05 ? word : word + "s";
  }

  function showStatus(message, isError) {
    if (!status) {
      return;
    }
    status.textContent = message;
    status.hidden = false;
    status.classList.toggle("form-status--error", Boolean(isError));
  }

  function hideStatus() {
    if (!status) {
      return;
    }
    status.hidden = true;
  }

  function updateTalkThroughLink() {
    if (!talkThroughLink) {
      return;
    }
    var slug = automationField.value;
    talkThroughLink.href = slug ? "contact.html?source=" + encodeURIComponent(slug) : "contact.html";
  }

  automationField.addEventListener("change", updateTalkThroughLink);

  calculateBtn.addEventListener("click", function () {
    var slug = automationField.value;
    var volume = parseFloat(volumeField.value);
    var jobValue = parseFloat(jobValueField.value);

    if (!slug || !isFinite(volume) || volume <= 0 || !isFinite(jobValue) || jobValue <= 0) {
      resultBox.hidden = true;
      calloutBox.hidden = true;
      showStatus("Fill in all three first — pick an automation, then your rough weekly numbers.", true);
      return;
    }

    hideStatus();

    var config = AUTOMATIONS[slug];
    var weeklyLeak = volume * config.rate;
    var monthlyAmount =
      config.isMoney === false
        ? weeklyLeak * WEEKS_PER_MONTH
        : weeklyLeak * jobValue * WEEKS_PER_MONTH;

    amountEl.textContent =
      config.isMoney === false ? "~" + fmtInt(monthlyAmount) + " more reviews/month" : fmtMoney(monthlyAmount) + "/month";
    explanationEl.textContent = config.explain(volume, jobValue, weeklyLeak, monthlyAmount);

    resultBox.hidden = false;
    calloutBox.hidden = false;
    updateTalkThroughLink();
  });

  updateTalkThroughLink();
});
