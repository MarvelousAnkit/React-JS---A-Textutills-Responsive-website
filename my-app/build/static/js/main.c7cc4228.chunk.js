(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a){},15:function(e,a,t){e.exports=t(26)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(13),c=t.n(o),r=(t(24),t(3)),s=(t(25),t(11));function i(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg bg-".concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(s.b,{className:"navbar-brand ".concat(e.color," "),to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.c,{className:"nav-link active ".concat(e.color,' aria-current="page'),to:"/About"},e.Home)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.c,{className:"nav-link ".concat(e.color),to:""},"Contact Us"))),n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-primary ".concat(e.color),type:"submit"},"Search")))),n.a.createElement("div",{className:"form-check form-switch ".concat(e.color)},n.a.createElement("input",{onClick:e.toglemode,className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",for:"flexSwitchCheckDefault"},e.text)))}var m=function(e){return n.a.createElement("div",{style:{height:"50px"}},e.alert&&n.a.createElement("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert"},n.a.createElement("strong",null,e.alert.message)," ",e.alert.type," ."))};function d(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container "},n.a.createElement("h1",{className:"text-center mb-3"}," ",e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"black":"white",color:"dark"===e.mode?"white":"black"},value:o,onChange:function(e){console.log("i luv u riya"),console.log("on change"),c(e.target.value)},placeholder:"Enter Your Word Here",id:"box",rows:"12"})),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2 ",onClick:function(){console.log("i luv u riya");var a=o.toUpperCase();c(a),e.showalert("Converted to Upper Case ","Successfully")}}," Convert To Uper Case"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2 ",onClick:function(){var a=o.toLowerCase();c(a),e.showalert("Converted to lowercase","successfully")}},"Convert To Lower Case "),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){c(""),e.showalert("Text is Cleared ","successfully")}},"Clear Text"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){document.querySelector("textarea").select(),document.execCommand("copy"),e.showalert(" Text is selected to clipboard"," successfully")}},"Copy Text"),n.a.createElement("div",{className:"container"},n.a.createElement("h2",null," Your Text Summary"),n.a.createElement("p",null," ",o.split(" ").filter(function(e){return 0!==e.length}).length," Words and ",o.length," Characters are there. Time Taken To Read ",o.split(" ").filter(function(e){return 0!==e.length}).length," Words is ",.0032*o.split(" ").filter(function(e){return 0!==e.length}).length,"  Minutes  "),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,0===o.length?"Nothing To Preview":o))))}function u(e){var a={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"black":"white"};return n.a.createElement("div",{className:"container",style:a},n.a.createElement("h1",{className:"my-3",style:a}," About Us"),n.a.createElement("div",{className:"accordion",style:a,id:"accordionExample"},n.a.createElement("div",{className:"accordion-item",style:a},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}var h=t(6),b=t(7),p=t(9),g=t(5),y=t(8),E=t(14),v=t.n(E),f=function(e){function a(){return Object(h.a)(this,a),Object(p.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{action:"/endpoint",method:"post"},n.a.createElement(v.a,null),n.a.createElement("input",{type:"text",name:"name",id:""}),n.a.createElement("input",{type:"text",name:"email",id:""}),n.a.createElement("br",null),n.a.createElement("button",{type:"submit"},"Send"))}}]),a}(l.Component),w=t(1);var N=function(){var e=Object(l.useState)("dark"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("text-light"),h=Object(r.a)(c,2),b=h[0],p=h[1],g=Object(l.useState)("dark"),y=Object(r.a)(g,2),E=y[0],v=y[1],N=Object(l.useState)(null),C=Object(r.a)(N,2),x=C[0],k=C[1],T=function(e,a){k({message:e,type:a}),setTimeout(function(){k(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null,n.a.createElement(i,{title:"TextArea",Home:"About",mode:t,toglemode:function(){"dark"===t?(o("light"),p("text-dark"),document.body.style.backgroundColor="white",document.body.style.color="black",v("light"),T("Light mode is set","successfully")):(o("dark"),p("text-light"),document.body.style.backgroundColor="black",document.body.style.color="white",v("dark"),T("Dark mode is set","successfully"))},text:E,color:b}),n.a.createElement(m,{alert:x}),n.a.createElement(w.c,null,n.a.createElement(w.a,{path:"/about",element:n.a.createElement(u,{mode:t})}),n.a.createElement(w.a,{path:"/",element:n.a.createElement(f,{mode:t})}),n.a.createElement(w.a,{path:"/c",element:n.a.createElement(d,{heading:"Try Text Analyzer : Enter the text to analyze below",showalert:T,mode:t})}))))},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null))),C()}},[[15,1,2]]]);
//# sourceMappingURL=main.c7cc4228.chunk.js.map