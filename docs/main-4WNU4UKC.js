import{b as x,c as O,d as k,e as B,h as z,k as y}from"./chunk-AFQPOZFT.js";import{Fb as D,Gb as E,Ha as I,Hb as S,W as A,Yb as T,Z as M,_ as s,aa as v,ab as w,da as g,db as P,ea as N,jb as p,kb as l,pa as _,sa as R,va as F,vc as j,za as b}from"./chunk-764YMA4Z.js";var U="@",V=(()=>{class r{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=g(_);loadingSchedulerFn=g(Y,{optional:!0});_engine;constructor(e,o,n,i,a){this.doc=e,this.delegate=o,this.zone=n,this.animationType=i,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-CWEQ6YSV.js").then(n=>n),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(n=>{throw new A(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,o){let n=this.delegate.createRenderer(e,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let i=new C(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let L=a.createRenderer(e,o);i.use(L),this.scheduler??=this.injector.get(R,null,{optional:!0}),this.scheduler?.notify(11)}).catch(a=>{i.use(n)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(o){P()};static \u0275prov=M({token:r,factory:r.\u0275fac})}return r})(),C=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,o,n){this.delegate.insertBefore(t,e,o,n)}removeChild(t,e,o){this.delegate.removeChild(t,e,o)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,o,n){this.delegate.setAttribute(t,e,o,n)}removeAttribute(t,e,o){this.delegate.removeAttribute(t,e,o)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,o,n){this.delegate.setStyle(t,e,o,n)}removeStyle(t,e,o){this.delegate.removeStyle(t,e,o)}setProperty(t,e,o){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(t,e,o)),this.delegate.setProperty(t,e,o)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,o,n){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(t,e,o,n)),this.delegate.listen(t,e,o,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(U)}},Y=new v("");function H(r="animations"){return b("NgAsyncAnimations"),N([{provide:w,useFactory:(t,e,o)=>new V(t,e,o,r),deps:[j,O,F]},{provide:I,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var c=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=l({type:r});static \u0275inj=s({})};var m=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["app-error404-page"]],standalone:!1,decls:2,vars:0,template:function(e,o){e&1&&(D(0,"p"),T(1,"error404-page works!"),E())},encapsulation:2})};var G=[{path:"auth",loadChildren:()=>import("./chunk-36RSZMMS.js").then(r=>r.AuthModule)},{path:"heroes",loadChildren:()=>import("./chunk-RSHHCS2W.js").then(r=>r.HeroesModule)},{path:"404",component:m},{path:"",redirectTo:"heroes",pathMatch:"full"},{path:"**",redirectTo:"404"}],u=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=l({type:r});static \u0275inj=s({imports:[y.forRoot(G),y]})};var h=class r{title="heroesApp";static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["app-root"]],standalone:!1,decls:1,vars:0,template:function(e,o){e&1&&S(0,"router-outlet")},dependencies:[z],encapsulation:2})};var f=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=l({type:r,bootstrap:[h]});static \u0275inj=s({providers:[H()],imports:[B,u,c,x]})};k().bootstrapModule(f,{ngZoneEventCoalescing:!0}).catch(r=>console.error(r));
