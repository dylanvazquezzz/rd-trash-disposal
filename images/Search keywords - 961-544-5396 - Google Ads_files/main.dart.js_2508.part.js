((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
qVi(d,e,f){return new B.b3V(new A.G(null,null,y.H),d,e,f)},
b3V:function b3V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=null
_.z=!1
_.Q=!0
_.as=!1
_.ay=_.ax=_.at=$},
qVj(d,e){var x,w=new B.eIJ(A.a_(d,e,0)),v=$.qVk
w.b=v==null?$.qVk=A.a3($.CFC,null):v
x=document.createElement("score-chip")
w.c=x
return w},
F63(d,e){return new B.i5I(A.w(),A.k(d,e,y.a))},
F64(d,e){return new B.i5J(A.w(),A.k(d,e,y.a))},
F65(d,e){return new B.i5K(A.w(),A.w(),A.k(d,e,y.a))},
F66(d,e){return new B.i5L(A.k(d,e,y.a))},
eIJ:function eIJ(d){var _=this
_.c=_.b=_.a=_.e=$
_.d=d},
i5I:function i5I(d,e){var _=this
_.b=d
_.e=_.d=_.c=$
_.x=_.w=_.r=_.f=null
_.y=$
_.a=e},
i5J:function i5J(d,e){var _=this
_.c=_.b=$
_.d=d
_.x=_.w=_.r=_.f=_.e=$
_.y=null
_.a=e},
i5K:function i5K(d,e,f){this.b=d
this.c=e
this.a=f},
i5L:function i5L(d){var _=this
_.e=_.d=_.c=_.b=$
_.f=null
_.a=d},
dq3:function dq3(d){this.a=d},
C3i(d){var x=E.oyZ(d,1)
if(x===100&&d<100)x=99.9
if(x<0)return"—"
return D.PO(x/100,!1,null)},
to_(d,e,f){var x=null,w=E.oyZ(d+e,1)-E.oyZ(d,1),v=w===0?A.b("<0.1%",x,"_marginalPercentage",x,x):D.PO(w/100,!1,x)
return f?D.owB()+v:v}},F,E
J=c[1]
A=c[0]
C=c[2]
D=c[572]
B=a.updateHolder(c[426],B)
F=c[1225]
E=c[559]
B.b3V.prototype={
ny(d){if(d)this.a.R(0,null)},
cLj(){var x,w,v=this,u=null
if(v.e==null||v.f==null||v.c.gev().a===C.a6)return
x=v.f
x.toString
w=x>0
v.as=w
if(w){w=v.e
w.toString
v.at=B.to_(w,x,!0)
x=v.e
x.toString
w=v.f
w.toString
v.ax=B.to_(x,w,!1)
v.c.gev()
x=v.ax
x=A.b4(1,A.a([x,1],y.f),u,u,u,u,"ScoreChipComponent__scoreTooltipMessage","Apply this recommendation to increase your optimization score by "+x,"Apply these recommendations to increase your optimization score by "+x,u,u,u)
v.ay=x}v.d.ai()},
grP(){return this.Q}}
B.eIJ.prototype={
gq(){return"ScoreChipComponent"},
n(d){this.e=A.m(this,0,this.ao(),B.C7k())},
t(){var x=this.a,w=this.e
w.c.sJ(x.as)
w.a.v()},
G(){this.e.a.A()}}
B.i5I.prototype={
gq(){return"ScoreChipComponent"},
n(d){var x,w,v,u,t,s,r=this,q=r.a,p=document.createElement("span")
r.y=p
r.p(p,"chip")
A.e(p,"clickableTooltipTarget","")
A.e(p,"role","button")
x=r.c=new A.M(0,r,p)
w=q.c
w=r.d=A.h4(w.gh().m(A.d(C.A,A.aF()),w.gj()),x,p,r,null)
p.appendChild(r.b.b)
v=A.m(r,2,null,B.C7l())
r.e=v
u=y.z
t=y.v
J.aC(p,"keydown",r.ah(w.gcr(),u,t))
J.aC(p,"click",r.a8(w.gdk(w),u))
J.aC(p,"mouseover",r.a8(w.gcf(w),u))
J.aC(p,"mouseleave",r.a8(w.gc2(w),u))
J.aC(p,"blur",r.ah(w.gc9(w),u,y.Z))
J.aC(p,"keypress",r.ah(w.ge6(),u,t))
w=w.k4
t=A.o(w).k("f<1>")
u=y.y
s=new A.e2(null,new A.f(w,t),t.k("e2<aR.T>")).P(0,r.ae(q.a.gkV(),u,u))
r.af(A.a([x,v.a],y.f),A.a([s],y.x))},
t(){var x,w,v,u,t=this,s=t.a,r=s.a
s=s.Q
x=t.e
x.c.sJ(r.Q)
t.c.v()
x.a.v()
x=r.ay
x===$&&A.j()
w=t.f!==x
if(w){A.a5(t.y,"aria-label",x)
t.f=x}x=r.Q
v=!x?"-1":"0"
if(t.r!==v){A.a5(t.y,"tabindex",v)
t.r=v
w=!0}if(t.w!==!1){A.a1(t.y,"compact",!1)
t.w=!1
w=!0}u=!r.Q
if(t.x!==u){A.a1(t.y,"noHovering",u)
t.x=u
w=!0}x=r.at
x===$&&A.j()
t.b.Z(x)
if((s&1)!==0)t.d.an()
$.n().K(w)},
G(){this.c.A()
this.e.a.A()
this.d.M()}}
B.i5J.prototype={
gq(){return"ScoreChipComponent"},
n(d){var x,w,v,u,t,s=this,r=s.e=A.dj(s,0),q=r.c
A.e(q,"tooltipClass","score-tooltip")
s.gE().F(q)
x=s.a.c
w=A.bs(x.gh().gh().i(C.y,x.gh().gj()),x.gh().gh().i(C.O,x.gh().gj()))
s.f=w
x=A.di(w,r,q,x.gh().gh().i(C.K,x.gh().gj()))
s.r=x
v=document.createElement("div")
s.gE().F(v)
v.appendChild(s.d.b)
w=A.m(s,3,null,B.C7m())
s.w=w
u=A.m(s,4,null,B.C7n())
s.x=u
t=y.f
r.Y(x,A.a([C.b,A.a([v,w.a],t),A.a([u.a],t)],y.Q))
s.L(q)},
a1(d,e,f){var x,w,v,u=this
if(e<=4){if(d===C.y)return u.f
if(d===C.aS||d===C.F)return u.r
if(d===C.G){x=u.b
if(x===$){w=u.a.c
v=w.gh().gh().i(C.G,w.gh().gj())
x=u.b=v==null?new A.cZ(A.a([],y.g)):v}return x}if(d===C.aR){x=u.c
return x===$?u.c=u.r.gcZ():x}}return f},
t(){var x,w,v,u=this,t=u.a,s=t.a,r=(t.Q&1)!==0
t=t.c.d
if(r){x=u.r
x.c=$.yxv
x.a=A.el("score-tooltip",new A.dY(x.cx))}if(u.y!==t){u.r.sdc(t)
u.y=t
w=!0
v=!0}else{v=r
w=v}if(w)u.e.d.f|=32
t=u.w
t.c.sJ(s.z)
x=u.x
x.c.sJ(s.z)
t.a.v()
x.a.v()
x=s.ay
x===$&&A.j()
u.d.Z(x)
u.e.B()
$.n().K(v)},
G(){this.w.a.A()
this.x.a.A()
this.e.D()}}
B.i5K.prototype={
gq(){return"ScoreChipComponent"},
n(d){var x,w,v=this,u=document,t=u.createElement("div")
v.p(t,"base-score-section gmStyling")
x=A.t(u,t)
v.p(x,"base-score-message")
x.appendChild(v.b.b)
A.u(x,":")
w=A.t(u,t)
v.p(w,"base-score")
w.appendChild(v.c.b)
v.L(t)},
t(){var x,w=this.a.a
this.b.Z(w.b.ikJ())
x=w.e
x.toString
this.c.Z(B.C3i(x))}}
B.i5L.prototype={
gq(){return"ScoreChipComponent"},
n(d){var x,w,v,u,t,s=this,r=document.createElement("footer")
A.e(r,"role","presentation")
s.gE().F(r)
x=s.b=A.cF(s,1)
w=x.c
r.appendChild(w)
A.e(w,"ariaLabel",$.pS0())
x.a2("learn-more-link")
v=s.a.c
u=A.c8(v.gh().gh().gh().m(C.am,v.gh().gh().gj()),v.gh().gh().gh().i(C.ak,v.gh().gh().gj()),v.gh().gh().gh().i(C.ao,v.gh().gh().gj()),v.gh().gh().gh().i(C.al,v.gh().gh().gj()),v.gh().gh().gh().i(C.ai,v.gh().gh().gj()),v.gh().gh().gh().i(C.ap,v.gh().gh().gj()),v.gh().gh().gh().i(C.aj,v.gh().gh().gj()),v.gh().gh().gh().i(C.an,v.gh().gh().gj()))
s.c=u
t=v.gh().gh().gh().i(C.v,v.gh().gh().gj())
t=new A.as(t===!0)
s.d=t
v=A.cE(u,w,t,new A.br(x,null),v.gh().gh().gh().i(C.ae,v.gh().gh().gj()),v.gh().gh().gh().i(C.aq,v.gh().gh().gj()),v.gh().gh().gh().i(C.Z,v.gh().gh().gj()),v.gh().gh().gh().i(C.e,v.gh().gh().gj()),v.gh().gh().gh().i(C.au,v.gh().gh().gj()),v.gh().gh().gh().i(C.aA,v.gh().gh().gj()))
s.e=v
x.W(0,v)
s.L(r)},
a1(d,e,f){if(1===e){if(d===C.ag)return this.c
if(d===C.u)return this.d
if(d===C.a3||d===C.aE||d===C.f)return this.e}return f},
t(){var x,w,v,u=this,t=(u.a.Q&1)!==0
if(t)u.e.ax=$.pS0()
if(u.f!=="9061546"){x=u.e
x.x="9061546"
x.c6()
u.f="9061546"
w=!0
v=!0}else{v=t
w=v}if(w)u.b.d.f|=32
if(t)u.e.a9()
u.b.B()
$.n().K(v)},
G(){this.b.D()
this.e.M()}}
B.dq3.prototype={
ikJ(){if(this.gbnZ()==null)return $.pAr()
switch(this.gbnZ().a.a){case 2:case 1:return $.ufz()
case 0:switch(this.gbnZ().r){case C.c4:return $.ufC()
case C.cu:return $.ufA()
case C.cr:return $.ufB()
case C.dv:return $.ufD()
case C.cn:var x=$.ufE()
return x
default:return $.pAr()}}},
gbnZ(){var x=this.a
return x.gbh() instanceof A.dc?y.n.a(x.gbh()).r:null}}
var z=a.updateTypes(["h<~>(c,J)","~(y)"]);(function installTearOffs(){var x=a._instance_1u,w=a._static_2
x(B.b3V.prototype,"gkV","ny",1)
w(B,"C7k","F63",0)
w(B,"C7l","F64",0)
w(B,"C7m","F65",0)
w(B,"C7n","F66",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.b3V,B.dq3])
w(B.eIJ,A.cf)
x(A.h,[B.i5I,B.i5J,B.i5K,B.i5L])})()
A.b2(b.typeUniverse,JSON.parse('{"eIJ":{"c":[]},"i5I":{"h":["b3V"],"c":[],"i":[]},"i5J":{"h":["b3V"],"c":[],"i":[]},"i5K":{"h":["b3V"],"c":[],"i":[]},"i5L":{"h":["b3V"],"c":[],"i":[]}}'))
var y=(function rtii(){var x=A.p
return{z:x("bO"),Z:x("f2"),Q:x("q<x<N>>"),f:x("q<N>"),g:x("q<iE>"),x:x("q<c6<~>>"),v:x("cM"),n:x("dc"),a:x("b3V"),H:x("G<~>"),y:x("y")}})();(function constants(){F.cBE=A.H("dq3")})();(function staticFields(){$.yxv=A.a([C.Di],A.p("q<jN>"))
$.CPS=A.a([".score-tooltip._ngcontent-%ID% .popup-wrapper.mixin .paper-container{max-width:240px}.score-tooltip._ngcontent-%ID% .base-score-section._ngcontent-%ID%{align-items:center;display:block;margin:16px 0}.score-tooltip._ngcontent-%ID% .base-score-section._ngcontent-%ID% .base-score._ngcontent-%ID%{font-family:Google Sans,Roboto,Arial,sans-serif;line-height:2.5rem;font-size:2rem;letter-spacing:0;font-weight:400;color:var(--acx-sys-color--on-background,#202124);color:#1a73e8;margin-right:16px}.score-tooltip._ngcontent-%ID% .base-score-section._ngcontent-%ID% .base-score-message._ngcontent-%ID%{margin-bottom:16px}.score-tooltip._ngcontent-%ID% .learn-more-link._ngcontent-%ID%{font-family:Roboto,Arial,sans-serif;line-height:1.25rem;font-size:.875rem;letter-spacing:.0142857143em;font-weight:400;color:var(--acx-sys-color--on-surface,#3c4043)}.chip._ngcontent-%ID%{font-family:Google Sans,Roboto,Arial,sans-serif;line-height:1.25rem;font-size:.875rem;letter-spacing:.0178571429em;font-weight:500;color:var(--acx-sys-color--on-background,#202124);color:var(--acx-sys-color--info-contrast,#1967d2);align-items:center;background-color:#e8f0fe;border:none;border-radius:16px;cursor:pointer;display:flex;padding:4px 8px;white-space:pre}.chip.noHovering._ngcontent-%ID%{cursor:default}.chip.compact._ngcontent-%ID%{padding:4px}"],y.f)
$.qVk=null
$.CFC=A.a([$.CPS],y.f)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"Jfm","pS0",()=>{var w=null
return A.b("Learn more about optimization score",w,w,w,w)})
x($,"Gxb","pAr",()=>{var w=null
return A.b("Your optimization score",w,w,w,w)})
x($,"Gxc","ufz",()=>{var w=null
return A.b("Your campaign optimization score",w,w,w,w)})
x($,"Gxf","ufC",()=>{var w=null
return A.b("Your search optimization score",w,w,w,w)})
x($,"Gxd","ufA",()=>{var w=null
return A.b("Your display optimization score",w,w,w,w)})
x($,"Gxg","ufD",()=>{var w=null
return A.b("Your shopping optimization score",w,w,w,w)})
x($,"Gxh","ufE",()=>{var w=null
return A.b("Your video optimization score (Action campaigns)",w,w,w,w)})
x($,"Gxe","ufB",()=>{var w=null
return A.b("Your demand gen optimization score",w,w,w,w)})})()};
(a=>{a["SBeyFpph92WEDllujPbu44c8MlY="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_2508.part.js.map
