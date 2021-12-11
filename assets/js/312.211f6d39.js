(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{875:function(s,n,a){"use strict";a.r(n);var e=a(11),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本文档使用 daemonset 验证 master 和 worker 节点是否工作正常。")]),s._v(" "),a("h2",{attrs:{id:"_1-检查节点状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-检查节点状态"}},[s._v("#")]),s._v(" 1，检查节点状态")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl get nodes\nNAME         STATUS    ROLES     AGE       VERSION\nkube-node1   Ready     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    3h        v1.10.4\nkube-node2   Ready     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    3h        v1.10.4\nkube-node3   Ready     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    3h        v1.10.4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("都为 Ready 时正常。")]),s._v(" "),a("h2",{attrs:{id:"_2-创建测试文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建测试文件"}},[s._v("#")]),s._v(" 2，创建测试文件")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nginx-ds.yml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-ds\n  labels:\n    app: nginx-ds\nspec:\n  type: NodePort\n  selector:\n    app: nginx-ds\n  ports:\n  - name: http\n    port: 80\n    targetPort: 80\n---\napiVersion: extensions/v1beta1\nkind: DaemonSet\nmetadata:\n  name: nginx-ds\n  labels:\n    addonmanager.kubernetes.io/mode: Reconcile\nspec:\n  template:\n    metadata:\n      labels:\n        app: nginx-ds\n    spec:\n      containers:\n      - name: my-nginx\n        image: nginx:1.7.9\n        ports:\n        - containerPort: 80\nEOF")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("h2",{attrs:{id:"_2-执行定义文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行定义文件"}},[s._v("#")]),s._v(" 2，执行定义文件")]),s._v(" "),a("p",[s._v("启动之前，可以先将上边定义的镜像 pull 下来。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ kubectl create -f nginx-ds.yml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-ds"')]),s._v(" created\ndaemonset.extensions "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx-ds"')]),s._v(" created\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_3-检查各-node-上的-pod-ip-连通性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-检查各-node-上的-pod-ip-连通性"}},[s._v("#")]),s._v(" 3，检查各 Node 上的 Pod IP 连通性")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get pods  -o wide"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx-ds\nnginx-ds-bw72r                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          6h        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.30")]),s._v(".29.2   kube-node3\nnginx-ds-fbx76                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          6h        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.30")]),s._v(".84.2   kube-node1\nnginx-ds-jbjzg                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1       Running   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          6h        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.30")]),s._v(".8.2    kube-node2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("可见，nginx-ds 的 Pod IP 分别是 172.30.84.2、172.30.8.2、172.30.29.2，在所有 Node 上分别 ping 这三个 IP，看是否连通：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh ${node_ip} "ping -c 1 172.30.84.2"\n    ssh ${node_ip} "ping -c 1 172.30.8.2"\n    ssh ${node_ip} "ping -c 1 172.30.29.2"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"_4-检查服务-ip-和端口可达性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-检查服务-ip-和端口可达性"}},[s._v("#")]),s._v(" 4，检查服务 IP 和端口可达性")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get svc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx-ds\nnginx-ds           NodePort    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".110.153   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":8781/TCP      6h\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("可见：")]),s._v(" "),a("ul",[a("li",[s._v("Service Cluster IP：10.254.110.153")]),s._v(" "),a("li",[s._v("服务端口：80")]),s._v(" "),a("li",[s._v("NodePort 端口：8781")])]),s._v(" "),a("p",[s._v("在所有 Node 上 curl Service IP：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh ${node_ip} "curl 10.254.110.153"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("预期输出 nginx 欢迎页面内容。")]),s._v(" "),a("h2",{attrs:{id:"_5-检查服务的-nodeport-可达性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-检查服务的-nodeport-可达性"}},[s._v("#")]),s._v(" 5，检查服务的 NodePort 可达性")]),s._v(" "),a("p",[s._v("在所有 Node 上执行：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh ${node_ip} "curl ${node_ip}:8781"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("预期输出 nginx 欢迎页面内容。")])])}),[],!1,null,null,null);n.default=t.exports}}]);