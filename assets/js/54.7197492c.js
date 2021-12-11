(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{621:function(s,a,t){"use strict";t.r(a);var n=t(11),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("以往"),t("code",[s._v("NGINX")]),s._v("日志不会进行切割的操作，而都是把切割的工作交给"),t("code",[s._v("logrotate")]),s._v("来做了，这没啥问题，但是如果遇到"),t("code",[s._v("NGINX")]),s._v("是容器来跑的，日志只是挂载出来的情况，就有点不科学了，毕竟"),t("code",[s._v("logrotate")]),s._v("在切割日志的时候还需要发一个平滑滚动的信号给 NGINX 进程。")]),s._v(" "),t("p",[s._v("那么这里就分享基于 NGINX 自身配置文件来进行日志的切割工作：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time_iso8601")]),s._v(" ~ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^(\\d{4})-(\\d{2})-(\\d{2})"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$year")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$month")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$day")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\naccess_log /var/log/nginx/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$year")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$month")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$day")]),s._v("-access.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("以上配置基于 "),t("code",[s._v("$time_iso8601")]),s._v("这一时间戳取出时间变量，从而满足自由定义的方式，生成的日志将会按天自动进行切割。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0ae7bf7cb48f908a.jpg",alt:"img"}})]),s._v(" "),t("p",[s._v("如果精确到秒，可以用如下配置：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time_iso8601")]),s._v(" ~ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$year")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$month")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$day")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hour")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$minutes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$seconds")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\naccess_log /data/log/test/nginx-access-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$year")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$month")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$day")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hour")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$minutes")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$seconds")]),s._v(".log json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这样就已经可以实现需求了，还有 Perl 的表现方式，这里就不讲解了。")]),s._v(" "),t("p",[t("code",[s._v("注意：")]),s._v("这里的 if 语句只能放到 server 区块下，所以不能直接放在全局引用。")]),s._v(" "),t("p",[s._v("于是，可以先创建一个日志格式化专用的配置文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/nginx/conf/log_format.conf\nlog_format json "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("escape")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"remote_addr": "$remote_addr",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"@timestamp": "$time_iso8601",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"request_uri": "$request_uri",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"verb": "$request_method",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"httpversion": "$server_protocol",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"response": "$status", \'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"body_bytes_sent": "$body_bytes_sent", \'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"referrer": "$http_referer", \'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"user_agent": "$http_user_agent", \'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"http_x_forwarded_for": "$http_x_forwarded_for", \'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"server_name": "$host",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"request_time": "$request_time",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"upstream_response_time": "$upstream_response_time",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"realpath_root": "$realpath_root",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"request_body": "$request_body",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"nginx_version": "$nginx_version",\'')]),s._v("\n                                 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"scheme": "$scheme"}\'')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time_iso8601")]),s._v(" ~ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$year")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$month")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$day")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hour")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\naccess_log /home/nginx/logs/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${server_name}")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${year}")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${month}")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${day}")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${hour}")]),s._v("_access.log json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("然后再在配置当中引用进来：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" doc.conf\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name  doc.eryajf.net"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    charset utf-8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    include log_format.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        try_files /_not_exists_ @backend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    location @backend "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_set_header X-Forwarded-For "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header Host            "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header   X-Forwarded-Proto "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_pass http://127.0.0.1:8180"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("这样日志就会根据不同域名，按每小时一个文件的进行分割了。")]),s._v(" "),t("p",[t("code",[s._v("注意：")]),s._v("如果配置之后日志没有新生成，检查一下 NGINX 进程是否有对应目录的写入权限，并请求一下 NGINX，应该就会有日志产生了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);