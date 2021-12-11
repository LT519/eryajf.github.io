(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{991:function(s,n,a){"use strict";a.r(n);var e=a(11),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-安装brew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装brew"}},[s._v("#")]),s._v(" 1，安装brew")]),s._v(" "),a("p",[s._v("网上常规的安装方式都比较慢或者经常失败，使用如下方式一键安装，非常方便，给作者点个赞。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行脚本之后，选择对应的源之后就会一键安装brew了。")]),s._v(" "),a("p",[s._v("安装一些常用软件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("brew install wget curl telnet lrzsz tcpdump tree jq ack redis autojump zbar nslookup git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("安装node：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("brew install node@12\n\n# 然后添加环境变量\necho 'export PATH=\"/usr/local/opt/node@12/bin:$PATH\"' >> ~/.zshrc\necho 'export PATH=\"/usr/local/opt/icu4c/bin:$PATH\"' >> ~/.zshrc\necho 'export PATH=\"/usr/local/opt/icu4c/sbin:$PATH\"' >> ~/.zshrc\necho 'export PATH=\"/usr/local/opt/node@12/bin:$PATH\"' >> ~/.zshrc\n\n加载之后就可以使用了\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("参考文章："),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/111014448",target:"_blank",rel:"noopener noreferrer"}},[s._v("Homebrew国内如何自动安装"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_2-oh-my-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-oh-my-zsh"}},[s._v("#")]),s._v(" 2，oh-my-zsh")]),s._v(" "),a("h3",{attrs:{id:"_1-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[s._v("#")]),s._v(" 1，安装")]),s._v(" "),a("p",[s._v("同理，很多老的方法安装都是网络原因无法成功，最后找到了如下文章可以正常安装了。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("下载脚本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# gitee 源\nwget https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("调整脚本")]),s._v(" "),a("p",[s._v("把如下内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("REPO=${REPO:-ohmyzsh/ohmyzsh}\nREMOTE=${REMOTE:-https://github.com/${REPO}.git}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("替换为如下内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("REPO=${REPO:-mirrors/oh-my-zsh}\nREMOTE=${REMOTE:-https://gitee.com/${REPO}.git}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("运行脚本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 赋予可执行权限\nchomd +x install.sh\n# 运行\nsh install.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("安装完成之后，修改仓库地址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd ~/.oh-my-zsh\ngit remote set-url origin https://gitee.com/mirrors/oh-my-zsh.git\ngit pull\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("切换zsh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 切换\nchsh -s /bin/zsh\n\n# 查看当前bash\necho $SHELL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置"}},[s._v("#")]),s._v(" 2，配置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("主题")]),s._v(" "),a("p",[s._v("主题使用个人调制的，内容如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ cat .oh-my-zsh/themes/myys.zsh-theme\n# VCS\nYS_VCS_PROMPT_PREFIX1=" %{$fg[white]%}on%{$reset_color%} "\nYS_VCS_PROMPT_PREFIX2=":%{$fg[cyan]%}"\nYS_VCS_PROMPT_SUFFIX="%{$reset_color%}"\nYS_VCS_PROMPT_DIRTY=" %{$fg[red]%}x"\nYS_VCS_PROMPT_CLEAN=" %{$fg[green]%}o"\n\n# Git info\nlocal git_info=\'$(git_prompt_info)\'\nZSH_THEME_GIT_PROMPT_PREFIX="${YS_VCS_PROMPT_PREFIX1}git${YS_VCS_PROMPT_PREFIX2}"\nZSH_THEME_GIT_PROMPT_SUFFIX="$YS_VCS_PROMPT_SUFFIX"\nZSH_THEME_GIT_PROMPT_DIRTY="$YS_VCS_PROMPT_DIRTY"\nZSH_THEME_GIT_PROMPT_CLEAN="$YS_VCS_PROMPT_CLEAN"\n\n# HG info\nlocal hg_info=\'$(ys_hg_prompt_info)\'\nys_hg_prompt_info() {\n\t# make sure this is a hg dir\n\tif [ -d \'.hg\' ]; then\n\t\techo -n "${YS_VCS_PROMPT_PREFIX1}hg${YS_VCS_PROMPT_PREFIX2}"\n\t\techo -n $(hg branch 2>/dev/null)\n\t\tif [ -n "$(hg status 2>/dev/null)" ]; then\n\t\t\techo -n "$YS_VCS_PROMPT_DIRTY"\n\t\telse\n\t\t\techo -n "$YS_VCS_PROMPT_CLEAN"\n\t\tfi\n\t\techo -n "$YS_VCS_PROMPT_SUFFIX"\n\tfi\n}\nlocal exit_code="%(?,,C:%{$fg[red]%}%?%{$reset_color%})"\nPROMPT="\n%(#,%{$bg[yellow]%}%{$fg[black]%}%n%{$reset_color%},%{$fg[cyan]%}%n) \\\n%{$fg[white]%}in \\\n%{$terminfo[bold]$fg[yellow]%}%~%{$reset_color%}\\\n${hg_info}\\\n${git_info}\\\n \\\n%{$fg[white]%}[%*] $exit_code\n%{$terminfo[bold]$fg[red]%}$ %{$reset_color%}"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])]),a("p",[s._v("然后在配置中引用：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ cat .zshrc\n# HomeBrew\nexport HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles\nexport PATH="/usr/local/bin:$PATH"\nexport PATH="/usr/local/sbin:$PATH"\n# HomeBrew END\n\n# Path to your oh-my-zsh installation.\nexport ZSH="/Users/liqilong/.oh-my-zsh"\nZSH_THEME="myys"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("插件")]),s._v(" "),a("p",[s._v("先安装两个默认没有的：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions\n\ngit clone git://github.com/zsh-users/zsh-syntax-highlighting $ZSH_CUSTOM/plugins/zsh-syntax-highlighting\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("加入配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("plugins=(\n    git\n    cp\n    z\n    wd\n    sudo\n    sublime\n    git-open\n    zsh_reload\n    colored-man-pages\n    zsh-autosuggestions\n    zsh-syntax-highlighting\n    web-search\n    extract\n)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("历史命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# history\nexport HIST_STAMPS="yyyy-mm-dd"\nexport HISTSIZE=100000\nexport HISTFILESIZE=1000000\n# 忽略重复的命令\nexport HISTCONTROL=ignoredups\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"_3-调整启动台图标大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-调整启动台图标大小"}},[s._v("#")]),s._v(" 3,调整启动台图标大小")]),s._v(" "),a("p",[s._v("1、调整每一列显示图标数量，10表示每一列显示10个，比较不错，可根据个人喜好进行设置。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("defaults write com.apple.dock springboard-rows -int 10\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、调整多少行显示图标数量，这里我用的是8")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("defaults write com.apple.dock springboard-rows -int 8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、重置Launchpad")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("defaults write com.apple.dock ResetLaunchPad -bool TRUE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4、重启Dock")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("killall Dock\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("恢复默认设置的方法。")])]),s._v(" "),a("p",[a("strong",[s._v("以下是恢复默认大小的命令（在Terminal执行即可）：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("defaults write com.apple.dock springboard-rows Default\ndefaults write com.apple.dock springboard-columns Default\ndefaults write com.apple.dock ResetLaunchPad -bool TRUE\nkillall Dock\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);