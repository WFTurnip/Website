echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read fontname

cat $fontname/uni003C.svg $fontname.svg >$fontname/uni0028.svg
cat $fontname/uni003E.svg $fontname.svg >$fontname/uni0029.svg

cat $fontname/uni003C.svg $fontname.svg >$fontname/uni005B.svg
cat $fontname/uni003E.svg $fontname.svg >$fontname/uni005D.svg

cat $fontname.svg >>$fontname/uni007B.svg
cat $fontname.svg >>$fontname/uni007D.svg

cp $fontname/uni0028.svg $fontname/uni005B.svg
cp $fontname/uni0029.svg $fontname/uni005D.svg

cat $fontname/uni0028.svg $fontname/uni0029.svg >$fontname/uni007B.svg
cat $fontname/uni0028.svg $fontname/uni0029.svg >$fontname/uni007D.svg

open -a /Applications/Visual\ Studio\ Code.app $fontname/uni003C.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni003E.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0028.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni0029.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni005B.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni005D.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni007B.svg
open -a /Applications/Visual\ Studio\ Code.app $fontname/uni007D.svg
