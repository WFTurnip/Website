const diacritics = ["\u{0301}", "\u{0317}", "\u{0300}", "\u{0316}", "\u{0302}", "\u{032d}", "\u{030c}", "\u{032c}", "\u{0307}", "\u{0323}", "\u{0308}", "\u{0324}", "\u{0304}", "\u{0331}"];
const vowels = ["A", "E", "I", "O", "U", "W", "a", "e", "i", "o", "u", "w"];
const diacritics_concept = ["揚", "揚", "抑", "抑", "昇", "昇", "降", "降", "終", "終", "分", "分", "平", "平"];

function addDiacritics() {
    let result = '';
    for (let i = 0; i < diacritics.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            result += vowels[j] + diacritics[i] + " ";
        }
        if (0 == i % 2) {
            result += "\t高";
        } else {
            result += "\t低";
        }
        result += diacritics_concept[i];
        result += "声符";
        result += "\n";
    }
    return result;
}

console.log(addDiacritics());
