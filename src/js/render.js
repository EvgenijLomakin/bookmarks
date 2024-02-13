// console.log('DataBase');
// console.dir(DataBase);
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