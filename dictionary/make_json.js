const fs = require('fs').promises;
const path = require('path');

const consonants = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
const consonants_means = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
const consonants_phonetics = ["k", "g", "t", "d", "s", "z", "ʔ", "ʕ", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];

const vowels = ["a", "e", "i", "o", "u", "w"];
const vowels_cases = ["否", "与", "属", "対", "主", "流"];
const vowels_part_of_speech_types = ["付", "動", "容", "助", "副", "名"];
const vowels_phonetics = ["a", "e", "i", "o", "u", ""];

async function generateConsonants() {
    let filename = path.join("json_index", "index.json");

    try {
        await fs.writeFile(filename, "")
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function generateIndex() { }

async function generateIndexDirectory() { }

async function generateRoots() { }

async function generateWords() { }

async function make() {
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
}

make();
