#!/bin/zsh

fontname=("kodito" "lekuta" "lozegw" "silwki" "xavani" "xesada" "xidili")

for fontname in "${fontname[@]}"; do
    cat ${fontname}/uni0307.svg
    cat ${fontname}/uni0323.svg
    cat ${fontname}/uni0308.svg
    cat ${fontname}/uni0324.svg
    cat ${fontname}/uni0301.svg
    cat ${fontname}/uni0317.svg
    cat ${fontname}/uni0300.svg
    cat ${fontname}/uni0316.svg
    cat ${fontname}/uni0304.svg
    cat ${fontname}/uni0331.svg
    cat ${fontname}/uni0302.svg
    cat ${fontname}/uni032d.svg
    cat ${fontname}/uni030c.svg
    cat ${fontname}/uni032c.svg
done
