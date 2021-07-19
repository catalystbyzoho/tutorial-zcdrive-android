window.onload = () => {
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
      theme[i].classList.remove('light1');
      theme[i].classList.add('dark1');
    }
    const icontheme = document.getElementsByName('icontheme');
    for (var i = 0; i < icontheme.length; i++) {
      icontheme[i].classList.remove('code-light-icon');
      icontheme[i].classList.add('code-dark-icon');
    }
  }
};
  function clickHandler(e) {
    const themeSwitcher = document.getElementsByName('theme-switch');
    if (e.checked) {
      console.log("if");
      for (var i = 0; i < themeSwitcher.length; i++) {
        themeSwitcher[i].checked = true;
      }
      const theme = document.getElementsByName('codetheme');
      for (var i = 0; i < theme.length; i++) {
        theme[i].classList.remove('light');
        theme[i].classList.add('dark');		
      }
      const icontheme = document.getElementsByName('icontheme');
      for (var i = 0; i < icontheme.length; i++) {
        icontheme[i].classList.remove('code-light-icon');
        icontheme[i].classList.add('code-dark-icon');
      }
    } 
    else {
      console.log("else"+themeSwitcher.length);
      for (var i = 0; i < themeSwitcher.length; i++) {
        console.log("for");
        themeSwitcher[i].checked = false;
      }
      const theme = document.getElementsByName('codetheme');
      for (var i = 0; i < theme.length; i++) {
        theme[i].classList.add('light');
        theme[i].classList.remove('dark'); 
      }
      const icontheme = document.getElementsByName('icontheme');
      for (var i = 0; i < icontheme.length; i++) {
        icontheme[i].classList.add('code-light-icon');
        icontheme[i].classList.remove('code-dark-icon');
      }
    }
  }