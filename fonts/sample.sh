fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    inkscape ${fontname}.svg --export-plain-svg=${fontname}.svg
    inkscape --vacuum-defs ${fontname}.svg --export-plain-svg=${fontname}.svg
done
