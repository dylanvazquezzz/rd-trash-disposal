((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,A={
eA_(){var w=new A.c5V()
w.a5()
return w},
c5V:function c5V(){this.a=$},
b33:function b33(d,e){this.a=d
this.b=e},
p0W(d){var w=new A.amm(d,B.a([],x.c))
d.j9("PromoInterpageResponseEvent").P(0,w.gfmz())
d.j9("PromoControllerReadyEvent").P(0,w.gdyh())
return w},
amm:function amm(d,e){var _=this
_.a=d
_.b=e
_.c=""
_.d=null},
lZa:function lZa(d){this.a=d},
BeL(d){return A.p0W(d.O(0,D.a0))}},C
B=c[0]
D=c[2]
A=a.updateHolder(c[808],A)
C=c[897]
A.c5V.prototype={
a3(d){return B.A(this,x.a)},
ga0(){return $.vzV()}}
A.b33.prototype={}
A.amm.prototype={
a8s(d){this.b.push(d)
if($.dS().u(0,"promoControllerReady")!=null)this.aQ3(d)},
Ct(d,e){var w
e.savV(!1)
w=this.b
if(w.length===0||this.c.length===0)return
D.a.bc(w,e)
w=A.eA_().a
w.N(2,C.ciG)
w.I(0,e.b)
this.a.fT(new B.fo("PromoInterpageRequestEvent",B.cn(w),null))},
a3d(d){var w,v,u
if(d.gbEu())return
d.sbEu(!0)
w=this.a
w.fT(new B.fo(y.b,null,null))
v=d.b
if(this.cqf(v)==null)return
u=A.eA_().a
u.N(2,C.ciF)
u.I(0,v)
w.fT(new B.fo("PromoInterpageRequestEvent",B.cn(u),null))},
fmA(d){var w,v,u,t,s=null,r=d.b
r.toString
w=A.eA_().a
B.dh(w,r,D.x)
v=w.U(1)?w.l(1):s
u=w.U(0)?w.X(0):s
t=this.cqf(u)
if(v===C.b3F){this.c=u
if(t!=null){t.savV(!0)
this.a.fT(new B.fo(y.b,s,s))}}},
dyi(d){var w=this
if(d===w.d)return
w.d=d
D.a.bF(w.b,w.gfCQ())},
aQ3(d){var w
if(this.b.length!==0){w=this.c
w=w.length!==0&&w!==d.b}else w=!0
if(w)return
w=A.eA_().a
w.N(2,C.b3F)
w.I(0,d.b)
this.a.fT(new B.fo("PromoInterpageRequestEvent",B.cn(w),null))},
cqf(d){return B.cy(this.b,new A.lZa(d))}}
var z=a.updateTypes(["~(V2)","~(fo)","y(V2)","c5V()","amm(I)"])
A.lZa.prototype={
$1(d){return d.b===this.a},
$S:z+2};(function installTearOffs(){var w=a._static_0,v=a._instance_1u,u=a._instance_1i,t=a._static_1
w(A,"BWV","eA_",3)
var s
v(s=A.amm.prototype,"gdyY","a8s",0)
u(s,"gbD4","Ct",0)
v(s,"gfmz","fmA",1)
v(s,"gdyh","dyi",1)
v(s,"gfCQ","aQ3",0)
t(A,"tC","BeL",4)})();(function inheritance(){var w=a.inherit
w(A.c5V,B.z)
w(A.b33,B.ab)
w(A.amm,B.N)
w(A.lZa,B.bM)})()
B.b2(b.typeUniverse,JSON.parse('{"c5V":{"z":[]},"b33":{"ab":[]}}'))
var y={b:"ads_awapps_infra_notifications_promoVisibleChangeEvent"}
var x={c:B.p("q<V2>"),a:B.p("c5V")};(function constants(){var w=a.makeConstList
C.jtt=new A.b33(0,"UNKNOWN")
C.b3F=new A.b33(1,"SHOW")
C.ciF=new A.b33(2,"DISMISS")
C.ciG=new A.b33(3,"HIDE")
C.h_9=w([C.jtt,C.b3F,C.ciF,C.ciG],B.p("q<b33>"))
C.j6W=new B.bE("ads.awapps2.infra.notifications.promo.shared.proto")
C.fG=B.H("amm")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"I93","vzV",()=>{var v=null,u=B.C("PromoEvent",A.BWV(),v,v,C.j6W,v,v)
u.ac(1,"promoLabel")
u.al(2,"promoCallType",C.h_9,B.p("b33"))
return u})})()};
(a=>{a["O4f30GsuHOilF9LWU3ZYxAk/5/c="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_944.part.js.map
