const fs = require("fs").promises;
const path = require("path");
const {JSDOM} = require("jsdom");
const beautify = require("js-beautify").html;
const postcss = require("postcss");
/**
 * ジャケットスタイルを読み込む関数
 */
async function readJacket() {
    const fileName = path.join("style", "jacket.css");
    const cssContent = await fs.readFile(fileName, "utf-8");
    const object = await postcss().process(cssContent, {from: fileName});
    console.log(JSON.stringify(object.root.nodes[0], null, 2));
}
/**
 * ページスタイルを読み込む関数
 */
async function readPage() {
    const fileName = path.join("style", "pages.css");
    const cssContent = await fs.readFile(fileName, "utf-8");
    const object = await postcss().process(cssContent, {from: fileName});
    console.log(JSON.stringify(object.root.nodes[0], null, 2));
}
/**
 * スタイルディレクトリを生成するスクリプト
 */
async function generate() {
    let directory = path.join("style");
    try {
        await fs.mkdir(directory, {recursive: true});
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。", error);
    }
    await readJacket();
    await readPage();
}
generate();