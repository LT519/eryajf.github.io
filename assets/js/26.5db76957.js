(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{593:function(t,e,n){"use strict";n.r(e);var r=n(11),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("周一上班，上午就碰到小伙伴来说测试的数据库有问题啦，每次查看某个表就会报错。")]),t._v(" "),n("p",[t._v("当我去连上之后，发现确实存在问题，每次查看一个表，就会报:"),n("code",[t._v("Got error 28 from storage engine")]),t._v("。")]),t._v(" "),n("p",[t._v("原来是之前做了增量备份的策略之后，并没有对以往备份的文件清理，虚拟机本来空间就不多，于是乎导致磁盘占满，满了之后，就会报上边的错误了。")]),t._v(" "),n("p",[t._v("解决办法：去到服务器，把旧的备份文件删除，增加并完善良好的备份文件更替机制。")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9ff65af4c3f83531.jpg",alt:"image"}})]),t._v(" "),n("p",[t._v("这个问题还真是第一次遇到，通过文末的文章知道的答案，特别在这里记录一下。")]),t._v(" "),n("p",[t._v("参考：https://blog.csdn.net/en_joker/article/details/76020875")])])}),[],!1,null,null,null);e.default=s.exports}}]);