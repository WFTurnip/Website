const fs = require("fs").promises;
const path = require("path");
const beautify = require("json-beautify");
const consonantArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonantConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonantPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const vowelArray = ["a", "e", "i", "o", "u", "w"];
const vowelCaseArray = ["否", "与", "属", "対", "主", "流"];
const vowelPartOfSpeechTypeArray = ["附", "動", "容", "助", "副", "名"];
const vowelPronunciationArray = ["a", "e", "i", "o", "u", ""];
/**
 * この関数は、json_indexディレクトリの内部データを生成するための関数である。
 * まず、json_indexディレクトリを作成し、その中にインデックスJSONファイルを生成する。
 * 次に、子ディレクトリである子JSONファイルを生成する。
 * 最後に、子JSONファイルの中に、さらに子JSONファイルへのリンクを含むJSONファイルを生成する。
 * これらの処理は、非同期関数として実装されているため、順番に実行されることが保証されている。
 */
async function generateIndex() {
    let filename = path.join("json_index", "index.json");
    let consonants = [];
    for (let i = 0; i < consonantArray.length; i++) {
        let consonant = consonantArray[i];
        let consonantConcept = consonantConceptArray[i];
        consonants.push({
            consonant: consonant,
            consonantConcept: consonantConcept,
            consonantHtmlHref: consonant + ".html",
        });
    }
    let object = {consonants};
    let pretty = beautify(object, null, 4, 100);
    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * 指定された子音のJSONファイルを生成する関数
 * @param {number} i - 第一子音のインデックス
 * @returns {Promise<void>}
 */
async function generateConsonant(i) {
    let filename = path.join("json_index", consonantArray[i] + ".json");
    let roots = [];
    for (let j = 0; j < consonantArray.length; j++) {
        for (let k = 0; k < consonantArray.length; k++) {
            let root = consonantArray[i] + consonantArray[j] + consonantArray[k];
            let rootConcept = consonantConceptArray[i] + consonantConceptArray[j] + consonantConceptArray[k];
            let rootHtmlHref = consonantArray[i] + "/" + consonantArray[i] + consonantArray[j] + consonantArray[k] + ".html";
            roots.push({
                root: root,
                rootConcept: rootConcept,
                rootHtmlHref: rootHtmlHref,
            });
        }
    }
    let object = {roots};
    let pretty = beautify(object, null, 4, 100);
    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * 指定された子音のディレクトリを生成する関数
 * @param {number} i - 第一子音のインデックス
 * @returns {Promise<void>}
 */
async function generateConsonantDirectory(i) {
    let directoryName = path.join("json_index", consonantArray[i]);
    try {
        await fs.mkdir(directoryName, {recursive: true});
        console.log("ディレクトリ" + directoryName + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directoryName + "を作成できませんでした。", error);
    }
}
/**
 * 指定された語根のJSONファイルを生成する関数
 * @param {number} i - 第一子音のインデックス
 * @param {number} j - 第二子音のインデックス
 * @param {number} k - 第三子音のインデックス
 * @returns {Promise<void>}
 */
async function generateRoot(i, j, k) {
    let filename = path.join("json_index", consonantArray[i] + "/" + consonantArray[i] + consonantArray[j] + consonantArray[k] + ".json");
    let words = [];
    for (let l = 0; l < vowelArray.length; l++) {
        for (let m = 0; m < vowelArray.length; m++) {
            for (let n = 0; n < vowelArray.length; n++) {
                let word = consonantArray[i] + vowelArray[l] + consonantArray[j] + vowelArray[m] + consonantArray[k] + vowelArray[n];
                let wordPronunciation = consonantPronunciationArray[i] + vowelPronunciationArray[l] + consonantPronunciationArray[j] + vowelPronunciationArray[m] + consonantPronunciationArray[k] + vowelPronunciationArray[n];
                let wordPartOfSpeech = vowelPartOfSpeechTypeArray[n] + "詞";
                let wordCases = vowelCaseArray[l] + vowelCaseArray[m] + "格";
                let wordHtmlHref = consonantArray[i] + "/" + consonantArray[i] + consonantArray[j] + consonantArray[k] + ".html" + "#" + consonantArray[i] + vowelArray[l] + consonantArray[j] + vowelArray[m] + consonantArray[k] + vowelArray[n];
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
    let object = {words};
    let pretty = beautify(object, null, 4, 100);
    try {
        await fs.writeFile(filename, pretty);
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}
/**
 * JSONファイルを生成する関数
 * @returns {Promise<void>}
 */
async function generate() {
    let directoryName = path.join("json_index");
    try {
        await fs.mkdir(directoryName, {recursive: true});
        console.log("ディレクトリ" + directoryName + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directoryName + "を作成できませんでした。", error);
    }
    await generateIndex();
    for (let i = 0; i < consonantArray.length; i++) {
        await generateConsonant(i);
        await generateConsonantDirectory(i);
        for (let j = 0; j < consonantArray.length; j++) {
            for (let k = 0; k < consonantArray.length; k++) {
                await generateRoot(i, j, k);
            }
        }
    }
    console.log("ディレクトリ" + directoryName + "の内部データを生成完了。");
}
generate();