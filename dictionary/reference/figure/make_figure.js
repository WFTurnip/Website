const fs = require("fs").promises;
const path = require("path");
const { JSDOM } = require("jsdom");
const beautify = require("js-beautify").html;

generateArticleConjugationFigure();
generateVerbConjugationFigure();
generateAdjectiveConjugationFigure();
generateParticleConjugationFigure();
generateAdverbConjugationFigure();
generateNounConjugationFigure();


async function make() {
    generateArticleConjugationFigure();
    generateVerbConjugationFigure();
    generateAdjectiveConjugationFigure();
    generateParticleConjugationFigure();
    generateAdverbConjugationFigure();
    generateNounConjugationFigure();
    console.log("図表生成完了");
}

make();