import{Bc as K,Da as le,Gc as q,Pa as W,Qa as he,Ub as m,Vb as h,ea as ue,ga as _,ha as ae,ja as L,jb as S,la as M,ma as B,pb as Z,sa as ce,tb as fe,tc as De,ua as de,uc as ge,va as H,wa as Y,zc as pe}from"./chunk-G3ZAKFDI.js";var Ae=null;function X(){return Ae}function Kt(e){Ae??=e}var me=class{};var Se=new L(""),be=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=_({token:t,factory:()=>B(Be),providedIn:"platform"});let e=t;return e})();var Be=(()=>{let t=class t extends be{constructor(){super(),this._doc=B(Se),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return X().getBaseHref(this._doc)}onPopState(n){let i=X().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=X().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,s){this._history.pushState(n,i,s)}replaceState(n,i,s){this._history.replaceState(n,i,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=_({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function ve(e,t){if(e.length==0)return t;if(t.length==0)return e;let r=0;return e.endsWith("/")&&r++,t.startsWith("/")&&r++,r==2?e+t.substring(1):r==1?e+t:e+"/"+t}function Fe(e){let t=e.match(/#|\?|$/),r=t&&t.index||e.length,n=r-(e[r-1]==="/"?1:0);return e.slice(0,n)+e.slice(r)}function I(e){return e&&e[0]!=="?"?"?"+e:e}var re=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=_({token:t,factory:()=>B(Oe),providedIn:"root"});let e=t;return e})(),Re=new L(""),Oe=(()=>{let t=class t extends re{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??B(Se).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return ve(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+I(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${i}${s}`:i}pushState(n,i,s,o){let c=this.prepareExternalUrl(s+I(o));this._platformLocation.pushState(n,i,c)}replaceState(n,i,s,o){let c=this.prepareExternalUrl(s+I(o));this._platformLocation.replaceState(n,i,c)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(M(be),M(Re,8))},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Te=(()=>{let t=class t{constructor(n){this._subject=new he,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=Ne(Fe(Ce(i))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+I(i))}normalize(n){return t.stripTrailingSlash(ke(this._basePath,Ce(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",s=null){this._locationStrategy.pushState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+I(i)),s)}replaceState(n,i="",s=null){this._locationStrategy.replaceState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+I(i)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(s=>s(n,i))}subscribe(n,i,s){return this._subject.subscribe({next:n,error:i,complete:s})}};t.normalizeQueryParams=I,t.joinWithSlash=ve,t.stripTrailingSlash=Fe,t.\u0275fac=function(i){return new(i||t)(M(re))},t.\u0275prov=_({token:t,factory:()=>Pe(),providedIn:"root"});let e=t;return e})();function Pe(){return new Te(M(re))}function ke(e,t){if(!e||!t.startsWith(e))return t;let r=t.substring(e.length);return r===""||["/",";","?","#"].includes(r[0])?r:t}function Ce(e){return e.replace(/\/index.html$/,"")}function Ne(e){if(new RegExp("^(https?:)?//").test(e)){let[,r]=e.split(/\/\/[^\/]+/);return r}return e}var D=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(D||{}),d=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(d||{}),p=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(p||{}),b={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function $e(e){return m(e)[h.LocaleId]}function xe(e,t,r){let n=m(e),i=[n[h.DayPeriodsFormat],n[h.DayPeriodsStandalone]],s=F(i,t);return F(s,r)}function Ue(e,t,r){let n=m(e),i=[n[h.DaysFormat],n[h.DaysStandalone]],s=F(i,t);return F(s,r)}function ze(e,t,r){let n=m(e),i=[n[h.MonthsFormat],n[h.MonthsStandalone]],s=F(i,t);return F(s,r)}function Ve(e,t){let n=m(e)[h.Eras];return F(n,t)}function T(e,t){let r=m(e);return F(r[h.DateFormat],t)}function P(e,t){let r=m(e);return F(r[h.TimeFormat],t)}function k(e,t){let n=m(e)[h.DateTimeFormat];return F(n,t)}function j(e,t){let r=m(e),n=r[h.NumberSymbols][t];if(typeof n>"u"){if(t===b.CurrencyDecimal)return r[h.NumberSymbols][b.Decimal];if(t===b.CurrencyGroup)return r[h.NumberSymbols][b.Group]}return n}function _e(e){if(!e[h.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[h.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function je(e){let t=m(e);return _e(t),(t[h.ExtraData][2]||[]).map(n=>typeof n=="string"?Q(n):[Q(n[0]),Q(n[1])])}function Ge(e,t,r){let n=m(e);_e(n);let i=[n[h.ExtraData][0],n[h.ExtraData][1]],s=F(i,t)||[];return F(s,r)||[]}function F(e,t){for(let r=t;r>-1;r--)if(typeof e[r]<"u")return e[r];throw new Error("Locale data API: locale data undefined")}function Q(e){let[t,r]=e.split(":");return{hours:+t,minutes:+r}}var He=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,N={},Ye=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,w=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(w||{}),a=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(a||{}),u=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(u||{});function We(e,t,r,n){let i=nt(e);t=y(r,t)||t;let o=[],c;for(;t;)if(c=Ye.exec(t),c){o=o.concat(c.slice(1));let E=o.pop();if(!E)break;t=E}else{o.push(t);break}let g=i.getTimezoneOffset();n&&(g=Me(n,g),i=tt(i,n,!0));let A="";return o.forEach(E=>{let v=Je(E);A+=v?v(i,r,g):E==="''"?"'":E.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),A}function V(e,t,r){let n=new Date(0);return n.setFullYear(e,t,r),n.setHours(0,0,0),n}function y(e,t){let r=$e(e);if(N[r]??={},N[r][t])return N[r][t];let n="";switch(t){case"shortDate":n=T(e,p.Short);break;case"mediumDate":n=T(e,p.Medium);break;case"longDate":n=T(e,p.Long);break;case"fullDate":n=T(e,p.Full);break;case"shortTime":n=P(e,p.Short);break;case"mediumTime":n=P(e,p.Medium);break;case"longTime":n=P(e,p.Long);break;case"fullTime":n=P(e,p.Full);break;case"short":let i=y(e,"shortTime"),s=y(e,"shortDate");n=$(k(e,p.Short),[i,s]);break;case"medium":let o=y(e,"mediumTime"),c=y(e,"mediumDate");n=$(k(e,p.Medium),[o,c]);break;case"long":let g=y(e,"longTime"),A=y(e,"longDate");n=$(k(e,p.Long),[g,A]);break;case"full":let E=y(e,"fullTime"),v=y(e,"fullDate");n=$(k(e,p.Full),[E,v]);break}return n&&(N[r][t]=n),n}function $(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(r,n){return t!=null&&n in t?t[n]:r})),e}function C(e,t,r="-",n,i){let s="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,s=r));let o=String(e);for(;o.length<t;)o="0"+o;return n&&(o=o.slice(o.length-t)),s+o}function Ze(e,t){return C(e,3).substring(0,t)}function f(e,t,r=0,n=!1,i=!1){return function(s,o){let c=Ke(e,s);if((r>0||c>-r)&&(c+=r),e===a.Hours)c===0&&r===-12&&(c=12);else if(e===a.FractionalSeconds)return Ze(c,t);let g=j(o,b.MinusSign);return C(c,t,g,n,i)}}function Ke(e,t){switch(e){case a.FullYear:return t.getFullYear();case a.Month:return t.getMonth();case a.Date:return t.getDate();case a.Hours:return t.getHours();case a.Minutes:return t.getMinutes();case a.Seconds:return t.getSeconds();case a.FractionalSeconds:return t.getMilliseconds();case a.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function l(e,t,r=D.Format,n=!1){return function(i,s){return qe(i,s,e,t,r,n)}}function qe(e,t,r,n,i,s){switch(r){case u.Months:return ze(t,i,n)[e.getMonth()];case u.Days:return Ue(t,i,n)[e.getDay()];case u.DayPeriods:let o=e.getHours(),c=e.getMinutes();if(s){let A=je(t),E=Ge(t,i,n),v=A.findIndex(R=>{if(Array.isArray(R)){let[G,O]=R,se=o>=G.hours&&c>=G.minutes,oe=o<O.hours||o===O.hours&&c<O.minutes;if(G.hours<O.hours){if(se&&oe)return!0}else if(se||oe)return!0}else if(R.hours===o&&R.minutes===c)return!0;return!1});if(v!==-1)return E[v]}return xe(t,i,n)[o<12?0:1];case u.Eras:return Ve(t,n)[e.getFullYear()<=0?0:1];default:let g=r;throw new Error(`unexpected translation type ${g}`)}}function x(e){return function(t,r,n){let i=-1*n,s=j(r,b.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case w.Short:return(i>=0?"+":"")+C(o,2,s)+C(Math.abs(i%60),2,s);case w.ShortGMT:return"GMT"+(i>=0?"+":"")+C(o,1,s);case w.Long:return"GMT"+(i>=0?"+":"")+C(o,2,s)+":"+C(Math.abs(i%60),2,s);case w.Extended:return n===0?"Z":(i>=0?"+":"")+C(o,2,s)+":"+C(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}var Xe=0,z=4;function Qe(e){let t=V(e,Xe,1).getDay();return V(e,0,1+(t<=z?z:z+7)-t)}function Ie(e){let t=e.getDay(),r=t===0?-3:z-t;return V(e.getFullYear(),e.getMonth(),e.getDate()+r)}function J(e,t=!1){return function(r,n){let i;if(t){let s=new Date(r.getFullYear(),r.getMonth(),1).getDay()-1,o=r.getDate();i=1+Math.floor((o+s)/7)}else{let s=Ie(r),o=Qe(s.getFullYear()),c=s.getTime()-o.getTime();i=1+Math.round(c/6048e5)}return C(i,e,j(n,b.MinusSign))}}function U(e,t=!1){return function(r,n){let s=Ie(r).getFullYear();return C(s,e,j(n,b.MinusSign),t)}}var ee={};function Je(e){if(ee[e])return ee[e];let t;switch(e){case"G":case"GG":case"GGG":t=l(u.Eras,d.Abbreviated);break;case"GGGG":t=l(u.Eras,d.Wide);break;case"GGGGG":t=l(u.Eras,d.Narrow);break;case"y":t=f(a.FullYear,1,0,!1,!0);break;case"yy":t=f(a.FullYear,2,0,!0,!0);break;case"yyy":t=f(a.FullYear,3,0,!1,!0);break;case"yyyy":t=f(a.FullYear,4,0,!1,!0);break;case"Y":t=U(1);break;case"YY":t=U(2,!0);break;case"YYY":t=U(3);break;case"YYYY":t=U(4);break;case"M":case"L":t=f(a.Month,1,1);break;case"MM":case"LL":t=f(a.Month,2,1);break;case"MMM":t=l(u.Months,d.Abbreviated);break;case"MMMM":t=l(u.Months,d.Wide);break;case"MMMMM":t=l(u.Months,d.Narrow);break;case"LLL":t=l(u.Months,d.Abbreviated,D.Standalone);break;case"LLLL":t=l(u.Months,d.Wide,D.Standalone);break;case"LLLLL":t=l(u.Months,d.Narrow,D.Standalone);break;case"w":t=J(1);break;case"ww":t=J(2);break;case"W":t=J(1,!0);break;case"d":t=f(a.Date,1);break;case"dd":t=f(a.Date,2);break;case"c":case"cc":t=f(a.Day,1);break;case"ccc":t=l(u.Days,d.Abbreviated,D.Standalone);break;case"cccc":t=l(u.Days,d.Wide,D.Standalone);break;case"ccccc":t=l(u.Days,d.Narrow,D.Standalone);break;case"cccccc":t=l(u.Days,d.Short,D.Standalone);break;case"E":case"EE":case"EEE":t=l(u.Days,d.Abbreviated);break;case"EEEE":t=l(u.Days,d.Wide);break;case"EEEEE":t=l(u.Days,d.Narrow);break;case"EEEEEE":t=l(u.Days,d.Short);break;case"a":case"aa":case"aaa":t=l(u.DayPeriods,d.Abbreviated);break;case"aaaa":t=l(u.DayPeriods,d.Wide);break;case"aaaaa":t=l(u.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":t=l(u.DayPeriods,d.Abbreviated,D.Standalone,!0);break;case"bbbb":t=l(u.DayPeriods,d.Wide,D.Standalone,!0);break;case"bbbbb":t=l(u.DayPeriods,d.Narrow,D.Standalone,!0);break;case"B":case"BB":case"BBB":t=l(u.DayPeriods,d.Abbreviated,D.Format,!0);break;case"BBBB":t=l(u.DayPeriods,d.Wide,D.Format,!0);break;case"BBBBB":t=l(u.DayPeriods,d.Narrow,D.Format,!0);break;case"h":t=f(a.Hours,1,-12);break;case"hh":t=f(a.Hours,2,-12);break;case"H":t=f(a.Hours,1);break;case"HH":t=f(a.Hours,2);break;case"m":t=f(a.Minutes,1);break;case"mm":t=f(a.Minutes,2);break;case"s":t=f(a.Seconds,1);break;case"ss":t=f(a.Seconds,2);break;case"S":t=f(a.FractionalSeconds,1);break;case"SS":t=f(a.FractionalSeconds,2);break;case"SSS":t=f(a.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=x(w.Short);break;case"ZZZZZ":t=x(w.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=x(w.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=x(w.Long);break;default:return null}return ee[e]=t,t}function Me(e,t){e=e.replace(/:/g,"");let r=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(r)?t:r}function et(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function tt(e,t,r){let n=r?-1:1,i=e.getTimezoneOffset(),s=Me(t,i);return et(e,n*(s-i))}function nt(e){if(Ee(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,s=1,o=1]=e.split("-").map(c=>+c);return V(i,s-1,o)}let r=parseFloat(e);if(!isNaN(e-r))return new Date(r);let n;if(n=e.match(He))return it(n)}let t=new Date(e);if(!Ee(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function it(e){let t=new Date(0),r=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,s=e[8]?t.setUTCHours:t.setHours;e[9]&&(r=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let o=Number(e[4]||0)-r,c=Number(e[5]||0)-n,g=Number(e[6]||0),A=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return s.call(t,o,c,g,A),t}function Ee(e){return e instanceof Date&&!isNaN(e.valueOf())}function qt(e,t){t=encodeURIComponent(t);for(let r of e.split(";")){let n=r.indexOf("="),[i,s]=n==-1?[r,""]:[r.slice(0,n),r.slice(n+1)];if(i.trim()===t)return decodeURIComponent(s)}return null}var te=/\s+/,ye=[],Xt=(()=>{let t=class t{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=ye,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(te):ye}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(te):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let s=this.stateMap.get(n);s!==void 0?(s.enabled!==i&&(s.changed=!0,s.enabled=i),s.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],s=n[1];s.changed?(this._toggleClass(i,s.enabled),s.changed=!1):s.touched||(s.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),s.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(te).forEach(s=>{i?this._renderer.addClass(this._ngEl.nativeElement,s):this._renderer.removeClass(this._ngEl.nativeElement,s)})}};t.\u0275fac=function(i){return new(i||t)(S(W),S(Z))},t.\u0275dir=H({type:t,selectors:[["","ngClass",""]],inputs:{klass:[ce.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let e=t;return e})();var Qt=(()=>{let t=class t{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let s=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,s,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,i,s)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,s):!1,get:(n,i,s)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,s)}})}};t.\u0275fac=function(i){return new(i||t)(S(fe))},t.\u0275dir=H({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[le]});let e=t;return e})();function Le(e,t){return new ue(2100,!1)}var ne=class{createSubscription(t,r){return q(()=>t.subscribe({next:r,error:n=>{throw n}}))}dispose(t){q(()=>t.unsubscribe())}},ie=class{createSubscription(t,r){return t.then(r,n=>{throw n})}dispose(t){}},rt=new ie,st=new ne,Jt=(()=>{let t=class t{constructor(n){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){if(!this._obj){if(n)try{this.markForCheckOnValueUpdate=!1,this._subscribe(n)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,i=>this._updateLatestValue(n,i))}_selectStrategy(n){if(De(n))return rt;if(ge(n))return st;throw Le(t,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,i){n===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}};t.\u0275fac=function(i){return new(i||t)(S(K,16))},t.\u0275pipe=Y({name:"async",type:t,pure:!1,standalone:!0});let e=t;return e})();var ot="mediumDate",ut=new L(""),at=new L(""),en=(()=>{let t=class t{constructor(n,i,s){this.locale=n,this.defaultTimezone=i,this.defaultOptions=s}transform(n,i,s,o){if(n==null||n===""||n!==n)return null;try{let c=i??this.defaultOptions?.dateFormat??ot,g=s??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return We(n,c,o||this.locale,g)}catch(c){throw Le(t,c.message)}}};t.\u0275fac=function(i){return new(i||t)(S(pe,16),S(ut,24),S(at,24))},t.\u0275pipe=Y({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();var tn=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=de({type:t}),t.\u0275inj=ae({});let e=t;return e})(),ct="browser",dt="server";function nn(e){return e===ct}function rn(e){return e===dt}var we=class{};export{X as a,Kt as b,me as c,Se as d,re as e,Te as f,qt as g,Xt as h,Qt as i,Jt as j,en as k,tn as l,ct as m,nn as n,rn as o,we as p};
