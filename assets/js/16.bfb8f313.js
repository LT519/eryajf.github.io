(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{583:function(s,a,n){"use strict";n.r(a);var t=n(11),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-资源需求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-资源需求"}},[s._v("#")]),s._v(" 1，资源需求")]),s._v(" "),n("ul",[n("li",[s._v("配置：在越大越好的前提下，建议不低于"),n("code",[s._v("8C16G")]),s._v("。")]),s._v(" "),n("li",[s._v("存储：建议"),n("code",[s._v("100G系统盘")]),s._v("+"),n("code",[s._v("800G数据盘")]),s._v("。盘的规格越高越好。最低"),n("code",[s._v("SSD")]),s._v("，其中数据盘可酌情加大，800G数据盘管三五年没问题。\n"),n("ul",[n("li",[s._v("此处要考虑到备份文件，如果数据目录有100G左右，那么备份文件可能会有八十多G，本地保留不可过多，尽量异地备份。")])])]),s._v(" "),n("li",[n("code",[s._v("注意：")]),s._v(" "),n("ul",[n("li",[s._v("注意数据盘挂载到/data目录中。")]),s._v(" "),n("li",[s._v("注意组件数据目录通过本地挂载进行了软链，此事儿下边详述。")])])])]),s._v(" "),n("h2",{attrs:{id:"_2-安装软件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装软件"}},[s._v("#")]),s._v(" 2，安装软件")]),s._v(" "),n("p",[s._v("gitlab的安装非常简单，这里不做赘述。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ yum install -y curl openssh-server postfix cronie\n$ curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash\n$ yum install gitlab-ce\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("默认安装当前yum源内的最新版本，如果想要安装指定版本，可运行如下命令："),n("code",[s._v("yum install gitlab-ce-11.0.2")]),s._v("。")]),s._v(" "),n("h2",{attrs:{id:"_3-准备工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-准备工作"}},[s._v("#")]),s._v(" 3，准备工作")]),s._v(" "),n("p",[s._v("创建数据相关需求目录：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ mkdir -p /data/gitlab-all-in-one/{backups,git-data,var-opt-gitlab}\n$ useradd git && chown -R git.git /data/gitlab-all-in-one\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("说明：\n"),n("ul",[n("li",[n("code",[s._v("git-data：")]),s._v("gitlab代码数据目录。")]),s._v(" "),n("li",[n("code",[s._v("backups：")]),s._v("数据备份目录。")]),s._v(" "),n("li",[n("code",[s._v("var-opt-gitlab：")]),s._v("组件数据目录。")])])])]),s._v(" "),n("p",[n("code",[s._v("重要：")]),s._v("注意组件数据目录在配置文件中默认为："),n("code",[s._v("/var/opt/gitlab")]),s._v("，为了与系统盘进行隔离以及数据存储目录统一，需要进行本地挂载处理：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ echo '/data/gitlab-all-in-one/var-opt-gitlab  /var/opt/gitlab  none bind 0 0' >> /etc/fstab\n$ mkdir /var/opt/gitlab\n$ mount -a\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("此时系统的 "),n("code",[s._v("/var/opt/gitlab")]),s._v("最终指向的其实是 "),n("code",[s._v("/data/gitlab-all-in-one/var-opt-gitlab")]),s._v("。")]),s._v(" "),n("p",[n("code",[s._v("注意：")]),s._v("这里并"),n("code",[s._v("不能通过软链")]),s._v("进行处理，实测软链的方式会导致部分组件起不来。")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/0f9814766abf42ae.jpg",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"_4-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置文件"}},[s._v("#")]),s._v(" 4，配置文件")]),s._v(" "),n("p",[s._v("配置文件如下，其余未显示指定的，统一走默认配置：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ egrep -v '^#|^$' gitlab.rb\nexternal_url 'https://gitlab.eryajf.net'\ngitlab_rails['time_zone'] = 'Asia/Shanghai'\ngitlab_rails['smtp_enable'] = true\ngitlab_rails['smtp_address'] = \"smtp.exmail.qq.com\"\ngitlab_rails['smtp_port'] = 465\ngitlab_rails['smtp_user_name'] = \"no-reply@eryajf.net\"\ngitlab_rails['smtp_password'] = \"test\"\ngitlab_rails['smtp_authentication'] = \"login\"\ngitlab_rails['smtp_enable_starttls_auto'] = true\ngitlab_rails['smtp_tls'] = true\ngitlab_rails['gitlab_email_from'] = 'no-reply@eryajf.com'\ngitlab_rails['smtp_domain'] = \"exmail.qq.com\"\ngitlab_rails['ldap_servers'] = YAML.load <<-'EOS'\n  main: # 'main' is the GitLab 'provider ID' of this LDAP server\n    label: 'LDAP'\n    host: 'ldap.eryajf.net'\n    port: 389\n    uid: 'sn'\n    bind_dn: 'cn=admin,dc=eryajf,dc=net'\n    password: 'test'\n    encryption: 'plain' # \"start_tls\" or \"simple_tls\" or \"plain\"\n    verify_certificates: true\n    smartcard_auth: false\n    active_directory: false\n    allow_username_or_email_login: false\n    lowercase_usernames: false\n    block_auto_created_users: false\n    base: 'ou=staff,dc=eryajf,dc=net'\n    user_filter: ''\n    ## EE only\n    group_base: ''\n    admin_group: ''\n    sync_ssh_keys: false\nEOS\ngitlab_rails['manage_backup_path'] = true\ngitlab_rails['backup_path'] = \"/data/gitlab-all-in-one/backups\"\ngit_data_dirs({\n  \"default\" => {\n    \"path\" => \"/data/gitlab-all-in-one/git-data\"\n   }\n})\nnginx['enable'] = true\nnginx['client_max_body_size'] = '512m'\nnginx['redirect_http_to_https'] = true\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br")])]),n("p",[s._v("然后通过如下命令重载配置文件：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("gitlab-ctl reconfigure\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("当看到：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Running handlers:\nRunning handlers complete\nChef Infra Client finished, 570/1519 resources updated in 03 minutes 11 seconds\n\nNotes:\nDefault admin account has been configured with following details:\nUsername: root\nPassword: You didn't opt-in to print initial root password to STDOUT.\nPassword stored to /etc/gitlab/initial_root_password. This file will be cleaned up in first reconfigure run after 24 hours.\n\nNOTE: Because these credentials might be present in your log files in plain text, it is highly recommended to reset the password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.\n\ngitlab Reconfigured!\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("则说明配置完成了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);