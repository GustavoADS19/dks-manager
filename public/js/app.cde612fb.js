(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"20a0":function(e,t,a){},"3c3d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=(a("d3b7"),a("bc3a")),o=a.n(n),i={},s=o.a.create(i);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["a"].use(Plugin);Plugin;var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],d=(a("034f"),a("2877")),u={},m=Object(d["a"])(u,c,l,!1,null,null,null),p=m.exports,v=a("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[e._m(0),r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("E-mail")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Senha")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),r("b",[r("router-link",{attrs:{to:"/registro"}},[e._v("Não possui um login? Clique aqui para realizar o cadastro.")])],1),r("div",{staticClass:"log"},[r("button",{staticClass:"btn",attrs:{disabled:e.loading},on:{click:e.authenticateUser}},[e._v("LOGAR")]),1==e.loading?r("img",{attrs:{src:a("cf1c")}}):e._e()]),1==e.failedLogin?r("p",[e._v("O login não existe ou a senha está incorreta.")]):e._e()])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-title"},[r("img",{attrs:{src:a("cf05")}}),r("h1",[e._v("DKS Manager")])])}],h={data:function(){return{email:"",password:"",loading:!1,failedLogin:!1}},methods:{authenticateUser:function(){var e=this;this.loading=!0;var t={email:this.email,password:this.password};o.a.post("https://backend-dksmanager-com-br.umbler.net/login",t).then((function(t){console.log(t),"Authenticated successfully"==t.data.message?(localStorage.setItem("email",e.email),localStorage.setItem("authorization",t.data.authorization),e.$router.push("/abrir-chamado")):e.failedLogin=!0,e.loading=!1})).catch((function(t){console.log(t),e.loading=!1,e.failedLogin=!0}))}}},b=h,_=(a("8818"),Object(d["a"])(b,f,g,!1,null,"0e78eb5c",null)),w=_.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register-container"},[e._m(0),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"nome"}},[e._v("Nome Completo")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{required:"required",type:"text",name:"nome"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("E-mail")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{required:"required",type:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(1)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Senha")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{required:"required",type:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"confirm-password"}},[e._v("Confirmar senha")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{required:"required",type:"password",name:"confirm-password"},domProps:{value:e.passwordCheck},on:{input:function(t){t.target.composing||(e.passwordCheck=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"whatsapp"}},[e._v("Telefone (Whatsapp)")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.whatsapp,expression:"whatsapp"}],staticClass:"form-control",attrs:{required:"required",type:"text",name:"whatsapp"},domProps:{value:e.whatsapp},on:{input:function(t){t.target.composing||(e.whatsapp=t.target.value)}}})]),a("b",[a("router-link",{attrs:{to:"/login"}},[e._v("Já possui uma conta? Faça o login.")])],1),a("div",{staticClass:"btn-container"},[a("button",{staticClass:"btn register",attrs:{type:"submit"},on:{click:e.registerUser}},[e._v("REGISTRAR")])])])])},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register-title"},[a("h1",[e._v("Registrar usuário")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("OBS: o email deve obrigatóriamente finalizar com "),a("b",[e._v("@dkseventos.com.br")]),e._v(", "),a("b",[e._v("@vmoturismo.com.br")]),e._v(", "),a("b",[e._v("@vmoeventos.com.br")]),e._v(", "),a("b",[e._v("@glweventos.com.br")])])}],y=(a("b0c0"),a("498a"),{data:function(){return{name:"",email:"",password:"",passwordCheck:"",whatsapp:""}},methods:{registerUser:function(e){var t=this;e.preventDefault();var a=this.name,r=this.email,n=this.password,i=this.whatsapp,s={name:a,email:r,password:n,whatsapp:i};""!==a.trim()&&""!==r.trim()&&""!==n.trim()&&""!==i.trim()?n==this.passwordCheck?o.a.post("https://backend-dksmanager-com-br.umbler.net/create-user",s).then((function(e){alert("Usuário registrado com sucesso!"),t.$router.push("/login")})):alert("As senhas não batem!"):alert("Preencha todos os campos!")}}}),x=y,S=(a("763e"),Object(d["a"])(x,C,k,!1,null,"01df7a52",null)),q=S.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"page-chamado"}},[a("div",{staticClass:"background"}),e._m(0),0==e.loaded?a("h2",[e._v("Carregando..")]):e._e(),1==e.loaded?a("main",[a("form",{attrs:{method:"post"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"agencia"}},[e._v("Agência solicitante")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.agencia,expression:"agencia"}],staticClass:"form-control",attrs:{required:"required",name:"agencia",type:"text"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.agencia=t.target.multiple?a:a[0]},e.mudarAgencia]}},[a("option",{attrs:{value:"DKS",selected:""}},[e._v("DKS")]),a("option",{attrs:{value:"VMO"}},[e._v("VMO")]),a("option",{attrs:{value:"GLW"}},[e._v("GLW")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"demandante"}},[e._v("Demandante")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.demandante,expression:"demandante"}],staticClass:"form-control",attrs:{disabled:"disabled",required:"required",name:"demandante",type:"text"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.demandante=t.target.multiple?a:a[0]}}},e._l(e.users,(function(t){return a("option",{key:t.email,domProps:{value:t.email}},[e._v(e._s(t.name)+" - "+e._s(t.email))])})),0)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"demandado"}},[e._v("Demandado")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.demandado,expression:"demandado"}],staticClass:"form-control",attrs:{required:"required",name:"demandado",type:"text"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.demandado=t.target.multiple?a:a[0]}}},e._l(e.users,(function(t,r){return a("option",{key:r,domProps:{value:t.email}},[e._v(e._s(t.name)+" - "+e._s(t.email))])})),0)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"material"}},[e._v("Material solicitado")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.material,expression:"material"}],staticClass:"form-control",attrs:{required:"required",name:"material",type:"text"},domProps:{value:e.material},on:{input:function(t){t.target.composing||(e.material=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"dataLimite"}},[e._v("Data limite para entrega")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataLimite,expression:"dataLimite"}],staticClass:"form-control",attrs:{required:"required",name:"dataLimite",type:"text"},domProps:{value:e.dataLimite},on:{input:function(t){t.target.composing||(e.dataLimite=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comentario"}},[e._v("Comente sobre a solicitação")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comentario,expression:"comentario"}],staticClass:"form-control",attrs:{required:"required",name:"comentario"},domProps:{value:e.comentario},on:{input:function(t){t.target.composing||(e.comentario=t.target.value)}}})]),a("div",{staticClass:"button-container btn-center"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.enviarDados}},[e._v("ENVIAR SOLICITAÇÃO")]),a("router-link",{staticClass:"btn btn-primary button-main",attrs:{to:"/painel"}},[a("b",[e._v("Ver fila de demandas")])])],1)])]):e._e(),e._m(1)])},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("h1",[e._v("Abertura de Chamados")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("img",{attrs:{src:a("f33d")}})])}],O=(a("96cf"),a("1da1")),j=a("f33d"),D=a.n(j),R=a("baf3"),A=a.n(R),E=a("add5"),$=a.n(E);function N(){return I.apply(this,arguments)}function I(){return I=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!=localStorage.getItem("email")&&null!=localStorage.getItem("authorization")){e.next=4;break}return e.abrupt("return",!1);case 4:return t={email:localStorage.getItem("email"),token:localStorage.getItem("authorization")},e.next=7,o.a.post("https://backend-dksmanager-com-br.umbler.net/auth",t).then((function(e){var t=e.data;return 0!=t.authenticated&&(1==t.authenticated||void 0)})).catch((function(e){return console.log(e),!1}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}var M={data:function(){return{agencia:"DKS",demandante:"",demandado:"matheusibrahim@dkseventos.com.br",material:"",dataLimite:"",comentario:"",users:[],loaded:!1}},methods:{mudarAgencia:function(e){var t=document.querySelector("footer img"),a=document.querySelector("button[type=submit]");switch(e.target.value){case"DKS":t.src=D.a,a.style.backgroundColor="var(--color-dks)";break;case"VMO":t.src=A.a,a.style.backgroundColor="var(--color-vmo)";break;case"GLW":t.src=$.a,a.style.backgroundColor="var(--color-glw)";break;default:t.src=D.a;break}},enviarDados:function(e){var t=this;e.preventDefault();var a=document.querySelector("input[name=anexo]"),r=new FileReader;if(a&&a.files[0])r.readAsDataURL(a.files[0]),r.onloadend=function(){console.log(r.result);var e=document.querySelector("footer img"),a=document.querySelector("button[type=submit]"),n={agencia:t.agencia,demandante:t.demandante,demandado:t.demandado,material:t.material,dataLimite:t.dataLimite,comentario:t.comentario,anexoData:r.result};""!==t.agencia.trim()&&""!==t.demandante.trim()&&""!==t.demandado.trim()&&""!==t.material.trim()&&""!==t.dataLimite.trim()&&""!==t.comentario.trim()?(a.disabled=!0,o.a.post("https://backend-dksmanager-com-br.umbler.net/register-demand",n).then((function(r){t.agencia="DKS",t.demandante="",t.demandado="",t.material="",t.dataLimite="",t.comentario="",e.src=D.a,a.style.backgroundColor="var(--color-dks)",alert("Solicitação feita com sucesso!"),a.disabled=!1,t.$router.push("/painel")}))):(alert("Preencha todos os campos!"),a.disabled=!1)};else{var n=document.querySelector("footer img"),i=document.querySelector("button[type=submit]"),s={agencia:this.agencia,demandante:this.demandante,demandado:this.demandado,material:this.material,dataLimite:this.dataLimite,comentario:this.comentario,anexoData:null};""!==this.agencia.trim()&&""!==this.demandante.trim()&&""!==this.demandado.trim()&&""!==this.material.trim()&&""!==this.dataLimite.trim()&&""!==this.comentario.trim()?(i.disabled=!0,o.a.post("https://backend-dksmanager-com-br.umbler.net/register-demand",s).then((function(e){t.agencia="DKS",t.demandante="",t.demandado="",t.material="",t.dataLimite="",t.comentario="",n.src=D.a,i.style.backgroundColor="var(--color-dks)",alert("Solicitação feita com sucesso!"),i.disabled=!1,t.$router.push("/painel")}))):(alert("Preencha todos os campos!"),i.disabled=!1)}},loadUsers:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o.a.post("https://backend-dksmanager-com-br.umbler.net/users").then((function(t){e.users=t.data,e.loaded=!0,e.demandante=localStorage.email})).catch((function(e){throw e}));case 1:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:if(t.t0=t.sent,0!=t.t0){t.next=7;break}e.$router.push("/login"),t.next=9;break;case 7:return t.next=9,e.loadUsers();case 9:case"end":return t.stop()}}),t)})))()}},z=M,K=(a("8b47"),Object(d["a"])(z,P,L,!1,null,"1672cb85",null)),U=K.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"listagem-chamados"},[r("h1",[e._v("Listagem de demandas")]),1==e.loaded?r("button",{staticClass:"refresh-button",on:{click:function(t){return e.refresh()}}},[r("b",[e._v("Recarregar lista")])]):e._e(),r("router-link",{attrs:{to:"/abrir-chamado"}},[1==e.loaded?r("button",{staticClass:"refresh-button"},[r("b",[e._v("Abrir Chamado")])]):e._e()]),1==e.loaded&&0==e.items.length?r("h2",{staticClass:"not-found"},[e._v("Nenhuma demanda foi registrada para você ainda.")]):e._e(),0==e.loaded?r("h2",[e._v("Carregando documentos..")]):e._e(),1==e.loaded?r("ul",e._l(e.items,(function(t,n){return r("li",{key:n,class:t.agencia.toLowerCase(),attrs:{"data-demand":t.demandId,"data-id":t._id}},[r("h3",[e._v("Material solicitado: "+e._s(t.material))]),r("h4",[e._v("Demandante: "+e._s(t.demandante))]),r("h6",[e._v("Data limite de entrega: "+e._s(t.dataLimite))]),r("p",[e._v("Descrição da demanda: "+e._s(t.comentario))]),r("h5",[e._v("Andamento: "),r("b",{staticClass:"status",attrs:{"data-demandid":t.id}},[e._v(e._s(t.status))])]),r("div",{staticClass:"update"},[r("h3",[e._v("Atualizar andamento")]),r("select",{staticClass:"form-control",attrs:{"data-demandid":t.id,name:"status"}},[r("option",{attrs:{value:"Em análise"}},[e._v("Em análise")]),r("option",{attrs:{value:"Em processo"}},[e._v("Em processo")]),r("option",{attrs:{value:"Finalizado"}},[e._v("Finalizado")]),r("option",{attrs:{value:"Recusado"}},[e._v("Recusado")])]),r("button",{attrs:{"data-demandid":t.id},on:{click:e.updateItem}},[e._v("Atualizar")])]),r("a",{staticClass:"btn btn-message",attrs:{"data-email":t.demandante,target:"_blank"},on:{click:e.whatsapp}},[e._v("Enviar mensagem")]),void 0!=t.anexoPath?r("a",{attrs:{href:"http://localhost:3333/"+t.anexoPath,target:"_blank"}},[null!=t.anexoPath?r("button",{staticClass:"anexo"},[e._v("Ver anexo")]):e._e()]):e._e(),r("br"),"DKS"==t.agencia?r("img",{attrs:{src:a("f33d")}}):e._e(),"VMO"==t.agencia?r("img",{attrs:{src:a("baf3")}}):e._e(),"GLW"==t.agencia?r("img",{attrs:{src:a("add5")}}):e._e()])})),0):e._e()],1)},V=[],G={data:function(){return{items:[],loaded:!1}},methods:{refresh:function(){var e=this;this.items=[],this.loaded=!1,o.a.get("https://backend-dksmanager-com-br.umbler.net/demands?email="+localStorage.getItem("email")).then((function(t){e.items=t.data,e.loaded=!0}))},authorize:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:a=t.sent,a?e.refresh():e.$router.push("/login");case 4:case"end":return t.stop()}}),t)})))()},updateItem:function(e){var t=e.target.dataset.demandid,a=document.querySelector('select[data-demandid="'.concat(t,'"]')).value,r={id:t,status:a};o.a.post("https://backend-dksmanager-com-br.umbler.net/update-demand",r).then((function(e){var r=document.querySelector('b[data-demandid="'.concat(t,'"]'));r.innerHTML=a}))},whatsapp:function(e){var t=e.target.dataset.email;o.a.post("https://backend-dksmanager-com-br.umbler.net/user",{userMail:t}).then((function(e){return window.open("https://api.whatsapp.com/send?phone=+55".concat(e.data[0].whatsapp,"&text=Olá,%20boa%20tarde"),"_blank")}))}},mounted:function(){var e=this;this.authorize().then((function(){e.refresh()}))}},W=G,F=(a("dd28"),Object(d["a"])(W,T,V,!1,null,"067cf51c",null)),J=F.exports;r["a"].use(v["a"]);var B=[{path:"/abrir-chamado",name:"Abrir Chamado",component:U},{path:"/login",name:"Login",component:w},{path:"/registro",name:"Registro",component:q},{path:"/painel",name:"Painel",component:J},{path:"/*",redirect:"/abrir-chamado"}],H=new v["a"]({routes:B}),Q=H;r["a"].config.productionTip=!1,new r["a"]({router:Q,render:function(e){return e(p)}}).$mount("#app")},6231:function(e,t,a){},"763e":function(e,t,a){"use strict";var r=a("bc8c"),n=a.n(r);n.a},"85ec":function(e,t,a){},8818:function(e,t,a){"use strict";var r=a("3c3d"),n=a.n(r);n.a},"8b47":function(e,t,a){"use strict";var r=a("20a0"),n=a.n(r);n.a},add5:function(e,t,a){e.exports=a.p+"img/glw.2dbd2668.png"},baf3:function(e,t,a){e.exports=a.p+"img/vmo.ab7d260e.png"},bc8c:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.27a8601c.png"},cf1c:function(e,t,a){e.exports=a.p+"img/loading.fcb1817d.gif"},dd28:function(e,t,a){"use strict";var r=a("6231"),n=a.n(r);n.a},f33d:function(e,t,a){e.exports=a.p+"img/dks.c295af11.png"}});
//# sourceMappingURL=app.cde612fb.js.map