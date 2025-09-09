const topJsonPath = 'json_index/index.json';

function wordToRoot(word) {
    if (word.length != 6) {
        throw new Error('word length must be 6');
    }
    return word[0] + word[2] + word[4];
}

function flattenCartersianAppend(words, params) {
    result = [];
    for (const word of words) {
        for (const slot_chara of slot) {
            result.push(word + slot_chara);
        }
    }
    return result;
}

function searchToWord(search) {
    first_consonant_slot = "";
    first_vowel_slot = "";
    second_consonant_slot = "";
    second_vowel_slot = "";
    third_consonant_slot = "";
    third_vowel_slot = "";

    consonant = "kgtdszqcrlpbhxfvmn";
    vowel = "aeiouw";

    for (let i = 0; i < 6; i++) {
        let chara = search[i];
        if (consonant.includes(chara)) {
            if (first_consonant_slot == "") {
                first_consonant_slot = chara;
            } else if (second_consonant_slot == "") {
                second_consonant_slot = chara;
            } else if (third_consonant_slot == "") {
                third_consonant_slot = chara;
            }
        } else if (vowel.includes(chara)) {
            if (first_vowel_slot == "") {
                first_vowel_slot = chara;
            } else if (second_vowel_slot == "") {
                second_vowel_slot = chara;
            } else if (third_vowel_slot == "") {
                third_vowel_slot = chara;
            }
        }
    }

    if (first_consonant_slot == "") {
        first_consonant_slot = consonant;
    }
    if (second_consonant_slot == "") {
        second_consonant_slot = consonant;
    }
    if (third_consonant_slot == "") {
        third_consonant_slot = consonant;
    }
    if (first_vowel_slot == "") {
        first_vowel_slot = vowel;
    }
    if (second_vowel_slot == "") {
        second_vowel_slot = vowel;
    }
    if (third_vowel_slot == "") {
        third_vowel_slot = vowel;
    }

    words = [];
    words.flattenCartersianAppend(words, first_consonant_slot);
    words.flattenCartersianAppend(words, second_consonant_slot);
    words.flattenCartersianAppend(words, third_consonant_slot);
    words.flattenCartersianAppend(words, first_vowel_slot);
    words.flattenCartersianAppend(words, second_vowel_slot);
    words.flattenCartersianAppend(words, third_vowel_slot);
    return words;
}

function getRootWords(search) {
    root_words = {};
    words = searchToWord(search);
    for (const word of words) {
        root = wordToRoot(word);
        root_words[root] = root_words[root] ?? [];
        root_words[root].push(word);
    }
    return root_words;
}

async function fetchJson(path) {
    const response = await fetch(path);
    return await response.json();
}

async function search() {
    const search = document.getElementById('search').value.trim();
    const searchConsonants = document.getElementById('consonants').checked;
    const searchRoots = document.getElementById('roots').checked;
    const searchWords = document.getElementById('words').checked;

    const resultConsonants = document.getElementById('result_consonants');
    const resultRoots = document.getElementById('result_roots');
    const resultWords = document.getElementById('result_words');

    resultConsonants.innerText = '検索中';
    resultRoots.innerText = '検索中';
    resultWords.innerText = '検索中';

    const topJson = await fetchJson(topJsonPath);

    let result = [];
}

document.getElementById('search').addEventListener('input', search);
document.getElementById('consonants').addEventListener('change', search);
document.getElementById('roots').addEventListener('change', search);
document.getElementById('words').addEventListener('change', search);
