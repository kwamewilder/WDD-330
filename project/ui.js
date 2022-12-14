// accept inputs from user and display outputs
// actual translator ui

let sourceLang = document.getElementById('source-lang');
let targetLang = document.getElementById('target-lang');

let sourceText = document.getElementById('source-text');
let targetText = document.getElementById('target-text');

/**
 * Swap all inputs in interactive sectino of page
 */

export function swapInputs() {
    let temp = sourceLang.value;
    sourceLang.value = targetLang.value;
    targetLang.value = temp;
    temp = sourceText.value;
    sourceText.value = targetText.value;
    targetText.value = temp;
}

/**
 * Updates specified drop-down menu with specified language
 * @param {string} lang
 * @param {string} which
 */

export function setSelectedLang(lang, which) {
    if (which === 'source') {
        sourceLang.value = lang;
    } else if (which === 'target') {
        targetLang.value = lang;
    }
}
