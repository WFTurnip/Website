const fs = require("fs").promises;
const path = require("path");
const beautify = require("json-beautify");

const consonantsArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantsConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantsPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const vowelsArray = ["a", "e", "i", "o", "u", "w"];
const vowelsCasesArray = ["否", "与", "属", "対", "主", "流"];
const vowelsPartOfSpeechTypesArray = ["附", "動", "容", "助", "副", "名"];
const vowelsPronunciationArray = ["a", "e", "i", "o", "u", ""];

async function generateIndex() {
    let filename = path.join("json_index", "index.json");
    let consonants = [];
    for (let i = 0; i < consonantsArray.length; i++) {
        let consonant = consonantsArray[i];
        let consonantConcept = consonantsConceptArray[i];
        consonants.push({
            consonant: consonant,
            consonantConcept: consonantConcept,
            consonantHtmlHref: consonant + ".html",
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
    let filename = path.join("json_index", consonantsArray[i] + ".json");
    let roots = [];
    for (let j = 0; j < consonantsArray.length; j++) {
        for (let k = 0; k < consonantsArray.length; k++) {
            let root = consonantsArray[i] + consonantsArray[j] + consonantsArray[k];
            let rootConcept = consonantsConceptArray[i] + consonantsConceptArray[j] + consonantsConceptArray[k];
            let rootHtmlHref = consonantsArray[i] + "/" + consonantsArray[i] + consonantsArray[j] + consonantsArray[k] + ".html";
            roots.push({
                root: root,
                rootConcept: rootConcept,
                rootHtmlHref: rootHtmlHref,
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
    let directory = path.join("json_index", consonantsArray[i]);
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
}

async function generateRoot(i, j, k) {
    let filename = path.join("json_index", consonantsArray[i] + "/" + consonantsArray[i] + consonantsArray[j] + consonantsArray[k] + ".json");
    let words = [];
    for (let l = 0; l < vowelsArray.length; l++) {
        for (let m = 0; m < vowelsArray.length; m++) {
            for (let n = 0; n < vowelsArray.length; n++) {
                let word = consonantsArray[i] + vowelsArray[l] + consonantsArray[j] + vowelsArray[m] + consonantsArray[k] + vowelsArray[n];
                let wordPronunciation = consonantsPronunciationArray[i] + vowelsPronunciationArray[l] + consonantsPronunciationArray[j] + vowelsPronunciationArray[m] + consonantsPronunciationArray[k] + vowelsPronunciationArray[n];
                let wordPartOfSpeech = vowelsPartOfSpeechTypesArray[n] + "詞";
                let wordCases = vowelsCasesArray[l] + vowelsCasesArray[m] + "格";
                let wordHtmlHref = consonantsArray[i] + "/" + consonantsArray[i] + consonantsArray[j] + consonantsArray[k] + ".html" + "#" + consonantsArray[i] + vowelsArray[l] + consonantsArray[j] + vowelsArray[m] + consonantsArray[k] + vowelsArray[n];
                words.push({
                    word: word,
                    wordPronunciation: wordPronunciation,
                    wordPartOfSpeech: wordPartOfSpeech,
                    wordCases: wordCases,
                    wordHtmlHref: wordHtmlHref,
                    WordMeaning: ""
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
    for (let i = 0; i < consonantsArray.length; i++) {
        await generateConsonant(i);
        await generateConsonantDirectory(i);
        for (let j = 0; j < consonantsArray.length; j++) {
            for (let k = 0; k < consonantsArray.length; k++) {
                await generateRoot(i, j, k);
            }
        }
    }
    console.log("ディレクトリ" + directory + "の内部データを生成完了");
}

make();