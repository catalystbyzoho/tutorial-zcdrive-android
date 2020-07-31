"use strict";//No I18N

function initialSetup() {
  $(".request-sec").show(), $(".feedback-sec").hide(), $(".reponse-sec").hide()
}

function submitRating(e) {
  $("[name=was_this_helpful]").val(e), "Yes" === e ? submitFeedback() : ($(".yes-no").hide(), $(".want-feature").hide(), $(".rating-form").addClass("full-width"), $(".feedback-sec").show())
}//No I18N

function hideFeedbackSec() {
  $(".yes-no").show(), $(".want-feature").show(), $(".rating-form").removeClass("full-width"), $(".feedback-sec").hide()
}

function submitFeedback(e) {
  var a = $("[name=was_this_helpful]").val(),
    s = $("#comments").val(),
    i = $("#feedback_email").val();
  $("[name=feedback]").val(s), $("[name=email]").val(i), $("[name=url]").val(location.href), "Yes" !== a && "No" !== a || $("#ratingForm").submit(), $(".request-sec").hide(), $(".reponse-sec").show(), $(".want-feature").show(), $(".rating-form").removeClass("full-width")
}//No I18N
initialSetup();
