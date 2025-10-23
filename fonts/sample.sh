fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    cp $fontname/uni0027.svg $fontname/uni005e.svg
    # inkscape $fontname/uni0027.svg
done