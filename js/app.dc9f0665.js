(function(e){function t(t){for(var a,n,s=t[0],l=t[1],r=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(u.length)u.shift()();return o.push.apply(o,r||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],a=!0,n=1;n<c.length;n++){var s=c[n];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=c[0]))}return e}var a={},n={app:0},i={app:0},o=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-01a0bba2":"beb96f23","chunk-865e2e98":"f71f45d3"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.e=function(e){var t=[],c={"chunk-01a0bba2":1,"chunk-865e2e98":1};n[e]?t.push(n[e]):0!==n[e]&&c[e]&&t.push(n[e]=new Promise((function(t,c){for(var a="css/"+({}[e]||e)+"."+{"chunk-01a0bba2":"2a6b0318","chunk-865e2e98":"fd9f9258"}[e]+".css",i=l.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var r=o[s],d=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(d===a||d===i))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){r=u[s],d=r.getAttribute("data-href");if(d===a||d===i)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[e],b.parentNode.removeChild(b),c(o)},b.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){n[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,c){a=i[e]=[t,c]}));t.push(a[2]=o);var r,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e);var u=new Error;r=function(t){d.onerror=d.onload=null,clearTimeout(b);var c=i[e];if(0!==c){if(c){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",u.name="ChunkLoadError",u.type=a,u.request=n,c[1](u)}i[e]=void 0}};var b=setTimeout((function(){r({type:"timeout",target:d})}),12e4);d.onerror=d.onload=r,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(c,a,function(t){return e[t]}.bind(null,a));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-baze/",l.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var b=d;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"49d5":function(e,t,c){"use strict";c("b3b1")},"56d7":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=c("b80d");const i={class:"wrapper"};function o(e,t,c,n,o,s){const l=Object(a["N"])("Header"),r=Object(a["N"])("router-view");return Object(a["F"])(),Object(a["i"])(a["b"],null,[Object(a["n"])(l),Object(a["j"])("div",i,[Object(a["n"])(r)])],64)}const s={id:"header"},l=["value"];function r(e,t,c,n,i,o){const r=Object(a["N"])("router-link"),d=Object(a["N"])("b-form-checkbox");return Object(a["F"])(),Object(a["i"])("div",s,[Object(a["n"])(r,{to:"/"},{default:Object(a["Z"])(()=>[Object(a["m"])(Object(a["Q"])(o.t("summary")),1)]),_:1}),Object(a["n"])(r,{to:"/info"},{default:Object(a["Z"])(()=>[Object(a["m"])(Object(a["Q"])(o.t("info")),1)]),_:1}),Object(a["n"])(r,{to:"/canvas1"},{default:Object(a["Z"])(()=>[Object(a["m"])(Object(a["Q"])(o.t("canvas")),1)]),_:1}),Object(a["n"])(d,{size:"lg",modelValue:o.switchChecked,"onUpdate:modelValue":t[0]||(t[0]=e=>o.switchChecked=e),switch:""},null,8,["modelValue"]),Object(a["ab"])(Object(a["j"])("select",{class:"customSelect","onUpdate:modelValue":t[1]||(t[1]=e=>o.selectedLanguage=e)},[(Object(a["F"])(!0),Object(a["i"])(a["b"],null,Object(a["L"])(i.languages,(e,t)=>(Object(a["F"])(),Object(a["i"])("option",{key:t,value:e.value},Object(a["Q"])(e.text),9,l))),128))],512),[[a["X"],o.selectedLanguage]])])}var d=c("5502"),u={summary:{en:"Summary",ru:"Резюме"},canvas:{en:"Canvas",ru:"Холст"},info:{en:"Info",ru:"Описание"}},b={name:"Header",data(){return{languages:[{text:"English",value:"en"},{text:"Русский",value:"ru"}]}},computed:{...Object(d["c"])({localStorageApp:e=>e.localStorageApp}),selectedLanguage:{get(){return this.localStorageApp.lang},set(e){this.localStorageApp.lang=e,this.changeLocalStorageApp(this.localStorageApp)}},switchChecked:{get(){return this.localStorageApp.styleWebsiteColor?(document.querySelector("#app").classList.add("appStyleWebsiteColorDark"),document.querySelector("#app").classList.remove("appStyleWebsiteColorLight")):(document.querySelector("#app").classList.add("appStyleWebsiteColorLight"),document.querySelector("#app").classList.remove("appStyleWebsiteColorDark")),this.localStorageApp.styleWebsiteColor},set(e){this.localStorageApp.styleWebsiteColor=e,this.changeLocalStorageApp(this.localStorageApp)}}},methods:{...Object(d["b"])({changeLocalStorageApp:"changeLocalStorageApp"}),t(e){return u[e][this.localStorageApp.lang]}}},p=(c("49d5"),c("6b0d")),j=c.n(p);const h=j()(b,[["render",r]]);var O=h,g={name:"App",components:{Header:O},computed:{...Object(d["c"])({localStorageApp:e=>e.localStorageApp,WINDOW_WIDTH:e=>e.WINDOW_WIDTH,WINDOW_HEIGHT:e=>e.WINDOW_HEIGHT,MOUSE_COORDINATES:e=>e.MOUSE_COORDINATES})},methods:{...Object(d["b"])({changeWindowWidth:"changeWindowWidth",changeWindowHeight:"changeWindowHeight",changeMouseCoordinates:"changeMouseCoordinates",changeLocalStorageApp:"changeLocalStorageApp"}),listenerWindowResize(){this.changeWindowWidth(window.innerWidth),this.changeWindowHeight(window.innerHeight),window.addEventListener("resize",e=>{this.changeWindowWidth(e.target.innerWidth),this.changeWindowHeight(e.target.innerHeight)},!1)},listenerWindowMouseCoordinates(){window.addEventListener("mousemove",e=>this.changeMouseCoordinates({x:e.x,y:e.y}),!1)},getDataLocalStorage(){const e=JSON.parse(localStorage.getItem("appObj"));null===e?this.changeLocalStorageApp({lang:"en",styleWebsiteColor:!1}):this.changeLocalStorageApp(e)}},created(){this.listenerWindowResize(),this.listenerWindowMouseCoordinates(),this.getDataLocalStorage()}};c("b7fb");const v=j()(g,[["render",o]]);var m=v,f=c("6605"),S=c("fa19"),A=c.n(S);const W=e=>(Object(a["I"])("data-v-5e1c5d12"),e=e(),Object(a["G"])(),e),y={key:0,id:"home",class:"home"},k={class:"left"},w={class:"name"},I={class:"title"},C={class:"title"},L=W(()=>Object(a["j"])("div",{class:"info"},[Object(a["j"])("li",{class:"description"},"Verv: Август 2017 — август 2018"),Object(a["j"])("li",{class:"description"},"BSLab: Сентябрь 2018 — январь 2022")],-1)),M={class:"title"},E={class:"info"},T={class:"description"},Q={class:"description"},D={class:"title"},H={class:"info"},N={class:"title"},_={class:"description"},x={class:"description"},V={class:"description"},P={class:"title"},F={class:"right"},R=W(()=>Object(a["j"])("img",{src:A.a,alt:""},null,-1)),G={class:"title"},B={class:"info"},J={class:"description"},U=W(()=>Object(a["j"])("div",{class:"description"},"+375 (29) 275-27-34",-1)),q={class:"description"},z=W(()=>Object(a["j"])("div",{class:"description"},"valeriy.meshkov1995@gmail.com",-1)),K={class:"description"},X={class:"title"},Z=Object(a["l"])('<div class="info" data-v-5e1c5d12><li class="description" data-v-5e1c5d12>Vue.js, Vue 3, Vuex</li><li class="description" data-v-5e1c5d12>CSS3, Sass, Less</li><li class="description" data-v-5e1c5d12>JavaScript</li><li class="description" data-v-5e1c5d12>HTML5</li><li class="description" data-v-5e1c5d12>TypeScript</li><li class="description" data-v-5e1c5d12>Adobe Photoshop</li><li class="description" data-v-5e1c5d12>Figma, Sketch</li><li class="description" data-v-5e1c5d12>Webpack</li><li class="description" data-v-5e1c5d12>Git</li></div>',1),Y={key:1,class:"homeMobile",id:"home"},$=W(()=>Object(a["j"])("img",{src:A.a,alt:"img"},null,-1)),ee={class:"name"},te={class:"title"},ce={class:"title"},ae=W(()=>Object(a["j"])("div",{class:"info"},[Object(a["j"])("li",{class:"description"},"Verv: Август 2017 — август 2018"),Object(a["j"])("li",{class:"description"},"BSLab: Сентябрь 2018 — январь 2022")],-1)),ne={class:"title"},ie={class:"info"},oe={class:"description"},se={class:"description"},le={class:"title"},re={class:"info"},de={class:"description"},ue={class:"description"},be={class:"description"},pe={class:"title"},je=Object(a["l"])('<div class="info" data-v-5e1c5d12><li class="description" data-v-5e1c5d12>Vue.js, Vue 3, Vuex</li><li class="description" data-v-5e1c5d12>CSS3, Sass, Less</li><li class="description" data-v-5e1c5d12>JavaScript</li><li class="description" data-v-5e1c5d12>HTML5</li><li class="description" data-v-5e1c5d12>TypeScript</li><li class="description" data-v-5e1c5d12>Adobe Photoshop</li><li class="description" data-v-5e1c5d12>Figma, Sketch</li><li class="description" data-v-5e1c5d12>Webpack</li><li class="description" data-v-5e1c5d12>Git</li></div>',1),he={class:"title"},Oe={class:"info"},ge={class:"title"},ve={class:"description"},me={class:"description"},fe={class:"description"},Se={class:"title"};function Ae(e,t,c,n,i,o){return e.WINDOW_WIDTH>950?(Object(a["F"])(),Object(a["i"])("div",y,[Object(a["j"])("div",k,[Object(a["j"])("div",w,Object(a["Q"])(o.t("FIO")),1),Object(a["j"])("div",I,Object(a["Q"])(o.t("frontendDeveloper")),1),Object(a["j"])("div",C,Object(a["Q"])(o.t("workExperience")),1),L,Object(a["j"])("div",M,Object(a["Q"])(o.t("languageSkills")),1),Object(a["j"])("div",E,[Object(a["j"])("li",T,Object(a["Q"])(o.t("languageSkillsRu")),1),Object(a["j"])("li",Q,Object(a["Q"])(o.t("languageSkillsEn")),1)]),Object(a["j"])("div",D,Object(a["Q"])(o.t("AboutMe")),1),Object(a["j"])("div",H,[Object(a["j"])("div",N,Object(a["Q"])(o.t("AboutMeInfo")),1),Object(a["j"])("li",_,Object(a["Q"])(o.t("AboutMeInfoOne")),1),Object(a["j"])("li",x,Object(a["Q"])(o.t("AboutMeInfoTwo")),1),Object(a["j"])("li",V,Object(a["Q"])(o.t("AboutMeInfoThree")),1),Object(a["j"])("div",P,Object(a["Q"])(o.t("AboutMeInfoLast")),1)])]),Object(a["j"])("div",F,[R,Object(a["j"])("div",G,Object(a["Q"])(o.t("contacts")),1),Object(a["j"])("div",B,[Object(a["j"])("li",J,Object(a["Q"])(o.t("contactsPhone"))+":",1),U,Object(a["j"])("li",q,Object(a["Q"])(o.t("contactsEmail"))+":",1),z,Object(a["j"])("li",K,Object(a["Q"])(o.t("contactsTG"))+": VMDreamTeam",1)]),Object(a["j"])("div",X,Object(a["Q"])(o.t("keySkills")),1),Z])])):(Object(a["F"])(),Object(a["i"])("div",Y,[$,Object(a["j"])("div",ee,Object(a["Q"])(o.t("FIO")),1),Object(a["j"])("div",te,Object(a["Q"])(o.t("frontendDeveloper")),1),Object(a["j"])("div",ce,Object(a["Q"])(o.t("workExperience")),1),ae,Object(a["j"])("div",ne,Object(a["Q"])(o.t("languageSkills")),1),Object(a["j"])("div",ie,[Object(a["j"])("li",oe,Object(a["Q"])(o.t("languageSkillsRu")),1),Object(a["j"])("li",se,Object(a["Q"])(o.t("languageSkillsEn")),1)]),Object(a["j"])("div",le,Object(a["Q"])(o.t("contacts")),1),Object(a["j"])("div",re,[Object(a["j"])("li",de,Object(a["Q"])(o.t("contactsPhone"))+": +375 (29) 275-27-34",1),Object(a["j"])("li",ue,Object(a["Q"])(o.t("contactsEmail"))+": valeriy.meshkov1995@gmail.com",1),Object(a["j"])("li",be,Object(a["Q"])(o.t("contactsTG"))+": VMDreamTeam",1)]),Object(a["j"])("div",pe,Object(a["Q"])(o.t("keySkills")),1),je,Object(a["j"])("div",he,Object(a["Q"])(o.t("AboutMe")),1),Object(a["j"])("div",Oe,[Object(a["j"])("div",ge,Object(a["Q"])(o.t("AboutMeInfo")),1),Object(a["j"])("li",ve,Object(a["Q"])(o.t("AboutMeInfoOne")),1),Object(a["j"])("li",me,Object(a["Q"])(o.t("AboutMeInfoTwo")),1),Object(a["j"])("li",fe,Object(a["Q"])(o.t("AboutMeInfoThree")),1),Object(a["j"])("div",Se,Object(a["Q"])(o.t("AboutMeInfoLast")),1)])]))}var We={FIO:{en:"Meshkov Valery",ru:"Мешков Валерий"},frontendDeveloper:{en:"FRONTEND-DEVELOPER",ru:"FRONTEND-РАЗРАБОТЧИК"},workExperience:{en:"Work experience",ru:"Опыт работы"},AboutMe:{en:"About me",ru:"Обо мне"},AboutMeInfo:{en:"As Front-end developer i have knowledge and practical experience in the next:",ru:"Как Front-end разработчик я обладаю знаниями и практическим опытом в следующем:"},AboutMeInfoOne:{en:"technologies: JavaScript (ES5, ES6) , Vue.js , Vue 3, Vuex, HTML5, CSS3, SASS, Bootstrap",ru:"технологии: JavaScript (ES5, ES6) , Vue.js , Vue 3, Vuex, HTML5, CSS3, SASS, Bootstrap"},AboutMeInfoTwo:{en:"web methodologies and approaches: BEM, SPA, AJAX, Responsive and adaptive web design",ru:"веб-методологии и подходы: BEM, SPA, AJAX, Responsive and adaptive web design"},AboutMeInfoThree:{en:"tools: Webpack, GIT, Kanban, Bitbucket, SourceTree, Sketch, Photoshop, Figma",ru:"инструменты: Webpack, GIT, Kanban, Bitbucket, SourceTree, Sketch, Photoshop, Figma"},AboutMeInfoLast:{en:"Hard-working and persistent, attentive to details, eager to learn, highly motivated, responsible. I have big interest in learning new technologies, good communication skills and experience of team work.",ru:"Трудолюбивый и настойчивый, внимательный к деталям, стремящийся к обучению, высокомотивированный, ответственный. Имею большой интерес к изучению новых технологий, хорошие коммуникативные навыки и опыт работы в команде."},languageSkills:{en:"Language skills",ru:"Знание языков"},languageSkillsRu:{en:"Russian: Native",ru:"Русский: Родной"},languageSkillsEn:{en:"English: A2 - Elementary",ru:"Английский: A2 — Элементарный"},contacts:{en:"Сontacts",ru:"Контакты"},contactsPhone:{en:"Phone",ru:"Телефон"},contactsEmail:{en:"Email",ru:"Почта"},contactsTG:{en:"Telegram",ru:"Телеграм"},keySkills:{en:"Key skills",ru:"Ключевые навыки"}},ye={name:"Home",components:{},computed:{...Object(d["c"])({localStorageApp:e=>e.localStorageApp,WINDOW_WIDTH:e=>e.WINDOW_WIDTH})},methods:{t(e){return We[e][this.localStorageApp.lang]}}};c("d6b1");const ke=j()(ye,[["render",Ae],["__scopeId","data-v-5e1c5d12"]]);var we=ke;const Ie=[{path:"/",name:"Home",component:we},{path:"/info",name:"Info",component:()=>c.e("chunk-865e2e98").then(c.bind(null,"797b"))},{path:"/canvas1",name:"canvas1",component:()=>c.e("chunk-01a0bba2").then(c.bind(null,"bc72"))}],Ce=Object(f["a"])({history:Object(f["b"])("/vue-baze/"),routes:Ie});var Le=Ce,Me={WINDOW_WIDTH:0,WINDOW_HEIGHT:0,MOUSE_COORDINATES:{x:0,y:0},localStorageApp:null},Ee={setWindowWidth(e,t){e.WINDOW_WIDTH=t},setWindowHeight(e,t){e.WINDOW_HEIGHT=t},setMouseCoordinates(e,t){e.MOUSE_COORDINATES=t},setLanguage(e,t){e.language=t},setChangeStyleWebsiteColor(e,t){e.styleWebsiteColor=t},setLocalStorageApp(e,t){e.localStorageApp=t}},Te={changeWindowWidth(e,t){e.commit("setWindowWidth",t)},changeWindowHeight(e,t){e.commit("setWindowHeight",t)},changeMouseCoordinates(e,t){e.commit("setMouseCoordinates",t)},changeLanguage(e,t){e.commit("setLanguage",t)},changeStyleWebsiteColor(e,t){e.commit("setChangeStyleWebsiteColor",t)},changeLocalStorageApp(e,t){localStorage.setItem("appObj",JSON.stringify(t)),e.commit("setLocalStorageApp",t)}},Qe={circlesCount:30,circles:[],lines:[]},De=(c("14d9"),{setAddCricle(e,t){e.circles.push(t)},setAddLine(e,t){e.lines.push(t)},setClearAllCircles(e){e.circles=[]},setClearAllLines(e){e.lines=[]}});function He(e,t){const c=Math.ceil(e),a=Math.floor(t);return Math.floor(Math.random()*(a-c))+c}var Ne={addCircle(e,t){const c=He(1,5),a=3;e.commit("setAddCricle",{radius:c,x:Math.random()*(t.w-2*c)+c,y:Math.random()*(t.h-2*c)+c,dx:(Math.random()-.5)*a,dy:(Math.random()-.5)*a,color:"white"})},addLine(e,t){e.commit("setAddLine",{circleI:t.i,circleJ:t.j})},clearAllCircles(e){e.commit("setClearAllCircles")},clearAllLines(e){e.commit("setClearAllLines")}},_e={namespaced:!0,state:Qe,actions:Ne,mutations:De},xe=Object(d["a"])({namespaced:!0,state:Me,mutations:Ee,actions:Te,modules:{canvas1:_e}});c("f9e3"),c("1a26");Object(a["f"])(m).use(n["a"]).use(xe).use(Le).mount("#app")},b3b1:function(e,t,c){},b7fb:function(e,t,c){"use strict";c("d440")},bebe:function(e,t,c){},d440:function(e,t,c){},d6b1:function(e,t,c){"use strict";c("bebe")},fa19:function(e,t,c){e.exports=c.p+"img/person.2fadd630.png"}});
//# sourceMappingURL=app.dc9f0665.js.map