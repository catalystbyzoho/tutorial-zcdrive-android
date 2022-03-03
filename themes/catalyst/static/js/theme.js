themeModeSwitcher = function () {
    var show_theme_block = document.getElementById('globalThemeSwitch');
    if(show_theme_block.style.display == "block"){
        show_theme_block.style.display="none";
    }else{
        show_theme_block.style.display="block";
    }
    const rootElement = document.documentElement; 
    const darkModeStorageKey = 'user-color-scheme'; 
    const rootElementDarkModeAttributeName = 'data-user-color-scheme';
    const darkModeTogglebuttonElement = document.getElementById('dark-mode-button');
    const setLight = document.getElementById('setlight');
    const setDark = document.getElementById('setdark');
    var rep_icon = document.querySelectorAll(".theme-icon");

    const setLS = (k, v) => {
        try {
            localStorage.setItem(k, v);
        } catch (e) { }
    }

    const removeLS = (k) => {
        try {
            localStorage.removeItem(k);
        } catch (e) { }
    }

    const getLS = (k) => {
        try {
            return localStorage.getItem(k);
        } catch (e) {
            return null 
        }
    }

    const getModeFromCSSMediaQuery = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const resetRootDarkModeAttributeAndLS = () => {
        rootElement.removeAttribute(rootElementDarkModeAttributeName);
        removeLS(darkModeStorageKey);
    }

    const validColorModeKeys = {
        'dark': true,
        'light': true
    }

    const modeIcons = {
        'dark': '<div class="dark-icon"></div><div>Dark theme</div>',
        'light': '<div class="light-icon"></div><div>Light theme</div>'
    }

    const setModeButtonIcon = (mode) => {
        if(darkModeTogglebuttonElement){
            darkModeTogglebuttonElement.innerHTML = modeIcons[mode];
        }
    }

    const applyCustomDarkModeSettings = (mode) => {
        const currentSetting = mode || getLS(darkModeStorageKey);

        if (validColorModeKeys[currentSetting]) {
            nowMode = currentSetting
            rootElement.setAttribute(rootElementDarkModeAttributeName, currentSetting);
        } else {
            nowMode = getModeFromCSSMediaQuery()
            resetRootDarkModeAttributeAndLS();
        }
        setModeButtonIcon(nowMode)
      }
      setLight.addEventListener('click', () => {
            let currentSetting = "light";
            removeSetTheme(currentSetting);
            setLS(darkModeStorageKey, currentSetting);
            applyCustomDarkModeSettings(currentSetting);
            document.getElementById("checkbox-light").checked=true;
            document.getElementById("checkbox-dark").checked=false;
            for(var i=0;i<rep_icon.length;i++){
                rep_icon[i].children[0].classList.remove("code-dark-icon");
                rep_icon[i].children[0].classList.add("code-light-icon");
            }
            show_theme_block.style.display="none";
      });

        setDark.addEventListener('click', () => {
            let currentSetting = "dark";
            removeSetTheme(currentSetting);
            setLS(darkModeStorageKey, currentSetting);
            applyCustomDarkModeSettings(currentSetting);
            document.getElementById("checkbox-light").checked=false;
            document.getElementById("checkbox-dark").checked=true;
            for(var i=0;i<rep_icon.length;i++){
                rep_icon[i].children[0].classList.remove("code-light-icon");
                rep_icon[i].children[0].classList.add("code-dark-icon");
            }
            show_theme_block.style.display="none";
        });

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
    const darkModeTogglebuttonElement = document.getElementById('dark-mode-button');
  
    const setLS = (k, v) => {
        try {
            localStorage.setItem(k, v);
        } catch (e) { }
    }
  
    const removeLS = (k) => {
        try {
            localStorage.removeItem(k);
        } catch (e) { }
    }
  
    const getLS = (k) => {
        try {
            return localStorage.getItem(k);
        } catch (e) {
            return null 
        }
    }
  
    const getModeFromCSSMediaQuery = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const resetRootDarkModeAttributeAndLS = () => {
        rootElement.removeAttribute(rootElementDarkModeAttributeName);
        removeLS(darkModeStorageKey);
    }
  
    const validColorModeKeys = {
        'dark': true,
        'light': true
    }
  
    const applyCustomDarkModeSettings = (mode) => {
    
        const currentSetting = mode || getLS(darkModeStorageKey);
  
        if (validColorModeKeys[currentSetting]) {
            nowMode = currentSetting
            rootElement.setAttribute(rootElementDarkModeAttributeName, currentSetting);
        } else {
            nowMode = getModeFromCSSMediaQuery()
            resetRootDarkModeAttributeAndLS();
        }
      }
      applyCustomDarkModeSettings();
  }(); 