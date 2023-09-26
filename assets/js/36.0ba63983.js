(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{352:function(s,t,a){"use strict";a.r(t);var n=a(14),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"滑动窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[s._v("#")]),s._v(" 滑动窗口")]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("滑动窗口算法的本质是双指针法中的左右指针法，所谓滑动窗口，就像描述的那样，可以理解成是一个会滑动的窗口，每次记录下窗口的状态，再找出符合条件的适合的窗口。它可以将双层嵌套的循环问题，转换为单层遍历的循环问题。使用两个指针一左一右构成一个窗口，就可以将二维循环的问题转化成一维循环一次遍历，相当于通过旧有的计算结果对搜索空间进行剪枝，使时间复杂度从O（n²）降低至O（n），比如经典字符串查找算法"),t("strong",[s._v("Rabin-Karp 指纹字符串查找算法")]),s._v("，它本质上也使用了滑动窗口的思想，通过公式推导降低窗口滑动时计算子串哈希值的复杂度。")]),s._v(" "),t("p",[s._v("滑动窗口算法更多的是一种思想或技巧，按照窗口大小是否固定分为固定滑动窗口和变长滑动窗口，可以用来解决一些查找满足一定条件的连续区间的性质（长度等）的问题。往往类似于“请找到满足xx的最x的区间（子串、子数组等）的xx”这类问题都可以使用该方法进行解决。")]),s._v(" "),t("h2",{attrs:{id:"步骤及算法模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤及算法模板"}},[s._v("#")]),s._v(" 步骤及算法模板")]),s._v(" "),t("p",[s._v("以下思路是比较形象的滑动窗口问题的解题步骤，但有些题目找到窗口限定比较隐晦，需要具体问题具体分析：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("（1）初始化窗口：\n初始化左右边界 left = right = 0，把索引闭区间 [left, right] 称为一个「窗口」。")])]),s._v(" "),t("li",[t("p",[s._v("（2）寻找可行解：\n我们先不断地增加 right 指针扩大窗口 [left, right]，直到窗口中的满足可行解。")])]),s._v(" "),t("li",[t("p",[s._v("（3）优化可行解：\n此时，我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right]，直到窗口中的可行解不再符合要求。同时，每次增加 left，我们都要更新一轮结果。")])]),s._v(" "),t("li",[t("p",[s._v("（4）滑动窗口，直至一次遍历结束：\n重复第 2 和第 3 步，直到 right 到达到的尽头。")])])]),s._v(" "),t("p",[s._v("这个思路其实也不难理解，第 2 步相当于在寻找一个「可行解」，然后第 3 步在优化这个「可行解」，最终找到最优解。左右指针轮流前进，窗口大小增增减减，窗口不断向右滑动。")]),s._v(" "),t("h2",{attrs:{id:"_209-长度最小的子数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_209-长度最小的子数组"}},[s._v("#")]),s._v(" 209. 长度最小的子数组")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("leetcode地址：")]),t("a",{attrs:{href:"https://leetcode.cn/problems/minimum-size-subarray-sum/description/"}},[s._v("长度最小的子数组")])])]),s._v(" "),t("h3",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("给定一个含有 n 个正整数的数组和一个正整数 target 。\n\n找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("numsl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" numsl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" numsr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" numsr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ，并返回其长度。如果不存在符合条件的子数组，返回 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 。\n\n示例 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：\n\n输入：target "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出："),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n解释：子数组 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 是该条件下的长度最小的子数组。\n示例 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：\n\n输入：target "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出："),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n示例 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("：\n\n输入：target "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出："),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),t("p",[s._v("本题为变长的滑动窗口，其窗口大小由target决定（窗口总和大于等于target），所以定义一个变量（窗口内总和），小于target右指针右移，大于target左指针右移，等于记录更新窗口大小即可")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number} target\n * @param {number[]} nums\n * @return {number}\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("minSubArrayLen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" start "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 左指针")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" end "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 右指针")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 窗口总和")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" len "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("Infinity")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//取一个不可能到达的值 这里取无穷大")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// len = nums.length +1  也可以这样写 注意后续的判断")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("end "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 循环结束条件 右指针到nums结尾")]),s._v("\n        sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("end"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滑动窗口内求和")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 临界条件，窗口内和一旦大于target,循环,这时需要滑动左指针，窗口内和递减至满足条件")]),s._v("\n            sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滑动窗口内求和")]),s._v("\n            len "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("end"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更新滑动窗口长度")]),s._v("\n            start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滑动左指针")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        end"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滑动右指针")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" len "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("Infinity")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" len "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回长度 注意Infinity判断，即不满足条件的时 返回0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("h2",{attrs:{id:"_3-无重复字符的最长子串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-无重复字符的最长子串"}},[s._v("#")]),s._v(" 3. 无重复字符的最长子串")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("leetcode地址：")]),t("a",{attrs:{href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/"}},[s._v("无重复字符的最长子串")])])]),s._v(" "),t("h3",{attrs:{id:"题目-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目-2"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。\n\n示例 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("输入")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abcabcbb"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("输出")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("解释")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 因为无重复字符的最长子串是 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),s._v("，所以其长度为 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("。\n示例 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("输入")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bbbbb"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("输出")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("解释")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 因为无重复字符的最长子串是 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),s._v("，所以其长度为 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("。\n示例 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("输入")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pwwkew"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("输出")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("解释")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 因为无重复字符的最长子串是 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wke"')]),s._v("，所以其长度为 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("。\n     请注意，你的答案必须是 子串 的长度，"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pwke"')]),s._v(" 是一个子序列，不是子串。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {string} s\n * @return {number}\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("lengthOfLongestSubstring")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("s")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" left "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 左指针")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" right "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 右指针")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" str "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滑动窗口子字符串")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" len "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 保存最长子串长度，初始值为0")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("right "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 循环字符串 以右指针移动")]),s._v("\n        str "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滑动窗口子字符串赋值")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("indexOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lastIndexOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//由子串中某字符首次出现的地址和最后一次出现的地址不同来判断无重复字符，滑动窗口")]),s._v("\n            str "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 有重复字符串 截取")]),s._v("\n            left"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滑动左窗口")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 经过此次循环，得出的都是子串")]),s._v("\n        len "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每次循环 保存最大子串长度")]),s._v("\n        right"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 滑动右窗口")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" len\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);