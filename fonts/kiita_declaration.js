function changeFont(number) {
    if (document.getElementById) {
        var object = document.getElementById("font");
        switch (number) {
            case 0: object.style.fontFamily = "kodito";
                object.style.fontFeatureSettings = "";
                break;
            case 1: object.style.fontFamily = "lekuta";
                object.style.fontFeatureSettings = "";
                break;
            case 2: object.style.fontFamily = "lozegw";
                object.style.fontFeatureSettings = "";
                break;
            case 3: object.style.fontFamily = "makina";
                object.style.fontFeatureSettings = "";
                break;
            case 4: object.style.fontFamily = "piswpi";
                object.style.fontFeatureSettings = "";
                break;
            case 5: object.style.fontFamily = "polwgo";
                object.style.fontFeatureSettings = "";
                break;
            case 6: object.style.fontFamily = "lozegw";
                object.style.fontFeatureSettings = "";
                break;
            case 7: object.style.fontFamily = "sulive";
                object.style.fontFeatureSettings = "'calt' 1";
                break;
            case 8: object.style.fontFamily = "xavani";
                object.style.fontFeatureSettings = "";
                break;
            case 9: object.style.fontFamily = "xesada";
                object.style.fontFeatureSettings = "";
                break;
            case 10: object.style.fontFamily = "xidili";
                object.style.fontFeatureSettings = "";
                break;
            case 11: object.style.fontFamily = "zosokw";
                object.style.fontFeatureSettings = "'calt' 1";
                break;
        }
    }
}
