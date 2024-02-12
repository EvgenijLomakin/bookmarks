document.addEventListener("DOMContentLoaded", ready);
function ready() {
    console.log('Date - ' + DevData.Date);
    console.log('Last - ' + DevData.LastDate);
    font_size_fun();
    render_fun();
    // bookmark
    bookmark_start();
    bmHeaderBtn.addEventListener('click', (e) => {
        if ( bmHeaderBtn.dataset.show == 'show' )
        {
            bmHeaderBtn.dataset.show = 'hide';
            bmHeaderMenu.dataset.show = 'hide';
        }
        else
        {
            bmHeaderBtn.dataset.show = 'show';
            bmHeaderMenu.dataset.show = 'show';
        }
    });
    // Menu
    bmHeaderMenu.addEventListener('click', (e) => {
        let target_rang;
        //console.log('target_rang  ' + e.target.dataset.rang );
        if (  e.target.dataset.rang != undefined )
        {
            target_rang = e.target.dataset.rang;
            if( e.target.dataset.show == 'show' )
            {
                e.target.dataset.show = 'hide';
                DevData.BmRootID.querySelector(`.bookmark__wrapper[data-rang="${target_rang}"]`).dataset.show = 'hide';
            }
            else
            {
                e.target.dataset.show = 'show';
                DevData.BmRootID.querySelector(`.bookmark__wrapper[data-rang="${target_rang}"]`).dataset.show = 'show';
            }
        }
        
    });
    // Показать при пером заходе на сайт
    function bookmark_start()
    {
        if ( localStorage.getItem('bn-ferst-start', false) )
        {
            document.getElementById('bookmark-start-message').dataset.show = 'hide';
        }
        else
        {
            document.getElementById('bookmark-start-message').dataset.show = 'show';
            // bmHeaderBtn.dataset.show = 'show';
            // bmHeaderMenu.dataset.show = 'show';
            localStorage.setItem('bn-ferst-start', false);
        }
    }
    theme_fun();
}

