(this["webpackJsonpchecksum-converter"]=this["webpackJsonpchecksum-converter"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t){},38:function(e,t){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),r=n.n(s),i=n(24),a=n.n(i),o=(n(30),n(9)),u=n(16);n(50);var j=function(){var e=Object(s.useState)("0x3Dd03d7d6c3137f1Eb7582Ba5957b8A2e26f304A"),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(s.useState)(30),a=Object(o.a)(i,2),j=a[0],d=a[1],l=Object(s.useState)(null),b=Object(o.a)(l,2),h=b[0],O=b[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:"Quick Checksum Converter"}),Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{children:Object(c.jsxs)("label",{children:["Address: ",Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)}})]})}),Object(c.jsx)("p",{children:Object(c.jsxs)("label",{children:["Chain Id: ",Object(c.jsx)("input",{type:"text",value:j,onChange:function(e){return d(parseInt(e.target.value))}})]})}),Object(c.jsx)("p",{children:Object(c.jsx)("button",{onClick:function(){return console.log("convert it!"),Object(u.isValidAddress)(n)?isNaN(j)&&""!==j.toString()?O("[ERROR] ChainId must be a number, or 0"):void O(Object(u.toChecksumAddress)(n,0===j?null:j)):O("[ERROR] Not a valid address")},children:"Convert It!"})})]}),Object(c.jsx)("section",{children:h&&Object(c.jsx)("div",{className:"response",children:h})})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),d()}},[[51,1,2]]]);
//# sourceMappingURL=main.1f2b06e1.chunk.js.map