"use strict";(()=>{var T=globalThis,N=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),F=new WeakMap,E=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(N&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&F.set(e,t))}return t}toString(){return this.cssText}},J=r=>new E(typeof r=="string"?r:r+"",void 0,D),z=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new E(e,r,D)},B=(r,t)=>{if(N)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=T.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},O=N?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return J(e)})(r):r;var{is:$t,defineProperty:ft,getOwnPropertyDescriptor:_t,getOwnPropertyNames:gt,getOwnPropertySymbols:mt,getPrototypeOf:At}=Object,M=globalThis,Y=M.trustedTypes,vt=Y?Y.emptyScript:"",yt=M.reactiveElementPolyfillSupport,x=(r,t)=>r,W={toAttribute(r,t){switch(t){case Boolean:r=r?vt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Q=(r,t)=>!$t(r,t),G={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:Q};Symbol.metadata??=Symbol("metadata"),M.litPropertyMetadata??=new WeakMap;var $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ft(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=_t(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i?.call(this)},set(n){let d=i?.call(this);o.call(this,n),this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;let t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){let e=this.properties,s=[...gt(e),...mt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(O(i))}else t!==void 0&&e.push(O(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return B(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:W).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:W;this._$Em=i,this[i]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??Q)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[x("elementProperties")]=new Map,$[x("finalized")]=new Map,yt?.({ReactiveElement:$}),(M.reactiveElementVersions??=[]).push("2.0.4");var Z=globalThis,L=Z.trustedTypes,tt=L?L.createPolicy("lit-html",{createHTML:r=>r}):void 0,nt="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+_,St=`<${ht}>`,v=document,w=()=>v.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,bt=r=>at(r)||typeof r?.[Symbol.iterator]=="function",j=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,st=/>/g,m=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,rt=/"/g,lt=/^(?:script|style|textarea|title)$/i,ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),dt=ct(1),Tt=ct(2),y=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),ot=new WeakMap,A=v.createTreeWalker(v,129);function pt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(t):t}var Et=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":"",n=C;for(let d=0;d<e;d++){let h=r[d],l,p,a=-1,u=0;for(;u<h.length&&(n.lastIndex=u,p=n.exec(h),p!==null);)u=n.lastIndex,n===C?p[1]==="!--"?n=et:p[1]!==void 0?n=st:p[2]!==void 0?(lt.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=m):p[3]!==void 0&&(n=m):n===m?p[0]===">"?(n=i??C,a=-1):p[1]===void 0?a=-2:(a=n.lastIndex-p[2].length,l=p[1],n=p[3]===void 0?m:p[3]==='"'?rt:it):n===rt||n===it?n=m:n===et||n===st?n=C:(n=m,i=void 0);let f=n===m&&r[d+1].startsWith("/>")?" ":"";o+=n===C?h+St:a>=0?(s.push(l),h.slice(0,a)+nt+h.slice(a)+_+f):h+_+(a===-2?d:f)}return[pt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),s]},U=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,d=t.length-1,h=this.parts,[l,p]=Et(t,e);if(this.el=r.createElement(l,s),A.currentNode=this.el.content,e===2){let a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=A.nextNode())!==null&&h.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let a of i.getAttributeNames())if(a.endsWith(nt)){let u=p[n++],f=i.getAttribute(a).split(_),H=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:H[2],strings:f,ctor:H[1]==="."?q:H[1]==="?"?X:H[1]==="@"?V:b}),i.removeAttribute(a)}else a.startsWith(_)&&(h.push({type:6,index:o}),i.removeAttribute(a));if(lt.test(i.tagName)){let a=i.textContent.split(_),u=a.length-1;if(u>0){i.textContent=L?L.emptyScript:"";for(let f=0;f<u;f++)i.append(a[f],w()),A.nextNode(),h.push({type:2,index:++o});i.append(a[u],w())}}}else if(i.nodeType===8)if(i.data===ht)h.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(_,a+1))!==-1;)h.push({type:7,index:o}),a+=_.length-1}o++}}static createElement(t,e){let s=v.createElement("template");return s.innerHTML=t,s}};function S(r,t,e=r,s){if(t===y)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=P(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}var I=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??v).importNode(e,!0);A.currentNode=i;let o=A.nextNode(),n=0,d=0,h=s[0];for(;h!==void 0;){if(n===h.index){let l;h.type===2?l=new R(o,o.nextSibling,this,t):h.type===1?l=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(l=new K(o,this,t)),this._$AV.push(l),h=s[++d]}n!==h?.index&&(o=A.nextNode(),n++)}return A.currentNode=v,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},R=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),P(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==c&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement(pt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new I(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new U(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.S(w()),this.S(w()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},b=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=S(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==y,n&&(this._$AH=t);else{let d=t,h,l;for(t=o[0],h=0;h<o.length-1;h++)l=S(this,d[s+h],e,h),l===y&&(l=this._$AH[h]),n||=!P(l)||l!==this._$AH[h],l===c?t=c:t!==c&&(t+=(l??"")+o[h+1]),this._$AH[h]=l}n&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},q=class extends b{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}},X=class extends b{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}},V=class extends b{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??c)===y)return;let s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},K=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}};var xt=Z.litHtmlPolyfillSupport;xt?.(U,R),(Z.litHtmlVersions??=[]).push("3.1.2");var ut=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new R(t.insertBefore(w(),o),o,void 0,e??{})}return i._$AI(r),i};var g=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return y}};g._$litElement$=!0,g["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:g});var Ct=globalThis.litElementPolyfillSupport;Ct?.({LitElement:g});(globalThis.litElementVersions??=[]).push("4.0.4");var wt="lt",k=class extends g{constructor(){super(...arguments),this.dragging=!1,this.vertical=!1,this.startX=0,this.startWidth=0,this.ratio="1:1",this.left=null,this.right=null,this.drag=t=>{if(!(!this.left||!this.right)&&this.dragging){let e;if(this.vertical){let s=t.pageY-this.startX;e=(this.startWidth+s)/this.offsetHeight*100}else{let s=t.pageX-this.startX;e=(this.startWidth+s)/this.offsetWidth*100}e=(Math.max(Math.min(100,e),0)*10|0)/10,this.left.style.flex=`${e}`,this.right.style.flex=`${100-e}`}},this.stopDrag=()=>{this.dragging=!1,document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.stopDrag)}}firstUpdated(){this.left=this.renderRoot.querySelector(".splitl"),this.right=this.renderRoot.querySelector(".splitr");let t=this.getAttribute("ratio")||"1:1",[e,s,...i]=t.split(":").map(Number);this.left.style.flex=`${e*100/(e+s)}`,this.right.style.flex=`${s*100/(e+s)}`,this.hasAttribute("vertical")&&(this.vertical=!0)}render(){return dt`
      <div class="splitc splitl">
        <slot name="a"></slot>
      </div>
      <div class="split-bar" draggable @mousedown=${this.startDrag}>
        <div class="hr"></div>
      </div>
      <div class="splitc splitr">
        <slot name="b"></slot>
      </div>
    `}startDrag(t){var e,s,i,o,n,d;!this.left||!this.right||this.hasAttribute("disabled")||(this.dragging=!0,this.startX=t.pageX,this.startWidth=((i=(s=(e=this.renderRoot)===null||e===void 0?void 0:e.querySelector(".splitc"))===null||s===void 0?void 0:s.getBoundingClientRect())===null||i===void 0?void 0:i.width)||0,this.vertical&&(this.startX=t.pageY,this.startWidth=((d=(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(".splitc"))===null||n===void 0?void 0:n.getBoundingClientRect())===null||d===void 0?void 0:d.height)||0),document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.stopDrag))}};k.styles=z`
    :host {
      display: flex;
      flex-direction: row;
      overflow: hidden;
    }

    .splitc {
      overflow: auto;
    }

    .split-bar {
      width: 1px;
      padding: 10px 0;
      cursor: ew-resize;
      background-color: #888;
    }
    .split-bar:hover {
      width: 3px;
      padding: 10px 1px;
      background-color: #2af;
    }
    .hr{
      margin: 0;
      height: 100%;
      padding: 0;
      border:0;
      border-radius: 10px;
      background-color: #888;
    }
    .split-bar:hover .hr{
      background-color: #fff;
    }

    :host([vertical]) {
      flex-direction: column;
    }

    :host([vertical]) .split-bar {
      height: 1px;
      width: calc(100% - 22px);
      cursor: ns-resize;
      padding: 0 10px;
    }
    :host([vertical]) .split-bar:hover {
      height: 3px;
      padding: 1px 10px;
    }

    :host([disabled]) .split-bar {
      pointer-events: none;
    }
  `;customElements.define(`${wt}-split`,k);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
