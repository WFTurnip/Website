const fs = require("fs").promises;
const path = require("path");
const beautify = require("json-beautify");

const consonants_array = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonants_means_array = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonants_pronunciation_array = ["k", "g", "t", "d", "s", "z", "ʔ", "ʕ", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const vowels_array = ["a", "e", "i", "o", "u", "w"];
const vowels_cases_array = ["否", "与", "属", "対", "主", "流"];
const vowels_part_of_speech_types_array = ["付", "動", "容", "助", "副", "名"];
const vowels_pronunciation_array = ["a", "e", "i", "o", "u", ""];

async function generateIndex() {
    let filename = path.join("json_index", "index.json");
    let consonants = [];
    for (let i = 0; i < consonants_array.length; i++) {
        let consonant = consonants_array[i];
        let consonant_meaning = consonants_means_array[i];
        consonants.push({
            consonant: consonant,
            consonant_meaning: consonant_meaning,
            consonant_html_href: consonant + ".html",
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

async function generateConsonant(i) {
    let filename = path.join("json_index", consonants_array[i] + ".json");
    let roots = [];
    for (let j = 0; j < consonants_array.length; j++) {
        for (let k = 0; k < consonants_array.length; k++) {
            let root = consonants_array[i] + consonants_array[j] + consonants_array[k];
            let meaning = consonants_means_array[i] + consonants_means_array[j] + consonants_means_array[k];
            let root_html_href = consonants_array[i] + "/" + consonants_array[i] + consonants_array[j] + consonants_array[k] + ".html";
            roots.push({
                root: root,
                root_meaning: meaning,
                root_html_href: root_html_href,
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

async function generateConsonantDirectory(i) {
    let directory = path.join("json_index", consonants_array[i]);
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
}

async function generateRoot(i, j, k) {
    let filename = path.join("json_index", consonants_array[i] + "/" + consonants_array[i] + consonants_array[j] + consonants_array[k] + ".json");
    let words = [];
    for (let l = 0; l < vowels_array.length; l++) {
        for (let m = 0; m < vowels_array.length; m++) {
            for (let n = 0; n < vowels_array.length; n++) {
                let word = consonants_array[i] + vowels_array[l] + consonants_array[j] + vowels_array[m] + consonants_array[k] + vowels_array[n];
                let word_pronunciation = consonants_pronunciation_array[i] + vowels_pronunciation_array[l] + consonants_pronunciation_array[j] + vowels_pronunciation_array[m] + consonants_pronunciation_array[k] + vowels_pronunciation_array[n];
                let word_part_of_speech = vowels_part_of_speech_types_array[n] + "詞";
                let word_cases = vowels_cases_array[l] + vowels_cases_array[m] + "格";
                let word_html_href = consonants_array[i] + "/" + consonants_array[i] + consonants_array[j] + consonants_array[k] + ".html" + "#" + consonants_array[i] + vowels_array[l] + consonants_array[j] + vowels_array[m] + consonants_array[k] + vowels_array[n];
                words.push({
                    word: word,
                    word_pronunciation: word_pronunciation,
                    word_part_of_speech: word_part_of_speech,
                    word_cases: word_cases,
                    word_html_href: word_html_href,
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
    await generateIndex();
    for (let i = 0; i < consonants_array.length; i++) {
        await generateConsonant(i);
        await generateConsonantDirectory(i);
        for (let j = 0; j < consonants_array.length; j++) {
            for (let k = 0; k < consonants_array.length; k++) {
                await generateRoot(i, j, k);
            }
        }
    }
    console.log("ディレクトリ" + directory + "の内部データを生成完了");
}

make();