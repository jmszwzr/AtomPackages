# Atom packages
>All packages in this directory will be automatically loaded


<!-- MDTOC maxdepth:6 firsth1:2 numbering:0 flatten:0 bullets:1 updateOnSave:1 -->

- [apm的使用](#apm的使用)
- [常用快捷键](#常用快捷键)
- [定制编辑器](#定制编辑器)
- [便捷的操作](#便捷的操作)
- [常用插件](#常用插件)
   - [必备插件](#必备插件)
   - [UI主题](#ui主题)
   - [代码美化](#代码美化)
   - [前端利器](#前端利器)
      - [自动路径补全](#自动路径补全)
      - [语法检查](#语法检查)
   - [Git](#git)
   - [Markdown](#markdown)
   - [插件类](#插件类)
- [Atom-常见问题解决](#atom-常见问题解决)
   - [**快捷键冲突**](#快捷键冲突)
   - [**markdown-scroll-sync报错**](#markdown-scroll-sync报错)
- [Atom-不常见问题（欢迎大家建言献策）](#atom-不常见问题（欢迎大家建言献策）)
- [资料来源](#资料来源)
   - [ATOM基础教程](#atom基础教程)
   - [Atom编辑器折腾记](#atom编辑器折腾记)
   - [Atom教程](#atom教程)

<!-- /MDTOC -->

## apm的使用
>安装好Atom以后你可以通过在命令行中使用apm命令来安装管理插件
```
// 显示使用帮助
apm help                获得apm提供的所有子命令
apm help install        显示apm命令的install子命令的使用帮助

// 检查安装环境
apm install --check                                 运行结果为：Checking for native build tools done 即可使用apm安装插件

// 安装插件
apm install <package_name>                          安装一个插件的最新版本
apm install <package_name>@<package_version>        安装一个特定版本的插件
apm install emmet@0.1.5                             比如要安装0.1.5版的Emmet

// 搜索插件
apm search coffee                                   搜索插件名包含coffee的插件

// 显示插件详细信息
apm view git-grep                                   显示git-grep插件的详细信息
```

## 常用快捷键
>- 以下全部快捷键只在Windows7下测试通过使用
>- 类似 ctrl-K,ctrl-U 的执行顺序是，按住ctrl键不松开，然后先按 K 再按 U 即可
```
ctrl-shift-p            命令面板

alt + G + ↑             光标从当前文件的一块更改移到另一块更改的开始
alt + G + ↓             光标从当前文件的一块更改移到另一块更改的开始


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

ctrl + click            增加新光标，可跳跃
ctrl + up               选中行上移
ctrl + down             选中行下移
ctrl + shift + C        复制当前文件绝对路径
ctrl + shift + D        复制当前行到下一行
ctrl + shift + F        在整个工程中查找
ctrl + shift + G        Styleguide
ctrl + shift + I        呼出开发工具
ctrl + shift + K        快速删除当前行(与搜狗输入法冲突)
ctrl + shift + L        选择文本类型
ctrl + shift + U        调出切换编码选项

alt-B,alt-left          移动到单词开始(貌似用 alt-left 直接就可以)
alt-B,alt-right         移动到单词末尾(同上)
ctrl-K,ctrl-U           使当前字符大写
ctrl-K,ctrl-L           使当前字符小写

alt + F2                keymap            匹配选定所有(和Snipaste快捷键冲突)
shift + alt + D         keymap            删除当前光标所在行
ctrl + shift + alt + L  keymap            选择多行，进行多行编辑，不可跳跃(功能类似 ctrl + click)
ctrl + shift + alt + O  keymap            让插件activate-power-mode的雪花效果生效/失效


alt + Z                 package           expose：打开关闭所有已经打开文件的缩略图
alt + T                 package           git-time-machine：与文件的git提交历史记录进行比较
ctrl + `                package           platformio-ide-terminal：显示隐藏所有终端
ctrl + alt + G          package           git-control：打开关闭git-control
ctrl + alt + O          package           open-in-browers：在浏览器中打开当前文件
ctrl + shift + M        package           markdown-preview-plus：Markdown预览(不用自带的)
shift + alt + A         package           ask-stack：打开搜索strackoverflow
shift + enter           package           jumpy：打开或关闭此插件引用，从此在文件内编辑告别鼠标的神器
ctrl + alt + t i        package           atom-mdtoc：在Markdown生成TOC
ctrl + alt + t d        package           atom-mdtoc：在Markdown删除TOC

// 目录树操作
ctrl-0  焦点切换到目录树(再按一次或者Esc退出目录树)[貌似我的电脑这个功能用不了，郁闷]
a   添加文件
d   将当前文件另存为
i   显示(隐藏)版本控制忽略的文件
delete  删除文件

// 折叠
alt + ctrl + [          折叠
alt + ctrl + ]          展开
alt + ctrl + shift + {  折叠全部
alt + ctrl + shift + }  展开全部

// 书签
ctrl + F2               显示所有书签
ctrl + alt + F2         打上/取消所在行的书签
ctrl + shift + F2       清除所有书签
F2                      调到下一个书签
shift + F2              调到上一个书签

// 查找文件 | 显示状态
Ctrl + T / Ctrl + P     搜索目录中的文件 | 列出所有项目中的文件
Ctrl + B                搜索一个当前打开的文件 | 列出所有当前打开的文件
Ctrl + Shift + B        搜索一个新建的或更改过的文件 | 列出所有未跟踪或是更改过的文件

// GitHub支持，以下方式打开速度要快，不然不能被Atom正确识别
Alt+G O 在GitHub上打开当前文件
Alt+G B 在GitHub上用Blame方式打开当前文件
Alt+G H 在GitHub上用History方式打开当前文件
Alt+G C 将当前文件在GitHub上的URL复制到剪切板
Alt+G R 在GitHub上比较分支
```


## 定制编辑器
- Tab Length： 改成 4，意思是一个 Tab 键占用 4 个空格，默认是 2 个
- Scroll Past End： 选中，意思是你可以将代码的最后一行显示在屏幕的最上方
- Show Indent Guide： 选中，可以清晰地标记同一层次的代码，当代码嵌套层次比较复杂时尤其有用

## 便捷的操作
下面列举一些我常用的快捷操作，这些操作很大程度上帮助我提升了效率。部分内容会与上面的 Atom 特色重复。

- 三种方式打开settings设置窗口
    1. 主菜单Edit->Preferences
    2. 在命令面板中输入命令Settings View:Open. 因为命令窗口支持模糊查询, 因此只需要输入svo, 就可以了
    3. 使用快捷键 `ctrl-,`    需要修改搜狗输入法中输入法管理器的搜狗平阴快捷键
- 选中项目根目录，右键，选择 “Search in Directory”，可以全局准确搜索关键字
- ctrl + F： 文件中关键词搜索及替换
- 选择多项：按住 ctrl / ctrl，用鼠标点击另外一处你想选择的地方，这样，你就可以看到多个一起闪动的光标


## 常用插件

### 必备插件
- [sync-settings](https://atom.io/packages/sync-settings)，同步Atom的settings, keymaps, user styles, init script, snippets and installed packages信息
- [simplified-chinese-menu](https://atom.io/packages/simplified-chinese-menu)，Atom 的简体中文语言包，完整汉化，兼容所有已发布版本 Atom

### UI主题
- [atom-material-ui](https://atom.io/themes/atom-material-ui) ，一个好用好看的MD风格的主题
- [atom-material-syntax](https://atom.io/themes/atom-material-syntax)，用于语法高亮，配合Atom Material UI主题使用会更加完美
- [seti-ui](https://atom.io/themes/seti-ui)，暂未使用，不予评价
- [seti-syntax](https://atom.io/themes/seti-syntax)，和上面配套，亮点在文件的 icons

### 代码美化
- [file-icons](https://atom.io/packages/file-icons)，在Atom中显示文件类型对应的图标
- [filecolor](https://atom.io/packages/filecolor)，不同的文件显示不同的颜色
- [atom-beautify](https://atom.io/packages/atom-beautify)，一个可以快速美化代码排版本的神器，支持HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C,SQL等语言
- [minimap](https://atom.io/packages/minimap)，代码预览图
- [highlight-selected](https://atom.io/packages/highlight-selected)，高亮显示所有和选中文本一样的文本，很适用的插件

### 前端利器
- [emmet](https://atom.io/packages/emmet)，超有名的前端工具
- [pigments](https://atom.io/packages/pigments)，颜色提示
- [docblockr](https://atom.io/packages/docblockr)，代码注释，可惜不支持Python
- [ask-stack](https://atom.io/packages/ask-stack)，Ask Stack Overflow for Atom
- [atom-ternjs](https://atom.io/packages/atom-ternjs)，JS只能提示
- [regex-railroad-diagram](https://atom.io/packages/regex-railroad-diagram)，正则表达式图形化

#### 自动路径补全
- [autocomplete-plus](https://atom.io/packages/autocomplete-plus)，完善自带autocomplete,有二度设置,接下来列出的一些有二度设置
    - [autocomplete-paths](https://atom.io/packages/autocomplete-paths)，路径不全
    - [autocomplete-python](https://atom.io/packages/autocomplete-python)，Python补全
    - [autocomplete-html](https://atom.io/packages/autocomplete-html)，html路径不全
    - [autocomplete-snippets](https://atom.io/packages/autocomplete-snippets)，如名字
    - [autocomplete-css](https://atom.io/packages/autocomplete-css)，css路径不全
#### 语法检查
- [linter](https://atom.io/packages/linter)，linter是一语法检查插件，它可以识别大部分语法，并对你的语法错误进行纠正。linter只是一个框架，针对不同语言的有不同具体插件
    - [linter-jshint](https://atom.io/packages/linter-jshint), for JavaScript and JSON, using jshint
    - [linter-coffeelint](https://atom.io/packages/linter-coffeelint), for CoffeeScript, using coffeelint
    - [linter-tslint](https://atom.io/packages/linter-tslint), for Typescript, using tslint
    - [linter-php](https://atom.io/packages/linter-php), for PHP using php -l
    - [linter-pylint](https://atom.io/packages/linter-pylint), for Python, using pylint
    - [linter-scss-lint](https://atom.io/packages/linter-scss-lint), for SASS/SCSS, using scss-lint
    - [linter-less](https://atom.io/packages/linter-less), for LESS, using less
    - [linter-csslint](https://atom.io/packages/linter-csslint), for CSS, using csslint
    - [linter-stylint](https://atom.io/packages/linter-stylint), for Stylus, using stylint
    - [linter-stylus](https://atom.io/packages/linter-stylus), for Stylus, using stylus

### Git
- [git-time-machine](https://atom.io/themes/git-time-machine)，视图显示一个文件的提交历史
- [merge-conflicts](https://atom.io/packages/merge-conflicts)，在Atom中解决git合并出现的冲突

### Markdown
- [markdown-writer](https://atom.io/packages/markdown-writer)，markdown工具，便利
- [markdown-preview-enhanced](https://atom.io/packages/markdown-preview-enhanced)，非常强大markdown实时预览插件，强烈推荐
    - [markdown-preview-enhanced 使用教程(中文)](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)
- [atom-mdtoc](https://atom.io/packages/atom-mdtoc)，在Markdown中生成TOC，不建议安装markdown-toc
    - 要点1：标题命令最好不出现 ` -- ` `：`(中文冒号)等
    - 要点2：生成的TOC中，修改firsth1:1 为2，不将首标题作为目录结构

### 插件类
- [activate-power-mode](https://atom.io/packages/activate-power-mode)，输入时有震撼效果
- [vim-mode](https://atom.io/packages/vim-mode)，官方出品，在 Atom 上使用 Vim，哈哈哈
- [split-diff](https://atom.io/packages/minimap-split-diff)，文本比较工具，可比较两个窗口里的文档内容
- [project-manager](https://atom.io/packages/project-manager)，管理项目
- [platformio-ide-terminal](https://atom.io/packages/platformio-ide-terminal)，Atom 中集成终端，使用太顺畅了
- [jumpy](https://atom.io/packages/jumpy)，利用快捷键，在文件中跳转至任意位置
- [browser-plus](https://atom.io/packages/browser-plus)，在Atom中打开浏览器
- [script](https://atom.io/packages/script)，在Atom下运行脚本，支持多种开发语言


## Atom-常见问题解决

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


## Atom-不常见问题（欢迎大家建言献策）

- 在Atom中，右击文件名 Reveal in Tree View 无效果
- 快捷键问题：使用Atom自带的快捷键 ctrl-0 无效果
- browser-plus 编辑器内置浏览器打开markdown时出现乱码





--------------------
## 资料来源

- [Atom快速上手指南](https://zhuanlan.zhihu.com/p/26175781)
- [Atom 编辑器 入门 快捷键 插件安利](http://www.jianshu.com/p/aa8f8a252ed9)
- [Emmet使用](http://www.cnblogs.com/matchless/archive/2013/04/10/3010628.html)
- [Atom编辑器配置](http://imweb.io/topic/56c12f7e5c49f9d377ed8f1e)
- [优美的编辑器Github Atom](https://crazylxr.github.io/2016/10/10/2016-10-10-%E4%BC%98%E7%BE%8E%E7%9A%84%E7%BC%96%E8%BE%91%E5%99%A8github_atom/)
- [磨刀不误砍柴工，配置你的前端开发环境：Atom](https://segmentfault.com/a/1190000007690359)
- [使用Atom打造无懈可击的Markdown编辑器](http://www.cnblogs.com/fanzhidongyzby/p/6637084.html)
- [ATOM编辑器快捷键大全](http://www.168seo.cn/tools/1279.html)
- [推荐几款我喜欢的Atom插件](http://www.tuicool.com/articles/qmEVfy)
- [前端我在使用的插件（可能有点多）](https://atom-china.org/t/topic/2650)
- [CSDN-u010494080的专栏：Atom编辑器入门到精通](http://blog.csdn.net/u010494080/article/category/6277533)

### ATOM基础教程
- [ATOM基础教程一ATOM插件推荐(4)](http://blog.csdn.net/zsl10/article/details/51822715)
- [ATOM基础教程一ATOM快捷键(5)](http://blog.csdn.net/zsl10/article/details/51853435)
- [ATOM基础教程一ATOM自定义代码片段(8)](http://blog.csdn.net/zsl10/article/details/51873564)
- [ATOM基础教程一使用前端插件emmet(16)](http://blog.csdn.net/zsl10/article/details/51956791)
### Atom编辑器折腾记
- [Atom编辑器折腾记_(3)插件主题推荐](http://blog.csdn.net/crper/article/details/45687621)
- [Atom编辑器折腾记_(7)Emmet实例教程](http://blog.csdn.net/crper/article/details/45786335)
- [Atom编辑器折腾记_(22)二次翻译快捷键【追加1.8新版本新增快捷键】](http://blog.csdn.net/crper/article/details/51420731)
### Atom教程
- [Atom Flight Manual(官网)](http://flight-manual.atom.io/)
- [Atom Flight Manual(翻译自官网，到二章)](http://mazhuang.org/atom-flight-manual/)
- [Atom飞行手册翻译(翻译自官网，到二章)](http://mazhuang.org/atom-flight-manual/)
