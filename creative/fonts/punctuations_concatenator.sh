#!/bin/bash

fontname=("kodito" "lekuta" "lozegw" "makina" "piswpi" "polwgo" "silwki" "sulive" "xavani" "xesada" "xidili" "zosokw")

for fontname in "${fontname[@]}"; do
    cat "${fontname}"/uni0030.svg "${fontname}"/uni002f.svg >"${fontname}"/uni0025.svg
    cat "${fontname}"/uni0051.svg "${fontname}"/uni003e.svg "${fontname}"/uni0027.svg >"${fontname}"/uni0026.svg
    cat "${fontname}"/uni002c.svg "${fontname}"/uni0030.svg >"${fontname}"/uni003b.svg
    cat "${fontname}"/uni002e.svg "${fontname}"/uni0030.svg >"${fontname}"/uni003a.svg
    cat "${fontname}"/uni005c.svg "${fontname}"/uni0030.svg >"${fontname}"/uni00b6.svg
done
