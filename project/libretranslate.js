// actual api calls

/**
 * Send input contents along to determine which language it is.
 * Turns out this is functionally useless since the API only looks for English
 * @param {string} text
 * @returns JSON response
 */

export async function detectLanguage(text) {
    // turns out this is useless, only checks for english language

    let form = new FormData();
    form.set('q', text);

    const response = await fetch('https://libretranslate.de/detect', {
        method: 'POST',
        body: form
    });

    return response.json();

}

/**
 * Send input contents and specified languages, receives translation response
 * @param {string} text
 * @param {string} sourceLang
 * @param {string} targetLang
 * @returns JSON response
 */

export async function getTranslation(text, sourceLang, targetLang) {
    let form = new FormData();
    form.set('q', text);
    form.set('source', sourceLang);
    form.set('target', targetLang);

    const response = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        body: form
    });

    return response.json();
}
