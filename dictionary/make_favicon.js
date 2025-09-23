const fs = require("fs").promises;
const path = require("path");

async function make() {
    let directory = path.join("favicon_index");
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。");
    }
    console.log("ディレクトリ" + directory + "の内部データを生成完了");
}

make();