fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    for svg in ${fontname}/*.svg; do
        # Process each SVG file
        echo "Processing $svg"
    done
done
