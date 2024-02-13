
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