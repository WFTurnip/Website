fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    cat $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni00b6.svg
done
