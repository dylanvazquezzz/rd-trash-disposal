((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Aey(d){var x=d.c
if(x==="footer")return"particle-table-summary-row-table"
return"particle-table-summary-row-"+(C.c.bB(x,"header-summary-")?C.c.du(x,15):C.c.du(x,15))},
mB4(d,e,f,g){var x=null,w=B.be("ads.awapps2.infra.tableview.summaries.SummaryRowRenderer"),v=B.aa(),u=y.R,t=B.a([],u)
u=B.a([],u)
$.mC()
u=new A.anq(f,w,x,$,x,x,x,$,x,$,x,$,x,0,v,t,u,new B.l5(),B.a([],y.j),B.a([],y.B),B.a([],y.K),g.k("anq<0>"))
u.c08(d,e,!1,x,f,x,!1,x,g)
return u},
anq:function anq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
_.aM=d
_.b1=null
_.bm=e
_.kJ$=f
_.mv$=g
_.la$=h
_.ks$=i
_.jC$=j
_.jJ$=k
_.lQ$=l
_.j8$=m
_.iS$=n
_.kt$=o
_.kI$=p
_.lR$=q
_.jK$=r
_.dy=s
_.fr=t
_.fx=$
_.go=_.fy=null
_.a=u
_.b=v
_.c=null
_.d=$
_.e=null
_.f=$
_.r=null
_.w=w
_.x=null
_.y=x
_.ax=_.at=_.as=_.Q=_.z=null
_.ch=_.ay=!1
_.CW=null
_.cy=_.cx=!1
_.dx=_.db=null
_.$ti=a0},
mB8:function mB8(d){this.a=d},
d3b:function d3b(){},
ayi:function ayi(d,e){this.a=d
this.b=e},
z4n(d,e,f){var x=e.gb3(e)
return C.c.bB(x,"stats.")||C.c.bB(x,"custom_column#")},
dt_:function dt_(){},
mB5:function mB5(d){this.a=d},
mB7:function mB7(d,e){this.a=d
this.b=e},
mB6:function mB6(d,e,f){this.a=d
this.b=e
this.c=f}}
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[819],A)
A.anq.prototype={
gbcA(){if(this.la$.ay){var x=this.jJ$
x===$&&B.j()
x=!x}else x=!1
return x},
c08(d,e,f,g,h,i,j,k,l){var x=e.b4("AWN_ENABLE_SUMMARY_SEGMENTATION")
this.hto(d,e,!1,g,x,h,i,!1,k)},
yC(d,e){var x,w,v=this,u=v.a0v(d,e)
u.classList.add("particle-table-summary-row")
v.jJ$===$&&B.j()
x=A.Aey(d)
u.classList.add(x)
if(!(v.la$.ay&&!v.jJ$)){w=v.aUC(d,!1)
if(w!=null)u.insertBefore(w,B.cWy(u))}v.j8$===$&&B.j()
u.classList.add("chart-visible-or-absent")
return v.kt$=u},
aH(d){var x
this.dKz(0)
try{x=this.b1
if(x!=null)x.$0()}finally{this.b1=null}},
fw2(d){var x,w,v,u=d.b
if(u==null)return
x=this.fx
x===$&&B.j()
x=x.gatr()
x.toString
w=this.kI$
w.toString
v=y.C
x.aUF("tooltip-icon",w,[],B.D([C.c91,u],v,v)).bY(0,new A.mB8(this),y.P)},
$iYO:1}
A.d3b.prototype={
we(){this.dDY()
this.fLv()},
bwd(d,e,f,g){var x,w,v,u,t,s=this
if(s.la$.ay){x=s.jJ$
x===$&&B.j()
x=!x}else x=!1
if(!x){s.bch(d,e,f,g)
return}w=J.bT(s.gbpy())
v=w===(w>0?w-1:w)&&f.gIj()
if(d===w){u=s.aUC(f,v)
if(u!=null)if(v){s.bch(d,e,f,g)
g.querySelector("zippy-icon").appendChild(u)
return}else{t=document.createElement("div")
t.className="particle-table-summary-label-container"
t.appendChild(u)
t.setAttribute("role","gridcell")
g.appendChild(t)}}s.bch(d,e,f,g)},
aH(d){this.bZM(0)
this.jK$.aH(0)}}
A.ayi.prototype={
gbu(d){return this.a}}
A.dt_.prototype={
gh_w(){var x=this.mv$
x===$&&B.j()
return x},
gbcA(){if(this.la$.ay){var x=this.jJ$
x===$&&B.j()
x=!x}else x=!1
return x},
hto(d,e,f,g,h,i,j,k,l){var x=this
x.kJ$=d
x.mv$=A.DbE()
x.la$=h
x.ks$=e
x.jC$=i
x.jJ$=!1
x.lQ$=j
x.j8$=!1
x.iS$=l},
gakH(){this.jJ$===$&&B.j()
return C.azn},
gakG(){return null},
avX(d,e,f){return this.h_x(d,y.u.a(e),f)},
awt(){return!1},
gPs(){var x,w
if(this.la$.ay){x=this.jJ$
x===$&&B.j()
x=!x}else x=!1
if(!x)return-1
w=J.bT(this.gbpy())
return w>0?w-1:w},
aUC(d,e){var x,w,v=this
if(v.kJ$==null)return v.kI$
v.dJM(d,e)
x=v.kJ$.$1(d.b)
w=x==null?null:x.a.length!==0
if(w===!0&&v.aM){x.toString
v.fw2(x)}return v.kI$},
fT6(d,e){var x,w=this,v=w.kJ$.$1(d.b),u=v==null?null:v.a.length!==0
if(u===!0){u=document
x=u.createElement("div")
u=u.createElement("span")
u.textContent=v.a
u.className="particle-table-segmented-summary-label-text"
x.appendChild(u)
if(w.la$.ay){u=w.jJ$
u===$&&B.j()
u=!u}else u=!1
x.className=u?"particle-table-segmented-summary-label":"particle-table-summary-label"
w.kI$=x
if(e)x.classList.add("particle-table-zippy-summary-label")
u=w.iS$
x=d.a.c
u=x==="footer-summary-scope"
w.cM5(u)}},
gbpy(){var x,w,v,u,t,s=this.gon(),r=y.g.a(y.s.a(s.giN(s)).b7R("summary-label-span"))
if(r==null)return this.gew3()
else{s=y.S
x=J.xY(r,s)
if(x.gaw(x)===2){w=x.u(0,0)
v=x.u(0,1)-w+1
u=J.mQ(v,s)
for(t=0;t<v;++t)u[t]=w+t
return u}return x}},
gew3(){var x,w,v,u,t,s,r,q,p,o,n=this.fx
n===$&&B.j()
x=n.gyJ()
if(!x.gyi())return B.a([0],y.t)
w=B.a([],y.t)
for(n=x.gx7(),v=n.length,u=y.u,t=0,s=0;s<n.length;n.length===v||(0,B.ap)(n),++s,t=o){r=n[s]
for(q=J.aV(r.f);q.ak();){p=u.a(q.gaI(q)).c
if(C.c.bB(p,"stats.")||C.c.bB(p,"custom_column#"))return w}q=!0
if(!r.at){p=r.r
if(!p.CW){q=p.ch
q=q!=null&&q.grB()}}if(q){o=t+1
w.push(t)}else return w}return w},
gfaZ(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.kI$
j.toString
x=C.n.GR(j).marginLeft
w=0
if(x.length!==0){j=B.eh(C.c.lF(x,"px",""))
v=j==null?null:C.k.fv(j)
if(v==null)k.bm.aQ(C.M,new A.mB5(x),null,null)
else w=v}if(k.la$.ay){j=k.jJ$
j===$&&B.j()
j=!j}else j=!1
if(j){j=k.fx
j===$&&B.j()
u=j.gyJ()
t=J.bT(k.gbpy())
w+=k.fx.gwv().r+4
for(j=u.gx7(),s=j.length,r=0,q=0;q<s;++q,r=o){p=j[q]
o=r+1
if(r>=t)break
n=p.Q
m=p.c
m===$&&B.j()
l=p.d
l===$&&B.j()
w=w+n+m+l}}return w},
cM5(d){var x,w,v=this
if(v.kI$==null)return
x=v.ebh(!1)
if(v.lR$===x)return
v.lR$=x
w=v.fx
w===$&&B.j()
w.gHO().l5(new A.mB7(v,d))},
fLv(){return this.cM5(!1)},
h_x(d,e,f){return this.gh_w().$3(d,e,f)}}
var z=a.updateTypes(["y(h8<@>?,fT,J)"])
A.mB8.prototype={
$1(d){var x=this.a
if(x.ch)d.$0()
else x.b1=d},
$S:265}
A.mB5.prototype={
$0(){return'Failed to parse summary row marginLeft "'+this.a+'"; details: b/119825299'},
$S:2}
A.mB7.prototype={
$0(){var x=this.a,w=x.gfaZ(),v=x.fx
v===$&&B.j()
v.gHO().f_(new A.mB6(x,w,this.b))},
$S:1}
A.mB6.prototype={
$0(){var x=this.a,w=x.kI$.style,v=x.lR$
w.width=""+(v-this.b)+"px"
if(this.c){x=x.kI$.style
x.paddingLeft="16px"}},
$S:1};(function aliases(){var x=A.anq.prototype
x.dJL=x.aH
x=A.d3b.prototype
x.dKz=x.aH
x=A.dt_.prototype
x.dJN=x.aUC
x.dJM=x.fT6})();(function installTearOffs(){var x=a.installStaticTearOff
x(A,"DbE",3,null,["$3"],["z4n"],0,0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.d3b,B.yO)
w(A.anq,A.d3b)
w(A.mB8,B.bM)
v(B.N,[A.ayi,A.dt_])
v(B.dp,[A.mB5,A.mB7,A.mB6])
x(A.d3b,A.dt_)})()
B.b2(b.typeUniverse,JSON.parse('{"anq":{"yO":["@"],"y6":["@"],"IQ":[],"pk":[],"aI":[],"HU":[],"YO":[]}}'))
B.jP(b.typeUniverse,JSON.parse('{"d3b":1,"dt_":1}'))
var y=(function rtii(){var x=B.p
return{u:x("dK"),s:x("j4"),K:x("q<ed<N>>"),B:x("q<ed<@>>"),j:x("q<a65<fT>>"),R:x("q<i1>"),t:x("q<J>"),P:x("c_"),C:x("N"),S:x("J"),g:x("x<@>?")}})()};
(a=>{a["damDEaMsikYw8bTQljaa+5LmV4w="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_1669.part.js.map
