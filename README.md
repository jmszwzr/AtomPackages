# Atom packages
>All packages in this directory will be automatically loaded

## 常用快捷键
>类似 ctrl-K,ctrl-U 的执行顺序是，按住ctrl键不松开，然后先按 K 再按 U 即可
```
ctrl-shift-p            打开控制面板

ctrl + /                启用注释
ctrl + \                展示隐藏目录树(或者用 ctrl-k,ctrl-b 组合键进行显示/隐藏目录树)
ctrl + alt + I          打开Chrome调试器
ctrl + [                向右缩进
ctrl + ]                向左缩进

ctrl + D                匹配选定下一个
ctrl + F                在当前文件中查找/替换
ctrl + G                移动到指定行 row:column 处
ctrl + J                将下一行与当前行合并
ctrl + L                选取一行，继续按会先去下一行
ctrl + R                在方法之间跳转

ctrl + click            增加新光标
ctrl + up               选中行上移
ctrl + down             选中行下移
ctrl + shift + C        复制当前文件绝对路径
ctrl + shift + D        复制当前行到下一行
ctrl + shift + F        在整个工程中查找
ctrl + shift + G        Styleguide
ctrl + shift + K        快速删除当前行(与搜狗输入法冲突)
ctrl + shift + L        选择文本类型
ctrl + shift + U        调出切换编码选项

alt-B,alt-left          移动到单词开始(貌似用 alt-left 直接就可以)
alt-B,alt-right         移动到单词末尾(同上)
ctrl-K,ctrl-U           使当前字符大写
ctrl-K,ctrl-L           使当前字符小写

alt + F2                keymap            匹配选定所有(和Snipaste快捷键冲突)
shift + alt + D         keymap            删除当前光标所在行

alt + Z                 package           expose：打开关闭所有已经打开文件的缩略图
alt + T                 package           git-time-machine：与文件的git提交历史记录进行比较
ctrl + `                package           platformio-ide-terminal：显示隐藏所有终端
ctrl + alt + G          package           git-control：打开关闭git-control
ctrl + alt + G          package           git-control：打开关闭git-control
ctrl + shift + M        package           markdown-preview-plus：Markdown预览(不用自带的)
shift + alt + A         package           ask-stack：打开搜索strackoverflow


# 目录树操作
ctrl-0  焦点切换到目录树(再按一次或者Esc退出目录树)[貌似我的电脑这个功能用不了，郁闷]
a   添加文件
d   将当前文件另存为
i   显示(隐藏)版本控制忽略的文件

