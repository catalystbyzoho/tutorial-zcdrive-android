switchDarkMode = function () {
    const rootElement = document.documentElement; // <html>
    const darkModeStorageKey = 'user-color-scheme'; // use as localStorage's key
    const rootElementDarkModeAttributeName = 'data-user-color-scheme';
    const darkModeTogglebuttonElement = document.getElementById('dark-mode-button');
    const visible = document.getElementById("div1");
    const setLight = document.getElementById('setlight');
    const setDark = document.getElementById('setdark');

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
            return null // the same as localStorage.getItem() get nothing
        }
    }

    const getModeFromCSSMediaQuery = () => {
        // use matchMedia API
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
        // receive user's operation or get previous mode from localStorage
        const currentSetting = mode || getLS(darkModeStorageKey);

        if (currentSetting === getModeFromCSSMediaQuery()) {
            // When the user selected mode equal prefers-color-scheme 
            // reset and restored to automatic mode
            nowMode = getModeFromCSSMediaQuery()
            resetRootDarkModeAttributeAndLS();
        } else if (validColorModeKeys[currentSetting]) {
            nowMode = currentSetting
            rootElement.setAttribute(rootElementDarkModeAttributeName, currentSetting);
        } else {
            // 首次访问或从未使用过开关、localStorage 中没有存储的值，currentSetting 是 null
            // 或者 localStorage 被篡改，currentSetting 不是合法值
            nowMode = getModeFromCSSMediaQuery()
            resetRootDarkModeAttributeAndLS();
        }
        setModeButtonIcon(nowMode)
      }

      const invertDarkModeObj = {
          'dark': 'dark',
          'light': 'light'
      }

      const toggleCustomDarkMode = () => {
          let currentSetting = getLS(darkModeStorageKey);

          if (validColorModeKeys[currentSetting]) {
              // get mode from localStorage and set the opposite
              currentSetting = invertDarkModeObj[currentSetting];
          } else if (currentSetting === null) {
              // if get null from localStorage
              // get mode from prefers-color-scheme and set the opposite
              currentSetting = invertDarkModeObj[getModeFromCSSMediaQuery()];
          } else {
              // get anything error, return
              return;
          }
          // set opposite mode into localStorage
          setLS(darkModeStorageKey, currentSetting);
          return currentSetting;
      }

      // when page loaded set page mode
      applyCustomDarkModeSettings();

      darkModeTogglebuttonElement.addEventListener('click', () => {
          // handle user click switch dark mode button
          // applyCustomDarkModeSettings(toggleCustomDarkMode());
          visible.style.display="block";
      })

      setLight.addEventListener('click', () => {
          let currentSetting = "light";
          setLS(darkModeStorageKey, currentSetting);
          applyCustomDarkModeSettings(currentSetting);
          darkModeTogglebuttonElement.innerHTML = '<div class="light-icon"></div><div>Light theme</div>';
          visible.style.display="none";
      })

      setDark.addEventListener('click', () => {
          let currentSetting = "dark";
          setLS(darkModeStorageKey, currentSetting);
          applyCustomDarkModeSettings(currentSetting);
          darkModeTogglebuttonElement.innerHTML = '<div class="dark-icon"></div><div>Dark theme</div>';
          visible.style.display="none";
          const ls = localStorage.getItem('user-color-scheme');
          if (ls == 'dark') {
            const themeSwitcher = document.getElementsByName('theme-switch');
            for (var i = 0; i < themeSwitcher.length; i++) {
              themeSwitcher[i].checked = true;
            }
            const theme = document.getElementsByName('codetheme');
            for (var i = 0; i < theme.length; i++) {
              console.log(theme[i]);
              theme[i].classList.remove('light');
              theme[i].classList.add('dark');
            }
            const icontheme = document.getElementsByName('icontheme');
            for (var i = 0; i < icontheme.length; i++) {
              icontheme[i].classList.remove('code-light-icon');
              icontheme[i].classList.add('code-dark-icon');
            }
          }
      })
  }();

  //code

   