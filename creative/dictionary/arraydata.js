/**
 * 子音の配列
 */
const consonantsArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
/**
 * 子音の概念の配列
 */
const consonantsConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
/**
 * 子音の発音の配列
 */
const consonantsPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
/**
 * 子音の発音の水平配列
 */
const consonantsPronunciationHorizontalArray = ["喉", "舌先", "唇"];
/**
 * 子音の発音の垂直配列
 */
const consonantsPronunciationVerticalArray = ["上", "中", "下"];
/**
 * 子音の発音の水平クラス配列
 */
const consonantsPronunciationHorizontalClassArray = ["弱", "強"];
/**
 * 母音の配列
 */
const vowelsArray = ["a", "e", "i", "o", "u", "w"];
/**
 * 母音の格配列
 */
const vowelsCasesArray = ["否", "与", "属", "対", "主", "流"];
/**
 * 母音の品詞配列
 */
const vowelsPartOfSpeechTypesArray = ["附", "動", "容", "助", "副", "名"];
/**
 * 母音の発音の配列
 */
const vowelsPronunciationArray = ["a", "e", "i", "o", "u", "\u{2205}"];
/**
 * 母音の発音の水平配列
 */
const vowelHeight = ["広", "中", "狭"];
/**
 * 母音円唇真偽配列
 */
const vowelRoundedness = ["非円唇", "円唇"];
/**
 * 母音の品詞の水平配列
 */
const vowelsPartOfSpeechTypesHorizontalArray = ["限定", "動作", "状態"];
/**
 * 母音の品詞の垂直配列
 */
const vowelsPartOfSpeechTypesVerticalArray = ["核", "補助"];
/**
 * 上舌子音の配列
 */
const upperTongueConsonantsArray = ["k", "g", "t", "d", "s", "z"];
/**
 * 中舌子音の配列
 */
const middleTongueConsonantsArray = ["q", "c", "r", "l", "p", "b"];
/**
 * 下舌子音の配列
 */
const lowerTongueConsonantsArray = ["h", "x", "f", "v", "m", "n"];
/**
 * 上舌子音の概念の配列
 */
const upperTongueConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神"];
/**
 * 中舌子音の概念の配列
 */
const middleTongueConceptArray = ["空白", "物質", "過去", "未来", "鎮静", "高揚"];
/**
 * 下舌子音の概念の配列
 */
const lowerTongueConceptArray = ["受動", "能動", "創造", "破壊", "流動", "固定"];
/**
 * 抑揚符号配列
 */
const diacriticsArray = ["\u{0301}", "\u{0317}", "\u{0300}", "\u{0316}", "\u{0302}", "\u{032d}", "\u{030c}", "\u{032c}", "\u{0304}", "\u{0331}", "\u{0308}", "\u{0324}", "\u{0307}", "\u{0323}"];
/**
 * 抑揚符号の概念の配列
 */
const diacriticsConceptArray = ["高揚", "低揚", "高抑", "低抑", "高昇", "低昇", "高平", "低平", "高降", "低降", "高分", "低分", "高終", "低終"];
/**
 * 抑揚符号の発音の配列
 */
const diacriticsPronunciationArray = ["\u{02e6}\u{02e5}", "\u{02e9}\u{02e8}", "\u{02e5}\u{02e6}", "\u{02e8}\u{02e9}", "\u{02e6}\u{02e5}\u{02e6}", "\u{02e9}\u{02e8}\u{02e9}", "\u{02e5}\u{02e6}\u{02e5}", "\u{02e8}\u{02e9}\u{02e8}", "\u{02e5}", "\u{02e9}", "\u{02e5}", "\u{02e9}", "\u{a708}", "\u{a70c}"];