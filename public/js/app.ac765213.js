(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var m=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"40f9":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=(a("d3b7"),a("bc3a")),o=a.n(n),i={},s=o.a.create(i);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["a"].use(Plugin);Plugin;var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],m=(a("034f"),a("2877")),d={},u=Object(m["a"])(d,c,l,!1,null,null,null),v=u.exports,f=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[e._m(0),e._m(1),a("router-link",{attrs:{to:"/registro"}},[e._v("Registrar um usuário")]),a("button",{staticClass:"btn"},[e._v("LOGAR")])],1)},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-title"},[r("img",{attrs:{src:a("cf05")}}),r("h1",[e._v("DKS Manager")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("E-mail")]),a("br"),a("input",{staticClass:"form-control",attrs:{type:"email",name:"email"}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Senha")]),a("br"),a("input",{staticClass:"form-control",attrs:{type:"password",name:"password"}})])])}],b={data:function(){return{}},methods:{}},h=b,_=(a("7ed3"),Object(m["a"])(h,p,g,!1,null,"0245ec62",null)),k=_.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register-container"},[e._m(0),e._m(1),a("router-link",{attrs:{to:"/login"}},[e._v("Já possui uma conta? Faça o login.")]),a("button",{staticClass:"btn"},[e._v("REGISTRAR")])],1)},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register-title"},[a("h1",[e._v("Registrar usuário")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"nome"}},[e._v("Nome Completo")]),a("br"),a("input",{staticClass:"form-control",attrs:{type:"text",name:"nome"}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("E-mail")]),a("br"),a("input",{staticClass:"form-control",attrs:{type:"email",name:"email"}}),a("p",[e._v("OBS: o email deve obrigatóriamente finalizar com "),a("b",[e._v("@dkseventos.com.br")]),e._v(", "),a("b",[e._v("@vmoturismo.com.br")]),e._v(", "),a("b",[e._v("@vmoeventos.com.br")]),e._v(", "),a("b",[e._v("@glweventos.com.br")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Senha")]),a("br"),a("input",{staticClass:"form-control",attrs:{type:"password",name:"password"}})])])}],x={data:function(){return{}},methods:{}},w=x,O=(a("d0d3"),Object(m["a"])(w,y,C,!1,null,"0aaff5d6",null)),L=O.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"page-chamado"}},[a("div",{staticClass:"background"}),e._m(0),a("main",[a("form",{attrs:{method:"post",action:"/registrar-demanda"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"agencia"}},[e._v("Agência solicitante")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.agencia,expression:"agencia"}],staticClass:"form-control",attrs:{name:"agencia",type:"text"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.agencia=t.target.multiple?a:a[0]},e.mudarAgencia]}},[a("option",{attrs:{value:"DKS",selected:""}},[e._v("DKS")]),a("option",{attrs:{value:"VMO"}},[e._v("VMO")]),a("option",{attrs:{value:"GLW"}},[e._v("GLW")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"demandante"}},[e._v("Demandante")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.demandante,expression:"demandante"}],staticClass:"form-control",attrs:{name:"demandante",type:"text"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.demandante=t.target.multiple?a:a[0]}}},e._l(e.users,(function(t){return a("option",{key:t.email,domProps:{value:t.email}},[e._v(e._s(t.name)+" - "+e._s(t.email))])})),0)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"demandado"}},[e._v("Demandado")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.demandado,expression:"demandado"}],staticClass:"form-control",attrs:{disabled:"",name:"demandado",type:"text"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.demandado=t.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:"selected",value:"matheusibrahim@dkseventos.com.br"}},[e._v("Matheus Ibrahim - matheusibrahim@dkseventos.com.br")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"material"}},[e._v("Material solicitado")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-control",attrs:{name:"material",type:"text"},domProps:{value:e.material},on:{input:function(t){t.target.composing||(e.material=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"dataLimite"}},[e._v("Data limite para entrega")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataLimite,expression:"dataLimite"}],staticClass:"form-control",attrs:{name:"dataLimite",type:"text"},domProps:{value:e.dataLimite},on:{input:function(t){t.target.composing||(e.dataLimite=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comentario"}},[e._v("Comente sobre a solicitação")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comentario,expression:"comentario"}],staticClass:"form-control",attrs:{name:"comentario"},domProps:{value:e.comentario},on:{input:function(t){t.target.composing||(e.comentario=t.target.value)}}})]),a("div",{staticClass:"button-container btn-center"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.enviarDados}},[e._v("ENVIAR SOLICITAÇÃO")]),a("router-link",{attrs:{to:"/listagem-de-chamados"}},[a("button",{staticClass:"button-main"},[e._v("Ver fila de demandas")])])],1)])]),e._m(1)])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("h1",[e._v("Abertura de Chamados")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("img",{attrs:{src:a("f33d")}})])}],E=(a("498a"),a("f33d")),P=a.n(E),D=a("baf3"),M=a.n(D),A=a("add5"),$=a.n(A),K={data:function(){return{agencia:"DKS",demandante:"",demandado:"matheusibrahim@dkseventos.com.br",material:"",dataLimite:"",comentario:"",users:[{name:"Matheus Ibrahim",email:"matheusibrahim@dkseventos.com.br"},{name:"Alexandre Oliboni",email:"alexandreoliboni@dkseventos.com.br"},{name:"Camila Pontremoli",email:"camilapontremoli@dkseventos.com.br"},{name:"Daniel Klein",email:"danielklein@dkseventos.com.br"},{name:"Eder Lima",email:"ederlima@dkseventos.com.br"},{name:"Elini Jaudy",email:"producaoexecutiva@dkseventos.com.br"},{name:"Eloisa Campana",email:"eloisacampana@vmoeventos.com.br"},{name:"Ellen Araujo",email:"ellenaraujo@dkseventos.com.br"},{name:"Katia Greco",email:"financeiro@dkseventos.com.br"},{name:"Marcelo Ferreira",email:"ferreiradmkt@gmail.com"},{name:"Marcelo Moraes",email:"administrativo@dkseventos.com.br"},{name:"Oliver Menck",email:"olivermenck@dkseventos.com.br"},{name:"Samara Hassan",email:"samarahassan@dkseventos.com.br"},{name:"Thiago Dantas",email:"thiagodantas@dkseventos.com.br"},{name:"Thiago Gonçalo",email:"thiagogoncalo@dkseventos.com.br"},{name:"Victor Moraes",email:"victormoraes@dkseventos.com.br"},{name:"Wellington Lima",email:"wellingtonlima@dkseventos.com.br"}]}},methods:{mudarAgencia:function(e){var t=document.querySelector("footer img"),a=document.querySelector("button[type=submit]");switch(e.target.value){case"DKS":t.src=P.a,a.style.backgroundColor="var(--color-dks)";break;case"VMO":t.src=M.a,a.style.backgroundColor="var(--color-vmo)";break;case"GLW":t.src=$.a,a.style.backgroundColor="var(--color-glw)";break;default:t.src=P.a;break}},enviarDados:function(){var e=this;event.preventDefault();var t=document.querySelector("footer img"),a=document.querySelector("button[type=submit]"),r=this.agencia,n=this.demandante,i=this.demandado,s=this.material,c=this.dataLimite,l=this.comentario,m={agencia:r,demandante:n,demandado:i,material:s,dataLimite:c,comentario:l};""!==this.agencia.trim()&&""!==this.demandante.trim()&&""!==this.demandado.trim()&&""!==this.material.trim()&&""!==this.dataLimite.trim()&&""!==this.comentario.trim()?o.a.post("https://dks-manager-backend.herokuapp.com/register-demand",m).then((function(r){e.agencia="DKS",e.demandante="",e.demandado="",e.material="",e.dataLimite="",e.comentario="",t.src=P.a,a.style.backgroundColor="var(--color-dks)",alert("Solicitação feita com sucesso!")})):alert("Preencha todos os campos!")}}},G=K,N=(a("ee7a"),Object(m["a"])(G,S,j,!1,null,"3adf5826",null)),R=N.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"listagem-chamados"},[r("h1",[e._v("Listagem de demandas")]),0==e.loaded?r("h2",[e._v("Carregando documentos..")]):e._e(),1==e.loaded?r("ul",e._l(e.items,(function(t,n){return r("li",{key:n,class:t.agencia.toLowerCase()},[r("hr"),r("h3",[e._v("Material solicitado: "+e._s(t.material))]),r("h4",[e._v("Demandante: "+e._s(t.demandante))]),r("h6",[e._v("Data limite de entrega: "+e._s(t.dataLimite))]),r("p",[e._v("Descrição da demanda: "+e._s(t.comentario))]),"DKS"==t.agencia?r("img",{attrs:{src:a("f33d")}}):e._e(),"VMO"==t.agencia?r("img",{attrs:{src:a("baf3")}}):e._e(),"GLW"==t.agencia?r("img",{attrs:{src:a("add5")}}):e._e(),r("hr")])})),0):e._e()])},V=[],I={data:function(){return{items:[],loaded:!1}},methods:{},mounted:function(){var e=this;o.a.get("https://dks-manager-backend.herokuapp.com/demands").then((function(t){e.items=t.data,e.loaded=!0}))}},q=I,W=(a("8d60"),Object(m["a"])(q,T,V,!1,null,"4a01c3c0",null)),J=W.exports;r["a"].use(f["a"]);var F=[{path:"/abrir-chamado",name:"Abrir Chamado",component:R},{path:"/login",name:"Login",component:k},{path:"/registro",name:"Registro",component:L},{path:"/listagem-de-chamados",name:"Listagem de Chamados",component:J},{path:"/*",redirect:"/abrir-chamado"}],z=new f["a"]({routes:F}),B=z;r["a"].config.productionTip=!1,new r["a"]({router:B,render:function(e){return e(v)}}).$mount("#app")},"7ed3":function(e,t,a){"use strict";var r=a("40f9"),n=a.n(r);n.a},"85ec":function(e,t,a){},"8d60":function(e,t,a){"use strict";var r=a("d920"),n=a.n(r);n.a},"91dc":function(e,t,a){},add5:function(e,t,a){e.exports=a.p+"img/glw.2dbd2668.png"},baf3:function(e,t,a){e.exports=a.p+"img/vmo.ab7d260e.png"},cf05:function(e,t,a){e.exports=a.p+"img/logo.27a8601c.png"},d0d3:function(e,t,a){"use strict";var r=a("91dc"),n=a.n(r);n.a},d920:function(e,t,a){},ee7a:function(e,t,a){"use strict";var r=a("f824"),n=a.n(r);n.a},f33d:function(e,t,a){e.exports=a.p+"img/dks.c295af11.png"},f824:function(e,t,a){}});
//# sourceMappingURL=app.ac765213.js.map