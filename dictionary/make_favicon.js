const fs = require("fs").promises;
const path = require("path");

async function generateIndex() {
    let filename = path.join("favicon_index", "index.svg");
    try {
        await fs.writeFile(filename, "");
        console.log("ファイル" + filename + "を作成しました。");
    } catch (error) {
        console.error("ファイル" + filename + "を作成できませんでした。", error);
    }
}

async function make() {
    let directory = path.join("favicon_index");
    try {
        await fs.mkdir(directory, { recursive: true });
        console.log("ディレクトリ" + directory + "を作成しました。");
    } catch (error) {
        console.error("ディレクトリ" + directory + "を作成できませんでした。");
    }
    await generateIndex();
    for (let i = 0; i < array.length; i++) {
        await generateConsonant(i);
        await generateConsonantDirectory(i);
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                await generateRoot(i, j, k);
            }
        }
    }
    console.log("ディレクトリ" + directory + "の内部データを生成完了");
}

make();