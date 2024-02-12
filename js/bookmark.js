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
