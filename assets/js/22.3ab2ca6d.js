(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{291:function(_,v,t){"use strict";t.r(v);var e=t(38),a=Object(e.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"tcp的三次握手与四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp的三次握手与四次挥手","aria-hidden":"true"}},[_._v("#")]),_._v(" TCP的三次握手与四次挥手")]),_._v(" "),t("p",[_._v("TCP在发送数据前，通信双方必须在彼此间建立一条连接，而这个"),t("strong",[_._v("连接")]),_._v("，其实是客户端和服务端的内存里保存的一份关于对方的信息，如ip地址、端口号等。所以TCP采用三次握手建立一个连接，采用四次挥手来关闭一个连接。")]),_._v(" "),t("h2",{attrs:{id:"三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手","aria-hidden":"true"}},[_._v("#")]),_._v(" 三次握手")]),_._v(" "),t("p",[_._v("TCP在握手过程中使用来TCP的标志：SYN(synchronize)和ACK(acknowledgement)标志。")]),_._v(" "),t("ol",[t("li",[_._v("发送端先发送一个带SYN标志的数据包给接收端；")]),_._v(" "),t("li",[_._v("接收端接收到后，回传一个带有SYN/ACK标志的数据包，表示接收到前面的确认信息；")]),_._v(" "),t("li",[_._v("发送端接收到SYN/ACK标志的数据包后，再次发送一个带ACK标志的数据包给接收端，表示连接成功，握手结束。")])]),_._v(" "),t("h3",{attrs:{id:"为什么要进行三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要进行三次握手","aria-hidden":"true"}},[_._v("#")]),_._v(" 为什么要进行三次握手")]),_._v(" "),t("p",[_._v("三次握手的作用是"),t("code",[_._v("确认双方都能够确认自己和对方的收、发能力是正常的")]),_._v("。所以来分析一下三次握手中每次握手的作用：")]),_._v(" "),t("ol",[t("li",[_._v("第一次握手：客户端发送数据包，服务端收到了，则服务端知道了"),t("code",[_._v("客户端发送能力和服务端的接收能力是正常的")]),_._v(";")]),_._v(" "),t("li",[_._v("第二次握手：服务端发送数据包，客户端收到了，则客户端知道了"),t("code",[_._v("服务端的接收、发送能力和客户端的接收、发送能力是正常的")]),_._v("；")]),_._v(" "),t("li",[_._v("第三次握手：客户端发送数据包，服务端再次收到，则服务端知道了"),t("code",[_._v("服务端的发送、接收能力和客户端的接收、发送能力是正常的")]),_._v("。")])]),_._v(" "),t("p",[_._v("通过三次握手的过程，双方都能够确认自己和对方的收、发能力是正常的，所以最少需要三次握手过程。")]),_._v(" "),t("h2",{attrs:{id:"四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手","aria-hidden":"true"}},[_._v("#")]),_._v(" 四次挥手")]),_._v(" "),t("p",[_._v("TCP连接的拆除需要发送四个包，所以也叫做四次挥手。客户端和服务器均可主动发起挥手动作。")]),_._v(" "),t("ol",[t("li",[_._v("假设客户端想要关闭连接，客户端发送一个FIN标志位置为1的数据包，表示自己已经没有数据可以发送了，但是仍然可以接收数据。发送完后，客户端进入"),t("code",[_._v("FIN_WAIT_1")]),_._v("状态；")]),_._v(" "),t("li",[_._v("服务器端确认客户端的FIN包，发送一个确认包，表明自己接收到客户端关闭连接的请求，但是还没有准备好关闭连接。发送完后，服务器端进入"),t("code",[_._v("CLOSE_WAIT")]),_._v("状态，客户端接收到确认包后，进入"),t("code",[_._v("FIN_WAIT_2")]),_._v("状态，等待服务器端关闭连接；")]),_._v(" "),t("li",[_._v("服务器端准备好关闭连接时，向客户端发送结束连接请求，FIN置为1。发送完后，服务器端进入"),t("code",[_._v("LAST_ACK")]),_._v("状态，等待来自客户端的最后一个ACK；")]),_._v(" "),t("li",[_._v("客户端接收到来自服务器端的关闭请求，发送一个确认包，并进入"),t("code",[_._v("TIME_WAIT")]),_._v("状态，等待可能出现的要求重传的ACK包。服务器端接收到这个确认包后，关闭连接，进入"),t("code",[_._v("CLOSED")]),_._v("状态。客户端等待了某个固定时间之后，没有接收到服务器端的ACK，认为服务器端已经正常关闭连接，于是自己也关闭连接，进入"),t("code",[_._v("CLOSED")]),_._v("状态。")])]),_._v(" "),t("h2",{attrs:{id:"为什么建立连接是三次握手，而关闭连接是四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么建立连接是三次握手，而关闭连接是四次挥手","aria-hidden":"true"}},[_._v("#")]),_._v(" 为什么建立连接是三次握手，而关闭连接是四次挥手")]),_._v(" "),t("p",[_._v("因为服务端在"),t("code",[_._v("LISTEN")]),_._v("状态下，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。而关闭连接时，"),t("strong",[_._v("当收到对方的FIN报文时，仅仅表示对方不再发送数据了，但是还能接收数据，己方也未必把全部数据都发送给对方了，所以己方可以立即close，也可以发送一些数据给对方后")]),_._v("，再发送FIN报文给对方来表示同意现在关闭连接。")])])},[],!1,null,null,null);v.default=a.exports}}]);