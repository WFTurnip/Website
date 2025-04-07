const fs = require('fs').promises;
const path = require('path');
let consonants = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
let means = ["剥離的", "癒着的", "乖離的", "同一的", "肉体的", "精神的", "空白的", "物質的", "過去的", "未来的", "鎮静的", "高揚的", "受動的", "能動的", "創造的", "破壊的", "流動的", "固定的"];
let vowels = ["a", "e", "i", "o", "u", "w"];
let cases = ["否格", "与格", "属格", "対格", "主格", "流格"];
let partOfSpeechTypes = ["付詞", "動詞", "容詞", "助詞", "副詞", "名詞"];

// 検索用JSONを制作する関数
function generateWords() {
    let roots = [];
    let words = [];
    for (let i = 0; i < consonants.length; i++) {
        for (let j = 0; j < consonants.length; j++) {
            for (let k = 0; k < consonants.length; k++) {
                let root = consonants[i] + consonants[j] + consonants[k];
                roots.push(root);
                for (let l = 0; l < vowels.length; l++) {
                    for (let m = 0; m < vowels.length; m++) {
                        for (let n = 0; n < vowels.length; n++) {
                            let word = consonants[i] + vowels[m] + consonants[j] + vowels[n] + consonants[k] + vowels[l];
                            words.push(word);
                        }
                    }
                }
            }
        }
    }
    return { words, roots };
}

let { words, roots } = generateWords();

console.log(words, roots)
