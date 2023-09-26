(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{341:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"作用域与作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域与作用域链"}},[t._v("#")]),t._v(" 作用域与作用域链")]),t._v(" "),s("h3",{attrs:{id:"什么是作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是作用域"}},[t._v("#")]),t._v(" 什么是作用域")]),t._v(" "),s("h4",{attrs:{id:"简单来说-作用域-英文-scope-是据名称来查找变量的一套规则-可以把作用域通俗理解为一个封闭的空间-这个空间是封闭的-不会对外部产生影响-外部空间不能访问内部空间-但是内部空间可以访问将其包裹在内的外部空间。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单来说-作用域-英文-scope-是据名称来查找变量的一套规则-可以把作用域通俗理解为一个封闭的空间-这个空间是封闭的-不会对外部产生影响-外部空间不能访问内部空间-但是内部空间可以访问将其包裹在内的外部空间。"}},[t._v("#")]),t._v(" 简单来说，作用域（英文：scope）是据名称来查找变量的一套规则，可以把作用域通俗理解为一个封闭的空间，这个空间是封闭的，不会对外部产生影响，外部空间不能访问内部空间，但是内部空间可以访问将其包裹在内的外部空间。")]),t._v(" "),s("h3",{attrs:{id:"scopes-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scopes-属性"}},[t._v("#")]),t._v(" [[Scopes]]属性")]),t._v(" "),s("ul",[s("li",[t._v("在javascript中，每个函数都是一个对象，在对象中有些属性我们可以访问，有些我们是不能自由访问的，[[Scopes]]属性就是其中之一，这个属性只能被JavaScript引擎读取。")]),t._v(" "),s("li",[t._v("其实[[scope]]就是我们常说的作用域，其中存储了作用域运行期的上下文集合。")]),t._v(" "),s("li",[t._v("在这里因为fn.prototype.constructor和fn指向同一个函数，所以在这里我们通过访问函数func的原型对象来查看[[Scopes]]属性")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("img",{attrs:{src:"/jsImg/scope.png",alt:"Alt text"}})]),t._v(" "),s("h3",{attrs:{id:"作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),s("p",[t._v("[[scope]]中存储的执行期的上下文对象的集合，这个集合呈链式连接，我们把这种链式连接叫做作用域链。JavaScript正是通过作用域链来查找变量的，其查找方式是沿着作用域链的顶端依次向下查询（在哪个函数内部查找对象，就在哪个函数作用域链中查找）")]),t._v(" "),s("p",[s("img",{attrs:{src:"/jsImg/scope1.png",alt:"Alt text"}})]),t._v(" "),s("h3",{attrs:{id:"执行过程如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行过程如下"}},[t._v("#")]),t._v(" 执行过程如下")]),t._v(" "),s("ul",[s("li",[t._v("1、fn函数被创建，保存作用域链到 内部属性[[Scope]]")])]),t._v(" "),s("blockquote",[s("p",[t._v("fn.[[Scope]] = [ globalContext.VO]")])]),t._v(" "),s("ul",[s("li",[t._v("2、执行 fn 函数，创建 fn 函数执行上下文，fn 函数执行上下文被压入执行上下文栈")])]),t._v(" "),s("blockquote",[s("p",[t._v("ECStack = ["),s("br"),t._v("\nfnScopeContext,"),s("br"),t._v("\nglobalContext "),s("br"),t._v("\n]")])])])}),[],!1,null,null,null);s.default=e.exports}}]);