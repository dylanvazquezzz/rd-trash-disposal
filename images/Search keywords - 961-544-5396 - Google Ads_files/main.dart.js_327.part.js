((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={afN:function afN(){},kq:function kq(d,e){this.a=d
this.b=e
this.c=null},nJC:function nJC(d,e){this.a=d
this.b=e},nJE:function nJE(d){this.a=d},nJF:function nJF(){},nJG:function nJG(d){this.a=d},nJD:function nJD(){},iE2:function iE2(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.w=f
_.x=g
_.y=h
_.b=i},nJH:function nJH(){},aeW:function aeW(){},ci6:function ci6(d){this.b=d}},D,E
B=c[0]
C=c[2]
A=a.updateHolder(c[774],A)
D=c[977]
E=c[923]
A.afN.prototype={}
A.kq.prototype={
bd(d){var x,w=this,v=w.a
if(v.a==null){x=B.f9("ActivityBuilderFactory cannot be null when calling forComponent","failed precondition")
x.toString
B.ai(B.bl(x))}return w.c=w.c=new A.nJC(v.gaj(0).bd(d),w.b)}}
A.nJC.prototype={
Jk(d,e,f,g,h){return this.a.Jk(d,e,f,g,h)},
bR(d,e,f){return this.Jk(d,e,C.FZ,null,f)},
b_(d,e){return this.Jk(d,e,C.FZ,null,C.b9)},
gmJ(){var x=this.a.a
return x==null?null:x.fy.a},
gtA(){return this.a.a},
b72(){var x,w,v,u,t=this,s=null
t.fgb(!0)
x=t.a
w=x.b.b
if(w.aL(0,"__wfI"))$.cuT().aQ(C.M,new A.nJE(t),s,s)
v=$.wHl().eh()
w.H(0,"__wfI",v)
x=x.a
u=x==null?s:x.fy.a
if(u==null){$.cuT().aQ(C.M,"Current activity missing when generateAndAttachWorkflowTrackingId",s,s)
return s}return t.e0c(u,v)},
PQ(d,e,f){var x=this.a.dAu(e,f,C.FZ,null)
x.toString
return this.a8z(d,x)},
a8z(d,e){var x,w="__wfI"
if(!e.d.aL(0,w))e.d.H(0,w,B.K(this.a.b.b.u(0,w)))
x=new A.iE2(d,this.b,B.a([],y.l),B.a([],y.n),B.a([],y.c),e)
this.ffR(new A.nJF()).SU(new A.nJG(x))
e.bsk(x,E.bcP)
return x},
e0c(d,e){var x,w,v,u,t="__wfI"
if(d.d.aL(0,t)){x=d.d.u(0,t)
if(x!==e){w=$.cuT()
v="Overwriting workflow tracking ID param in activity"+d.b
w.aQ(C.M,v,v+", existing ID "+B.K(x)+", new ID "+e,null)}}d.d.H(0,t,e)
u=y.M.a(d.dx.u(0,E.bcQ))
if(u!=null)return u
u=new A.ci6(d)
d.bsk(u,E.bcQ)
return u},
fgb(d){var x=this.b
if(!x.gaN(0).ak())return
if(x.gaj(0).Q){x.gaj(0).pG(0)
$.cuT().aQ(C.M,"SectionTimingController already started in WorkflowActivityBuilder",null,null)}x.gaj(0).bbp(0,!0)},
ffR(d){var x=this.b
if(!x.gaN(0).ak())return D.caX
if(!x.gaj(0).Q){$.cuT().aQ(C.M,new A.nJD(),null,null)
return D.caX}return new B.aY(d.$1(x.gaj(0)),y.P)}}
A.iE2.prototype={
shdO(d){var x,w=this,v=null
if(w.f!=null)$.cuT().aQ(C.M,new A.nJH(),v,v)
if(d===C.bEj&&w.e.a!=null){x=w.e
if(x.gaj(0).Q)x.gaj(0).pG(0)
else $.cuT().aQ(C.M,"timing not started when setting successful exit status",v,v)}w.f=d},
cX4(d){var x,w,v,u=this,t=u.b
if(t.d.u(0,"__wfI")!=null){x=B.p4E()
t=t.d.u(0,"__wfI")
t.toString
x.a.I(0,t)
d.a.N(21,x)}t=B.r79()
x=B.qvX()
w=x.a
w.N(1,u.d)
w.C(2,y.p).V(0,u.w)
v=u.f
w.N(2,v==null?C.bEi:v)
w=t.a
w.N(1,x)
w.C(1,y.v).V(0,u.x)
w.C(2,y.h).V(0,u.y)
w=d.a
w.N(22,t)
if(u.r!=null){t=w.l(20)
x=u.r
x.toString
x=B.A(x,y.u)
t.a.N(4,x)}},
GH(){var x=this,w=x.bZP(),v=B.K(x.w),u=B.K(x.r),t=x.f
t=t==null?null:t.b
w.V(0,B.D(["exitType",x.d.b,"errorInfo",v,"timingInfo",u,"exitStatus",B.K(t),"affectedEntities",B.K(x.x),"valueChanges",B.K(x.y)],y.N,y.T))
return w},
$idMu:1,
$ieVo:1}
A.aeW.prototype={
gXs(){return"WorkflowExtension"}}
A.ci6.prototype={
GH(){return B.D(["__wfI",this.b.d.u(0,"__wfI")],y.N,y.T)}}
var z=a.updateTypes([])
A.nJE.prototype={
$0(){return"Overwriting workflow tracking ID param when generateAndAttachWorkflowTrackingId, existing ID "+B.K(this.a.a.b.b.u(0,"__wfI"))},
$S:2}
A.nJF.prototype={
$1(d){return d.gdgu()},
$S:2780}
A.nJG.prototype={
$1(d){return this.a.r=d},
$S:2781}
A.nJD.prototype={
$0(){return"SectionTimingController not started, nothing to record"},
$S:2}
A.nJH.prototype={
$0(){return"exitStatus is already set, will be overrriden"},
$S:2};(function aliases(){var x=A.ci6.prototype
x.bZP=x.GH})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.N,[A.afN,A.kq,A.nJC])
x(B.dp,[A.nJE,A.nJD,A.nJH])
x(B.bM,[A.nJF,A.nJG])
w(A.aeW,A.afN)
w(A.ci6,A.aeW)
w(A.iE2,A.ci6)})()
B.b2(b.typeUniverse,JSON.parse('{"iE2":{"eVo":[],"aeW":[],"afN":[],"dMu":[]},"aeW":{"afN":[]},"ci6":{"aeW":[],"afN":[]}}'))
var y=(function rtii(){var x=B.p
return{v:x("aYE"),p:x("aYO"),n:x("q<aYE>"),l:x("q<aYO>"),c:x("q<b6D>"),P:x("aY<aet>"),N:x("l"),u:x("aet"),h:x("b6D"),T:x("l?"),M:x("aeW?")}})();(function constants(){D.caX=new B.aY(null,y.P)
D.d2=B.H("J2V")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"Jt_","wHl",()=>B.wU("a"))
x($,"JvZ","cuT",()=>B.be("WorkflowActivity"))})()};
(a=>{a["6kMTXLgRNlpsrQa91V20n5CR5QI="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_327.part.js.map
