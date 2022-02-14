#### [gzip](#gzip)
#### [zcat](#zcat)
#### [tar](#tar)
#### [tee](#tee)
<a name='gzip'></a>

### gzip
  gzip -cdtv# filename
  （bzip2/bzcat与之用法一致）

  -c 将输出写到标准输出中，保留源文件
  -d 将压缩文件解压
  -t 测试，检查压缩文件是否完整
  -v 多每一个压缩和解压的文件，显示文件名和压缩比
  -#(number) -9 或 --best表示最高压缩方法. **系统缺省值为6**


<a name='zcat'></a>

### zcat
zcat xxx.gz可以查看解压后的文件内容

<a name='tat'></a>

### tar
tar -cxtrjzfpP filename [outputfilename]
  -c: 建立压缩档案
  -x: 解压
  -t: 查看内容
  -r: 向压缩归档文
  -j: bzip2压缩和解压
  -z: gzip压缩和解压
  -Z: 有compress属性的
  -v: 显示所有过程
  -O: 将文件解开到标准输出
  -f fileName: -f后面对应目的文件
  -p: 保留权限和属性
  -P: 保留绝对路径

压缩 tar -jcv

<a name='tee'></a>

### tee
  gzip -a filename1 filename2

  -a 以追加的形式添加到文件中
  file可同时多个