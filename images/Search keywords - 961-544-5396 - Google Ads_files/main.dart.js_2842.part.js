((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,E,F,G,H,I,A={
yFx(d,e,f,g,h,i){var x,w=h.axG(y.f.a(e.gdL()),e.gaZ())
if(g==null)x=null
else{x=g.LQ(e.gaZ())
x=x.gpD(x)}w=new A.cf5(d,e,w,f,g,x===!0)
w.dVK(d,e,f,g,h,i)
return w},
z3I(d){var x=y.d.a(d).a
return x.U(78)&&x.l(78).a.C(0,y.g).a.length!==0},
cf5:function cf5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=$
_.w=!1
_.x=$},
mPC:function mPC(d){this.a=d},
mPB:function mPB(d){this.a=d},
yWp(){return new A.d3Q(new B.aU())},
eRZ:function eRZ(d){var _=this
_.f=_.e=$
_.w=_.r=null
_.c=_.b=_.a=$
_.d=d},
d3Q:function d3Q(d){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=$
_.d=d}},D
B=c[0]
C=c[2]
E=c[1067]
F=c[1066]
G=c[479]
H=c[979]
I=c[538]
A=a.updateHolder(c[256],A)
D=c[392]
A.cf5.prototype={
gle(){var x=this.x
x===$&&B.j()
return x},
dVK(d,e,f,g,h,i){var x,w,v,u=this
i.bd("TrialMetricCellComponent")
x=u.b
w=y.d.a(x.gaZ()).a
v=w.l(2).a.S(3)
u.r=w.l(2).a.S(4).bq(v)>=0
x.fm(0,new A.mPC(u),y.a)
if(u.e!=null&&u.d!=null&&u.f)u.fIn()},
fIn(){var x,w=this,v=w.e
v.toString
x=v.LQ(w.b.gaZ())
w.d.gPe().TT(x,new A.mPB(w))},
ciC(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
if(d==null){k.x=D.qKs("")
k.w=k.f
return}if(!A.z3I(d)&&k.f){k.x=D.qKs("")
k.w=!0
return}else k.w=!1
x=y.d.a(d).a
w=x.l(78)
v=y.f.a(k.b.gdL())
u=x.X(10)
x=k.r
x===$&&B.j()
if(x){x=C.c.du(v.c,6)
t=w.u(0,x)
x+="#"
s=w.u(0,x+"EXPERIMENT".toLowerCase()+":control")
r=w.u(0,x+"EXPERIMENT".toLowerCase()+":p_value")
q=w.u(0,x+"EXPERIMENT".toLowerCase()+":margin_of_error")
p=w.u(0,x+"EXPERIMENT".toLowerCase()+":point_estimate")}else{p=j
q=p
r=q
s=r
t=s}x=k.c
w=t==null||B.a3t(t)?"0.00":t
o=s==null||B.a3t(s)?"0.00":s
n=r==null?"—":r
m=q==null?"—":q
l=p==null?"—":p
k.x=I.epI(x.at,o,u,x.b,w,x.a,m,n,l)}}
A.eRZ.prototype={
gq(){return"TrialMetricCellComponent"},
n(d){var x,w=this,v=w.ao(),u=w.e=D.p_E(w,0)
v.appendChild(u.c)
x=new D.a6F()
w.f=x
u.W(0,x)},
t(){var x,w,v,u,t=this,s=t.a,r=(t.d.f&1)!==0
if(r){x=t.f
x.c=x.b=!1}w=s.w
if(t.r!==w){t.r=t.f.d=w
v=!0
u=!0}else{u=r
v=u}s=s.x
s===$&&B.j()
if(t.w!==s){x=t.f
x.a=s
x.bqu()
t.w=s
v=!0
u=!0}if(v)t.e.d.f|=32
t.e.B()
$.n().K(u)},
G(){this.e.D()}}
A.d3Q.prototype={
n(d){var x,w,v,u=this,t=null,s=new A.eRZ(B.a_(u,0,0)),r=$.r3w
s.b=r==null?$.r3w=B.dl(C.b,t):r
x=document.createElement("trial-metric-cell")
s.c=x
u.b=s
w=G.aL_(u.m(C.bc,t))
u.e=w
v=y.g
v=new B.aq(u.i(C.d,t),B.B(v,v))
u.f=v
v=new B.ak(u.i(C.e,t),v,u.i(C.d,t),u.i(C.q,t),u.i(C.r,t),u.i(C.p,t))
u.r=v
u.a=A.yFx(s,u.m(C.b8,t),u.i(F.x2,t),u.i(E.Hw,t),w,v)
u.L(x)},
a1(d,e,f){if(0===e){if(d===H.nH)return this.e
if(d===C.d)return this.f
if(d===C.m)return this.r}return f}}
var z=a.updateTypes(["d3Q()"])
A.mPC.prototype={
$1(d){var x=this.a
x.ciC(x.b.gaZ())
x.a.ai()},
$S:27}
A.mPB.prototype={
$1(d){var x=this.a
x.ciC(d)
x.a.ai()},
$S:0};(function installTearOffs(){var x=a._static_0
x(A,"DmB","yWp",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.cf5,B.N)
w(B.bM,[A.mPC,A.mPB])
x(A.eRZ,B.cf)
x(A.d3Q,B.a4)})()
B.b2(b.typeUniverse,JSON.parse('{"d3Q":{"a4":["cf5"],"i":[],"a4.T":"cf5"},"eRZ":{"c":[]}}'))
var y={f:B.p("dK"),g:B.p("l"),d:B.p("fm"),a:B.p("N?")};(function staticFields(){$.r3w=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"IRY","pPv",()=>B.aZ("trial-metric-cell",A.DmB(),B.p("cf5")))})()};
(a=>{a["2TvfsCLPZHQClccFT7qjKnkq+L8="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_2842.part.js.map
