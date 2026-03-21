window.addEventListener("DOMContentLoaded", function () {
    function changeFont(number) {
        if (document.getElementById) {
            let main = document.getElementsByTagName("main")[0];
            switch (number) {
                case 0: main.className = "kodito";
                    break;
                case 1: main.className = "lekuta";
                    break;
                case 2: main.className = "lozegw";
                    break;
                case 3: main.className = "makina";
                    break;
                case 4: main.className = "piswpi";
                    break;
                case 5: main.className = "polwgo";
                    break;
                case 6: main.className = "silwki";
                    break;
                case 7: main.className = "sulive";
                    break;
                case 8: main.className = "xavani";
                    break;
                case 9: main.className = "xesada";
                    break;
                case 10: main.className = "xidili";
                    break;
                case 11: main.className = "zosokw";
                    break;
            }
        }
    }
});