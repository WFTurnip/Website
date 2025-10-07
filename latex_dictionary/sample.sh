printf "\\chapter{序章}\n\\label{chap:1}">chapter1.tex
printf "\\section{はじめに}\n\\label{sec:1.1}">section1.1.tex
printf "\\section{エレギア語の概要}\n\\label{sec:1.2}">section1.2.tex

printf "\\chapter{音韻体系}\n\\label{chap:2}">chapter2.tex
printf "\\section{子音}\n\\label{sec:2.1}">section2.1.tex
printf "\\section{母音}\n\\label{sec:2.2}">section2.2.tex

printf "\\chapter{書記体系}\n\\label{chap:3}">chapter3.tex
printf "\\section{文字体系}\n\\label{sec:3.1}">section3.1.tex
printf "\\section{標準字体の相違}\n\\label{sec:3.2}">section3.2.tex
printf "\\section{約物}\n\\label{sec:3.3}">section3.3.tex

printf "\\chapter{語根}\n\\label{chap:4}">chapter4.tex
printf "\\section{単語構造}\n\\label{sec:4.1}">section4.1.tex
printf "\\section{子音概念}\n\\label{sec:4.2}">section4.2.tex
printf "\\section{語根}\n\\label{sec:4.3}">section4.3.tex
printf "\\section{接辞}\n\\label{sec:4.4}">section4.4.tex

printf "\\chapter{格}\n\\label{chap:5}">chapter5.tex
printf "\\section{語根格}\n\\label{sec:5.1}">section5.1.tex
printf "\\section{接辞格}\n\\label{sec:5.2}">section5.2.tex

printf "\\chapter{品詞}\n\\label{chap:6}">chapter6.tex
printf "\\section{品詞分類}\n\\label{sec:6.1}">section6.1.tex

printf "\\chapter{文構造}\n\\label{chap:7}">chapter7.tex
printf "\\section{基本文型}\n\\label{sec:7.1}">section7.1.tex
printf "\\section{複文と従属文}\n\\label{sec:7.2}">section7.2.tex
printf "\\section{否定文と疑問文}\n\\label{sec:7.3}">section7.3.tex
printf "\\section{強調と焦点}\n\\label{sec:7.4}">section7.4.tex

printf "\\chapter{特殊構文}\n\\label{chap:8}">chapter8.tex
printf "\\section{受動態}\n\\label{sec:8.1}">section8.1.tex
printf "\\section{能動態と中動態}\n\\label{sec:8.2}">section8.2.tex
printf "\\section{命令文}\n\\label{sec:8.3}">section8.3.tex

printf "\\chapter{語彙と辞書の使用方法}\n\\label{chap:9}">chapter9.tex
printf "\\section{語彙の形成}\n\\label{sec:9.1}">section9.1.tex
printf "\\section{辞書の使用方法}\n\\label{sec:9.2}">section9.2.tex

printf "\\chapter{付録}\n\\label{chap:10}">chapter10.tex
printf "\\section{重要なフレーズ}\n\\label{sec:10.1}">section10.1.tex

printf "\\chapter{活用図表}\n\\label{chap:11}">chapter11.tex
printf "\\section{付詞活用図表}\n\\label{sec:11.1}">section11.1.tex
printf "\\section{動詞活用図表}\n\\label{sec:11.2}">section11.2.tex
printf "\\section{容詞活用図表}\n\\label{sec:11.3}">section11.3.tex
printf "\\section{助詞活用図表}\n\\label{sec:11.4}">section11.4.tex
printf "\\section{副詞活用図表}\n\\label{sec:11.5}">section11.5.tex
printf "\\section{名詞活用図表}\n\\label{sec:11.6}">section11.6.tex

printf "\n\\input{section1.1}">>chapter1.tex
printf "\n\\input{section1.2}">>chapter1.tex

printf "\n\\input{section2.1}">>chapter2.tex
printf "\n\\input{section2.2}">>chapter2.tex

printf "\n\\input{section3.1}">>chapter3.tex
printf "\n\\input{section3.2}">>chapter3.tex
printf "\n\\input{section3.3}">>chapter3.tex

printf "\n\\input{section4.1}">>chapter4.tex
printf "\n\\input{section4.2}">>chapter4.tex
printf "\n\\input{section4.3}">>chapter4.tex
printf "\n\\input{section4.4}">>chapter4.tex

printf "\n\\input{section5.1}">>chapter5.tex
printf "\n\\input{section5.2}">>chapter5.tex

printf "\n\\input{section6.1}">>chapter6.tex

printf "\n\\input{section7.1}">>chapter7.tex
printf "\n\\input{section7.2}">>chapter7.tex
printf "\n\\input{section7.3}">>chapter7.tex
printf "\n\\input{section7.4}">>chapter7.tex

printf "\n\\input{section8.1}">>chapter8.tex
printf "\n\\input{section8.2}">>chapter8.tex
printf "\n\\input{section8.3}">>chapter8.tex

printf "\n\\input{section9.1}">>chapter9.tex
printf "\n\\input{section9.2}">>chapter9.tex

printf "\n\\input{section10.1}">>chapter10.tex

printf "\n\\input{section11.1}">>chapter11.tex
printf "\n\\input{section11.2}">>chapter11.tex
printf "\n\\input{section11.3}">>chapter11.tex
printf "\n\\input{section11.4}">>chapter11.tex
printf "\n\\input{section11.5}">>chapter11.tex
printf "\n\\input{section11.6}">>chapter11.tex