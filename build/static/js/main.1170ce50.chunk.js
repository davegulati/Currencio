(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),o=t(2),s=t.n(o),m=t(5),u=t(1),i={currenciesURL:"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json",currencyRatesURL:"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"},d=(t(13),function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),d=o[0],p=o[1],f=Object(n.useState)(null),E=Object(u.a)(f,2),b=E[0],y=E[1],N=Object(n.useState)(null),g=Object(u.a)(N,2),v=g[0],h=g[1],w=Object(n.useState)(null),C=Object(u.a)(w,2),x=C[0],j=C[1],k=Object(n.useState)(null),B=Object(u.a)(k,2),O=B[0],U=B[1],D=Object(n.useState)(0),F=Object(u.a)(D,2),S=F[0],L=F[1],I=function(){var e=Object(m.a)(s.a.mark(function e(){var a,t,n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,fetch(i.currenciesURL);case 3:return a=e.sent,e.next=6,a.json();case 6:for(r in t=e.sent,n=[],t)n.push({currencyCode:r,currencyName:t[r]});p(n),c(!1);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){null!==b&&fetch(i.currencyRatesURL+b+".json").then(function(e){return e.json()}).then(function(e){j(e[b])})},[b]),Object(n.useEffect)(function(){null!==v&&fetch(i.currencyRatesURL+v+".json").then(function(e){return e.json()}).then(function(e){U(e[v])})},[v]),Object(n.useEffect)(function(){I()},[]),r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"container d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"loader"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container card bg-light mb-5 p-4"},r.a.createElement("div",{className:"row g-sm-3 g-lg-4 align-items-center"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("label",{htmlFor:"amount",className:"form-label"},"Amount"),r.a.createElement("input",{type:"number",className:"form-control",id:"amount",onChange:function(e){""===e.target.value?L(0):L(e.target.value)}})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("label",{htmlFor:"baseCurrencyDropdownButton",className:"form-label"},"From"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn white-button text-start dropdown-toggle overflow-hidden text-capitalize w-100",type:"button",id:"baseCurrencyDropdownButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Select"),r.a.createElement("div",{className:"dropdown-menu overflow-auto currency-dropdown","aria-labelledby":"baseCurrencyDropdownButton"},d.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{key:e.currencyCode,className:"dropdown-item text-capitalize overflowx-auto",value:e.currencyCode,onClick:function(){document.getElementById("baseCurrencyDropdownButton").innerHTML="<span class='currency-flag currency-flag-".concat(e.currencyCode,"'></span> ").concat(e.currencyCode.toUpperCase()," - ").concat(e.currencyName),y(e.currencyCode)}},r.a.createElement("span",{className:"currency-flag currency-flag-"+e.currencyCode})," ",e.currencyCode.toUpperCase()," - ",r.a.createElement("span",{className:"text-secondary"},e.currencyName)," "))})))),r.a.createElement("div",{className:"col-lg-1"},r.a.createElement("label",{htmlFor:"swap-button",className:"form-label"},"Swap"),r.a.createElement("button",{id:"swap-button",className:"d-block btn btn-info w-100",onClick:function(){var e=document.getElementById("baseCurrencyDropdownButton").innerHTML;document.getElementById("baseCurrencyDropdownButton").innerHTML=document.getElementById("conversionCurrencyDropdownButton").innerHTML,document.getElementById("conversionCurrencyDropdownButton").innerHTML=e;var a=b;y(v),h(a)}},r.a.createElement("i",{className:"fas fa-sync"}))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("label",{htmlFor:"conversionCurrencyDropdownButton",className:"form-label"},"To"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn white-button text-start dropdown-toggle overflow-hidden text-capitalize w-100",type:"button",id:"conversionCurrencyDropdownButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Select"),r.a.createElement("div",{className:"dropdown-menu overflow-auto currency-dropdown","aria-labelledby":"conversionCurrencyDropdownButton"},d.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{key:e.currencyCode,className:"dropdown-item text-capitalize overflowx-auto",value:e.currencyCode,onClick:function(){document.getElementById("conversionCurrencyDropdownButton").innerHTML="<span class='currency-flag currency-flag-".concat(e.currencyCode,"'></span> ").concat(e.currencyCode.toUpperCase()," - ").concat(e.currencyName),h(e.currencyCode)}},r.a.createElement("span",{className:"currency-flag currency-flag-"+e.currencyCode})," ",e.currencyCode.toUpperCase()," - ",r.a.createElement("span",{className:"text-secondary"},e.currencyName)," "))})))),b&&v&&x&&O?r.a.createElement("div",{className:"text-dark text-center fs-3 fw-bold mt-4"},r.a.createElement("p",{className:"m-0 p-0"},S," ",b.toUpperCase()," = ",x[v]*S," ",v.toUpperCase())):r.a.createElement(r.a.Fragment,null),b&&v&&x&&O?r.a.createElement("div",{className:"text-dark text-center fs-3 mt-2"},r.a.createElement("p",{className:"lead m-0 p-0"},"1 ",b.toUpperCase()," = ",x[v]," ",v.toUpperCase()),r.a.createElement("p",{className:"lead m-0 p-0"},"1 ",v.toUpperCase()," = ",O[b]," ",b.toUpperCase())):r.a.createElement(r.a.Fragment,null)))))}),p=function(){return r.a.createElement("div",{className:"bg-light"},r.a.createElement("div",{className:"container p-5"},r.a.createElement("h1",{className:"text-center text-dark pb-2"},"Tools"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"card text-center m-2"},r.a.createElement("div",{className:"fs-1 mt-2"},r.a.createElement("i",{className:"fab fa-react"}," ",r.a.createElement("i",{className:"fab fa-bootstrap"}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Front-End"),r.a.createElement("div",{className:"card-text"},"Currencio is built using ",r.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React")," and ",r.a.createElement("a",{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"},"Bootstrap"),"!")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"card text-center m-2"},r.a.createElement("div",{className:"fs-1 mt-2"},r.a.createElement("i",{className:"fas fa-database"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"API"),r.a.createElement("div",{className:"card-text"},"Currencio is powered by ",r.a.createElement("a",{href:"https://github.com/fawazahmed0/currency-api",target:"_blank",rel:"noopener noreferrer"},"Fawaz Ahmed's Currency API"),".")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"card text-center m-2"},r.a.createElement("div",{className:"fs-1 mt-2"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Source Code"),r.a.createElement("div",{className:"card-text"},"View the ",r.a.createElement("a",{href:"https://github.com/davegulati/Currencio",target:"_blank",rel:"noopener noreferrer"},"GitHub repository"),".")))))))},f=function(){return r.a.createElement("div",{className:"container p-5"},r.a.createElement("div",{className:"text-center text-dark"},r.a.createElement("p",{className:"text-light m-0"},r.a.createElement("a",{className:"text-light text-decoration-none fw-bold",href:"https://davegulati.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"far fa-copyright"})," Dave Gulati"))))},E=function(){return r.a.createElement("nav",{className:"container text-light text-center pt-3 pb-3"},r.a.createElement("h1",{className:"display-1 site-title"},"Currencio"),r.a.createElement("p",{className:"lead"},"Made with ",r.a.createElement("i",{className:"fas fa-heart"})," by ",r.a.createElement("a",{className:"text-light text-decoration-none fw-bold",href:"https://davegulati.com/",target:"_blank",rel:"noopener noreferrer"},"Dave Gulati")))},b=(t(14),function(){return r.a.createElement("div",{className:"bg-dark"},r.a.createElement("div",{className:"container p-5"},r.a.createElement("h1",{className:"text-center text-light pb-2"},"Feedback"),r.a.createElement("p",{className:"text-light text-center"},"If you have feedback or are experiencing any issues, please ",r.a.createElement("a",{href:"https://davegulati.com/contact",target:"_blank",rel:"noopener noreferrer"},"get in touch"),"!")))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{className:"container-fluid header"},r.a.createElement(E,null),r.a.createElement(d,null)),r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(f,null)),document.getElementById("root"))},6:function(e,a,t){e.exports=t(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.1170ce50.chunk.js.map