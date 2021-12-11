(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{843:function(s,t,e){"use strict";e.r(t);var n=e(11),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-加大内存分配。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-加大内存分配。"}},[s._v("#")]),s._v(" 1，加大内存分配。")]),s._v(" "),e("p",[s._v("一开始索引什么的都不多，量不大，所以都很轻松，后来量越来越大，默认的配置就有点吃不消了，打开一个页面，查询压力就会非常大。")]),s._v(" "),e("p",[s._v("这个时候可以通过加大es的jvm内存来优化。")]),s._v(" "),e("p",[s._v("默认情况下，Elasticsearch告诉JVM使用最小和最大大小为1 GB的堆。迁移到生产环境时，配置堆大小以确保Elasticsearch有足够的堆可用是很重要的。")]),s._v(" "),e("p",[s._v("Elasticsearch将通过（最小堆大小）和（最大堆大小）设置分配jvm.options中指定的整个堆 。"),e("code",[s._v("Xms")]),s._v("，"),e("code",[s._v("Xmx")]),s._v("可设置的值取决于服务器上可用的RAM量。一些好的建议是：")]),s._v(" "),e("ul",[e("li",[s._v("将最小堆大小（Xms）和最大堆大小（Xmx）设置为彼此相等。")]),s._v(" "),e("li",[s._v("Elasticsearch可用的堆越多，它可用于缓存的内存就越多。但请注意，过多的堆可能会使您陷入长时间的垃圾收集暂停。")]),s._v(" "),e("li",[s._v("设置Xmx为不超过物理RAM的50％，以确保有足够的物理RAM留给内核文件系统缓存。")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/guide/master/heap-sizing.html#compressed_oops",target:"_blank",rel:"noopener noreferrer"}},[s._v("最大内存不要超过32G"),e("OutboundLink")],1),s._v("，跨32G时，有一个现象，使用更多的内存，比如 40G，效果还不如31G！")])]),s._v(" "),e("p",[s._v("比如我的主机是16核32G的主机，那么这时更改一下配置：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/elasticsearch/jvm.options\n-Xms16g\n-Xmx16g\n-Xss128m\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("然后重启es，会发现快很多了。")]),s._v(" "),e("p",[s._v("关于这一点，可以参考官方文档：https://www.elastic.co/guide/en/elasticsearch/reference/current/heap-size.html")]),s._v(" "),e("h2",{attrs:{id:"_2-修改系统允许的最大文件打开数。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改系统允许的最大文件打开数。"}},[s._v("#")]),s._v(" 2，修改系统允许的最大文件打开数。")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#并发连接数")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#echo "root soft nofile 65535"  >> /etc/security/limits.conf')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#echo "root hard nofile 65535"  >> /etc/security/limits.conf')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#echo "* soft nofile 65535"     >>  /etc/security/limits.conf')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#echo "* hard nofile 65535"     >> /etc/security/limits.conf')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root soft nofile 65535'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("root hard nofile 65535"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("* soft nofile 65535"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("* hard nofile 65535"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/security/limits.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s#4096#65535#g'")]),s._v(" /etc/security/limits.d/20-nproc.conf \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("一个是修改最大文件打开数，一个是最大进程数，其中root表示管理员，*表示普通用户。")]),s._v(" "),e("p",[s._v("更改之后重启主机即可。")])])}),[],!1,null,null,null);t.default=a.exports}}]);