(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{316:function(t,a,v){"use strict";v.r(a);var r=v(14),i=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),a("h2",{attrs:{id:"bfc-何方神圣"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-何方神圣"}},[t._v("#")]),t._v(" BFC 何方神圣？")]),t._v(" "),a("blockquote",[a("p",[t._v("BFC（Block Formatting Context）块级格式化上下文，是Web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。与区域外部无关。")])]),t._v(" "),a("blockquote",[a("p",[t._v("换句话说，BFC就是为元素提供一个独立的容器，在该容器里按照一定的规则进行布局排列，该容器内的元素不会影响外部的元素，同理，外部的元素也不会影响内部的元素")])]),t._v(" "),a("h2",{attrs:{id:"如何创建bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何创建bfc"}},[t._v("#")]),t._v(" 如何创建BFC")]),t._v(" "),a("ul",[a("li",[t._v("浮动元素，float 除 none 以外的值")]),t._v(" "),a("li",[t._v("定位元素，position（absolute，fixed）")]),t._v(" "),a("li",[t._v("display 为以下其中之一的值 inline-block，table-cell，table-caption")]),t._v(" "),a("li",[t._v("overflow 除了 visible 以外的值（hidden，auto，scroll）")])]),t._v(" "),a("h2",{attrs:{id:"bfc有啥特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc有啥特性"}},[t._v("#")]),t._v(" BFC有啥特性")]),t._v(" "),a("ul",[a("li",[t._v("内部的Box会在垂直方向上一个接一个的放置。")]),t._v(" "),a("li",[t._v("垂直方向上的距离由margin决定")]),t._v(" "),a("li",[t._v("BFC的区域不会与float的元素区域重叠。")]),t._v(" "),a("li",[t._v("计算BFC的高度时，浮动元素也参与计算")]),t._v(" "),a("li",[t._v("BFC就是页面上的一个独立容器，容器里面的子元素不会影响外面元素")])]),t._v(" "),a("h2",{attrs:{id:"bfc的其他作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc的其他作用"}},[t._v("#")]),t._v(" BFC的其他作用")]),t._v(" "),a("ul",[a("li",[t._v("BFC可以消除margin塌陷-margin-top塌陷，垂直方向的margin重叠")]),t._v(" "),a("li",[t._v("BFC可以阻止元素被浮动元素覆盖")]),t._v(" "),a("li",[t._v("防止字体环绕")])]),t._v(" "),a("h2",{attrs:{id:"举个例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[t._v("#")]),t._v(" 举个例子")]),t._v(" "),a("h4",{attrs:{id:"一个盒子不设置height-当内容子元素都浮动时-父元素heifht为0-无法撑开父元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个盒子不设置height-当内容子元素都浮动时-父元素heifht为0-无法撑开父元素"}},[t._v("#")]),t._v(" 一个盒子不设置height,当内容子元素都浮动时，父元素heifht为0，无法撑开父元素")]),t._v(" "),a("h5",{attrs:{id:"产生这种情况的原因很简单-有以下两点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产生这种情况的原因很简单-有以下两点"}},[t._v("#")]),t._v(" 产生这种情况的原因很简单，有以下两点：")]),t._v(" "),a("ul",[a("li",[t._v("父元素没有设置 height")]),t._v(" "),a("li",[t._v("子元素设置了 float 浮动，脱离了文档流")])]),t._v(" "),a("h5",{attrs:{id:"因子元素脱离了文档流-父元素无法统计到子元素的大小-因此子元素无法将父元素撑开-所以我们就要将浮动清除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#因子元素脱离了文档流-父元素无法统计到子元素的大小-因此子元素无法将父元素撑开-所以我们就要将浮动清除"}},[t._v("#")]),t._v(" 因子元素脱离了文档流，父元素无法统计到子元素的大小，因此子元素无法将父元素撑开，所以我们就要将浮动清除")]),t._v(" "),a("p",[t._v("那么我们平时是如何清除浮动的呢？最常见的可能就是给父元素添加样式 overflow: hidden了，其实这种方法就触发了BFC，在父元素内部形成了一个独立的环境，按照BFC的布局规则，该容器内的元素都会被统计到，因此浮动就被清除")])])}),[],!1,null,null,null);a.default=i.exports}}]);