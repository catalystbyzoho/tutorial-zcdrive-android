function createCookie(refCookieName, urlCookieName) {
  var cookieExist = document.cookie.indexOf(refCookieName) >= 0;
  var referrer = document.referrer;

  if(!cookieExist && referrer) {
    var expiry = new Date();
    var days = 30;
    expiry.setTime(expiry.getTime() + (days * 24 * 60 * 60 * 1000));

    var affix = '; expires=' + expiry.toGMTString() + '; domain=.zoho.com; path=/';

    document.cookie = refCookieName + '=' + encodeURIComponent(referrer) + affix;
    document.cookie = urlCookieName + '=' + encodeURIComponent(location.href) + affix;
  }
}

/*
 * Load accounts to get user details
 *
 */
$(document).ready(function () {

    var script = document.createElement('script'),
        hostName = getHostNameForURL();

    script.src      = "https://accounts." + hostName + ".com/u/info";
    script.onload   = showUserInfo;

    document.getElementsByTagName('head')[0].appendChild(script);
});
/*
 * @method - showUserInfo
 *
 * - To check whether user logged in or not. If yes, we will replace `signin` and `signup` btns with `Access Zoho Catalyst` btn.
 */
function showUserInfo() {

    var userName = window.zohouser.DISPLAY_NAME,
        hostName = getHostNameForURL();

    if(userName) {

      //Show User name in top header eg. Welcome <user_name>!

      userName = decodeHexString(userName);

      $('.signin').css('display', 'none');
      $('.signup').css('display', 'none');

      $(".getstarted-box, .get-started").css('display', 'none');


      //Signup form replacement

			$(".ZI-form").css("padding-top", "30px");
			$(".ZI-form").html("<div style='text-align: center'><a class='btn-prim' href='https://catalyst." + hostName + ".com/home'>Access Zoho Catalyst</a></div>");
    }
}

/*
 * @method - isUserLoggedIn
 * - To check whether user loggedIn or not
 */
function isUserLoggedIn() {
  return window.zohouser.DISPLAY_NAME ? true : false;
}

/*
 * @method - decodeHexString
 * - To decode user name
 */

function decodeHexString(str){
  str = str.replace(/\\x([0-9A-Fa-f]{2})/g, function(){return String.fromCharCode(parseInt(arguments[1], 16));});
  str = str.replace(/\\u([\d\w]{4})/gi, function() {
    return String.fromCharCode(parseInt(arguments[1], 16));
  });
  return str;
}


/*
 * @method - getHostNameForURL
 *   - To get host name (localzoho or zoho)
 */

function getHostNameForURL() {

    var hostName = window.location.hostname;
    hostName    =   hostName.replace("www.", '');

    hostName = hostName.split(".com");

    return hostName[0];
}



/*
 * @method - setSelectedTab
 *  - To select current active tab in header band
 */

function setSelectedTab(elementID) {
  $("#"+elementID + " > a").addClass("selected");
}

/*
 * @method - setSelectedFeature
 *  - To select current active feature under all features list
 */

function setSelectedFeature(elementID) {
  $("#"+elementID).addClass("selected");
}

/* Edition selection box */
var isMouseOnList = false;

$('.edition-select-list').mouseover(function(){
    isMouseOnList = true;
});

$('.edition-select-list').mouseout(function(){
    isMouseOnList = false;
});

function selectListAction(){
    var selectList = $('.edition-select-list');
    if(selectList.hasClass('open')){
       hideSelectList();
    }
    else {
        selectList.addClass('open');
        $('#zb-edition').focus();
        selectList.css('display','inherit');
        $('#select-caret').addClass('open-caret');
    }

}
function hideSelectList(selectList){
    if(!isMouseOnList){
        var selectList = $('.edition-select-list');
        selectList.removeClass('open');
        selectList.css('display','none');
        $('#select-caret').removeClass('open-caret');
    }
}
