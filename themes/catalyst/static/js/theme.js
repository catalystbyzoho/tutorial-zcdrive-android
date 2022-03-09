themeModeSwitcher = function () {
    const rootElement = document.documentElement; 
    const darkModeStorageKey = 'user-color-scheme'; 
    const rootElementDarkModeAttributeName = 'data-user-color-scheme';
    var rep_icon = document.querySelectorAll(".theme-icon");
    var theme_switch = document.getElementById('slider').checked;

    const setLS = (k, v) => {
        try {
            localStorage.setItem(k, v);
        } catch (e) { }
    }

    const applyCustomDarkModeSettings = (mode) => {
        const currentSetting = mode;
        rootElement.setAttribute(rootElementDarkModeAttributeName, currentSetting);
      }

    if(theme_switch){
        let currentSetting = "dark";
        removeSetTheme(currentSetting);
        setLS(darkModeStorageKey, currentSetting);
        applyCustomDarkModeSettings(currentSetting);
        for(var i=0;i<rep_icon.length;i++){
            rep_icon[i].children[0].classList.remove("code-light-icon");
            rep_icon[i].children[0].classList.add("code-dark-icon");
        }
    }else{
        let currentSetting = "light";
        removeSetTheme(currentSetting);
        setLS(darkModeStorageKey, currentSetting);
        applyCustomDarkModeSettings(currentSetting);
        for(var i=0;i<rep_icon.length;i++){
            rep_icon[i].children[0].classList.remove("code-dark-icon");
            rep_icon[i].children[0].classList.add("code-light-icon");
        }
    }

    function removeSetTheme(e){
        if(e == "light"){
            var themeChange = document.querySelectorAll("pre .theme-icon");
            for(var i=0;i<themeChange.length;i++){
                themeChange[i].children[0].style="";
                themeChange[i].closest("pre").classList.remove("shortcode-dark");
            }
        }else if(e == "dark"){
            var themeChange = document.querySelectorAll("pre .theme-icon");
            for(var i=0;i<themeChange.length;i++){
                themeChange[i].children[0].style="";
                themeChange[i].closest("pre").classList.remove("shortcode-light");
            }
        }
    }
}; 

// Set Theme at initialSetup
switchDarkMode = function () {
    const rootElement = document.documentElement; 
    const darkModeStorageKey = 'user-color-scheme'; 
    const rootElementDarkModeAttributeName = 'data-user-color-scheme';

    const getLS = (k) => {
        try {
            return localStorage.getItem(k);
        } catch (e) {
            return null 
        }
    }
  
    const applyCustomDarkModeSettings = () => {
        let currentSetting =  getLS(darkModeStorageKey);
        if(currentSetting == null){
            currentSetting = "light";
        }
        rootElement.setAttribute(rootElementDarkModeAttributeName, currentSetting);
      }
      applyCustomDarkModeSettings();
  }(); 