(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{714:function(s,t,a){"use strict";a.r(t);var n=a(11),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-下载二进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载二进制"}},[s._v("#")]),s._v(" 1，下载二进制")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ wget https://releases.hashicorp.com/consul/1.9.3/consul_1.9.3_linux_amd64.zip\n$ unzip consul_1.9.3_linux_amd64.zip ; mv consul /usr/bin/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-创建用户及目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建用户及目录"}},[s._v("#")]),s._v(" 2，创建用户及目录")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ useradd consul\n$ mkdir -p /data/consul/{config,data,log} && chown -R consul.consul /data/consul\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_3-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置文件"}},[s._v("#")]),s._v(" 3，配置文件")]),s._v(" "),a("h3",{attrs:{id:"_1-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-server"}},[s._v("#")]),s._v(" 1，server")]),s._v(" "),a("p",[s._v("配置文件如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("$ cat /data/consul/config/server.json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"datacenter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"consul_nginx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data_dir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/consul/data/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eryajf-test-consul-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"server"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bootstrap_expect"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bind_addr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{ GetInterfaceIP \\"eth0\\" }}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"client_addr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_json"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_rotate_max_files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_rotate_duration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"24h"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/consul/log/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"retry_join"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.6.6.14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.6.6.17"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.6.6.63"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ui_config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("配置文件"),a("a",{attrs:{href:"https://www.consul.io/docs/agent/options",target:"_blank",rel:"noopener noreferrer"}},[s._v("详情参考"),a("OutboundLink")],1),s._v("，上边的说明如下：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("datacenter")]),s._v("：此标志控制运行代理的数据中心。如果未提供，则默认为"),a("code",[s._v("dc1")]),s._v("。Consul 对多个数据中心有一流的支持，但它依赖于正确的配置。同一数据中心中的节点应位于单个 LAN 上。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("data_dir")]),s._v("：该标志为代理提供了一个数据目录来存储状态。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("node_name")]),s._v("：节点名字，一般为主机名，如果是三个节点，则往后顺写。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("server")]),s._v("：指定是否为server节点。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("bootstrap_expect")]),s._v("：在一个datacenter中期望提供的server节点数目，当该值提供的时候，consul一直等到达到指定sever数目的时候才会引导整个集群，该标记不能和bootstrap公用。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("bind_addr")]),s._v("：该地址用来在集群内部的通讯，集群内的所有节点到地址都必须是可达的，默认是0.0.0.0。但如果主机有多个网卡，这个时候会报如下错误：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("consul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7559")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Multiple private IPv4 addresses found. Please configure one with "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bind'")]),s._v(" and/or "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'advertise'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("client_addr")]),s._v("：Consul 将绑定客户端接口的地址，包括 HTTP 和 DNS 服务器。默认情况下，这是127.0.0.1，仅允许环回连接。在 Consul 1.0 及更高版本中，这可以设置为要绑定到的以空格分隔的地址列表。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("log_json")]),s._v("：此标志使代理能够以 JSON 格式输出日志。默认为false。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("log_level")]),s._v(":在 Consul 代理启动后显示的日志级别。默认为 "),a("code",[s._v("info")]),s._v(" 。可用的日志级别是"),a("code",[s._v("trace")]),s._v("、"),a("code",[s._v("debug")]),s._v("、"),a("code",[s._v("info")]),s._v("、"),a("code",[s._v("warn")]),s._v("和"),a("code",[s._v("err")]),s._v("。您始终可以通过"),a("a",{attrs:{href:"https://www.consul.io/commands/monitor",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("consul monitor")]),a("OutboundLink")],1),s._v("并使用任何日志级别连接到代理。此外，可以在配置重新加载期间更改日志级别。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("log_rotate_max_files")]),s._v("：指定要保留的旧日志文件存档的最大数量。默认为 0（不会删除任何文件）。设置为 -1 以在创建新日志文件时丢弃旧日志文件。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("log_rotate_duration")]),s._v("：指定日志在需要轮换之前应写入的最大持续时间。必须是持续时间值，例如 30s。默认为 24 小时。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("log_file")]),s._v("：将所有 Consul 代理日志消息写入文件。此值用作日志文件名的前缀。当前时间戳附加到文件名。如果值以路径分隔符结尾，"),a("code",[s._v("consul-")]),s._v(" 则将附加到该值。如果文件名缺少扩展名，"),a("code",[s._v(".log")]),s._v(" 则附加。例如，设置"),a("code",[s._v("log-file")]),s._v("为"),a("code",[s._v("/var/log/")]),s._v("将导致日志文件路径为"),a("code",[s._v("/var/log/consul-{timestamp}.log")]),s._v(". "),a("code",[s._v("log-file")]),s._v("可以"),a("a",{attrs:{href:"https://www.consul.io/docs/agent/options#_log_rotate_bytes",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("-log-rotate-bytes")]),a("OutboundLink")],1),s._v("与"),a("a",{attrs:{href:"https://www.consul.io/docs/agent/options#_log_rotate_duration",target:"_blank",rel:"noopener noreferrer"}},[s._v("-log-rotate-duration"),a("OutboundLink")],1),s._v("结合使用 ， 以获得细粒度的日志轮换体验。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("retry_join")]),s._v("：指定将要置入集群的IP列表，如果失败，会自动重试，知道直到成功加入。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("ui_config")]),s._v("：此对象允许设置多个子键，用于控制 UI 中可用的显示或功能。在 Consul 1.9.0 中添加了使用此节配置 UI。")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("enabled")]),s._v("：这将启用来自该代理的 Web UI 服务。布尔值，默认为 false。在"),a("code",[s._v("-dev")]),s._v("模式下，默认为 true。")]),s._v(" "),a("p",[s._v("其他参数一并介绍下：")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("dir")]),s._v("：这指定 Web UI 应该从外部目录提供，而不是构建在一个目录中。这允许定制或开发。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("content_path")]),s._v("：这指定了 Web UI 应该从中提供服务的 HTTP 路径。默认为"),a("code",[s._v("/ui/")]),s._v(". 相当于 "),a("a",{attrs:{href:"https://www.consul.io/docs/agent/options#_ui_content_path",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("-ui-content-path")]),a("OutboundLink")],1),s._v("标志")])])])])]),s._v(" "),a("h3",{attrs:{id:"_2-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-client"}},[s._v("#")]),s._v(" 2，client")]),s._v(" "),a("p",[s._v("client是consul客户端，客户端不保存数据，客户端将接收到的请求转发给Server端。Server之间通过局域网或广域网通信实现数据一致性。")]),s._v(" "),a("p",[s._v("每个Server或Client都是一个consul agent。")]),s._v(" "),a("p",[s._v("配置文件如下：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"datacenter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"consul_nginx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data_dir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/consul/data/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eryajf-test-consul-client-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"server"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bind_addr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{ GetInterfaceIP \\"eth0\\" }}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"client_addr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_json"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_rotate_max_files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_rotate_duration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"24h"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/consul/log/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"retry_join"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   \t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.6.6.14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.6.6.17"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.6.6.63"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("配置说明参考上边。")]),s._v(" "),a("h2",{attrs:{id:"_4-systemd管理文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-systemd管理文件"}},[s._v("#")]),s._v(" 4，systemd管理文件")]),s._v(" "),a("p",[s._v("添加配置：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /usr/lib/systemd/system/consul.service "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n[Unit]\nDescription="HashiCorp Consul - A service mesh solution"\nDocumentation=https://www.consul.io/\nRequires=network-online.target\nAfter=network-online.target\n\n[Service]\nType=notify\nUser=consul\nGroup=consul\nExecStart=/usr/bin/consul agent -config-dir=/data/consul/config/\nExecReload=/bin/kill --signal HUP '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v("\nKillMode=process\nKillSignal=SIGTERM\nRestart=on-failure\nLimitNOFILE=10240\nLimitNPROC=10240\n\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("启动：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ systemctl daemon-reload\n$ systemctl enable consul\n$ systemctl start consul\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("启动之后就可以直接访问web端看到server节点了：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/11/f52bece53cf75843.jpg",alt:""}})]),s._v(" "),a("p",[s._v("以后在慢慢更新consul相关的最佳实践！")])])}),[],!1,null,null,null);t.default=e.exports}}]);