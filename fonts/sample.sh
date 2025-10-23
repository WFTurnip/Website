fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    cp $fontname/uni002c.svg $fontname/uni0060.svg
    inkscape $fontname/uni0060.svg
done