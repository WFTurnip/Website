function changeFontStyle(num) {
    if (document.getElementById) {
        var object = document.body;
        switch (num) {
            case 0:
                object.style.fontFamily = "cursive";
                break;
            case 1:
                object.style.fontFamily = "serif";
                break;
            case 2:
                object.style.fontFamily = "sans-serif";
                break;
        }
    }
}
