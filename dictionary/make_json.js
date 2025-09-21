const fs = require('fs').promises;
const path = require('path');
const beautify = require('json-beautify');
const { html } = require('js-beautify');

const consonants = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonants_means = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonants_phonetics = ["k", "g", "t", "d", "s", "z", "ʔ", "ʕ", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const vowels = ["a", "e", "i", "o", "u", "w"];
const vowels_cases = ["否", "与", "属", "対", "主", "流"];
const vowels_part_of_speech_types = ["付", "動", "容", "助", "副", "名"];
const vowels_phonetics = ["a", "e", "i", "o", "u", ""];

async function generateConsonants() {
    let filename = path.join("json_index", "index.json");

    let consonants = [];

    for (let i = 0; i < consonants.length; i++) {
        let consonant = consonants[i];
        let consonant_meaning = consonants_means[i];
        consonants.push({
            consonant: consonant,
            consonant_meaning: consonant_meaning,
            html_href: consonant + ".html",
            json_href: consonant + ".json"
        });
    }

    let object = { consonants };

    let pretty = beautify(object, null, 4, 100);

    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function generateIndex(i) {
    let filename = path.join("json_index", consonants[i] + ".json");

    let roots = [];

    for (let j = 0; j < consonants.length; j++) {
        for (let k = 0; k < consonants.length; k++) {
            let root = consonants[i] + consonants[j] + consonants[k];
            let meaning = consonants_means[i] + consonants_means[j] + consonants_means[k];
            roots.push({
                root: root,
                root_meaning: meaning,
                html_href: consonants[i] + "/" + root + ".html",
                json_href: consonants[i] + "/" + root + ".json"
            });
        }
    }

    let object = { roots };

    let pretty = beautify(object, null, 4, 100);

    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function generateIndexDirectory(i) {
    let directory = path.join("json_index", consonants[i]);

    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
}

async function generateRoots(i, j, k) {
    let filename = path.join("json_index", consonants[i] + "/" + consonants[i] + consonants[j] + consonants[k] + ".json");

    let words = [];

    for (let l = 0; l < vowels.length; l++) {
        for (let m = 0; m < vowels.length; m++) {
            for (let n = 0; n < vowels.length; n++) {
                let word = consonants[i] + vowels[l] + consonants[j] + vowels[m] + consonants[k] + vowels[n];
                let phonetic = consonants_phonetics[i] + vowels_phonetics[l] + consonants_phonetics[j] + vowels_phonetics[m] + consonants_phonetics[k] + vowels_phonetics[n];
                let part_of_speech = vowels_part_of_speech_types[n] + "詞";
                let cases = vowels_cases[l] + vowels_cases[m] + "格";
                words.push({
                    word: word,
                    phonetic: phonetic,
                    part_of_speech: part_of_speech,
                    cases: cases,
                    word_meaning: ""
                });
            }
        }
    }

    let object = { words };

    let pretty = beautify(object, null, 4, 100);

    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function make() {
    let directory = path.join("json_index");
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
    await generateConsonants();
    for (let i = 0; i < consonants.length; i++) {
        await generateIndex(i);
        await generateIndexDirectory(i);
        for (let j = 0; j < consonants.length; j++) {
            for (let k = 0; k < consonants.length; k++) {
                await generateRoots(i, j, k);
            }
        }
    }
    console.log("ディレクトリ" + directory + "の内部データを生成完了");
}

make();
