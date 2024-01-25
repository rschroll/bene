(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const oe=(e,t)=>e===t,B={equals:oe};let Q=z;const b=1,T=2,Z={owned:null,cleanups:null,context:null,owner:null},q={};var w=null;let V=null,u=null,g=null,m=null,j=0;function fe(e,t){const n=u,r=w,s=e.length===0,i=t===void 0?r:t,o=s?Z:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=s?e:()=>e(()=>S(()=>W(o)));w=o,u=null;try{return A(l,!0)}finally{u=n,w=r}}function P(e,t){t=t?Object.assign({},B,t):B;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),Y(n,s));return[X.bind(n),r]}function G(e,t,n){const r=I(e,t,!0,b);L(r)}function _(e,t,n){const r=I(e,t,!1,b);L(r)}function J(e,t,n){Q=we;const r=I(e,t,!1,b);(!n||!n.render)&&(r.user=!0),m?m.push(r):L(r)}function ue(e,t,n){n=n?Object.assign({},B,n):B;const r=I(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,L(r),X.bind(r)}function ae(e){return e&&typeof e=="object"&&"then"in e}function ce(e,t,n){let r,s,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,i=t||{}):(r=e,s=t,i=n||{});let o=null,l=q,f=!1,h="initialValue"in i,a=typeof r=="function"&&ue(r);const y=new Set,[v,U]=(i.storage||P)(i.initialValue),[N,se]=P(void 0),[re,ie]=P(void 0,{equals:!1}),[F,H]=P(h?"ready":"unresolved");function C(c,d,p,E){return o===c&&(o=null,E!==void 0&&(h=!0),(c===l||d===l)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(E,{value:d})),l=q,le(d,p)),d}function le(c,d){A(()=>{d===void 0&&U(()=>c),H(d!==void 0?"errored":h?"ready":"unresolved"),se(d);for(const p of y.keys())p.decrement();y.clear()},!1)}function k(){const c=he,d=v(),p=N();if(p!==void 0&&!o)throw p;return u&&!u.user&&c&&G(()=>{re(),o&&(c.resolved||y.has(c)||(c.increment(),y.add(c)))}),d}function $(c=!0){if(c!==!1&&f)return;f=!1;const d=a?a():r;if(d==null||d===!1){C(o,S(v));return}const p=l!==q?l:S(()=>s(d,{value:v(),refetching:c}));return ae(p)?(o=p,"value"in p?(p.status==="success"?C(o,p.value,void 0,d):C(o,void 0,void 0,d),p):(f=!0,queueMicrotask(()=>f=!1),A(()=>{H(h?"refreshing":"pending"),ie()},!1),p.then(E=>C(p,E,void 0,d),E=>C(p,void 0,te(E),d)))):(C(o,p,void 0,d),p)}return Object.defineProperties(k,{state:{get:()=>F()},error:{get:()=>N()},loading:{get(){const c=F();return c==="pending"||c==="refreshing"}},latest:{get(){if(!h)return k();const c=N();if(c&&!o)throw c;return v()}}}),a?G(()=>$(!1)):$(!1),[k,{refetch:$,mutate:U}]}function S(e){if(u===null)return e();const t=u;u=null;try{return e()}finally{u=t}}function de(e){J(()=>S(e))}let he;function X(){if(this.sources&&this.state)if(this.state===b)L(this);else{const e=g;g=null,A(()=>R(this),!1),g=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function Y(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&A(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],o=V&&V.running;o&&V.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?g.push(i):m.push(i),i.observers&&ee(i)),o||(i.state=b)}if(g.length>1e6)throw g=[],new Error},!1)),t}function L(e){if(!e.fn)return;W(e);const t=j;pe(e,e.value,t)}function pe(e,t,n){let r;const s=w,i=u;u=w=e;try{r=e.fn(t)}catch(o){return e.pure&&(e.state=b,e.owned&&e.owned.forEach(W),e.owned=null),e.updatedAt=n+1,ne(o)}finally{u=i,w=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Y(e,r):e.value=r,e.updatedAt=n)}function I(e,t,n,r=b,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==Z&&(w.owned?w.owned.push(i):w.owned=[i]),i}function O(e){if(e.state===0)return;if(e.state===T)return R(e);if(e.suspense&&S(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<j);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===b)L(e);else if(e.state===T){const r=g;g=null,A(()=>R(e,t[0]),!1),g=r}}function A(e,t){if(g)return e();let n=!1;t||(g=[]),m?n=!0:m=[],j++;try{const r=e();return ge(n),r}catch(r){n||(m=null),g=null,ne(r)}}function ge(e){if(g&&(z(g),g=null),e)return;const t=m;m=null,t.length&&A(()=>Q(t),!1)}function z(e){for(let t=0;t<e.length;t++)O(e[t])}function we(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:O(r)}for(t=0;t<n;t++)O(e[t])}function R(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===b?r!==t&&(!r.updatedAt||r.updatedAt<j)&&O(r):s===T&&R(r,t)}}}function ee(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=T,n.pure?g.push(n):m.push(n),n.observers&&ee(n))}}function W(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();r<s.length&&(i.sourceSlots[o]=r,s[r]=i,n.observerSlots[r]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)W(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function te(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ne(e,t=w){throw te(e)}function ye(e,t){return S(()=>e(t||{}))}function me(e,t,n){let r=n.length,s=t.length,i=r,o=0,l=0,f=t[s-1].nextSibling,h=null;for(;o<s||l<i;){if(t[o]===n[l]){o++,l++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const a=i<r?l?n[l-1].nextSibling:n[i-l]:f;for(;l<i;)e.insertBefore(n[l++],a)}else if(i===l)for(;o<s;)(!h||!h.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[l]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--i],a),t[s]=n[i]}else{if(!h){h=new Map;let y=l;for(;y<i;)h.set(n[y],y++)}const a=h.get(t[o]);if(a!=null)if(l<a&&a<i){let y=o,v=1,U;for(;++y<s&&y<i&&!((U=h.get(t[y]))==null||U!==a+v);)v++;if(v>a-l){const N=t[o];for(;l<a;)e.insertBefore(n[l++],N)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}function be(e,t,n,r={}){let s;return fe(i=>{s=i,t===document?e():Ae(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function ve(e,t,n){let r;const s=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>S(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function Se(e,t,n){return S(()=>e(t,n))}function Ae(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return M(e,t,r,n);_(s=>M(e,t(),s,n),r)}function M(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=x(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=x(e,n,r);else{if(i==="function")return _(()=>{let l=t();for(;typeof l=="function";)l=l();n=M(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],f=n&&Array.isArray(n);if(D(l,t,n,s))return _(()=>n=M(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=x(e,n,r),o)return n}else f?n.length===0?K(e,l,r):me(e,n,l):(n&&x(e),K(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=x(e,n,r,t);x(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function D(e,t,n,r){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],f=n&&n[i],h;if(!(l==null||l===!0||l===!1))if((h=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=D(e,l,f)||s;else if(h==="function")if(r){for(;typeof l=="function";)l=l();s=D(e,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||s}else e.push(l),s=!0;else{const a=String(l);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return s}function K(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function x(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(s!==l){const f=l.parentNode===e;!i&&!o?f?e.replaceChild(s,l):e.insertBefore(s,n):f&&l.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const Ce=""+new URL("../worker.js",import.meta.url).href,Ee=ve("<iframe src=bene-reader/index.html referrerpolicy=no-referrer>");async function xe(e){let t=new BroadcastChannel("install-channel");new BroadcastChannel("log-channel").addEventListener("message",o=>console.debug("Service worker:",o.data));let r=new Promise(o=>{t.addEventListener("message",()=>o(void 0))}),s=await navigator.serviceWorker.getRegistrations();await Promise.all(s.map(o=>o.unregister())),console.debug("Unregistered service workers.");let i=await navigator.serviceWorker.register(Ce);return console.debug("Registered worker, waiting for it to activate.",i),await r,console.assert(i.active!==null,"Service worker is not active?"),console.debug("Service worker activated."),window.addEventListener("beforeunload",()=>i.unregister()),navigator.serviceWorker.addEventListener("message",o=>{let l=o.data;if(l.type=="loaded-epub"){let f=l.data;e({type:"loaded-epub",data:{status:"ok",data:f}})}}),i}function Le(e){let t=e.pathname.slice(13);return encodeURIComponent(t)+"$"+e.hash.slice(1)}function Ue(e){if(e.hash==="")return;let n=e.hash.slice(1).split("$"),r=decodeURIComponent(n[0]),s=n.slice(1).join("-");return r+"#"+s}function Ne(){let e,[t]=ce(async()=>await xe(s=>e.contentWindow.postMessage(s))),n=(s,i)=>{let o=t(),l=Ue(window.location);o.active.postMessage({type:"new-epub",data:{data:s,url:i,scope:o.scope,path:l}})};async function r(s){let i=new URL(`epubs/${s}`,window.location.href).href,l=await(await fetch(i)).arrayBuffer();n(new Uint8Array(l),i)}return J(()=>{t()&&r("portable-epubs.epub")}),de(()=>{window.addEventListener("message",s=>{if(s.source!=e.contentWindow)return;let i=s.data;if(i.type=="user-upload"){let o=i.data;const l=new FileReader;l.onload=async f=>{if(!f.target)return;const h=f.target.result,a=new Uint8Array(h);n(a)},l.readAsArrayBuffer(o)}else if(i.type=="navigate"){let o=i.data,l=new URL(o),f=Le(l);window.history.pushState(void 0,"","#"+f)}})}),(()=>{const s=Ee(),i=e;return typeof i=="function"?Se(i,s):e=s,s})()}be(()=>ye(Ne,{}),document.getElementById("root"));
