#!/bin/zsh

fontname=("kodito" "lekuta" "lozegw" "silwki" "xavani" "xesada" "xidili")

for fontname in "${fontname[@]}"; do

    touch ${fontname}/uni0301.svg
    # 高揚声符
    touch ${fontname}/uni0317.svg
    # 低揚声符
    touch ${fontname}/uni0300.svg
    # 高抑声符
    touch ${fontname}/uni0316.svg
    # 低抑声符
    touch ${fontname}/uni0302.svg
    # 高昇声符
    touch ${fontname}/uni032d.svg
    # 低昇声符
    touch ${fontname}/uni030c.svg
    # 高降声符
    touch ${fontname}/uni032c.svg
    # 低降声符
    touch ${fontname}/uni0304.svg
    # 高平声符
    touch ${fontname}/uni0331.svg
    # 低平声符
    touch ${fontname}/uni0308.svg
    # 高分声符
    touch ${fontname}/uni0324.svg
    # 低分声符
    touch ${fontname}/uni0307.svg
    # 高終声符
    touch ${fontname}/uni0323.svg
    # 低終声符
done
