(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{258:function(e,t,s){},271:function(e,t,s){"use strict";s(258)},285:function(e,t,s){"use strict";s.r(t);s(90);var n=s(94),o=s.n(n),i=(e,t,s=null)=>{let n=o()(t,"title","");return o()(t,"frontmatter.tags")&&(n+=" "+t.frontmatter.tags.join(" ")),s&&(n+=" "+s),u(e,n)};const u=(e,t)=>{const s=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),n=new RegExp("[^\0-]"),o=e.split(/\s+/g).map(e=>e.trim()).filter(e=>!!e);if(n.test(e))return o.some(e=>t.toLowerCase().indexOf(e)>-1);{const n=e.endsWith(" ");return new RegExp(o.map((e,t)=>o.length!==t+1||n?`(?=.*\\b${s(e)}\\b)`:`(?=.*\\b${s(e)})`).join("")+".+","gi").test(t)}};var r={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const e=this.query.trim().toLowerCase();if(!e)return;const{pages:t}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,n=this.$localePath,o=[];for(let u=0;u<t.length&&!(o.length>=s);u++){const r=t[u];if(this.getPageLocalePath(r)===n&&this.isSearchable(r))if(i(e,r))o.push(r);else if(r.headers)for(let t=0;t<r.headers.length&&!(o.length>=s);t++){const s=r.headers[t];s.title&&i(e,r,s.title)&&o.push(Object.assign({},r,{path:r.path+"#"+s.slug,header:s}))}}return o},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(e){for(const t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable(e){let t=null;return null===t||(t=Array.isArray(t)?t:new Array(t),t.filter(t=>e.path.match(t)).length>0)},onHotkey(e){e.srcElement===document.body&&["s","/"].includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus(e){this.focusIndex=e},unfocus(){this.focusIndex=-1}}},a=(s(271),s(14)),l=Object(a.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-box"},[t("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(s,n){return t("li",{key:n,staticClass:"suggestion",class:{focused:n===e.focusIndex},on:{mousedown:function(t){return e.go(n)},mouseenter:function(t){return e.focus(n)}}},[t("a",{attrs:{href:s.path},on:{click:function(e){e.preventDefault()}}},[t("span",{staticClass:"page-title"},[e._v(e._s(s.title||s.path))]),e._v(" "),s.header?t("span",{staticClass:"header"},[e._v("> "+e._s(s.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null);t.default=l.exports}}]);