(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{868:function(s,e,t){"use strict";t.r(e);var a=t(11),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("本文档讲解使用 keepalived 和 haproxy 部署一个 3 节点高可用 master 集群的步骤，对应的 LB VIP 为环境变量 ${MASTER_VIP}。")]),s._v(" "),t("p",[s._v("配置之前需要先安装 kubelet,flannel 等组件，不过前边已经安装，现在直接进入配置。")]),s._v(" "),t("h2",{attrs:{id:"_1-创建-kubernetes-证书和私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-kubernetes-证书和私钥"}},[s._v("#")]),s._v(" 1，创建 kubernetes 证书和私钥")]),s._v(" "),t("p",[s._v("创建证书签名请求：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$source")]),s._v(" /opt/k8s/bin/environment.sh\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kubernetes-csr.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('EOF\n{\n  "CN": "kubernetes",\n  "hosts": [\n    "127.0.0.1",\n    "192.168.106.3",\n    "192.168.106.4",\n    "192.168.106.5",\n    "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MASTER_VIP}")]),s._v('",\n    "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLUSTER_KUBERNETES_SVC_IP}")]),s._v('",\n    "kubernetes",\n    "kubernetes.default",\n    "kubernetes.default.svc",\n    "kubernetes.default.svc.cluster",\n    "kubernetes.default.svc.cluster.local"\n  ],\n  "key": {\n    "algo": "rsa",\n    "size": 2048\n  },\n  "names": [\n    {\n      "C": "CN",\n      "ST": "BeiJing",\n      "L": "BeiJing",\n      "O": "k8s",\n      "OU": "4Paradigm"\n    }\n  ]\n}\nEOF')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("ul",[t("li",[s._v("hosts 字段指定授权使用该证书的 IP 或域名列表，这里列出了 VIP 、apiserver 节点 IP、kubernetes 服务 IP 和域名；")]),s._v(" "),t("li",[s._v("域名最后字符不能是 .(如不能为 kubernetes.default.svc.cluster.local.)，否则解析时失败，提示： x509: cannot parse dnsName “kubernetes.default.svc.cluster.local.”；")]),s._v(" "),t("li",[s._v("如果使用非 cluster.local 域名，如 opsnull.com，则需要修改域名列表中的最后两个域名为：kubernetes.default.svc.opsnull、kubernetes.default.svc.opsnull.com")]),s._v(" "),t("li",[s._v("kubernetes 服务 IP 是 apiserver 自动创建的，一般是 --service-cluster-ip-range 参数指定的网段的第一个 IP，后续可以通过如下命令获取：")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ kubectl get svc kubernetes\nNAME         CLUSTER-IP   EXTERNAL-IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   AGE\nkubernetes   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.1   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP   1d\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("现在还不能进行这样的操作，继续往下配置。")]),s._v(" "),t("p",[s._v("生成证书和私钥：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cfssl")]),s._v(" gencert -ca"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -ca-key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca-key.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -config"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca-config.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -profile"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes kubernetes-csr.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cfssljson -bare kubernetes\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ls")]),s._v(" kubernetes*pem\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("将生成的证书和私钥文件拷贝到 master 节点：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "mkdir -p /etc/kubernetes/cert/ && sudo chown -R k8s /etc/kubernetes/cert/"\n    scp kubernetes*.pem k8s@${node_ip}:/etc/kubernetes/cert/\ndone\nEOF')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ul",[t("li",[s._v("k8s 账户可以读写 /etc/kubernetes/cert/ 目录；")])]),s._v(" "),t("h2",{attrs:{id:"_2-创建加密配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建加密配置文件"}},[s._v("#")]),s._v(" 2，创建加密配置文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$source")]),s._v(" /opt/k8s/bin/environment.sh\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" encryption-config.yaml "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nkind: EncryptionConfig\napiVersion: v1\nresources:\n  - resources:\n      - secrets\n    providers:\n      - aescbc:\n          keys:\n            - name: key1\n              secret: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ENCRYPTION_KEY}")]),s._v("\n      - identity: {}\nEOF")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("将加密配置文件拷贝到 master 节点的 /etc/kubernetes 目录下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    scp encryption-config.yaml root@${node_ip}:/etc/kubernetes/\ndone\nEOF')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"_3-创建-kube-apiserver-systemd-unit-模板文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-kube-apiserver-systemd-unit-模板文件"}},[s._v("#")]),s._v(" 3，创建 kube-apiserver systemd unit 模板文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$source")]),s._v(" /opt/k8s/bin/environment.sh\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kube-apiserver.service.template "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[Unit]\nDescription=Kubernetes API Server\nDocumentation=https://github.com/GoogleCloudPlatform/kubernetes\nAfter=network.target\n[Service]\nExecStart=/opt/k8s/bin/kube-apiserver "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --enable-admission-plugins=Initializers,NamespaceLifecycle,NodeRestriction,LimitRanger,ServiceAccount,DefaultStorageClass,ResourceQuota "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --anonymous-auth=false "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --experimental-encryption-provider-config=/etc/kubernetes/encryption-config.yaml "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --advertise-address=##NODE_IP## "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --bind-address=##NODE_IP## "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --insecure-port=0 "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --authorization-mode=Node,RBAC "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --runtime-config=api/all "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --enable-bootstrap-token-auth "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --service-cluster-ip-range="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SERVICE_CIDR}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --service-node-port-range="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NODE_PORT_RANGE}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --tls-cert-file=/etc/kubernetes/cert/kubernetes.pem "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --tls-private-key-file=/etc/kubernetes/cert/kubernetes-key.pem "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --client-ca-file=/etc/kubernetes/cert/ca.pem "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --kubelet-client-certificate=/etc/kubernetes/cert/kubernetes.pem "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --kubelet-client-key=/etc/kubernetes/cert/kubernetes-key.pem "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --service-account-key-file=/etc/kubernetes/cert/ca-key.pem "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --etcd-cafile=/etc/kubernetes/cert/ca.pem "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --etcd-certfile=/etc/kubernetes/cert/kubernetes.pem "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --etcd-keyfile=/etc/kubernetes/cert/kubernetes-key.pem "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --etcd-servers="),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ETCD_ENDPOINTS}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --enable-swagger-ui=true "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --allow-privileged=true "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --apiserver-count=3 "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --audit-log-maxage=30 "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --audit-log-maxbackup=3 "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --audit-log-maxsize=100 "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --audit-log-path=/var/log/kube-apiserver-audit.log "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --event-ttl=1h "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --alsologtostderr=true "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --logtostderr=false "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --log-dir=/var/log/kubernetes "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),s._v("\n  --v=2\nRestart=on-failure\nRestartSec=5\nType=notify\nUser=k8s\nLimitNOFILE=65536\n[Install]\nWantedBy=multi-user.target\nEOF")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br")])]),t("ul",[t("li",[s._v("--experimental-encryption-provider-config：启用加密特性；")]),s._v(" "),t("li",[s._v("--authorization-mode=Node,RBAC： 开启 Node 和 RBAC 授权模式，拒绝未授权的请求；")]),s._v(" "),t("li",[s._v("--enable-admission-plugins：启用 ServiceAccount 和 NodeRestriction；")]),s._v(" "),t("li",[s._v("--service-account-key-file：签名 ServiceAccount Token 的公钥文件，kube-controller-manager 的 --service-account-private-key-file 指定私钥文件，两者配对使用；")]),s._v(" "),t("li",[s._v("--tls-*-file：指定 apiserver 使用的证书、私钥和 CA 文件。--client-ca-file 用于验证 client (kue-controller-manager、kube-scheduler、kubelet、kube-proxy 等) 请求所带的证书；")]),s._v(" "),t("li",[s._v("--kubelet-client-certificate、--kubelet-client-key：如果指定，则使用 https 访问 kubelet APIs；需要为证书对应的用户 (上面 kubernetes*.pem 证书的用户为 kubernetes) 用户定义 RBAC 规则，否则访问 kubelet API 时提示未授权；")]),s._v(" "),t("li",[s._v("--bind-address： 不能为 127.0.0.1，否则外界不能访问它的安全端口 6443；")]),s._v(" "),t("li",[s._v("--insecure-port=0：关闭监听非安全端口 (8080)；")]),s._v(" "),t("li",[s._v("--service-cluster-ip-range： 指定 Service Cluster IP 地址段；")]),s._v(" "),t("li",[s._v("--service-node-port-range： 指定 NodePort 的端口范围；")]),s._v(" "),t("li",[s._v("--runtime-config=api/all=true： 启用所有版本的 APIs，如 autoscaling/v2alpha1；")]),s._v(" "),t("li",[s._v("--enable-bootstrap-token-auth：启用 kubelet bootstrap 的 token 认证；")]),s._v(" "),t("li",[s._v("--apiserver-count=3：指定集群运行模式，多台 kube-apiserver 会通过 leader 选举产生一个工作节点，其它节点处于阻塞状态；")]),s._v(" "),t("li",[s._v("User=k8s：使用 k8s 账户运行；")])]),s._v(" "),t("h2",{attrs:{id:"_4-为各节点创建和分发-kube-apiserver-systemd-unit-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-为各节点创建和分发-kube-apiserver-systemd-unit-文件"}},[s._v("#")]),s._v(" 4，为各节点创建和分发 kube-apiserver systemd unit 文件")]),s._v(" "),t("p",[s._v("替换模板文件中的变量，为各节点创建 systemd unit 文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor (( i=0; i < 3; i++ ))\ndo\n    sed -e "s/##NODE_NAME##/${NODE_NAMES[i]}/" -e "s/##NODE_IP##/${NODE_IPS[i]}/" kube-apiserver.service.template > kube-apiserver-${NODE_IPS[i]}.service \ndone\nEOF')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[s._v("NODE_NAMES 和 NODE_IPS 为相同长度的 bash 数组，分别为节点名称和对应的 IP；")])]),s._v(" "),t("p",[s._v("分发生成的 systemd unit 文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "mkdir -p /var/log/kubernetes && chown -R k8s /var/log/kubernetes"\n    scp kube-apiserver-${node_ip}.service root@${node_ip}:/etc/systemd/system/kube-apiserver.service\ndone\nEOF')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ul",[t("li",[s._v("必须先创建日志目录；")]),s._v(" "),t("li",[s._v("文件重命名为 kube-apiserver.service;")])]),s._v(" "),t("h2",{attrs:{id:"_5-启动-kube-apiserver-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动-kube-apiserver-服务"}},[s._v("#")]),s._v(" 5，启动 kube-apiserver 服务")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "systemctl daemon-reload && systemctl enable kube-apiserver && systemctl start kube-apiserver"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("检查 kube-apiserver 运行状态:")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" magic.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\n#!/bin/bash\nsource /opt/k8s/bin/environment.sh\nfor node_ip in ${NODE_IPS[@]}\ndo\n    echo ">>> ${node_ip}" \n    ssh root@${node_ip} "systemctl status kube-apiserver |grep \'Active:\'"\ndone\nEOF')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("输出如下内容：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bash")]),s._v(" magic.sh\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3\n   Active: active "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":13:44 CST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.4\n   Active: active "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":13:51 CST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.5\n   Active: active "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Fri "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("-11-23 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":13:57 CST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 6h ago\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("则正常，如果没有，检查日志：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("journalctl -xu kube-apiserver\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_6-打印-kube-apiserver-写入-etcd-的数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-打印-kube-apiserver-写入-etcd-的数据"}},[s._v("#")]),s._v(" 6，打印 kube-apiserver 写入 etcd 的数据")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$source")]),s._v(" /opt/k8s/bin/environment.sh\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ETCDCTL_API")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --endpoints"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ETCD_ENDPOINTS}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --cacert"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/cert/ca.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --cert"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/etcd/cert/etcd.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/etcd/cert/etcd-key.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    get /registry/ --prefix --keys-only\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"_7-检查集群信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-检查集群信息"}},[s._v("#")]),s._v(" 7，检查集群信息")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" cluster-info\nKubernetes master is running at https://192.168.106.110:8443\nTo further debug and diagnose cluster problems, use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl cluster-info dump'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get all --all-namespaces\nNAMESPACE     NAME                           TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          AGE\ndefault       service/kubernetes             ClusterIP   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.254")]),s._v(".0.1       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("/TCP          6h\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$kubectl")]),s._v(" get componentstatuses\nNAME                 STATUS      MESSAGE                                                                                                                                  ERROR\ncontroller-manager   Unhealthy   Get http://127.0.0.1:10252/healthz: net/http: HTTP/1.x transport connection broken: malformed HTTP response "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\x15"}},[s._v("\\x15")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\x03"}},[s._v("\\x03")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\x01"}},[s._v("\\x01")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\x00"}},[s._v("\\x00")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\x02"}},[s._v("\\x02")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\x02"}},[s._v("\\x02")]),s._v('"')]),s._v("\netcd-1               Healthy     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"health"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\netcd-0               Healthy     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"health"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\netcd-2               Healthy     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"health"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nscheduler            Healthy     ok\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("注意：")]),s._v(" "),t("ol",[t("li",[s._v("如果执行 kubectl 命令式时输出如下错误信息，则说明使用的 ~/.kube/config 文件不对，请切换到正确的账户后再执行该命令：\nThe connection to the server localhost:8080 was refused – did you specify the right host or port?")]),s._v(" "),t("li",[s._v("执行 kubectl get componentstatuses 命令时，apiserver 默认向 127.0.0.1 发送请求。当 controller-manager、scheduler 以集群模式运行时，有可能和 kube-apiserver 不在一台机器上，这时 controller-manager 或 scheduler 的状态为 Unhealthy，但实际上它们工作正常。")])]),s._v(" "),t("h2",{attrs:{id:"_8-检查-kube-apiserver-监听的端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-检查-kube-apiserver-监听的端口"}},[s._v("#")]),s._v(" 8，检查 kube-apiserver 监听的端口")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lnpt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" kube\ntcp        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".106.3:6443      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*               LISTEN      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14318")]),s._v("/kube-apiserve\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("6443: 接收 https 请求的安全端口，对所有请求做认证和授权；")]),s._v(" "),t("li",[s._v("由于关闭了非安全端口，故没有监听 8080；")])]),s._v(" "),t("h2",{attrs:{id:"_9-授予-kubernetes-证书访问-kubelet-api-的权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-授予-kubernetes-证书访问-kubelet-api-的权限"}},[s._v("#")]),s._v(" 9，授予 kubernetes 证书访问 kubelet API 的权限")]),s._v(" "),t("p",[s._v("在执行 kubectl exec、run、logs 等命令时，apiserver 会转发到 kubelet。这里定义 RBAC 规则，授权 apiserver 调用 kubelet API。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ kubectl create clusterrolebinding kube-apiserver:kubelet-apis --clusterrole"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("system:kubelet-api-admin --user kubernetes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_10-参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-参考"}},[s._v("#")]),s._v(" 10，参考")]),s._v(" "),t("p",[s._v("1，关于证书域名最后字符不能是 . 的问题，实际和 Go 的版本有关，1.9 不支持这种类型的证书：https://github.com/kubernetes/ingress-nginx/issues/2188")])])}),[],!1,null,null,null);e.default=n.exports}}]);