"use strict";//No I18N
  var $helpContainer = $(""),
  $searchband = $(""),
  $navbarHeader = $(""),
  lastScrollTop = 0;

  function toggleSideNav(e) {
  var i = $(e.target);
  i.closest("#toggler").length ? $helpContainer.toggleClass("open") : i.closest(".sidebar-close").length ? $helpContainer.removeClass("open") : i.closest(".help-content").length && $helpContainer.removeClass("open"), i.closest("#main-menu").length && $("#help-main-menu").toggleClass("in")
  }//No I18N
  $(window).scroll(function() {
  var e = $("#scroll-top-navigator"),
    i = $(window).scrollTop(),
    l = $(window).width() > 767,
    s = l ? $searchband : $navbarHeader;
  i > lastScrollTop ? (e.removeClass("scroll-hidden"), e.addClass("scroll-visible"), i < 75 ? s.css({
    position: "relative",
    top: 0,
    visibility: "visible"
  }) : s.css({
    visibility: "hidden",
    opacity: 0
  })) : s.css({
    visibility: "visible",
    position: "fixed",
    transition: "opacity 0.2s ease 0.2s",
    opacity: 1
  }), 0 === i && (e.removeClass("scroll-visible"), e.addClass("scroll-hidden"), s.css({
    position: "relative",
    top: 0,
    visibility: "visible"
  }), l && $navbarHeader.css({
    position: "fixed",
    opacity: 1,
    visibility: "visible"
  })), lastScrollTop = i
  }), $(document).click(toggleSideNav), $("#scroll-top-navigator").click(function(e) {
  return e.preventDefault(), $("html, body").animate({
    scrollTop: 0
  }, 400), !1
  });//No I18N