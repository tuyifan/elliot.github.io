# 重复模板语句自动
from string import Template
# 输入文件由input.txt输入 间隔为‘ ’ 
with open('./input.txt', 'r') as inputFile:
  lines = inputFile.readlines()
  for li in lines:
    if line[0] == '#':
      continue
    line = li
    break
  line = line.split(' ')
  print(line)
  # 模板
  # tem = Template("[$key](#$key)\n")
  tem = Template('#### <a name="$key"></a>\n```js\n\n```\n')
  with open('./output.txt', 'w') as outputFile:
    for key in line:
      outputFile.writelines(tem.substitute(key = key))