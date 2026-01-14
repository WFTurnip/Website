fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    cp ${fontname}/uni002e.svg ${fontname}/uni005e.svg

    inkscape ${fontname}/uni005e.svg
done
