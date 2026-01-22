#!/bin/zsh

echo "結合するフォントのディレクトリ名を入力してください。"
ls -d */
read fontname

# isolate form --------------------------------------------------------
cat $fontname/uni004b.isol.svg $fontname/uni005c.svg >$fontname/uni0047.isol.svg
cat $fontname/uni0054.isol.svg $fontname/uni005c.svg >$fontname/uni0044.isol.svg
cat $fontname/uni0053.isol.svg $fontname/uni005c.svg >$fontname/uni005a.isol.svg
cat $fontname/uni0051.isol.svg $fontname/uni005c.svg >$fontname/uni0043.isol.svg
cat $fontname/uni0052.isol.svg $fontname/uni005c.svg >$fontname/uni004c.isol.svg
cat $fontname/uni0050.isol.svg $fontname/uni005c.svg >$fontname/uni0042.isol.svg
cat $fontname/uni0048.isol.svg $fontname/uni005c.svg >$fontname/uni0058.isol.svg
cat $fontname/uni0046.isol.svg $fontname/uni005c.svg >$fontname/uni0056.isol.svg
cat $fontname/uni004d.isol.svg $fontname/uni005c.svg >$fontname/uni004e.isol.svg
cat $fontname/uni0053.isol.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni004a.isol.svg
cat $fontname/uni0051.isol.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni0059.isol.svg
# initial form --------------------------------------------------------
cat $fontname/uni004b.init.svg $fontname/uni005c.svg >$fontname/uni0047.init.svg
cat $fontname/uni0054.init.svg $fontname/uni005c.svg >$fontname/uni0044.init.svg
cat $fontname/uni0053.init.svg $fontname/uni005c.svg >$fontname/uni005a.init.svg
cat $fontname/uni0051.init.svg $fontname/uni005c.svg >$fontname/uni0043.init.svg
cat $fontname/uni0052.init.svg $fontname/uni005c.svg >$fontname/uni004c.init.svg
cat $fontname/uni0050.init.svg $fontname/uni005c.svg >$fontname/uni0042.init.svg
cat $fontname/uni0048.init.svg $fontname/uni005c.svg >$fontname/uni0058.init.svg
cat $fontname/uni0046.init.svg $fontname/uni005c.svg >$fontname/uni0056.init.svg
cat $fontname/uni004d.init.svg $fontname/uni005c.svg >$fontname/uni004e.init.svg
cat $fontname/uni0053.init.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni004a.init.svg
cat $fontname/uni0051.init.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni0059.init.svg
# medial form ---------------------------------------------------------
cat $fontname/uni004b.medi.svg $fontname/uni005c.svg >$fontname/uni0047.medi.svg
cat $fontname/uni0054.medi.svg $fontname/uni005c.svg >$fontname/uni0044.medi.svg
cat $fontname/uni0053.medi.svg $fontname/uni005c.svg >$fontname/uni005a.medi.svg
cat $fontname/uni0051.medi.svg $fontname/uni005c.svg >$fontname/uni0043.medi.svg
cat $fontname/uni0052.medi.svg $fontname/uni005c.svg >$fontname/uni004c.medi.svg
cat $fontname/uni0050.medi.svg $fontname/uni005c.svg >$fontname/uni0042.medi.svg
cat $fontname/uni0048.medi.svg $fontname/uni005c.svg >$fontname/uni0058.medi.svg
cat $fontname/uni0046.medi.svg $fontname/uni005c.svg >$fontname/uni0056.medi.svg
cat $fontname/uni004d.medi.svg $fontname/uni005c.svg >$fontname/uni004e.medi.svg
cat $fontname/uni0053.medi.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni004a.medi.svg
cat $fontname/uni0051.medi.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni0059.medi.svg
# final form ----------------------------------------------------------
cat $fontname/uni004b.fina.svg $fontname/uni005c.svg >$fontname/uni0047.fina.svg
cat $fontname/uni0054.fina.svg $fontname/uni005c.svg >$fontname/uni0044.fina.svg
cat $fontname/uni0053.fina.svg $fontname/uni005c.svg >$fontname/uni005a.fina.svg
cat $fontname/uni0051.fina.svg $fontname/uni005c.svg >$fontname/uni0043.fina.svg
cat $fontname/uni0052.fina.svg $fontname/uni005c.svg >$fontname/uni004c.fina.svg
cat $fontname/uni0050.fina.svg $fontname/uni005c.svg >$fontname/uni0042.fina.svg
cat $fontname/uni0048.fina.svg $fontname/uni005c.svg >$fontname/uni0058.fina.svg
cat $fontname/uni0046.fina.svg $fontname/uni005c.svg >$fontname/uni0056.fina.svg
cat $fontname/uni004d.fina.svg $fontname/uni005c.svg >$fontname/uni004e.fina.svg
cat $fontname/uni0053.fina.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni004a.fina.svg
cat $fontname/uni0051.fina.svg $fontname/uni005c.svg $fontname/uni0030.svg >$fontname/uni0059.fina.svg
