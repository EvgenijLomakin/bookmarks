console.log('DataBase.js');
console.log('DevData');
console.dir(DevData);
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