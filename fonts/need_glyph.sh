fontname=("kodito" "lekuta" "lozegw" "silwki" "xavani" "xesada" "xidili")
       
for fontname in "${fontname[@]}"; do
    cat $fontname/uni0049.svg $fontname/uni0045.svg $fontname/uni0057.svg $fontname/uni0055.svg $fontname/uni0052.svg $fontname/uni007c.svg $fontname/uni0030.svg > ${fontname}.svg
    sed -i '' -E "s#[[:space:]]*</svg>[[:space:]]*<svg width=\"[0-9]{3}\" height=\"[0-9]{3}\" xmlns=\"http://www.w3.org/2000/svg\">[[:space:]]*##g" "${fontname}.svg"
    inkscape ${fontname}.svg
done
