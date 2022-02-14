import os

def getMD(dir, level):
  if os.path.basename(dir) == '.git':
    return
  con = ('  ' * (level - 1)) if level > 0 else ''
  if os.path.isfile(dir):
    print(dir)
    return
  else:
    list1 = dir.split('/')
    print(con + '* ' + os.path.basename(dir))
  list = os.listdir(dir) #列出文件夹下所有的目录与文件
  for i in range(0,len(list)):
    path = os.path.join(dir,list[i])
    if os.path.isfile(path):
      # print(path)
      if path[-3:] == '.md':
        print(con + '  * [' + os.path.basename(path)[0:-3] + '](' + path.split('/')[1][0:-3] + ')')
    else:
      getMD(path, level + 1)

def main():
    path = "./"
    getMD(path, 0)


if __name__ == "__main__":
    main()