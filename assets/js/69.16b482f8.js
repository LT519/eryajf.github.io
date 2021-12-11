(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{636:function(s,p,n){"use strict";n.r(p);var a=n(11),e=Object(a.a)({},(function(){var s=this,p=s.$createElement,n=s._self._c||p;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-历史"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-历史"}},[s._v("#")]),s._v(" 1，历史")]),s._v(" "),n("p",[s._v("以往PHP大多都是使用源码安装，或者使用自行封装成RPM包的姿势来进行安装。")]),s._v(" "),n("ul",[n("li",[s._v("源码安装的优点是灵活性强，后期模块儿自定义添加调整都比较方便。")]),s._v(" "),n("li",[s._v("自行封装RPM初期工作比较费劲儿，不过梳理好当前生产所需的依赖模块儿之后，后期的标准化维护工作会轻松很多。")])]),s._v(" "),n("p",[s._v("不过这里依然遵循一个道理，也是我们接触互联网技术深入以来的一个体会："),n("code",[s._v("有些技术或者事物看似简单，实际使用起来背后则隐藏着复杂，有些技术或者事物看似复杂，实际使用起来背后则体现着简单。")])]),s._v(" "),n("p",[s._v("从中国古代的智慧来看，这叫"),n("code",[s._v("福祸相依")]),s._v("。")]),s._v(" "),n("p",[s._v("这一点在我们同时维护PHP以及golang项目的过程中，体会尤为深切，比如PHP属于解释性语言，常规部署方式是源码丢到服务器上，交给fpm解析，这给开发debug带来了不少便利，能够在不通过走提交代码，合并代码，走CICD流程的情况下直接修改源码来debug，但是，假如这个debug的调整会影响其他正在测试的同学呢，假如添加了调试代码而又忘记去掉了呢，我们这边可是不止一次遇到过这种问题，以至于我们不得不把服务器权限全部都收掉，彻底断掉开发者直接通过vim来调试代码的路径。对比而言，诸如golang或者Java，如果你觉得你提交的代码是有问题的，那么你就不得不在本地自行调试，然后运行起来看一下，再发布到测试去。因此，看起来能够高效开发迭代的PHP，事实上反而将开发者惯坏，从而经常提交了有问题的代码到测试环境去，而看起来老得编译验证的golang，类似这样的问题则少却很多。")]),s._v(" "),n("p",[s._v("话说回来，源码安装的优点是灵活性强，但是如果你有五十个PHP项目，它们的依赖各不一样，而且依赖添加的需求并不是同一时刻提出来的，于是经过两年的维护之下，这五十个项目的PHP环境则各不一样，很难梳理出一个统一的标准出来。自行封装RPM的一个问题在于，一些依赖如果要重新调整，比如基础包添加gd库的时候没有enable掉free-type，那么这个时候重新添加这个包就会成为一个大难题。")]),s._v(" "),n("h2",{attrs:{id:"_2-前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-前言"}},[s._v("#")]),s._v(" 2，前言")]),s._v(" "),n("p",[s._v("而今天要介绍的remi的方案，则是如上两种方式的折中方案，兼并两种方案的共同优点，值得推荐。")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://rpms.remirepo.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Remi repository"),n("OutboundLink")],1),s._v("是包含最新版本php和mysql包的linux源。")]),s._v(" "),n("ul",[n("li",[s._v("它完全基于RPM包管理，不必再身陷各种编译难题中。")]),s._v(" "),n("li",[s._v("它可以像源码管理时添加依赖那样，使用yum命令就可以添加好对应的依赖。")])]),s._v(" "),n("h2",{attrs:{id:"_3-使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用"}},[s._v("#")]),s._v(" 3，使用")]),s._v(" "),n("h3",{attrs:{id:"_1-添加yum源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加yum源"}},[s._v("#")]),s._v(" 1，添加yum源")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y epel-release\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y https://mirrors.tuna.tsinghua.edu.cn/remi/enterprise/remi-release-7.rpm\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("此时可以看到多了不少源：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ ll /etc/yum.repos.d/\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("614")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":50 CentOS-Base.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("230")]),s._v(" Aug  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":50 CentOS-Epel.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("616")]),s._v(" Apr  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" CentOS-x86_64-kernel.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1050")]),s._v(" Nov  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" epel.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1149")]),s._v(" Nov  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" epel-testing.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("446")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-glpi91.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("446")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-glpi92.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("446")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-glpi93.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("446")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-glpi94.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("855")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-modular.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("456")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-php54.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1314")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-php70.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1314")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-php71.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1314")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-php72.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1314")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-php73.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1314")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-php74.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1314")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-php80.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2605")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi.repo\n-rw-r--r-- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),s._v(" Jan  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" remi-safe.repo\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("这个时候，我们可以基于这个源拿到PHP各大版本中最后一个版本的RPM包及其依赖，使用如下命令能够看到所有的包：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum list "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'php70|php71|php72|php73|php74'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("其中一些依赖这里整理如下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("php74：安装PHP "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.4")]),s._v("的包\nphp74-php：用于创建动态web的PHP脚本语言网站\nphp74-build：基本的构建配置\nphp74-php-gd：用于PHP应用程序使用gd的模块图形库\nphp74-xhprof：一个用于PHP - Web接口的层次分析器\nphp74-zephir：用于创建扩展的Zephir语言PHP：\nphp74-php-ast：抽象语法树\nphp74-php-cli：用于PHP的命令行接口\nphp74-php-dba：一个用于PHP的数据库抽象层模块应用程序\nphp74-php-dbg：交互式PHP调试器\nphp74-php-ffi：外部函数接口\nphp74-php-fpm：PHP FastCGI进程管理器\nphp74-php-gmp：一个用于使用GNU的PHP应用程序模块议员库\nphp74-php-lz4：x86_64: PHP的LZ4扩展\nphp74-php-pdo：一个用于PHP的数据库访问抽象模块应用程序\nphp74-php-xml：x86_64:用于使用XML的PHP应用程序的模块\nphp74-runtime：处理php74软件集合的包：\nphp74-php-imap：x86_64:用于使用IMAP的PHP应用程序的模块\nphp74-php-intl：x86_64: PHP国际化扩展应用程序\nphp74-php-json：x86_64: PHP的JavaScript对象符号扩展\nphp74-php-ldap：x86_64:用于使用LDAP的PHP应用程序的模块\nphp74-php-oci8：x86_64:用于使用OCI8的PHP应用程序的模块数据库\nphp74-php-odbc：x86_64:用于使用ODBC的PHP应用程序的模块数据库\nphp74-php-pear：noarch: PHP扩展和应用程序库框架\nphp74-php-pggi：GTK绑定\nphp74-php-snmp：一个用于PHP应用程序查询的模块SNMP-managed设备\nphp74-php-soap：用于使用SOAP的PHP应用程序的模块协议\nphp74-php-tidy：标准PHP模块提供了tidy库支持\nphp74-php-zstd：x86_64: Zstandard扩展名\nphp74-scldevel：x86_64:打包php74的开发文件\nphp74-unit-php：用于NGINX单元的PHP模块\nphp74-php-devel：构建PHP扩展所需的文件\nphp74-php-pgsql：一个用于PHP的PostgreSQL数据库模块\nphp74-php-pinba：x86_64: Pinba统计服务器的客户端扩展\nphp74-php-bcmath：用于PHP应用程序的模块bcmath库\nphp74-php-brotli：用于PHP的Brotli扩展\nphp74-php-common：PHP的公共文件\nphp74-php-pspell：x86_64:用于PHP应用程序的模块中接口\nphp74-php-recode：用于PHP应用程序的模块重新编码库\nphp74-php-snappy：PHP的Snappy扩展\nphp74-php-sodium：x86_64:钠密码库的包装\nphp74-php-sqlsrv：x86_64:用于SQL Server的PHP Microsoft驱动程序\nphp74-php-xmlrpc：的PHP应用程序模块xml - rpc协议\nphp74-php-enchant：增强PHP的拼写扩展应用程序\nphp74-php-libvirt：用于Libvirt的PHP语言绑定\nphp74-php-mysqlnd：x86_64:用于使用MySQL的PHP应用程序的模块数据库\nphp74-php-opcache：x86_64: Zend OPcache\nphp74-php-pecl-ds：x86_64: PHP的数据结构\nphp74-php-pecl-ev：提供libev库的接口\nphp74-php-pecl-pq：PostgreSQL客户端库"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("libpq"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("绑定\nphp74-php-pecl-uv：Libuv包装器\nphp74-php-process：用于PHP脚本的模块使用系统进程接口\nphp74-php-embedded：用于嵌入应用程序的PHP库\nphp74-php-mbstring：一个用于PHP应用程序的模块多字节字符串处理\nphp74-php-pecl-dio：直接I/O函数\nphp74-php-pecl-eio：提供libeio库的接口\nphp74-php-pecl-env：加载环境变量\nphp74-php-pecl-lua：嵌入式lua解释器\nphp74-php-pecl-lzf：x86_64:处理LZF de/压缩的扩展\nphp74-php-pecl-nsq：NSQ客户端的PHP扩展\nphp74-php-pecl-psr：PSR接口\nphp74-php-pecl-rar：用于读取RAR存档的PHP扩展\nphp74-php-pecl-rrd：x86_64: rrdtool的PHP绑定\nphp74-php-pecl-sdl：简单的PHP DirectMedia层\nphp74-php-pecl-svn：x86_64: Subversion版本的PHP绑定控制系统\nphp74-php-pecl-vld：x86_64:转储PHP的内部表示脚本\nphp74-php-pecl-yac：无锁用户数据缓存\nphp74-php-pecl-yaf：x86_64:又一个框架\nphp74-php-pecl-yar：轻量级并发RPC框架\nphp74-php-pecl-yaz：x86_64: Z39.50/SRU客户端\nphp74-php-pecl-zip：一个ZIP文件的扩展名\nphp74-php-pecl-zmq：ZeroMQ消息传递\nphp74-php-phalcon4：Phalcon框架\nphp74-php-componere：在运行时编写PHP类\nphp74-php-litespeed：LiteSpeed Web服务器PHP支持\nphp74-php-maxminddb：MaxMind DB Reader扩展\nphp74-php-pdo-dblib：x86_64: PDO驱动程序，用于Microsoft SQL Server和Sybase数据库\nphp74-php-pecl-amqp：与任何AMQP兼容的服务器通信\nphp74-php-pecl-apcu：APC用户缓存\nphp74-php-pecl-apfd：总是填充表单数据\nphp74-php-pecl-fann：用于FANN库的包装器\nphp74-php-pecl-grpc：x86_64:通用RPC框架\nphp74-php-pecl-http：扩展的HTTP支持\nphp74-php-pecl-krb5：Kerberos验证扩展\nphp74-php-pecl-pcov：x86_64:代码覆盖驱动程序\nphp74-php-pecl-ssh2：x86_64: libssh2库的绑定\nphp74-php-pecl-sync：已命名和未命名同步对象\nphp74-php-pecl-uopz：x86_64: Zend的用户操作\nphp74-php-pecl-uuid：通用唯一标识符扩展对于PHP\nphp74-php-pecl-vips：x86_64:与libvip接口的PHP扩展\nphp74-php-pecl-wddx：Web分布式数据交换\nphp74-php-pecl-yaml：x86_64: yaml的PHP绑定\nphp74-php-phpiredis：x86_64: Redis的客户端扩展名\nphp74-php-smbclient：libsmbclient的PHP包装\nphp74-php-wkhtmltox：HTML转换器\nphp74-php-pecl-cmark：CommonMark扩展名\nphp74-php-pecl-dbase：dBase数据库文件访问函数\nphp74-php-pecl-druid：一个PHP的德鲁伊驱动\nphp74-php-pecl-event：提供libevent库的接口\nphp74-php-pecl-geoip：将IP地址映射到的扩展名地理位置\nphp74-php-pecl-gnupg：x86_64: gpgme库的包装\nphp74-php-pecl-mysql：MySQL数据库访问函数\nphp74-php-pecl-oauth：PHP OAuth消费者扩展\nphp74-php-pecl-parle：x86_64:解析和词法分析\nphp74-php-pecl-raphf：资源和持久句柄工厂\nphp74-php-pecl-solr2：Apache Solr的API定向对象\nphp74-php-pecl-stats：用于统计计算的例程\nphp74-php-pecl-stomp：Stomp客户端扩展\nphp74-php-pecl-taint：x86_64: XSS代码嗅探器\nphp74-php-pecl-xattr：扩展属性\nphp74-php-pecl-xdiff：文件差异/补丁\nphp74-php-pecl-xxtea：XXTEA加密算法扩展PHP\nphp74-php-libvirt-doc：noarch: php-libvirt文件\nphp74-php-pecl-base58：用base58编码和解码数据\nphp74-php-pecl-bitset：位集库\nphp74-php-pecl-crypto：OpenSSL密码库的包装器\nphp74-php-pecl-gender：x86_64:性别扩展\nphp74-php-pecl-hprose：用于PHP的h散文\nphp74-php-pecl-hrtime：x86_64:高分辨率定时\nphp74-php-pecl-mcrypt：x86_64: libmcrypt库的绑定\nphp74-php-pecl-pdflib：生成PDF文件的包\nphp74-php-pecl-propro：属性代理\nphp74-php-pecl-radius：Radius客户端库\nphp74-php-pecl-redis4：的扩展名 Redis键值存储\nphp74-php-pecl-redis5：的扩展名 Redis键值存储\nphp74-php-pecl-scrypt：Scrypt散列函数\nphp74-php-pecl-sphinx：Sphinx SQL全文的PECL扩展搜索引擎\nphp74-php-pecl-ssdeep：libfuzzy库的包装器\nphp74-php-pecl-trader：为贸易商提供技术分析\nphp74-php-pecl-xdebug：用于调试PHP脚本的PECL包\nphp74-php-pecl-xhprof：x86_64: XHProf的PHP扩展，层次结构分析器\nphp74-php-pecl-yaconf：x86_64:另一个配置容器\nphp74-php-pecl-apcu-bc：APCu向后兼容模块\nphp74-php-pecl-decimal：任意精度浮点小数\nphp74-php-pecl-gearman：PHP包装器到libgearman\nphp74-php-pecl-gmagick：的包装器GraphicsMagick库\nphp74-php-pecl-imagick：x86_64:用于创建和修改映像的扩展使用ImageMagick\nphp74-php-pecl-inotify：x86_64: Inotify\nphp74-php-pecl-leveldb：LevelDB PHP绑定\nphp74-php-pecl-memprof：x86_64:内存使用分析器\nphp74-php-pecl-mongodb：x86_64:用于PHP的MongoDB驱动程序\nphp74-php-pecl-msgpack：用于与MessagePack通信的API序列化\nphp74-php-pecl-rdkafka：基于librdkafka的Kafka客户端\nphp74-php-pecl-rpminfo：x86_64: RPM信息\nphp74-php-pecl-runkit7：为了这些你…不应该…无论如何我一直在做……但是肯定做的"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nphp74-php-pecl-seaslog：一个有效、快速、稳定的日志 PHP扩展\nphp74-php-pecl-selinux：用于PHP脚本的SELinux绑定语言\nphp74-php-pecl-swoole4：PHP的异步并发分布式网络框架\nphp74-php-pecl-timecop：x86_64:时间旅行和冻结扩展\nphp74-php-pecl-varnish：Varnish缓存绑定\nphp74-php-pecl-xmldiff：x86_64: XML差异和合并\nphp74-php-pecl-igbinary：x86_64:替代标准PHP序列化器\nphp74-php-pecl-memcache：x86_64:使用Memcached的扩展缓存守护进程\nphp74-php-pecl-mogilefs：要与之通信的PHP客户端库 MogileFS存储\nphp74-php-pecl-mustache：Mustache模板语言\nphp74-php-pecl-protobuf：序列化结构化的机制数据\nphp74-php-pecl-rdkafka4：基于librdkafka的Kafka客户端\nphp74-php-pecl-scoutapm：本地扩展组件 ScoutAPM的PHP代理\nphp74-php-pecl-translit：将非拉丁字符音译设置为拉丁文\nphp74-php-snuffleupagus：x86_64: PHP的安全模块\nphp74-php-zephir-parser：x86_64: Zephir解析器扩展\nphp74-php-pecl-cassandra：用于Apache的DataStax PHP驱动程序卡桑德拉\nphp74-php-pecl-json-post：JSON POST处理程序\nphp74-php-pecl-mailparse：用于解析和的PHP PECL包处理电子邮件消息\nphp74-php-pecl-memcached：x86_64:使用Memcached的扩展缓存守护进程\nphp74-php-pecl-mosquitto：libmosquito - to的扩展\nphp74-php-pecl-seasclick：一个Yandex ClickHouse客户端驱动 PHP扩展\nphp74-php-pecl-xlswriter：一个高效、快速的xlsx文件出口扩展\nphp74-php-horde-horde-lz4：Horde LZ4压缩扩展\nphp74-php-pecl-apcu-devel：APCu开发人员文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("头文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nphp74-php-pecl-couchbase2：Couchbase服务器PHP扩展\nphp74-php-pecl-geospatial：PHP扩展来处理公共地理空间功能\nphp74-php-pecl-handlebars：Handlebars模板语言\nphp74-php-pecl-http-devel：x86_64:扩展HTTP支持开发人员文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("头"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nphp74-php-pecl-krb5-devel：Kerberos扩展开发人员文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("头"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nphp74-php-pecl-luasandbox：带有限制和安全的Lua解释器环境\nphp74-php-pecl-opencensus：一个stats集合和分布式跟踪框架\nphp74-php-pecl-skywalking：x86_64: Apache的PHP工具代理人行天桥\nphp74-php-pecl-ahocorasick：有效的Aho-Corasick字符串模式匹配算法\nphp74-php-pecl-ip2location：获取an的地理位置信息IP地址\nphp74-php-pecl-http-message：x86_64: PSR-7 HTTP消息实现\nphp74-php-pecl-datadog-trace：APM和分布式跟踪PHP\nphp74-php-pecl-hdr-histogram：x86_64: C语言的PHP扩展包装hdrhistogram API\nphp74-php-pecl-imagick-devel：imagick扩展开发人员文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("头"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nphp74-php-pecl-msgpack-devel：MessagePack开发人员文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("头"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nphp74-php-pecl-mysql-xdevapi：MySQL数据库访问函数\nphp74-php-pecl-mysqlnd-azure：x86_64: mysqlnd的重定向插件\nphp74-php-pecl-igbinary-devel：Igbinary开发人员文件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("头"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nphp74-php-pecl-uploadprogress：x86_64:跟踪进度的扩展文件上传\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br"),n("span",{staticClass:"line-number"},[s._v("156")]),n("br"),n("span",{staticClass:"line-number"},[s._v("157")]),n("br"),n("span",{staticClass:"line-number"},[s._v("158")]),n("br"),n("span",{staticClass:"line-number"},[s._v("159")]),n("br"),n("span",{staticClass:"line-number"},[s._v("160")]),n("br"),n("span",{staticClass:"line-number"},[s._v("161")]),n("br"),n("span",{staticClass:"line-number"},[s._v("162")]),n("br"),n("span",{staticClass:"line-number"},[s._v("163")]),n("br"),n("span",{staticClass:"line-number"},[s._v("164")]),n("br"),n("span",{staticClass:"line-number"},[s._v("165")]),n("br"),n("span",{staticClass:"line-number"},[s._v("166")]),n("br"),n("span",{staticClass:"line-number"},[s._v("167")]),n("br"),n("span",{staticClass:"line-number"},[s._v("168")]),n("br"),n("span",{staticClass:"line-number"},[s._v("169")]),n("br"),n("span",{staticClass:"line-number"},[s._v("170")]),n("br"),n("span",{staticClass:"line-number"},[s._v("171")]),n("br"),n("span",{staticClass:"line-number"},[s._v("172")]),n("br"),n("span",{staticClass:"line-number"},[s._v("173")]),n("br"),n("span",{staticClass:"line-number"},[s._v("174")]),n("br"),n("span",{staticClass:"line-number"},[s._v("175")]),n("br"),n("span",{staticClass:"line-number"},[s._v("176")]),n("br"),n("span",{staticClass:"line-number"},[s._v("177")]),n("br"),n("span",{staticClass:"line-number"},[s._v("178")]),n("br"),n("span",{staticClass:"line-number"},[s._v("179")]),n("br"),n("span",{staticClass:"line-number"},[s._v("180")]),n("br"),n("span",{staticClass:"line-number"},[s._v("181")]),n("br"),n("span",{staticClass:"line-number"},[s._v("182")]),n("br"),n("span",{staticClass:"line-number"},[s._v("183")]),n("br"),n("span",{staticClass:"line-number"},[s._v("184")]),n("br"),n("span",{staticClass:"line-number"},[s._v("185")]),n("br"),n("span",{staticClass:"line-number"},[s._v("186")]),n("br"),n("span",{staticClass:"line-number"},[s._v("187")]),n("br"),n("span",{staticClass:"line-number"},[s._v("188")]),n("br"),n("span",{staticClass:"line-number"},[s._v("189")]),n("br")])]),n("p",[s._v("其中的 "),n("code",[s._v("php74-php.x86_64")]),s._v("为7.4这个大版本的主包，其他皆为依赖，如果想要安装redis依赖，则可以直接运行如下命令：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-pecl-redis4.x86_64 php74-php-pecl-redis5.x86_64\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这样就安装完成了。")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c7c4619ec71b3913.jpg",alt:"1e1a3e4ef34f9dc53ee5d2f159530d28"}})]),s._v(" "),n("h3",{attrs:{id:"_2-直接安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-直接安装"}},[s._v("#")]),s._v(" 2，直接安装")]),s._v(" "),n("p",[s._v("这个时候可以先梳理下自己所需要的依赖，然后找到依赖对应的RPM包，直接安装即可：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils php74-php.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-fpm.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-pecl-zip.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-opcache.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-gd.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-pecl-yaf.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-xmlrpc.x86_64 php74-php-xml.x86_64 php74-php-pecl-xmldiff.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-pecl-xhprof.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-pecl-msgpack.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-bcmath.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-gmp.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-mbstring.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-pecl-mcrypt.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-mysqlnd.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-soap.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-sodium.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-pecl-amqp.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-pecl-mongodb.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-pecl-redis4.x86_64 php74-php-pecl-redis5.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-process.x86_64\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y php74-php-pecl-swoole4.x86_64\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"_3-配置说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置说明"}},[s._v("#")]),s._v(" 3，配置说明")]),s._v(" "),n("p",[s._v("注意使用如上方式安装PHP之后，一些配置目录与我们往常使用习惯略有不同，这里简作说明：")]),s._v(" "),n("ul",[n("li",[s._v("安装目录："),n("code",[s._v("/opt/remi/php74")])]),s._v(" "),n("li",[s._v("配置文件目录："),n("code",[s._v("/etc/opt/remi/php74/")])]),s._v(" "),n("li",[s._v("运行时目录："),n("code",[s._v("/var/opt/remi/php74/")])]),s._v(" "),n("li",[s._v("二进制路径："),n("code",[s._v("/usr/bin/php74")])]),s._v(" "),n("li",[s._v("依赖目录："),n("code",[s._v("/opt/remi/php74/root/lib64/php/modules/")])]),s._v(" "),n("li",[s._v("依赖配置文件："),n("code",[s._v("/etc/opt/remi/php74/php.d/")])]),s._v(" "),n("li",[s._v("启动管理文件："),n("code",[s._v("/usr/lib/systemd/system/php74-php-fpm.service")])])]),s._v(" "),n("p",[s._v("安装之后按照往常使用习惯，我们将做一些调整：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将配置文件软链到/usr/local")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -snf /etc/opt/remi/php74 /usr/local/php74\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将PHP二进制命令调整成php")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -snf /usr/bin/php74 /usr/bin/php\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将启动文件名字进行调整")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/lib/systemd/system/php74-php-fpm.service /usr/lib/systemd/system/php74-fpm.service\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("然后是针对主配置文件"),n("code",[s._v("www.conf")]),s._v("的一些调整，这个就每个公司各有不同，根据自己的需求来调整即可。")]),s._v(" "),n("ul",[n("li",[s._v("不过如果要使用默认配置的话，注意默认配置文件中，PHP使用apach用户启动的。")]),s._v(" "),n("li",[s._v("因为我这边老版本差距不大，因此直接将老PHP的www.conf，php-fpm.conf覆盖掉新的，然后直接重启即可。")])]),s._v(" "),n("h3",{attrs:{id:"_4-问题记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-问题记录"}},[s._v("#")]),s._v(" 4，问题记录")]),s._v(" "),n("p",[s._v("问题一：如何往PHP里添加变量？")]),s._v(" "),n("p",[s._v("使用过程中，发现了一个奇怪的问题，我们有一个需求是打印日志会通过读取一个变量进行环境区分：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("NAMESPACE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("prod\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("以往的姿势是将该配置放到："),n("code",[s._v("/usr/local/php74/php-fpm.conf")]),s._v(",但是现在放到里边总是报错："),n("code",[s._v("Array are not allowed in the global section")]),s._v("，后来发现需要放到 "),n("code",[s._v("/usr/local/php74/php-fpm.d/www.conf")]),s._v("，然后再重启就可以了。")]),s._v(" "),n("p",[s._v("问题二：如何安装指定小版本的PHP？")]),s._v(" "),n("p",[s._v("目前经试验发现只能安装对应大版本(比如7.3或者7.4)的最新的小版本，而不能指定小版本安装，比如7.4.15等，如果你有安装指定小版本的版本，欢迎在评论区进行分享！")])])}),[],!1,null,null,null);p.default=e.exports}}]);