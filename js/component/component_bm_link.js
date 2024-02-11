console.log('companent_bm_link');
const companent_bm_link = (rang, href, favicon, text) => {
    return `<div class="bookmark__container-link">
        <a href="${href}" class="bookmark__link" target="_blank">
            <img src="${favicon}" class="bookmark__link-favicon">
            <p class="bookmark__link-text">${text}</p>
        </a>
    </div>`;
}