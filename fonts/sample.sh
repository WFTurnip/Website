fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    # cat $fontname/uni002f.svg $fontname/uni0030.svg > $fontname/uni0025.svg
    inkscape $fontname/uni0025.svg
done