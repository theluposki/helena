(function(e){function t(t){for(var c,r,i=t[0],l=t[1],u=t[2],d=0,b=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},o={app:0},a=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17d4":function(e,t,n){"use strict";n("b431")},"20b2":function(e,t,n){"use strict";n("485a")},"43a4":function(e,t,n){},"478a":function(e,t,n){},"485a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");const o={class:"content-main"};function a(e,t,n,a,r,i){const l=Object(c["z"])("Navigation"),u=Object(c["z"])("Header"),s=Object(c["z"])("router-view");return Object(c["s"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(l,{active:r.active},null,8,["active"]),Object(c["h"])("div",o,[Object(c["j"])(u,{active:r.active},null,8,["active"]),Object(c["j"])(s)])],64)}const r=e=>(Object(c["v"])("data-v-130402ed"),e=e(),Object(c["t"])(),e),i={key:0,class:"navigation"},l=r(()=>Object(c["h"])("div",{class:"profile"},[Object(c["h"])("img",{src:"https://i.pravatar.cc/150?img=1",alt:"imagem de perfil"}),Object(c["h"])("h3",null,"Helena")],-1)),u=r(()=>Object(c["h"])("i",{class:"ai-home"},null,-1)),s=Object(c["i"])(" Visão geral "),d=r(()=>Object(c["h"])("i",{class:"ai-grid"},null,-1)),b=Object(c["i"])(" Estoque ");function j(e,t,n,o,a,r){const j=Object(c["z"])("router-link");return Object(c["s"])(),Object(c["e"])(c["b"],{name:"fade"},{default:Object(c["G"])(()=>[e.active?(Object(c["s"])(),Object(c["g"])("div",i,[l,Object(c["j"])(j,{to:"/"},{default:Object(c["G"])(()=>[u,s]),_:1}),Object(c["j"])(j,{to:"/inventory"},{default:Object(c["G"])(()=>[d,b]),_:1})])):Object(c["f"])("",!0)]),_:1})}var O=n("5502"),p={name:"Navigation",computed:Object(O["c"])(["active"])},v=(n("77a7"),n("6b0d")),f=n.n(v);const h=f()(p,[["render",j],["__scopeId","data-v-130402ed"]]);var m=h;const g={class:"header"};function y(e,t,n,o,a,r){return Object(c["s"])(),Object(c["g"])("div",g,[Object(c["h"])("h1",null,[e.active?(Object(c["s"])(),Object(c["g"])("i",{key:0,onClick:t[0]||(t[0]=(...t)=>e.off&&e.off(...t)),class:"ai-cross"})):(Object(c["s"])(),Object(c["g"])("i",{key:1,onClick:t[1]||(t[1]=(...t)=>e.on&&e.on(...t)),class:"ai-three-line-horizontal"}))])])}var k={name:"Header",computed:Object(O["c"])(["active"]),data(){return{}},methods:{...Object(O["b"])(["on","off"])}};n("ab49");const w=f()(k,[["render",y],["__scopeId","data-v-2b0e64bb"]]);var _=w,x={components:{Navigation:m,Header:_},data(){return{active:!0}}};n("e6c3");const V=f()(x,[["render",a]]);var H=V,N=n("9483");Object(N["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var z=n("6c02");const E={class:"home"},I=Object(c["h"])("h1",null,"Home",-1),P=[I];function S(e,t,n,o,a,r){return Object(c["s"])(),Object(c["g"])("div",E,P)}var U={name:"Home"};const G=f()(U,[["render",S]]);var C=G;const A=e=>(Object(c["v"])("data-v-322fa9c2"),e=e(),Object(c["t"])(),e),L={class:"inventory"},M={class:"header-inventory"},B=A(()=>Object(c["h"])("i",{class:"ai-plus"},null,-1)),D=Object(c["i"])(" Adicionar "),q=A(()=>Object(c["h"])("i",{class:"ai-clipboard"},null,-1)),T=Object(c["i"])(" Lista "),F={class:"content-inventory"};function J(e,t,n,o,a,r){const i=Object(c["z"])("router-link"),l=Object(c["z"])("router-view");return Object(c["s"])(),Object(c["g"])("div",L,[Object(c["h"])("div",M,[Object(c["j"])(i,{to:"/inventory/add"},{default:Object(c["G"])(()=>[B,D]),_:1}),Object(c["j"])(i,{to:"/inventory/list"},{default:Object(c["G"])(()=>[q,T]),_:1})]),Object(c["h"])("div",F,[Object(c["j"])(l)])])}var R={};n("20b2");const K=f()(R,[["render",J],["__scopeId","data-v-322fa9c2"]]);var Q=K;const W=e=>(Object(c["v"])("data-v-78d8a477"),e=e(),Object(c["t"])(),e),X={class:"add"},Y=W(()=>Object(c["h"])("h3",null,"Adicionar produto",-1)),Z={class:"form-controll"},$=W(()=>Object(c["h"])("label",{for:"name"},"*Nome",-1)),ee={class:"form-controll"},te=W(()=>Object(c["h"])("label",{for:"name"},"*Descrição",-1)),ne={class:"form-group"},ce={class:"form-controll"},oe=W(()=>Object(c["h"])("label",{for:"amount"},"*Quantidade",-1)),ae={class:"form-controll"},re=W(()=>Object(c["h"])("label",{for:"price"},"*Preço",-1)),ie={class:"form-controll"},le=W(()=>Object(c["h"])("label",{for:"category"},"*Categoria",-1)),ue=W(()=>Object(c["h"])("option",{value:"null"},"-- Selecione a categoria --",-1)),se=["value"],de={class:"form-group"},be={class:"form-controll"},je=W(()=>Object(c["h"])("label",{for:"unity"},"*Unidade",-1)),Oe=W(()=>Object(c["h"])("option",{value:"null"},"-- Selecione a unidade --",-1)),pe=["value"],ve={class:"form-controll"},fe=W(()=>Object(c["h"])("label",{for:"unitValue"},"*Valor da unidade",-1)),he={class:"form-buttons"},me=W(()=>Object(c["h"])("span",null,"Limpar",-1)),ge=W(()=>Object(c["h"])("i",{class:"ai-backspace"},null,-1)),ye=[me,ge],ke=W(()=>Object(c["h"])("span",null,"Registrar",-1)),we=W(()=>Object(c["h"])("i",{class:"ai-send"},null,-1)),_e=[ke,we];function xe(e,t,n,o,a,r){return Object(c["s"])(),Object(c["g"])("div",X,[Object(c["h"])("form",null,[Y,Object(c["h"])("div",Z,[$,Object(c["H"])(Object(c["h"])("input",{tabindex:"1","onUpdate:modelValue":t[0]||(t[0]=e=>a.product.name=e),id:"name",type:"text",placeholder:"digite o nome"},null,512),[[c["E"],a.product.name]])]),Object(c["h"])("div",ee,[te,Object(c["H"])(Object(c["h"])("textarea",{tabindex:"2","onUpdate:modelValue":t[1]||(t[1]=e=>a.product.description=e),id:"description",type:"text",placeholder:"descreva o produto"},"\n        ",512),[[c["E"],a.product.description]])]),Object(c["h"])("div",ne,[Object(c["h"])("div",ce,[oe,Object(c["H"])(Object(c["h"])("input",{tabindex:"3","onUpdate:modelValue":t[2]||(t[2]=e=>a.product.amount=e),min:"0",id:"amount",type:"number",placeholder:"digite a quantidade"},null,512),[[c["E"],a.product.amount,void 0,{number:!0}]])]),Object(c["h"])("div",ae,[re,Object(c["H"])(Object(c["h"])("input",{tabindex:"4","onUpdate:modelValue":t[3]||(t[3]=e=>a.product.price=e),min:"0",id:"price",type:"number",placeholder:"digite o preço"},null,512),[[c["E"],a.product.price,void 0,{number:!0}]])])]),Object(c["h"])("div",ie,[le,Object(c["H"])(Object(c["h"])("select",{tabindex:"5","onUpdate:modelValue":t[4]||(t[4]=e=>a.product.category=e),name:"category",id:"category"},[ue,(Object(c["s"])(!0),Object(c["g"])(c["a"],null,Object(c["y"])(a.categories,(e,t)=>(Object(c["s"])(),Object(c["g"])("option",{key:t,value:e},Object(c["B"])(e),9,se))),128))],512),[[c["D"],a.product.category]])]),Object(c["h"])("div",de,[Object(c["h"])("div",be,[je,Object(c["H"])(Object(c["h"])("select",{tabindex:"6","onUpdate:modelValue":t[5]||(t[5]=e=>a.product.unity=e),name:"unity",id:"unity"},[Oe,(Object(c["s"])(!0),Object(c["g"])(c["a"],null,Object(c["y"])(a.unities,(e,t)=>(Object(c["s"])(),Object(c["g"])("option",{key:t,value:e},Object(c["B"])(e),9,pe))),128))],512),[[c["D"],a.product.unity]])]),Object(c["h"])("div",ve,[fe,Object(c["H"])(Object(c["h"])("input",{tabindex:"7","onUpdate:modelValue":t[6]||(t[6]=e=>a.product.unitValue=e),min:"0",id:"unitValue",type:"number",placeholder:"digite o valor da unidade"},null,512),[[c["E"],a.product.unitValue,void 0,{number:!0}]])])]),Object(c["h"])("div",he,[Object(c["h"])("button",{onClick:t[7]||(t[7]=Object(c["I"])((...e)=>r.clear&&r.clear(...e),["prevent"]))},ye),Object(c["h"])("button",{onClick:t[8]||(t[8]=Object(c["I"])((...e)=>r.register&&r.register(...e),["prevent"])),tabindex:"8"},_e)])])])}var Ve={data(){return{product:{name:null,description:null,amount:null,price:null,category:null,unitValue:null,unity:null},categories:["Mercado","Limpeza","Destilados"],unities:["KG","LT","G"]}},mounted(){this.focusName()},methods:{clear(){this.product={name:null,description:null,amount:null,price:null,category:null,unitValue:null,unity:null}},register(){console.log("Register")},focusName(){const e=document.getElementById("name");e.focus()}}};n("17d4");const He=f()(Ve,[["render",xe],["__scopeId","data-v-78d8a477"]]);var Ne=He;const ze=Object(c["h"])("h1",null,"List",-1),Ee=[ze];function Ie(e,t){return Object(c["s"])(),Object(c["g"])("div",null,Ee)}const Pe={},Se=f()(Pe,[["render",Ie]]);var Ue=Se;const Ge=[{path:"/",name:"Home",component:C},{path:"/inventory",name:"Inventory",component:Q,children:[{path:"add",component:Ne},{path:"list",component:Ue}]}],Ce=Object(z["a"])({history:Object(z["b"])(),routes:Ge});var Ae=Ce,Le=Object(O["a"])({state:{active:!0},getters:{},mutations:{on(e){e.active=!0},off(e){e.active=!1}},actions:{on(e){e.commit("on")}},modules:{}});Object(c["d"])(H).use(Le).use(Ae).mount("#app")},"77a7":function(e,t,n){"use strict";n("8b37")},"8b37":function(e,t,n){},ab49:function(e,t,n){"use strict";n("478a")},b431:function(e,t,n){},e6c3:function(e,t,n){"use strict";n("43a4")}});
//# sourceMappingURL=app.699b7c62.js.map