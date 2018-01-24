$(document).foundation();

$(function () {
  $('.open-member-signup-form').click(function (event) {
    event.preventDefault();
    document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us9.list-manage.com","uuid":"bcb2137b8063b24f1e828b419","lid":"0790fa5505"}) })
  });
});