const DevData = {
    Date : '12 feb 24 | 13 : 05',
    LastDate : '12 feb 24 | 00 : 20',
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
//
const DataBase = {
    0 : {
            Rang : 0,
            Head : {
                Title : 'Поиск',
                BGC : '',
                Color : '',
            },
            Site : {
                0 : {
                    Favicon : DevData.FaviconUrl +'google.ru/',
                    Href : 'https://www.google.ru/',
                    Text : "google",
                },
                1 : {
                    Favicon : DevData.FaviconUrl +'dzen.ru',
                    Href : 'https://dzen.ru',
                    Text : "dzen.ru Яндекс",
                },
            },
    },
    1 : {
        Rang : 1,
        Head : {
            Title : 'Почта',
            BGC : '',
            Color : '',
        },
        Site : {
            0 : {
                Favicon : DevData.FaviconUrl +'mail.yandex.ru',
                Href : 'https://mail.yandex.ru/?uid=59388858#inbox',
                Text : "mail.yandex",
            },
            1 : {
                Favicon : DevData.FaviconUrl +'mail.google.com',
                Href : 'https://mail.google.com/mail/u/0/#inbox',
                Text : "mail.google.com",
            },
            2 : {
                Favicon : DevData.FaviconUrl +'e.mail.ru',
                Href : 'https://e.mail.ru/inbox/',
                Text : "e.mail.ru",
            },
            3 : {
                Favicon : DevData.FaviconUrl +'temp-mail.org',
                Href : 'ttps://temp-mail.org/',
                Text : "temp-mail.org временная почта",
            },
        },
    },
    2 : {
        Rang : 2,
        Head : {
            Title : 'Погода и карты',
            BGC : '#fffc04',
            Color : '#000dff',
        },
        Site : {
            0 : {
                Favicon : DevData.FaviconUrl +'windy.com',
                Href : 'https://www.windy.com/44.721/37.762?44.274,37.762,8',
                Text : "Погода от windy.com",
            },
            1 : {
                Favicon : DevData.FaviconUrl +'google.ru',
                Href : 'https://www.google.ru/maps/d/u/0/viewer?mid=1yPD9bARZQLtwDZLmIYpcZO2-9W0&hl=ru&ll=44.68640370852381%2C37.821581508956875&z=12',
                Text : "Достопримечательности",
            },
            2 : {
                Favicon : DevData.FaviconUrl +'google.ru',
                Href : 'https://www.google.ru/maps/@44.714582,37.7152343,12z?hl=ru&entry=ttu',
                Text : "google карта",
            },
            3 : {
                Favicon : DevData.FaviconUrl +'yandex.ru',
                Href : 'https://yandex.ru/maps/970/novorossiysk/?ll=37.768809%2C44.723773&z=13',
                Text : "yandex карта",
            },
        },
    },
    3 : {
        Rang : 3,
        Head : {
            Title : 'социальные сети',
            BGC : '',
            Color : '',
        },
        Site : {
            0 : {
                Favicon : DevData.FaviconUrl +'youtube.com',
                Href : 'https://www.youtube.com/',
                Text : "youtube",
            },
            1 : {
                Favicon : DevData.FaviconUrl +'ok.ru',
                Href : 'https://ok.ru/',
                Text : "ok.ru",
            },
            2 : {
                Favicon : DevData.FaviconUrl +'vk.com',
                Href : 'https://vk.com/feed',
                Text : "vk.com",
            },
            3 : {
                Favicon : DevData.FaviconUrl +'rutube.ru',
                Href : 'https://rutube.ru/',
                Text : "rutube.ru",
            },
            20 : {
                Favicon : DevData.FaviconUrl +'savefrom.net',
                Href : 'https://ru.savefrom.net/',
                Text : "Скачать видео онлайн",
            },
            21 : {
                Favicon : DevData.FaviconUrl +'save4k.com',
                Href : 'https://save4k.com/',
                Text : "Скачать видео и аудио с YouTube... онлайн",
            },
        },
    },
    4 : {
        Rang : 4,
        Head : {
            Title : 'переводчики и словари',
            BGC : '',
            Color : '',
        },
        Site : {
            0 : {
                Favicon : DevData.FaviconUrl +'translate.google.com/',
                Href : 'https://translate.google.com/?sl=en&tl=ru&op=translate&hl=ru',
                Text : "google translate",
            },
            1 : {
                Favicon : DevData.FaviconUrl +'speechpad.ru',
                Href : 'https://speechpad.ru/',
                Text : "speechpad.ru",
            },
            2 : {
                Favicon : DevData.FaviconUrl +'online.orfo.ru',
                Href : 'https://online.orfo.ru/',
                Text : "орфография - orfo.ru",
            },
            3 : {
                Favicon : DevData.FaviconUrl +'advego.com',
                Href : 'https://advego.com/text/',
                Text : "орфография - advego.com",
            },
        },
    },
    5 : {
        Rang : 5,
        Head : {
            Title : 'WEB DEV INFO',
            BGC : '',
            Color : '',
        },
        Site : {
            0 : {
                Favicon : DevData.FaviconUrl +'github.io',
                Href : 'https://evgenijlomakin.github.io/bookmarks/',
                Text : "github мой сайт",
            },
            1 : {
                Favicon : DevData.FaviconUrl +'github.com/',
                Href : 'https://github.com/EvgenijLomakin',
                Text : "github мой профиль",
            },
            2 : {
                Favicon : DevData.FaviconUrl +'doka.guide',
                Href : 'https://doka.guide/tools/markdown/',
                Text : "markdown",
            },
            3 : {
                Favicon : DevData.FaviconUrl +'dwstroy.ru',
                Href : 'https://dwstroy.ru/stail/plaginy-rasshireniya/emmet-shpargalka/',
                Text : "Базовый синтаксис плагина EMMET",
            },
            4 : {
                Favicon : DevData.FaviconUrl +'realfavicongenerator.net',
                Href : 'https://realfavicongenerator.net/',
                Text : "real favicon generator net",
            },
            5 : {
                Favicon : DevData.FaviconUrl +'caniuse.com',
                Href : 'https://caniuse.com/',
                Text : "caniuse.com",
                Description : '<p>CanIUse — это инструмент, благодаря которому можно узнать в какой степени в десктопных и мобильных браузерах поддерживаются современные веб-стандарты. </p> <p>Кроме сайта caniuse.com, существует приложение CanIUse, которое можно использовать с помощью терминала или командной строки.</p>',
            },
        },
    },
    // 6 : {
    //     Rang : 6,
    //     Head : {
    //         Title : '',
    //         BGC : '',
    //         Color : '',
    //     },
    //     Site : {
    //         0 : {
    //             Favicon : DevData.FaviconUrl +'',
    //             Href : '',
    //             Text : "",
    //         },
    //     },
    // },
};
const Companent_bm__wrapper =  ( title, show, rang, bgc = '#fff', color = '#111'  ) => {
    if ( ( (color == '') || undefined ) || ( bgc == '' || undefined ) )
    {
        return `<div class="bookmark__wrapper" data-show="${show}" data-rang="${rang}">
        <p class="bookmark__wrapper-title" >${title}</p>
        </div>`;
    } 
    return `<div class="bookmark__wrapper" data-show="${show}" data-rang="${rang}">
    <p class="bookmark__wrapper-title" style="background-color: ${bgc}; color: ${color};">${title}</p>
    </div>`;
};
const companent_bm_link = (rang, href, favicon, text) => {
    return `<div class="bookmark__container-link">
        <a href="${href}" class="bookmark__link" target="_blank">
            <img src="${favicon}" class="bookmark__link-favicon">
            <p class="bookmark__link-text">${text}</p>
        </a>
    </div>`;
}
const companent_bm_link_with_description = (rang, href, favicon, text, description) => {
    return `<div class="bookmark__container-link">
        <a href="${href}" class="bookmark__link" target="_blank">
            <img src="${favicon}" class="bookmark__link-favicon">
            <p class="bookmark__link-text">${text}</p>
        </a>
        <div class="bookmark__link-description">${description}</div>
    </div>`;
}
//


//
function font_size_fun()
{
    let local_fsz;
    set_get_local_font_size();
    settingsBtnFsz.addEventListener('click', (e) => {
        if ( e.target.dataset.show == 'show' )
        {
            e.target.dataset.show = 'hide';
            fszImputRangeParent.dataset.show = 'hide';
        }
        else
        {
            e.target.dataset.show = 'show';
            fszImputRangeParent.dataset.show = 'show';
        }
    });
    fszImputRange.addEventListener('change', () => {
        //console.log(fszImputRange.value);
        local_fsz = fszImputRange.value;
        change_font_size(local_fsz);
    });
    // Normal FSZ
    fszNormalBtn.addEventListener('click', () => {
        local_fsz = DevData.Fsz.Normal;
        fszImputRange.value = local_fsz;
        change_font_size(local_fsz);
    });
    // start_font_size
    function set_get_local_font_size()
    {
        if ( localStorage.getItem('fsz') != null )
        {
            local_fsz = localStorage.getItem('fsz');
        }
        else
        {
            local_fsz = DevData.Fsz.Normal;
            localStorage.setItem('fsz', local_fsz);
        }
        FszClass.style.fontSize = local_fsz + 'px';
        fszImputRange.value = local_fsz;
    }
    // change_font_size
    function change_font_size(local_fsz)
    {
        localStorage.setItem('fsz', local_fsz);
        set_get_local_font_size();
    }
} // end font_size_fun
// component

function render_fun()
{
    bmHeaderMenu.innerHTML = '';
    DevData.BmRootID = document.getElementById(DevData.BmRootID);
    DevData.BmRootID.innerHTML = '';
    // Top Menu
    for (var key in DataBase)
    {
        if ( DataBase[key].Head.Title == 'Поиск')
        {
            bmHeaderMenu.innerHTML += `<buttom class="bookmark__header-menu-btn" data-show="show" data-rang="${DataBase[key].Rang}">${DataBase[key].Head.Title}</buttom>`;
        }
        else
        {
            bmHeaderMenu.innerHTML += `<buttom class="bookmark__header-menu-btn" data-show="hide" data-rang="${DataBase[key].Rang}">${DataBase[key].Head.Title}</buttom>`;
        }
    }
    // Container s
    for (var key in DataBase)
    {
        if ( DataBase[key].Head.Title == 'Поиск')
        {
            DevData.BmRootID.innerHTML += Companent_bm__wrapper( DataBase[key].Head.Title, 'show',  DataBase[key].Rang, DataBase[key].Head.BGC, DataBase[key].Head.Color );
        }
        else
        {
            DevData.BmRootID.innerHTML += Companent_bm__wrapper( DataBase[key].Head.Title, 'hide',  DataBase[key].Rang, DataBase[key].Head.BGC, DataBase[key].Head.Color );
        }
    }
    // Sites
    let bookmark__wrapper_this;
    for (var key in DataBase ) {
        bookmark__wrapper_this = document.querySelector(`.bookmark__wrapper[data-rang="${DataBase[key].Rang}"]`);
        for ( let site_key in DataBase[key].Site )
        {
            if ( DataBase[key].Site[site_key ].Description != undefined )
            {
                bookmark__wrapper_this.innerHTML += companent_bm_link_with_description(DataBase[key].Rang, DataBase[key].Site[site_key].Href, DataBase[key].Site[site_key].Favicon, DataBase[key].Site[site_key].Text, DataBase[key].Site[site_key ].Description);
            }
            else
            {
                bookmark__wrapper_this.innerHTML += companent_bm_link(DataBase[key].Rang, DataBase[key].Site[site_key].Href, DataBase[key].Site[site_key].Favicon, DataBase[key].Site[site_key].Text); 
            }
        }
    }
} // end render_fun


function theme_fun()
{
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
} //end theme_fun