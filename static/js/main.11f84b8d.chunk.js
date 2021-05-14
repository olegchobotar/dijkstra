(this.webpackJsonpminti_fulkerson=this.webpackJsonpminti_fulkerson||[]).push([[0],{170:function(t,e,i){},314:function(t,e,i){},315:function(t,e,i){"use strict";i.r(e);var n=i(0),r=i.n(n),a=i(28),s=i.n(a),c=(i(170),i(13)),o=i(45),l=i(158),d=i(337),h=i(348),u=i(344),j=i(342),f=i(341),b=i(343),g=i(42),x=i(15),O=i(338),m=i(70),v=i.n(m),p=i(71),y=i.n(p),C=i(346),L=i(347),w=i(339),M=i(340),N=function(t,e){return Object.keys(t).reduce((function(i,n){return(null===i||t[n]<t[i])&&(e.includes(n)||(i=n)),i}),null)},I=function(t){var e=Object.assign({finish:1/0},t.start),i={finish:null};for(var n in t.start)i[n]="start";for(var r=[],a=N(e,r);a;){var s=e[a],c=t[a];for(var o in c){var l=s+c[o];e[o]||(e[o]=l,i[o]=a),e[o]>l&&(e[o]=l,i[o]=a)}r.push(a),a=N(e,r)}for(var d=["finish"],h=i.finish;h;)d.push(h),h=i[h];return d.reverse(),{distance:e.finish,path:d}},S=i(153),k=i.n(S),E=i(2),F=function(t){var e=t.nodes,i=t.vertices;return Object(E.jsx)(k.a,{graph:{nodes:Array.from(e).map((function(t){return{id:t,label:t,title:t}})),edges:i.map((function(t){return{from:t.start,to:t.finish,label:t.weight.toString()}}))},options:{layout:{hierarchical:!0},edges:{color:"#000000"},height:"500px"}})};function z(){this.adjMatrix=[],this.idList=[]}function T(){var t=[];this.dequeue=function(){return 0===t.length?void 0:t.shift()},this.enqueue=function(e){t.push(e)},this.getLength=function(){return t.length},this.isEmpty=function(){return 0==t.length},this.getContents=function(){return t}}function B(t,e,i){for(var n={},r={},a=[e],s=new T,c=0;c<t.idList.length;c++){var o=t.idList[c];n[o]=void 0,r[o]=1/0}for(s.enqueue(e),r[e]=0;!1===s.isEmpty();){var l=s.dequeue();if(void 0!==t.getNeighbours(l))for(var d=t.getNeighbours(l),h=0;h<d.length;h++)if(!a.includes(d[h])){if(n[d[h]]=l,r[d[h]]=r[l]+1,d[h]==i)return{path:q(n,e,i),dist:r[i],visited:a};a.push(d[h]),s.enqueue(d[h])}}return{path:[],dist:0,visited:a}}function q(t,e,i){for(var n=i,r=[];void 0!=n;)r.unshift(n),n=t[n];return r}function A(t){this.adjMatrix=[],this.idList=[],this.init=function(t){for(var e=0;e<t.adjMatrix.length;e++){for(var i=[],n=0;n<t.adjMatrix[e].length;n++)i.push(t.adjMatrix[e][n]);this.adjMatrix.push(i),this.idList.push(t.idList[e])}for(var r=0;r<t.adjMatrix.length;r++)for(var a=0;a<t.adjMatrix[r].length;a++)r!=a&&t.adjMatrix[r][a]!=-1/0&&(this.adjMatrix[a][r]=0)},this.init(t),this.minCapacity=function(t){for(var e=1/0,i=1;i<t.length;i++){for(var n,r,a=t[i-1],s=t[i],c=0;c<this.idList.length;c++)this.idList[c]==a&&(n=c),this.idList[c]==s&&(r=c);var o=this.adjMatrix[n][r];o<e&&(e=o)}return e},this.adjustEdgesInPath=function(t,e){for(var i=1;i<t.length;i++){var n=this.getIdIndex(t[i-1]),r=this.getIdIndex(t[i]);if(void 0==n||void 0==r)return void console.log("something went wrong...");this.adjMatrix[n][r];this.adjMatrix[n][r]-=e,this.adjMatrix[r][n]+=e}}}z.prototype.addNode=function(t){for(var e=0;e<this.idList.length;e++)if(this.idList[e]==t)return void console.log("A node with id",t,"already exists!");for(var i=[],n=0;n<this.idList.length;n++)i[n]=-1/0;this.adjMatrix.push(i),this.idList.push(t);for(var r=0;r<this.idList.length;r++)this.adjMatrix[r].push(-1/0)},z.prototype.deleteNode=function(t){for(var e,i=!1,n=0;n<this.idList.length;n++)if(this.idList[n]==t){i=!0,e=n;break}if(0!=i){for(var r=0;r<this.adjMatrix.length;r++)if(this.idList[r]==t){e=r;break}this.idList.splice(e,1),this.adjMatrix.splice(e,1);for(var a=0;a<this.adjMatrix.length;a++)this.adjMatrix[a].splice(e,1)}else console.log("The node with id",t,"wasn't found.")},z.prototype.addEdge=function(t,e,i){for(var n,r,a=!1,s=!1,c=0;c<this.idList.length;c++)this.idList[c]!=t&&this.idList[c]!=e||(this.idList[c]==t&&(a=!0,n=c),this.idList[c]==e&&(s=!0,r=c));1==(a&&s)?this.adjMatrix[n][r]=i:console.log("One of the nodes you provided aren't in the graph, so the edge can't be made.")},z.prototype.updateEdge=function(t,e,i){this.addEdge(t,e,i)},z.prototype.deleteEdge=function(t,e){for(var i,n,r=!1,a=!1,s=0;s<this.idList.length;s++)this.idList[s]!==t&&this.idList[s]!==e||(this.idList[s]===t&&(r=!0,i=s),this.idList[s]===e&&(a=!0,n=s));!0===(r&&a)?this.adjMatrix[i][n]=-1/0:console.log("One of the nodes you provided aren't in the graph, so the edge can't be made.")},z.prototype.print=function(){console.log("FROM\\TO",this.idList);for(var t=0;t<this.adjMatrix.length;t++)console.log("'"+this.idList[t]+"'",this.adjMatrix[t],"\n");console.log("\n")},z.prototype.getIdIndex=function(t){for(var e=0;e<this.idList.length;e++)if(t==this.idList[e])return e;console.log("node with id",t,"doesn't exist in this graph.")},z.prototype.getNeighbours=function(t){for(var e,i=!1,n=0;n<this.idList.length;n++)if(this.idList[n]==t){i=!0,e=n;break}if(0!=i){for(var r=[],a=0;a<this.adjMatrix[e].length;a++)this.adjMatrix[e][a]!==-1/0&&0!==this.adjMatrix[e][a]&&r.push(this.idList[a]);return r}console.log("The node with id",t,"wasn't found.")},A.prototype=new z;var D=function(t,e,i){var n=new z;return P(t,e,i).forEach((function(t){n.addNode(t)})),i.forEach((function(t){n.addEdge(t.start,t.finish,+t.weight)})),function(t,e,i){for(var n,r=new A(t);;){var a=(n=B(r,e,i)).path;if(0==a.length)break;var s=r.minCapacity(a);r.adjustEdgesInPath(a,s)}for(var c=n.visited,o=new Set,l=0,d=0;d<c.length;d++)for(var h=t.getNeighbours(c[d]),u=(t.getIdIndex(c[d]),0);u<h.length;u++)c.includes(h[u])||(o.add([c[d],h[u]]),l+=t.adjMatrix[t.getIdIndex(c[d])][t.getIdIndex(h[u])]);return console.log("MAX FLOW:",l),console.log("MIN CUT",o),{flow:l,cut:o}}(n,t,e)},P=function(t,e,i){var n=i.map((function(t){return t.start})),r=i.map((function(t){return t.finish}));return new Set([t,e].concat(Object(x.a)(n),Object(x.a)(r)))},R=Object(d.a)((function(t){return{formControl:{minWidth:120,marginRight:"1rem"}}})),W=function(t){return t.filter((function(t){return t&&t.weight&&t.finish&&t.start}))},J=function(){var t=R(),e={start:null,finish:null,weight:null},i=Object(n.useState)(null),r=Object(c.a)(i,2),a=r[0],s=r[1],o=Object(n.useState)(null),l=Object(c.a)(o,2),d=l[0],h=l[1],u=Object(n.useState)([e]),j=Object(c.a)(u,2),f=j[0],b=j[1],m=Object(n.useState)(null),p=Object(c.a)(m,2),N=p[0],S=p[1],k=Object(n.useState)([]),z=Object(c.a)(k,2),T=z[0],B=z[1],q=function(){S(null),B([])},A=function(){q(),b([].concat(Object(x.a)(f),[e]))},D=function(t){return a===t?"start":d===t?"finish":t},J=a&&d,_=!J||W(f).length<1,G=T.map((function(t){return"start"===t?a:"finish"===t?d:t}));return Object(E.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(E.jsxs)("div",{style:{width:"60%",alignItems:"flex-start",display:"flex",flexDirection:"column"},children:[Object(E.jsxs)("div",{style:{marginBottom:"2rem"},children:[Object(E.jsxs)(O.a,{className:t.formControl,children:[Object(E.jsx)(C.a,{htmlFor:"pointName",children:"\u041f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0430 \u0442\u043e\u0447\u043a\u0430"}),Object(E.jsx)(L.a,{"aria-describedby":"my-helper-text",onChange:function(t){q(),B([]),s(t.target.value)}})]}),Object(E.jsxs)(O.a,{className:t.formControl,children:[Object(E.jsx)(C.a,{htmlFor:"pointName",children:"\u041a\u0456\u043d\u0446\u0435\u0432\u0430 \u0442\u043e\u0447\u043a\u0430"}),Object(E.jsx)(L.a,{"aria-describedby":"my-helper-text",onChange:function(t){q(),B([]),h(t.target.value)}})]})]}),f.map((function(e,i){return e&&Object(E.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(E.jsxs)(O.a,{className:t.formControl,disabled:!J,children:[Object(E.jsx)(C.a,{children:"\u0412\u0445\u0456\u0434\u043d\u0430 \u0432\u0435\u0440\u0448\u0438\u043d\u0430"}),Object(E.jsx)(L.a,{"aria-describedby":"my-helper-text",onChange:function(t){return function(t,e){q();var i=Object(x.a)(f);i[t].start=e.target.value,b(i)}(i,t)}})]}),Object(E.jsxs)(O.a,{className:t.formControl,disabled:!J,children:[Object(E.jsx)(C.a,{children:"\u0412\u0438\u0445\u0456\u0434\u043d\u0430 \u0432\u0435\u0440\u0448\u0438\u043d\u0430"}),Object(E.jsx)(L.a,{"aria-describedby":"my-helper-text",onChange:function(t){return function(t,e){q();var i=Object(x.a)(f);i[t].finish=e.target.value,b(i)}(i,t)}})]}),Object(E.jsxs)(O.a,{className:t.formControl,disabled:!J,children:[Object(E.jsx)(C.a,{children:"\u0412\u0430\u0433\u0430"}),Object(E.jsx)(L.a,{"aria-describedby":"my-helper-text",onChange:function(t){return function(t,e){q();var i=Object(x.a)(f);i[t].weight=e.target.value,b(i)}(i,t)}})]}),f.length-1===i?Object(E.jsx)(w.a,{size:"medium",onClick:A,disabled:!e.start||!e.finish||!e.weight,children:Object(E.jsx)(v.a,{fontSize:"inherit"})}):Object(E.jsx)(w.a,{size:"medium",onClick:function(){return function(t){q();var e=f.map((function(e,i){return i!==t?e:null}));b(e)}(i)},children:Object(E.jsx)(y.a,{fontSize:"inherit"})})]},"".concat(i))})),Object(E.jsx)(M.a,{variant:"contained",color:"primary",disabled:_,onClick:function(){var t,e=W(f),i=(t={},Object(g.a)(t,D(a),{}),Object(g.a)(t,D(d),{}),t);e.forEach((function(t){var e=D(t.start),n=D(t.finish);i[e]||(i[e]={}),i[e][n]=+t.weight}));var n=I(i);S(n.distance),B(n.path)},children:"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438"}),Object(E.jsx)("div",{style:{marginTop:"2rem"},children:T.length>0&&Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(C.a,{children:["\u041d\u0430\u0439\u043a\u043e\u0440\u043e\u0442\u0448\u0438\u0439 \u0448\u043b\u044f\u0445 - ",N," (",G.join(" - "),")"]})})})]}),T.length>0&&Object(E.jsx)(F,{nodes:P(a,d,W(f)),vertices:W(f)})]})},_=Object(d.a)((function(t){return{formControl:{minWidth:120,marginRight:"1rem"}}})),G=function(t){return t.filter((function(t){return t&&t.weight&&t.finish&&t.start}))},U=function(){var t=_(),e={start:null,finish:null,weight:null},i=Object(n.useState)(null),r=Object(c.a)(i,2),a=r[0],s=r[1],o=Object(n.useState)(null),l=Object(c.a)(o,2),d=l[0],h=l[1],u=Object(n.useState)([e]),j=Object(c.a)(u,2),f=j[0],b=j[1],g=Object(n.useState)(null),m=Object(c.a)(g,2),p=m[0],N=m[1],I=Object(n.useState)([]),S=Object(c.a)(I,2),k=S[0],z=S[1],T=function(){B(),b([].concat(Object(x.a)(f),[e]))},B=function(){z([]),N(null)},q=a&&d,A=!q||G(f).length<1;return Object(E.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(E.jsxs)("div",{style:{width:"60%",alignItems:"flex-start",display:"flex",flexDirection:"column"},children:[Object(E.jsxs)("div",{style:{marginBottom:"2rem"},children:[Object(E.jsxs)(O.a,{className:t.formControl,children:[Object(E.jsx)(C.a,{htmlFor:"pointName",children:"\u041f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0430 \u0442\u043e\u0447\u043a\u0430"}),Object(E.jsx)(L.a,{"aria-describedby":"my-helper-text",onChange:function(t){B(),N(null),s(t.target.value)}})]}),Object(E.jsxs)(O.a,{className:t.formControl,children:[Object(E.jsx)(C.a,{htmlFor:"pointName",children:"\u041a\u0456\u043d\u0446\u0435\u0432\u0430 \u0442\u043e\u0447\u043a\u0430"}),Object(E.jsx)(L.a,{"aria-describedby":"my-helper-text",onChange:function(t){B(),N(null),h(t.target.value)}})]})]}),f.map((function(e,i){return e&&Object(E.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(E.jsxs)(O.a,{className:t.formControl,disabled:!q,children:[Object(E.jsx)(C.a,{children:"\u0412\u0445\u0456\u0434\u043d\u0430 \u0432\u0435\u0440\u0448\u0438\u043d\u0430"}),Object(E.jsx)(L.a,{"aria-describedby":"my-helper-text",onChange:function(t){return function(t,e){B();var i=Object(x.a)(f);i[t].start=e.target.value,b(i)}(i,t)}})]}),Object(E.jsxs)(O.a,{className:t.formControl,disabled:!q,children:[Object(E.jsx)(C.a,{children:"\u0412\u0438\u0445\u0456\u0434\u043d\u0430 \u0432\u0435\u0440\u0448\u0438\u043d\u0430"}),Object(E.jsx)(L.a,{"aria-describedby":"my-helper-text",onChange:function(t){return function(t,e){B();var i=Object(x.a)(f);i[t].finish=e.target.value,b(i)}(i,t)}})]}),Object(E.jsxs)(O.a,{className:t.formControl,disabled:!q,children:[Object(E.jsx)(C.a,{children:"\u0412\u0430\u0433\u0430"}),Object(E.jsx)(L.a,{"aria-describedby":"my-helper-text",onChange:function(t){return function(t,e){B();var i=Object(x.a)(f);i[t].weight=e.target.value,b(i)}(i,t)}})]}),f.length-1===i?Object(E.jsx)(w.a,{size:"medium",onClick:T,disabled:!e.start||!e.finish||!e.weight,children:Object(E.jsx)(v.a,{fontSize:"inherit"})}):Object(E.jsx)(w.a,{size:"medium",onClick:function(){return function(t){B();var e=f.map((function(e,i){return i!==t?e:null}));b(e)}(i)},children:Object(E.jsx)(y.a,{fontSize:"inherit"})})]},"".concat(i))})),Object(E.jsx)(M.a,{variant:"contained",color:"primary",disabled:A,onClick:function(){var t=G(f),e=D(a,d,t);N(e.flow),z(Array.from(e.cut))},children:"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438"}),Object(E.jsx)("div",{style:{marginTop:"2rem"},children:p&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(C.a,{children:["\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043f\u043e\u0442\u0456\u043a - ",p]}),Object(E.jsxs)(C.a,{children:["\u041c\u0456\u043d\u0456\u043c\u0430\u043b\u044c\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0440\u0456\u0437 - (",k.map((function(t){return t.join(", ")})).join(")("),")"]})]})})]}),p&&Object(E.jsx)(F,{nodes:P(a,d,G(f)),vertices:G(f)})]})};function X(t){var e=t.children,i=t.value,n=t.index,r=Object(l.a)(t,["children","value","index"]);return Object(E.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:i!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),{},{children:i===n&&Object(E.jsx)(b.a,{p:3,children:Object(E.jsx)(f.a,{children:e})})}))}function H(t){return{id:"simple-tab-".concat(t),"aria-controls":"simple-tabpanel-".concat(t)}}var K=Object(d.a)((function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper}}}));function Q(){var t=K(),e=r.a.useState(0),i=Object(c.a)(e,2),n=i[0],a=i[1];return Object(E.jsxs)("div",{className:t.root,children:[Object(E.jsx)(h.a,{position:"static",children:Object(E.jsxs)(u.a,{value:n,onChange:function(t,e){a(e)},"aria-label":"simple tabs example",children:[Object(E.jsx)(j.a,Object(o.a)({label:"\u041c\u0435\u0442\u043e\u0434 \u041c\u0456\u043d\u0442\u0456"},H(0))),Object(E.jsx)(j.a,Object(o.a)({label:"\u041c\u0435\u0442\u043e\u0434 \u0424\u043e\u0440\u0434\u0430-\u0424\u0430\u043b\u043a\u0435\u0440\u0441\u043e\u043d\u0430"},H(1)))]})}),Object(E.jsx)(X,{value:n,index:0,children:Object(E.jsx)(J,{})}),Object(E.jsx)(X,{value:n,index:1,children:Object(E.jsx)(U,{})})]})}i(314);var V=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(Q,{})})},Y=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,350)).then((function(e){var i=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;i(t),n(t),r(t),a(t),s(t)}))};s.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(V,{})}),document.getElementById("root")),Y()}},[[315,1,2]]]);
//# sourceMappingURL=main.11f84b8d.chunk.js.map