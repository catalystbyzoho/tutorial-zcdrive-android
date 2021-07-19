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

    const modeIcons = {
        'dark': '<div class="dark-icon"></div><div>Dark theme</div>',
        'light': '<div class="light-icon"></div><div>Light theme</div>'
    }

    const setModeButtonIcon = (mode) => {
        darkModeTogglebuttonElement.innerHTML = modeIcons[mode]
    }

    const applyCustomDarkModeSettings = (mode) => {
        const currentSetting = mode || getLS(darkModeStorageKey);

        if (currentSetting === getModeFromCSSMediaQuery()) {
            nowMode = getModeFromCSSMediaQuery()
            resetRootDarkModeAttributeAndLS();
        } else if (validColorModeKeys[currentSetting]) {
            nowMode = currentSetting
            rootElement.setAttribute(rootElementDarkModeAttributeName, currentSetting);
        } else {
            nowMode = getModeFromCSSMediaQuery()
            resetRootDarkModeAttributeAndLS();
        }
        setModeButtonIcon(nowMode)
      }

      applyCustomDarkModeSettings();
  }(); 

  