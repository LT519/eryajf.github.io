(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{602:function(t,e,n){"use strict";n.r(e);var s=n(11),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("项目上线之后，测试同学反馈说一些文件上传的时候报错：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/4d36575655b499d3.jpg",alt:"2019-07-17_103234"}})]),t._v(" "),n("p",[t._v("报错提示的也非常清楚，"),n("code",[t._v("413 => “HTTP/1.1 413 Request Entity Too Large”#服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。")])]),t._v(" "),n("p",[t._v("那么在nginx配置中添加如下两条配置即可：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\tclient_max_body_size    10m;\n    client_body_buffer_size 128k;\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("常规来说，10M是足够了的，如果还不够，可能需要开发检查一下代码情况了。")]),t._v(" "),n("p",[t._v("要注意观察是哪个域名限制的，有时候看似请求的是前端域名，实际上前端转发给了后端，而限制是在后端的，因此更改配置也要更改后端的nginx配置才对。")])])}),[],!1,null,null,null);e.default=a.exports}}]);