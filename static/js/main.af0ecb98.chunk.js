(this["webpackJsonpgithub-explorer"]=this["webpackJsonpgithub-explorer"]||[]).push([[0],{18:function(n,e,t){n.exports=t.p+"static/media/logo.04f6798f.svg"},35:function(n,e,t){n.exports=t.p+"static/media/githubLogo.fe82ec00.svg"},41:function(n,e,t){n.exports=t(68)},68:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(34),l=t.n(o),c=t(7),i=t(2),u=t(3),s=t(35),p=t.n(s);function m(){var n=Object(i.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #F0F0F5 url(",") no-repeat 70% top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 16px Roboto, sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  #root {\n    width: 960px;\n    margin: 0 auto;\n    padding: 40px 20px;\n  }\n"]);return m=function(){return n},n}var f=Object(u.a)(m(),p.a),d=t(1),b=t(10),g=t.n(b),x=t(40),h=t(17),E=t(9),v=t(8),y=t(39),O=t.n(y).a.create({baseURL:"https://api.github.com"}),j=t(18),k=t.n(j),w=t(15);function z(){var n=Object(i.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]);return z=function(){return n},n}function S(){var n=Object(i.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  & > div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    &:not(:last-of-type) {\n      margin-bottom: 16px;\n    }\n\n    a {\n      flex: 1;\n      background: #fff;\n      border-radius: 5px;\n      width: 100%;\n      padding: 24px;\n      display: block;\n      text-decoration: none;\n\n      display: flex;\n      align-items: center;\n      transition: transform 0.2s;\n\n      &:hover {\n        transform: translateX(10px);\n      }\n\n      & + a {\n        margin-top: 16px;\n      }\n\n      img {\n        width: 64px;\n        height: 64px;\n        border-radius: 50%;\n      }\n\n      div {\n        flex: 1;\n        margin: 0 16px;\n\n        strong {\n          font-size: 20px;\n          color: #3d3d4d;\n        }\n\n        p {\n          font-size: 18px;\n          color: #a8a8b3;\n          margin-top: 4px;\n        }\n      }\n\n      svg {\n        margin-left: auto;\n        color: #cbcbd6;\n      }\n    }\n\n    & > svg {\n      display: inline-block;\n      margin-left: 8px;\n      transition: all 0.2s;\n      color: #cbcbd6;\n      cursor: pointer;\n      &:hover {\n        color: #c53030;\n        transform: scale(1.2);\n        transform: rotate(90deg);\n      }\n    }\n  }\n"]);return S=function(){return n},n}function _(){var n=Object(i.a)(["\n        border-color: #c53030;\n      "]);return _=function(){return n},n}function F(){var n=Object(i.a)(["\n  margin-top: 40px;\n  max-width: 700px;\n\n  display: flex;\n\n  input {\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n    border: 0;\n    border-radius: 5px 0 0 5px;\n    color: #3a3a3a;\n    border: 2px solid #fff;\n    border-right: 0;\n\n    ","\n\n    &::placeholder {\n      color: #a8a8b3;\n    }\n  }\n\n  button {\n    width: 210px;\n    height: 70px;\n    background: #04d361;\n    border-radius: 0 5px 5px 0;\n    border: 0;\n    color: #fff;\n    font-weight: bold;\n    transition: background-color 0.2s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return F=function(){return n},n}function G(){var n=Object(i.a)(["\n  font-size: 48px;\n  color: #3a3a3a;\n  line-height: 56px;\n  max-width: 450px;\n  margin-top: 80px;\n"]);return G=function(){return n},n}var I=u.c.h1(G()),J=u.c.form(F(),(function(n){return n.hasError&&Object(u.b)(_())}),Object(w.a)(.2,"#04d361")),R=u.c.div(S()),T=u.c.span(z()),B=function(){var n=Object(r.useState)(""),e=Object(E.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)(""),i=Object(E.a)(l,2),u=i[0],s=i[1],p=Object(r.useState)((function(){var n=localStorage.getItem("@GithubExplorer:repositories");return n?JSON.parse(n):[]})),m=Object(E.a)(p,2),f=m[0],d=m[1];function b(){return(b=Object(h.a)(g.a.mark((function n(e){var r,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return s("Type author/repository-name"),n.abrupt("return");case 4:return n.prev=4,n.next=7,O.get("repos/".concat(t));case 7:r=n.sent,a=r.data,d([].concat(Object(x.a)(f),[a])),o(""),s(""),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),s("Repository not found.");case 17:case"end":return n.stop()}}),n,null,[[4,14]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){localStorage.setItem("@GithubExplorer:repositories",JSON.stringify(f))}),[f]),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:k.a,alt:"Github Explorer"}),a.a.createElement(I,null,"Explore Github repositories."),a.a.createElement(J,{hasError:!!u,onSubmit:function(n){return b.apply(this,arguments)}},a.a.createElement("input",{placeholder:"Type the repository name",value:t,onChange:function(n){return o(n.target.value)}}),a.a.createElement("button",{type:"submit"},"Search")),u&&a.a.createElement(T,null,u),a.a.createElement(R,null,f.map((function(n){return a.a.createElement("div",{key:n.full_name},a.a.createElement(c.b,{to:"/repository/".concat(n.full_name)},a.a.createElement("img",{src:n.owner.avatar_url,alt:n.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,n.full_name),a.a.createElement("p",null,n.description)),a.a.createElement(v.b,{size:20})),a.a.createElement(v.d,{size:20,onClick:function(){return function(n){var e=f.filter((function(e){return e.full_name!==n}));d(e)}(n.full_name)}}))}))))};function C(){var n=Object(i.a)(["\n  display: block;\n  margin: 25% auto;\n  animation: "," 4s linear infinite;\n"]);return C=function(){return n},n}function L(){var n=Object(i.a)(["\n  margin-top: 80px;\n  font-size: 24px;\n  color: ",";\n"]);return L=function(){return n},n}function N(){var n=Object(i.a)(["\n  margin-top: 80px;\n\n  a {\n    background: #fff;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    div {\n      flex: 1;\n      margin: 0 16px;\n\n      strong {\n        font-size: 20px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #a8a8b3;\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: #cbcbd6;\n    }\n  }\n"]);return N=function(){return n},n}function X(){var n=Object(i.a)(["\n  margin-top: 80px;\n\n  header {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #737380;\n        margin-top: 4px;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n      & + li {\n        margin-left: 80px;\n      }\n\n      strong {\n        display: block;\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      p {\n        display: block;\n        margin-top: 4px;\n        color: #6c6c80;\n      }\n    }\n  }\n"]);return X=function(){return n},n}function D(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #a8a8b3;\n    transition: color 0.2s;\n    cursor: pointer;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]);return D=function(){return n},n}function M(){var n=Object(i.a)(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"]);return M=function(){return n},n}var P=Object(u.d)(M()),U=u.c.header(D(),Object(w.a)("0.2","#a8a8b3")),q=u.c.section(X()),A=u.c.div(N()),H=u.c.p(L(),Object(w.a)(.2,"#a8a8b3")),K=Object(u.c)(v.c)(C(),P),Q=function(){var n=Object(r.useState)(null),e=Object(E.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)([]),i=Object(E.a)(l,2),u=i[0],s=i[1],p=Object(d.f)().params;return Object(r.useEffect)((function(){function n(){return(n=Object(h.a)(g.a.mark((function n(){var e,t,r,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([O.get("repos/".concat(p.repository)),O.get("repos/".concat(p.repository,"/issues"))]);case 2:e=n.sent,t=Object(E.a)(e,2),r=t[0],a=t[1],o(r.data),s(a.data);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[p.repository]),a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,a.a.createElement(c.b,{to:"/"},a.a.createElement("img",{src:k.a,alt:"Github Explorer"})),a.a.createElement(c.b,{to:"/"},a.a.createElement(v.a,{size:16}),"Back")),t?a.a.createElement(a.a.Fragment,null,a.a.createElement(q,null,a.a.createElement("header",null,a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,t.full_name),a.a.createElement("p",null,t.description))),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,t.stargazers_count),a.a.createElement("p",null,"Stars")),a.a.createElement("li",null,a.a.createElement("strong",null,t.forks_count),a.a.createElement("p",null,"Forks")),a.a.createElement("li",null,a.a.createElement("strong",null,t.full_name),a.a.createElement("p",null,"Open Issues")))),u.length>0?a.a.createElement(A,null,u.map((function(n){return a.a.createElement("a",{key:n.id,href:n.html_url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("div",null,a.a.createElement("strong",null,n.title),a.a.createElement("p",null,n.user.login)),a.a.createElement(v.b,{size:20}))}))):a.a.createElement(H,null,"There are no open issues.")):a.a.createElement(K,{size:80}))},V=function(){return a.a.createElement(d.c,null,a.a.createElement(d.a,{path:"/",exact:!0,component:B}),a.a.createElement(d.a,{path:"/repository/:repository+",component:Q}))},W=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(c.a,null,a.a.createElement(V,null)))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.af0ecb98.chunk.js.map