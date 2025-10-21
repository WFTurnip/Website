echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read fontname

cat $fontname/uni004b.svg $fontname/uni0030.svg >$fontname/uni0031.svg
cat $fontname/uni0054.svg $fontname/uni0030.svg >$fontname/uni0032.svg
cat $fontname/uni0053.svg $fontname/uni0030.svg >$fontname/uni0033.svg
cat $fontname/uni0051.svg $fontname/uni0030.svg >$fontname/uni0034.svg
cat $fontname/uni0052.svg $fontname/uni0030.svg >$fontname/uni0035.svg
cat $fontname/uni0050.svg $fontname/uni0030.svg >$fontname/uni0036.svg
cat $fontname/uni0048.svg $fontname/uni0030.svg >$fontname/uni0037.svg
cat $fontname/uni0046.svg $fontname/uni0030.svg >$fontname/uni0038.svg
cat $fontname/uni004d.svg $fontname/uni0030.svg >$fontname/uni0039.svg

open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0031.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0032.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0033.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0034.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0035.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0036.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0037.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0038.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0039.svg
