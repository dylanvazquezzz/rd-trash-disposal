((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
qVq(d,e,f){var x=new A.eIP(new B.G(null,null,y.c),B.aa(),e,d)
x.e=f===!0
return x},
eIP:function eIP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=$
_.x=_.w=_.r=null
_.Q=_.z=_.y=0
_.as=!0},
mfY:function mfY(d){this.a=d},
mfZ:function mfZ(d){this.a=d},
mg0:function mg0(d){this.a=d},
mg1:function mg1(d){this.a=d},
mg2:function mg2(d,e){this.a=d
this.b=e},
mg_:function mg_(d){this.a=d},
mfX:function mfX(d){this.a=d}}
B=c[0]
C=c[2]
A=a.updateHolder(c[766],A)
A.eIP.prototype={
a9(){var x=this,w=x.b,v=x.d
w.cl(v.l5(x.gftN()))
w.cl(v.air(new A.mfY(x),new A.mfZ(x),!0,y.g))},
M(){return this.b.aH(0)},
yr(){this.cpy()},
gL8(){var x,w=this.r
if(w!=null){x=this.w
w=x!=null&&w<x}else w=!1
return w},
gaST(){var x,w,v=this.r
if(v!=null){x=this.y
w=this.w
w.toString
w=Math.abs(x)+v>=w
v=w}else v=!1
return v},
gaUR(){this.f===$&&B.j()
var x=this.c.parentElement.clientWidth
return x},
a7Q(){var x=this
if(x.y===0)return
x.b.cl(x.d.l5(new A.mg0(x)))},
UF(){var x=this
if(x.gaST())return
x.b.cl(x.d.l5(new A.mg1(x)))},
cNF(){var x,w,v,u=this,t=u.x
t.toString
if(u.as&&u.gaST()&&u.Q===0)x=t-u.z
else x=t
t=u.y
w=Math.abs(t)
if(w-x<0)x=w
v=u.f
v===$&&B.j()
if(!v){v=u.e
v===$&&B.j()
v=!v}else v=!0
if(v)u.y=t+x
else u.y=t-x},
cNG(){var x,w,v,u=this,t=u.x
t.toString
if(u.as&&u.y===0&&u.Q===0)x=t-u.z
else x=t
t=u.w
t.toString
w=u.y
t+=w
v=u.r
v.toString
if(t<x+v)x=t-v
t=u.f
t===$&&B.j()
if(!t){t=u.e
t===$&&B.j()
t=!t}else t=!0
if(t)u.y=w-x
else u.y=w+x},
a7S(d,e){var x=this
if(!x.gL8())return
x.b.cl(x.d.l5(new A.mg2(x,e)))},
h9(d){var x=this
if(x.y!==0){x.y=0
x.aRk()}x.b.cl(x.d.l5(new A.mg_(x)))},
aRk(){this.b.cl(this.d.f_(new A.mfX(this)))},
bna(d){var x,w,v,u=this
u.r=u.gaUR()
u.f===$&&B.j()
x=u.c
w=C.k.bE(x.scrollWidth)
u.w=w
if(d&&!u.gL8()&&u.y!==0){u.h9(0)
return}u.cpy()
w=x.children
if(!new B.GW(x,w).gbf(0)){x=u.w
x.toString
x=x>0}else x=!1
if(x){x=u.w
x.toString
v=(x-u.Q)/w.length
x=u.r
x.toString
if(x<v)u.x=x
else u.x=C.k.fv(C.k.fv((x-(u.as?u.z:0)*2)/v)*v)}else u.x=u.r},
apv(){return this.bna(!1)},
cpy(){var x,w,v,u,t,s,r=this
if(r.z===0){x=y.f
w=new B.rS(r.c.parentElement.querySelectorAll(".scroll-button"),x)
for(v=new B.dw(w,w.gaw(0),x.k("dw<ah.E>")),x=x.k("ah.E");v.ak();){u=v.d
if(u==null)u=x.a(u)
r.f===$&&B.j()
u=window.getComputedStyle(u,"")
t=u.getPropertyValue(C.B.bH(u,"width"))
if(t!=="auto"){x=B.bU("[^0-9.]",!0,!1,!1)
s=B.r0(B.cD(t,x,""))
r.z=C.k.fv(s==null?0:s)
break}}}}}
var z=a.updateTypes(["~({windowResize:y})"])
A.mfY.prototype={
$0(){var x=this.a,w=C.j.a7(x.gaUR())
x.f===$&&B.j()
x=C.k.bE(x.c.scrollWidth)
return w+" "+C.j.a7(x)},
$S:2}
A.mfZ.prototype={
$1(d){var x=this.a
x.bna(!0)
x.a.R(0,!0)},
$S:0}
A.mg0.prototype={
$0(){var x=this.a
x.apv()
x.cNF()
x.aRk()},
$S:1}
A.mg1.prototype={
$0(){var x=this.a
x.apv()
x.cNG()
x.aRk()},
$S:1}
A.mg2.prototype={
$0(){var x,w,v,u,t,s,r,q,p=this.a
p.apv()
p.f===$&&B.j()
x=this.b
w=C.k.bE(x.offsetLeft)
v=C.k.bE(x.offsetWidth)
u=Math.abs(p.y)
t=u+p.gaUR()
for(;;){if(!(w<u&&p.y!==0))break
p.cNF()
u=Math.abs(p.y)}x=v+w
for(;;){if(x>t){s=p.r
if(s!=null){r=p.y
q=p.w
q.toString
q=Math.abs(r)+s>=q
s=q}else s=!1
s=!s}else s=!1
if(!s)break
p.cNG()
s=p.y
r=p.c.parentElement.clientWidth
t=Math.abs(s)+r}p.aRk()},
$S:1}
A.mg_.prototype={
$0(){var x=this.a
x.apv()
x.a.R(0,!0)},
$S:1}
A.mfX.prototype={
$0(){var x,w=this.a,v=w.c.style
w.f===$&&B.j()
x=w.y
C.B.bU(v,C.B.bH(v,"transform"),"translateX("+x+"px)","")
w.a.R(0,!0)},
$S:1};(function installTearOffs(){var x=a.installInstanceTearOff
x(A.eIP.prototype,"gftN",0,0,null,["$1$windowResize","$0"],["bna","apv"],0,0,0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.eIP,B.N)
w(B.dp,[A.mfY,A.mg0,A.mg1,A.mg2,A.mg_,A.mfX])
x(A.mfZ,B.bM)})()
var y={g:B.p("l"),c:B.p("G<y>"),f:B.p("rS<d0>")}};
(a=>{a["exZpAcIDCDFrvF4OMQ0RjYzwK30="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_826.part.js.map
