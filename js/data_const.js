const DevData = {
    Date : '11 feb 24 | 17 : 53',
    LastDate : '11 feb 24 | 12 : 20',
    FaviconUrl : 'http://favicon.yandex.net/favicon/',
    BmRootID : 'bookmark-root',
    Fsz : {
        Normal : 18,
        Min : 10,
        Max : 36,
    },
};

const FszClass = document.querySelector('body');
const ThemeClasses = {
    BGC : document.querySelectorAll('.theme-bgc'),
    Color : document.querySelectorAll('.theme-color'),
    LightClassBGC : 'theme-bgc-light',
    DarkClassBGC : 'theme-bgc-dark',
    LightClassColor : 'theme-color-light',
    DarkClassColor : 'theme-color-dark',
};
const settingsBtnFsz = document.querySelector('.settings__btn-fsz');
const fszImputRange = document.getElementById('fsz-input-range');
const fszNormalBtn = document.getElementById('fsz-btn-normal');
const fszImputRangeParent = fszImputRange.parentElement;
const bmHeaderBtn = document.querySelector('.bookmark__header-btn');
const bmHeaderMenu = document.querySelector('.bookmark__header-menu');
const BmHeaderMenuBtnClassName = 'bookmark__header-menu-btn';
const settingsThemeBtn = document.querySelector('.settings__btn-theme');