# 折叠
alt + ctrl + [          折叠
alt + ctrl + ]          展开
alt + ctrl + shift + {  折叠全部
alt + ctrl + shift + }  展开全部
```

## 定制编辑器

- Tab Length： 改成 4，意思是一个 Tab 键占用 4 个空格，默认是 2 个
- Scroll Past End： 选中，意思是你可以将代码的最后一行显示在屏幕的最上方
- Show Indent Guide： 选中，可以清晰地标记同一层次的代码，当代码嵌套层次比较复杂时尤其有用

## 便捷的操作
下面列举一些我常用的快捷操作，这些操作很大程度上帮助我提升了效率。部分内容会与上面的 Atom 特色重复。

- 打开serttings的基重方式
    - ctrl-shift-p  svo
    - ctrl-,    需要修改搜狗输入法中输入法管理器的搜狗平阴快捷键
- 拖动一个文件夹到 Atom 窗口或者 Atom 应用图标，便能在 Atom 中打开这个文件夹
- 拖动一个文件到 Atom 窗口或者 Atom 应用图标，便在 Atom 中打开这个文件所在的文件夹
- ctrl + P / ctrl + T： 全局关键词快速模糊搜索
- 选中项目根目录，右键，选择 “Search in Directory”，可以全局准确搜索关键字
- ctrl + F： 文件中关键词搜索及替换
- 选择多项：按住 ctrl / ctrl，用鼠标点击另外一处你想选择的地方，这样，你就可以看到多个一起闪动的光标


## 常用插件

#### UI主题
- [atom-material-ui](https://atom.io/themes/atom-material-ui) ，听说好看到爆
- [atom-material-syntax](https://atom.io/themes/atom-material-syntax)，和上面配套
- [seti-ui](https://atom.io/themes/seti-ui)
- [seti-syntax](https://atom.io/themes/seti-syntax)，和上面配套，亮点在文件的 icons

#### 代码美化
- [file-icons](https://atom.io/packages/file-icons)，显示文件类型对应的图标
- [atom-beautify](https://atom.io/packages/atom-beautify)，支持大多数语言的代码格式化
- [minimap](https://atom.io/packages/minimap)，代码预览图

#### 代码提示
- [emmet](https://atom.io/packages/emmet)，超有名的前端工具
- [pigments](https://atom.io/packages/pigments)，颜色提示
- [docblockr](https://atom.io/packages/docblockr)，代码注释，可惜不支持Python
- [ask-stack](https://atom.io/packages/ask-stack)，Ask Stack Overflow for Atom
- [atom-ternjs](https://atom.io/packages/atom-ternjs)，补全 JS
- [autocomplete-paths](https://atom.io/packages/autocomplete-paths)，补全路径，有用！
- [autocomplete-python](https://atom.io/packages/autocomplete-python)，Python补全

#### Git
- [git-time-machine](https://atom.io/themes/git-time-machine)，视图显示一个文件的提交历史

#### Markdown
- [markdown-writer](https://atom.io/packages/markdown-writer)，markdown工具，便利

#### 好玩
- [vim-mode](https://atom.io/packages/vim-mode)，官方出品，在 Atom 上使用 Vim，哈哈哈
- [activate-power-mode](https://atom.io/packages/activate-power-mode)，这个叼，不过慎用
- [project-manager](https://atom.io/packages/project-manager)，管理项目
- [platformio-ide-terminal](https://atom.io/packages/platformio-ide-terminal)，Atom 中集成终端，使用太顺畅了


## Atom -- 常见问题解决

### **快捷键冲突**

>- 1、打开 设置 -> Keybingdings；
>- 2、复制目标快捷键的配置信息，如下图所示，目标是将 `ctrl + alt + o` 快捷键配置为打开或关闭 git-control；
![images](https://github.com/jmszwzr/AtomPackages/raw/master/_images/Keybingdings.png)
>- 3、打开 "keymap.cson"(ctrl + shift + p / ctrl + shift + p, type "open keymap")；
>- 4、粘贴配置信息至文件末尾。

### **markdown-scroll-sync报错**

>- 1.git clone `git@github.com:vincentcn/markdown-scroll-sync.git`
>- 2.删除.atom/packages目录下的markdown-scroll-sync
>- 3.将clone下来的markdown-scroll-sync复制粘贴到.atom/packages下
>- 4.进入markdown-scroll-sync目录，运行`apm install`
>- 5.重启Atom编辑器，如果有Markdown文件的预览被打开了，关掉Markdown预览，重新打开即可生效









--------------------
## 资料来源

- [Atom快速上手指南](https://zhuanlan.zhihu.com/p/26175781)
- [Atom 编辑器 入门 快捷键 插件安利](http://www.jianshu.com/p/aa8f8a252ed9)
- [Emmet使用](http://www.cnblogs.com/matchless/archive/2013/04/10/3010628.html)
- [Atom编辑器配置](http://imweb.io/topic/56c12f7e5c49f9d377ed8f1e)
- [优美的编辑器Github Atom](https://crazylxr.github.io/2016/10/10/2016-10-10-%E4%BC%98%E7%BE%8E%E7%9A%84%E7%BC%96%E8%BE%91%E5%99%A8github_atom/)
- [磨刀不误砍柴工，配置你的前端开发环境：Atom](https://segmentfault.com/a/1190000007690359)
- [使用Atom打造无懈可击的Markdown编辑器](http://www.cnblogs.com/fanzhidongyzby/p/6637084.html)
