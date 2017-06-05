# Atom packages
>All packages in this directory will be automatically loaded

## 常用快捷键
```
Ctrl + /                启用注释
Ctrl + \                展示隐藏目录树
Ctrl + Alt + I          打开Chrome调试器
Ctrl + [                向右缩进
Ctrl + ]                向左缩进
Shift + Home            选定光标至行首
Shift + End             选定光标至行尾
Ctrl + D                匹配选定下一个
Ctrl + up               选中行上移
Ctrl + down             选中行下移
ctrl-shift-g            Styleguide
ctrl-shift-k            快速删除当前行(与搜狗输入法冲突)
ctrl-shift-d            复制当前行到下一行

# keymaps
Alt + F2                匹配选定所有(和Snipaste快捷键冲突)


# ask-stack                 shift-alt-a             打开搜索strackoverflow
# git-control               ctrl-alt-g              打开关闭git-control
# expose                    alt-z                   打开关闭所有已经打开文件的缩略图
# platformio-ide-terminal   Ctrl + `                显示隐藏所有终端

# 目录树操作
a   添加文件
d   将当前文件另存为
i   显示(隐藏)版本控制忽略的文件

# 折叠
Alt + Ctrl + [          折叠
Alt + Ctrl + ]          展开
Alt + Ctrl + Shift + {  折叠全部
Alt + Ctrl + Shift + }  展开全部

# Markdown 写作
Ctrl + Shift + M        Markdown预览

# Markdown 语法补全
b, legal, img, l, i, code, t, table
```

## 定制编辑器

- Tab Length： 改成 4，意思是一个 Tab 键占用 4 个空格，默认是 2 个
- Scroll Past End： 选中，意思是你可以将代码的最后一行显示在屏幕的最上方
- Show Indent Guide： 选中，可以清晰地标记同一层次的代码，当代码嵌套层次比较复杂时尤其有用

## 便捷的操作
下面列举一些我常用的快捷操作，这些操作很大程度上帮助我提升了效率。部分内容会与上面的 Atom 特色重复。

- 拖动一个文件夹到 Atom 窗口或者 Atom 应用图标，便能在 Atom 中打开这个文件夹
- 拖动一个文件到 Atom 窗口或者 Atom 应用图标，便在 Atom 中打开这个文件所在的文件夹
- cmd + T / ctrl + T： 全局关键词快速模糊搜索
- 选中项目根目录，右键，选择 “Search in Directory”，可以全局准确搜索关键字
- cmd + F / ctrl + F： 文件中关键词搜索及替换
- 选择多项：按住 cmd / ctrl，用鼠标点击另外一处你想选择的地方，这样，你就可以看到多个一起闪动的光标


## 常用插件

1、UI主题


- [atom-material-ui](https://atom.io/themes/atom-material-ui) ，笔者使用的ui
- [atom-material-syntax](https://atom.io/themes/atom-material-syntax)，和上面配套
- [eti-syntax](https://atom.io/themes/seti-syntax)，亮点在文件的 icons

2、代码美化
- [file-icons](https://atom.io/packages/file-icons)，显示文件类型对应的图标
- [atom-beautify](https://atom.io/packages/atom-beautify)，支持大多数语言的代码格式化
- [activate-power-mode](https://atom.io/packages/activate-power-mode)，这个叼，不过慎用
- [pigments](https://atom.io/packages/pigments)，颜色提示
- [minimap](https://atom.io/packages/minimap)，代码预览图

3、提升效率
- [autocomplete-paths](https://atom.io/packages/autocomplete-paths)，补全路径，有用！
- [atom-ternjs](https://atom.io/packages/atom-ternjs)，补全 JS
- [autocomplete-python](https://atom.io/packages/autocomplete-python)，Python补全
- [emmet](https://atom.io/packages/emmet)，超有名的前端工具
- [docblockr](https://atom.io/packages/docblockr)，代码注释，可惜不支持Python
- [vim-mode](https://atom.io/packages/vim-mode)，官方出品，在 Atom 上使用 Vim，哈哈哈
- [platformio-ide-terminal](https://atom.io/packages/platformio-ide-terminal)，Atom 中集成终端，使用太顺畅了
- [markdown-writer](https://atom.io/packages/markdown-writer)，markdown工具，便利
- [project-manager](https://atom.io/packages/project-manager)，管理项目
- [ask-stack](https://atom.io/packages/ask-stack)，Ask Stack Overflow for Atom


## Atom -- 常见问题解决

### **快捷键冲突**
>  
- 1、打开 设置 -> Keybingdings；
- 2、复制目标快捷键的配置信息，如下图所示，目标是将 ctrl + alt + o 快捷键配置为打开或关闭 git-control；
![images](https://github.com/jmszwzr/AtomPackages/raw/master/_images/Keybingdings.png)
- 3、打开 "keymap.cson"(ctrl + shift + p / cmd + shift + p, type "open keymap")；
- 4、粘贴配置信息至文件末尾。

### 从Atom官网或者Atom编辑器下载的markdown-scroll-sync报`atom-text-editor.Object.defineProperty.get is deprecated`错误

>解决方案如下：  
- 1.git clone git@github.com:vincentcn/markdown-scroll-sync.git
- 2.删除.atom/packages目录下的markdown-scroll-sync
- 3.将clone下来的markdown-scroll-sync复制粘贴到.atom/packages下
- 4.进入markdown-scroll-sync目录，运行apm install
- 5.重启Atom编辑器，如果有Markdown文件的预览被打开了，关掉Markdown预览，重新打开即可生效












--------------------
## 资料来源
>   
- [Atom快速上手指南](https://zhuanlan.zhihu.com/p/26175781)
- [Atom 编辑器 入门 快捷键 插件安利](http://www.jianshu.com/p/aa8f8a252ed9)
- [Emmet使用](http://www.cnblogs.com/matchless/archive/2013/04/10/3010628.html)
- [Atom编辑器配置](http://imweb.io/topic/56c12f7e5c49f9d377ed8f1e)
- [优美的编辑器Github Atom](https://crazylxr.github.io/2016/10/10/2016-10-10-%E4%BC%98%E7%BE%8E%E7%9A%84%E7%BC%96%E8%BE%91%E5%99%A8github_atom/)
- [磨刀不误砍柴工，配置你的前端开发环境：Atom](https://segmentfault.com/a/1190000007690359)
