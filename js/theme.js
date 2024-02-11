
let local_theme = localStorage.getItem('local_theme' );
get_local_theme(local_theme);
settingsThemeBtn.addEventListener('click', () => {
    if ( settingsThemeBtn.dataset.show == 'show' )
    {
        settingsThemeBtn.dataset.show = 'hide';
        local_theme = 'light-theme';
    }
    else
    {
        settingsThemeBtn.dataset.show = 'show';
        local_theme = 'dark-theme';
    }
    localStorage.setItem('local_theme', local_theme );
    change_theme(local_theme);
});

function get_local_theme(local_theme)
{
   if ( local_theme == undefined ) 
   {
        local_theme = 'light-theme';
        // светлая тема
        settingsThemeBtn.dataset.show = 'hide';
   }
   else if ( local_theme == 'light-theme')
   {
        local_theme = 'light-theme';
        settingsThemeBtn.dataset.show = 'hide';
   }
   else if ( local_theme == 'dark-theme' )
   {
        local_theme = 'dark-theme';
        settingsThemeBtn.dataset.show = 'show';
   }
   localStorage.setItem('local_theme', local_theme );
   change_theme(local_theme);
}

function change_theme(local_theme)
{
    ThemeClasses.BGC.forEach( (elem_bgc) => {
        elem_bgc.classList.remove(ThemeClasses.LightClassBGC);
        elem_bgc.classList.remove(ThemeClasses.DarkClassBGC);
    });
    ThemeClasses.Color.forEach( (elem_coloc) => {
        elem_coloc.classList.remove(ThemeClasses.LightClassColor);
        elem_coloc.classList.remove(ThemeClasses.DarkClassColor);
    });
    if ( local_theme == 'dark-theme')
    {
        ThemeClasses.BGC.forEach( (elem_bgc) => {
            elem_bgc.classList.add(ThemeClasses.DarkClassBGC);
        });
        ThemeClasses.Color.forEach( (elem_coloc) => {
            elem_coloc.classList.add(ThemeClasses.DarkClassColor);
        });
    }
    else
    {
        ThemeClasses.BGC.forEach( (elem_bgc) => {
            elem_bgc.classList.add(ThemeClasses.LightClassBGC);
        });
        ThemeClasses.Color.forEach( (elem_coloc) => {
            elem_coloc.classList.add(ThemeClasses.LightClassColor);
        });
    }
    localStorage.setItem('local_theme', local_theme );
}