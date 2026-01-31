function changeWritingMode(num) {
    if (document.getElementById) {
        var object = document.body;
        switch (num) {
            case 0:
                object.style.writingMode = "horizontal-tb";
                break;
            case 1:
                object.style.writingMode = "vertical-rl";
                break;
        }
    }
}

function changeFontStyle(num1) {
    if (document.getElementById) {
        var object = document.body;
        switch (num1) {
            case 0:
                object.style.fontFamily = "serif";
                break;
            case 1:
                object.style.fontFamily = "sans-serif";
                break;
        }
    }
}
