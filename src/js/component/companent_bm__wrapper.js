
console.log('companent_bm__wrapper');
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