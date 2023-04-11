var je=Object.defineProperty;var Ae=(s,e,t)=>e in s?je(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var V=(s,e,t)=>(Ae(s,typeof e!="symbol"?e+"":e,t),t);import{S as Ge,i as Ce,s as Te,a as j,k as m,q as T,K as Pe,h,c as A,l as b,m as g,r as P,n as c,p as ce,b as K,G as n,L as ue,M as Ne,H as oe,N as ke,o as Ie,u as we,w as ve}from"../chunks/index.af8f3d20.js";import{b as xe}from"../chunks/paths.b803039e.js";class J{constructor(){V(this,"data",0);V(this,"next",null)}static create(e,t){const r=new J;return r.data=e,r.next=t,r}}class Q{constructor(e){V(this,"adj",[]);V(this,"edges",0);V(this,"vertices",0);V(this,"coords",[]);if(e<0)throw new Error("Invalid number of vertices");this.adj=new Array(e),this.vertices=e,this.coords=new Array(e);for(let t=0;t<this.coords.length;t++)this.coords[t]={x:0,y:0}}validateVertex(e){if(e<0||e>this.vertices)throw new Error("Invalid vertex "+e)}addEdge(e,t){this.validateVertex(e),this.validateVertex(t),this.edges++,this.adj[t]=J.create(e,this.adj[t]),this.adj[e]=J.create(t,this.adj[e])}toString(){let e="",t=null;for(let r=0;r<this.adj.length;r++){for(e+=`${r}: `,t=this.adj[r];t!=null;)e+=`${t.data} `,t=t.next;e+=`
`}return e}static fromString(e){const t=e.split(`
`),[r,l]=t.splice(0,2),o=new Q(Number(r));let i=0;for(;i<t.length;i++){const[S,G]=t[i].split(" ");o.addEdge(Number(S),Number(G))}if(i!==Number(l))throw new Error(`${i} === ${l} The given string is problably bad formatted`);return o}}const Ve=`6
8
0 5
2 4
2 3
1 2
0 1
3 4
3 5
0 2`;function ze(s,e=1){s.coords[0].x=10*e,s.coords[0].y=10*e,s.coords[1].x=30*e,s.coords[1].y=30*e,s.coords[2].x=60*e,s.coords[2].y=10*e,s.coords[3].x=45*e,s.coords[3].y=45*e,s.coords[4].x=60*e,s.coords[4].y=50*e,s.coords[5].x=10*e,s.coords[5].y=50*e}const Oe=`8
7
1 2
1 5
1 4
4 2
4 5
2 6
3 7`;function Be(s,e=1){s.coords[0].x=10*e,s.coords[0].y=10*e,s.coords[2].x=20*e,s.coords[2].y=20*e,s.coords[6].x=20*e,s.coords[6].y=40*e,s.coords[4].x=30*e,s.coords[4].y=10*e,s.coords[5].x=40*e,s.coords[5].y=35*e,s.coords[1].x=50*e,s.coords[1].y=15*e,s.coords[3].x=70*e,s.coords[3].y=10*e,s.coords[7].x=80*e,s.coords[7].y=25*e}class Fe{constructor(e,t=0){V(this,"visited");V(this,"bfsTree");this.graph=e,this.visited=new Array(e.vertices).fill(!1),this.bfsTree=new Q(e.vertices),this.bfs(t)}bfs(e){const t=[];let r=e++;for(r=0;r<this.graph.adj.length;r++)if(!this.visited[r])for(t.push(r),this.visited[r]=!0;t.length!==0;){const l=t.shift();let o=this.graph.adj[l];for(;o;)this.visited[o.data]||(this.visited[o.data]=!0,this.bfsTree.addEdge(o.data,l),t.push(o.data)),o=o.next}}distance(e,t){return this.graph.edges+e+t}}function pe(s,e,t){const r=s.slice();return r[8]=e[t],r[15]=t,r}function _e(s){let e,t=s[8].label+"",r,l;return{c(){e=m("option"),r=T(t),l=j(),this.h()},l(o){e=b(o,"OPTION",{});var i=g(e);r=P(i,t),l=A(i),i.forEach(h),this.h()},h(){e.__value=s[15],e.value=e.__value},m(o,i){K(o,e,i),n(e,r),n(e,l)},p:oe,d(o){o&&h(e)}}}function me(s){let e,t=s[0].toString()+"",r,l;return{c(){e=m("pre"),r=T(t),l=T(" ")},l(o){e=b(o,"PRE",{});var i=g(e);r=P(i,t),l=P(i," "),i.forEach(h)},m(o,i){K(o,e,i),n(e,r),n(e,l)},p(o,i){i&1&&t!==(t=o[0].toString()+"")&&we(r,t)},d(o){o&&h(e)}}}function be(s){let e,t=s[0].toString()+"",r,l;return{c(){e=m("pre"),r=T(t),l=T(" ")},l(o){e=b(o,"PRE",{});var i=g(e);r=P(i,t),l=P(i," "),i.forEach(h)},m(o,i){K(o,e,i),n(e,r),n(e,l)},p(o,i){i&1&&t!==(t=o[0].toString()+"")&&we(r,t)},d(o){o&&h(e)}}}function He(s){let e,t,r,l,o,i,S,G,f,F,w,u,N,R,q,C,y,k,B,W,X,E,H,Y,Z,I,$,L,ee,te,se,le,D=s[6],v=[];for(let a=0;a<D.length;a+=1)v[a]=_e(pe(s,D,a));let p=s[0]&&me(s),_=s[0]&&be(s);return{c(){e=j(),t=m("div"),r=m("a"),l=T("Início"),o=j(),i=m("h1"),S=T("Grafos > BFS"),G=j(),f=m("select");for(let a=0;a<v.length;a+=1)v[a].c();F=j(),w=m("div"),u=m("div"),N=m("h3"),R=T("Original"),q=j(),C=m("canvas"),y=j(),k=m("p"),B=T("Grafo em texto:"),W=j(),p&&p.c(),X=j(),E=m("div"),H=m("h3"),Y=T("BFS"),Z=j(),I=m("canvas"),$=j(),L=m("p"),ee=T("Grafo em texto:"),te=j(),_&&_.c(),this.h()},l(a){Pe("svelte-1hb1oo8",document.head).forEach(h),e=A(a),t=b(a,"DIV",{id:!0,style:!0});var d=g(t);r=b(d,"A",{href:!0});var M=g(r);l=P(M,"Início"),M.forEach(h),o=A(d),i=b(d,"H1",{});var ie=g(i);S=P(ie,"Grafos > BFS"),ie.forEach(h),G=A(d),f=b(d,"SELECT",{id:!0,class:!0});var ne=g(f);for(let re=0;re<v.length;re+=1)v[re].l(ne);ne.forEach(h),F=A(d),w=b(d,"DIV",{id:!0,class:!0});var U=g(w);u=b(U,"DIV",{class:!0});var z=g(u);N=b(z,"H3",{class:!0});var ae=g(N);R=P(ae,"Original"),ae.forEach(h),q=A(z),C=b(z,"CANVAS",{width:!0,height:!0,id:!0,class:!0}),g(C).forEach(h),y=A(z),k=b(z,"P",{});var de=g(k);B=P(de,"Grafo em texto:"),de.forEach(h),W=A(z),p&&p.l(z),z.forEach(h),X=A(U),E=b(U,"DIV",{class:!0});var O=g(E);H=b(O,"H3",{class:!0});var he=g(H);Y=P(he,"BFS"),he.forEach(h),Z=A(O),I=b(O,"CANVAS",{width:!0,height:!0,id:!0,class:!0}),g(I).forEach(h),$=A(O),L=b(O,"P",{});var fe=g(L);ee=P(fe,"Grafo em texto:"),fe.forEach(h),te=A(O),_&&_.l(O),O.forEach(h),U.forEach(h),d.forEach(h),this.h()},h(){document.title="Grafos > BFS",c(r,"href",xe+"/"),c(f,"id","select-graph-option"),c(f,"class","svelte-17zj21r"),c(N,"class","svelte-17zj21r"),c(C,"width","350"),c(C,"height","300"),c(C,"id","canvas-original"),c(C,"class","svelte-17zj21r"),c(u,"class","canvas-pre svelte-17zj21r"),c(H,"class","svelte-17zj21r"),c(I,"width","350"),c(I,"height","300"),c(I,"id","canvas-bfs"),c(I,"class","svelte-17zj21r"),c(E,"class","canvas-pre svelte-17zj21r"),c(w,"id","two-panel"),c(w,"class","svelte-17zj21r"),c(t,"id","main"),ce(t,"display","flex"),ce(t,"flex-direction","column")},m(a,x){K(a,e,x),K(a,t,x),n(t,r),n(r,l),n(t,o),n(t,i),n(i,S),n(t,G),n(t,f);for(let d=0;d<v.length;d+=1)v[d]&&v[d].m(f,null);ue(f,s[5]),n(t,F),n(t,w),n(w,u),n(u,N),n(N,R),n(u,q),n(u,C),s[10](C),n(u,y),n(u,k),n(k,B),n(u,W),p&&p.m(u,null),n(w,X),n(w,E),n(E,H),n(H,Y),n(E,Z),n(E,I),s[11](I),n(E,$),n(E,L),n(L,ee),n(E,te),_&&_.m(E,null),se||(le=Ne(f,"change",s[9]),se=!0)},p(a,[x]){if(x&64){D=a[6];let d;for(d=0;d<D.length;d+=1){const M=pe(a,D,d);v[d]?v[d].p(M,x):(v[d]=_e(M),v[d].c(),v[d].m(f,null))}for(;d<v.length;d+=1)v[d].d(1);v.length=D.length}x&32&&ue(f,a[5]),a[0]?p?p.p(a,x):(p=me(a),p.c(),p.m(u,null)):p&&(p.d(1),p=null),a[0]?_?_.p(a,x):(_=be(a),_.c(),_.m(E,null)):_&&(_.d(1),_=null)},i:oe,o:oe,d(a){a&&h(e),a&&h(t),ke(v,a),s[10](null),p&&p.d(),s[11](null),_&&_.d(),se=!1,le()}}}const ge=1;function ye(s,e,t="#000"){const r=Number(e.getAttribute("width")),l=Number(e.getAttribute("height"));s.fillStyle=t,s.fillRect(0,0,r,l)}function Ee(s,e,t){s.font="18px Helvetica";const r=5;for(let l=0;l<e.length;l++)s.fillStyle="#fff",s.strokeStyle="#0f0",s.beginPath(),s.arc(t[l].x,t[l].y,12,0,2*Math.PI),s.fill(),s.stroke(),s.fillStyle="#000",s.fillText(String(l),t[l].x-r,t[l].y+r)}function Se(s,e,t){let r=null,l=null;s.fillStyle="#fff",s.strokeStyle="#0f0";for(let o=0;o<e.length;o++)for(r=e[o],l=r;l!=null;)s.beginPath(),s.moveTo(t[o].x,t[o].y),s.lineTo(t[l.data].x,t[l.data].y),s.stroke(),l=l.next}function De(s,e,t){let r,l,o,i,S,G,f;const F=[{graphAsStr:Ve,setCoords:ze,label:"tiny CG"},{graphAsStr:Oe,setCoords:Be,label:"tiny PA"}];let w=ge,u=F[ge];Ie(()=>{t(2,S=i.getContext("2d")),t(4,f=G.getContext("2d")),S&&f&&N(S,f,u)});function N(y,k,B){t(0,r=Q.fromString(B.graphAsStr)),B.setCoords(r,3),ye(y,i),Se(y,r.adj,r.coords),Ee(y,r.adj,r.coords),l=new Fe(r),o=l.bfsTree,B.setCoords(o,3),ye(k,G),Se(k,o.adj,o.coords),Ee(k,o.adj,o.coords)}const R=y=>{t(5,w=Number(y.currentTarget.value)),S&&f&&N(S,f,u)};function q(y){ve[y?"unshift":"push"](()=>{i=y,t(1,i)})}function C(y){ve[y?"unshift":"push"](()=>{G=y,t(3,G)})}return[r,i,S,G,f,w,F,N,u,R,q,C]}class Me extends Ge{constructor(e){super(),Ce(this,e,De,He,Te,{})}}export{Me as default};