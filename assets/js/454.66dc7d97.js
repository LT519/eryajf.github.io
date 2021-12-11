(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{1017:function(s,a,t){"use strict";t.r(a);var e=t(11),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Golang支持交叉编译程序，交叉编译的意思就是在Mac电脑上可以编译出能在Windows上，Linux上运行的程序，同理其他环境也可以。")]),s._v(" "),t("p",[s._v("方法也特别简单，这里做一下记录。")]),s._v(" "),t("h2",{attrs:{id:"_1-mac电脑上编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-mac电脑上编译"}},[s._v("#")]),s._v(" 1，Mac电脑上编译")]),s._v(" "),t("p",[t("code",[s._v("Linux")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("CGO_ENABLED"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" GOOS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux GOARCH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" build main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("Windows")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("CGO_ENABLED"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" GOOS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("windows GOARCH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" build main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_2-linux环境编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-linux环境编译"}},[s._v("#")]),s._v(" 2，Linux环境编译")]),s._v(" "),t("p",[t("code",[s._v("Mac")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("CGO_ENABLED"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" GOOS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("darwin GOARCH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" build main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("Windows")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("CGO_ENABLED"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" GOOS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("windows GOARCH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" build main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3-windows电脑上编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-windows电脑上编译"}},[s._v("#")]),s._v(" 3，Windows电脑上编译")]),s._v(" "),t("p",[t("code",[s._v("Mac")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("SET CGO_ENABLED"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nSET GOOS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("darwin\nSET GOARCH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" build main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("code",[s._v("Linux")])]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("SET CGO_ENABLED"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nSET GOOS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux\nSET GOARCH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" build main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);