((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,G,B={
xSa(){var x=null
return new B.bJy(H.cDI(A.Zg(x,x,!1,C.tX,A.a8y(),!1,x,!1,x)))},
bJy:function bJy(d){this.a=d},
aL_(d){var x="compact-number",w="compact-micro-currency",v="experiment-computed-display-status-filter",u="experiment-computed-display-status",t="experiment-type",s=d.b,r=A.o(d).k("cQ<mI.T>")
s.H(0,x,new A.cQ(x,B.A2Z(),r))
s.H(0,w,new A.cQ(w,B.A2Y(),r))
s.H(0,v,new A.cQ(v,B.Axh(),r))
s.H(0,u,new A.cQ(u,A.t3l(),r))
s.H(0,t,new A.cQ(t,A.t3t(),r))
return new B.epF(new A.abw(d,A.B(y.w,y.D)))},
nM4(d){var x,w,v
if(d instanceof A.fm)x=d.a.l(2).a.S(14).aq(0)
else if(d instanceof A.lR)x=d.a.S(29).aq(0)
else if(y.g.b(d)){w=d.geo().u(0,"reported_confidence_level_percent_thousandths")
v=w!=null?A.on(w,null):null
x=v!=null?v:0}else x=0
return x>0?x:95e3},
yZy(d,e){if(C.a.a6(G.a95,d)||C.a.a6(G.a95,e)||A.r0(d)===0||A.r0(e)===0)return"--"
return C.k.a7((A.j9(d)-A.j9(e))/A.j9(e))},
epF:function epF(d){this.a=d},
lm2:function lm2(d,e,f){this.a=d
this.b=e
this.c=f},
lm0:function lm0(){},
lm1:function lm1(){},
qlN(d){return new I.aWH(d)},
y3D(){return new A.bid()}},D,I,E,F
J=c[1]
A=c[0]
C=c[2]
H=c[732]
G=c[1263]
B=a.updateHolder(c[479],B)
D=c[979]
I=c[490]
E=c[538]
F=c[1259]
B.bJy.prototype={
bk(d,e){var x
if(typeof d=="string"){x=A.r0(d)
if(x!=null)return this.a.aE(x)}return this.a.aE(d)},
aE(d){return this.bk(d,null)},
B8(d,e,f,g){return this.a.CP(0,e,f)},
CP(d,e,f){return this.B8(0,e,f,null)}}
B.epF.prototype={
d92(d,e,f){var x,w
if(e!=null){x=this.foy(d)
w=A.a0(x).k("F<1,Dy>")
x=A.V(new A.F(x,new B.lm2(this,e,f),w),w.k("aH.E"))}else x=A.a([],y.u)
return x},
d91(d,e){return this.d92(d,e,C.As)},
foy(d){var x=A.a0(d).k("P<1>")
x=A.V(new A.P(d,new B.lm0(),x),x.k("L.E"))
C.a.dt(x,new B.lm1())
return x},
d8X(a5,a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="scorecard-format",f=y.y.a(a6.geo()),e=a5.c,d=C.c.du(e,6),a0=f.u(0,d),a1=d+"#",a2=f.u(0,a1+a7.b.toLowerCase()+":control"),a3=a7===C.ayz&&D.cmv.a6(0,d)?f.u(0,a1+"EXPERIMENT_SCALED".toLowerCase()+":control_scaled"):a2,a4=B.nM4(a6)
a1=A.j9(a2==null||a2==="--"?"0":a2)
x=!(Math.abs(a1)<1e-9)?E.qmr(a7,d,f,E.o6V(a4)):h
d=x==null
a1=d?h:x.r
w=a1===!0
v=i.eUX(x,a0,a2,a6,F.cmx.a6(0,e))
u=$.oLD()
if(!d){t=u.aE(x.c)
s=u.aE(x.d)
a1=$.oLE()
r=x.e
q=a1.aE(r)
p=i.bij(r)}else{p=h
q=p
s=q
t=s}a1=a5.gbu(0)
r=a5.a
o=i.Hk(r.bO(0,g,a5.gci()),a0,a6)
n=i.Hk(a5.gci(),a0,a6)
m=i.aap(a5,a2,a6)
l=i.aap(a5,a3,a6)
k=d?h:x.e
if(k==null)k=1
r=i.cpn(a0,a3,r.bO(0,g,a5.gci()),a6)
j=i.biP(d?h:x.a,w)
return E.llG(v,r,s,t,o,a4,l,m,A.f1(J.iQf(a6)),a1,n,e,k<0.001,w,j,q,p)},
axG(d,e){return this.d8X(d,e,C.As)},
biP(d,e){if(!e||d==null)return D.A7
if(d>0)return F.av8
else if(d===0)return F.aac
else return F.aad},
cpn(d,e,f,g){if(d==null||e==null||d==="--"||e==="--")return"—"
return this.coM(A.j9(d)-A.j9(e),f,g)},
cqo(d,e,f,g){var x,w,v
if(y.g.b(f))return this.cqs(d,e,f.gh3H(),f.gie4(),f,g)
if(f instanceof A.fm){x=f.a
w=x.S(4)
v=y.s
if(x.C(5,v).a.length!==0){x=x.C(5,v)
x=x.gam(x)}else x=C.z
return this.cqs(d,e,w,x,f,g)}return null},
cqn(d,e,f){return this.cqo(d,e,f,!1)},
cqs(d,e,f,g,h,i){var x,w,v
if(d==null||e==null||d==="--"||e==="--")return"—"
x=A.j9(d)
if(Math.abs(x)<1e-9)return"—"
w=A.j9(e)
if(Math.abs(w)<1e-9)return"—"
if(f.ag(0,0)||g.ag(0,0))return"—"
v=i?x/w-1:x*f.aq(0)/(w*g.aq(0))-1
return $.oLD().aE(v)},
eUX(d,e,f,g,h){var x=d==null?null:d.a
if(x==null)return this.cqo(e,f,g,h)
return $.oLD().aE(x)},
cpo(d,e,f,g,h){var x=d==null?null:d.a
if(x==null)return this.cpn(e,f,g,h)
return this.coM(x,g,h)},
Hk(d,e,f){var x,w
if(e==="--")return"—"
if(e!=null){x=A.j9(e)
if(Math.abs(x)<1e-9)e="0.00"}w=this.a.AD(d)
if(y.m.b(w))return w.ii(f,e)
x=w.aE(e)
x.toString
return x},
coM(d,e,f){var x=this.Hk(e,C.k.a7(d),f)
return d>=0?A.b("+"+x,null,"positiveValue",A.a([x],y.h),null):x},
bij(d){return this.a.AD("number(0.00)").aE(d)},
aap(d,e,f){if(C.c.du(d.c,6)!=="average_position"&&e==="--")e="0"
return this.Hk(d.gci(),e,f)}}
var z=a.updateTypes(["l(N?[l?])","Dy(dK)","bJy()","aWH({useFullCurrencySymbol:y})","bid()"])
B.lm2.prototype={
$1(d){return this.a.d8X(d,this.b,this.c)},
$S:z+1}
B.lm0.prototype={
$1(d){return!C.c.a6(C.c.du(d.c,6),"#")},
$S:32}
B.lm1.prototype={
$2(d,e){var x="position",w=1073741823
return C.j.bv(d.a.bO(0,x,w),e.a.bO(0,x,w))},
$S:155};(function installTearOffs(){var x=a._static_0,w=a.installInstanceTearOff,v=a.installStaticTearOff
x(B,"A2Z","xSa",2)
w(B.bJy.prototype,"gci",0,1,function(){return[null]},["$2","$1"],["bk","aE"],0,0,0)
v(B,"A2Y",0,function(){return{useFullCurrencySymbol:!1}},["$1$useFullCurrencySymbol","$0"],["qlN",function(){return B.qlN(!1)}],3,0)
x(B,"Axh","y3D",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.bJy,A.dd)
x(B.epF,A.N)
w(A.bM,[B.lm2,B.lm0])
x(B.lm1,A.fv)})()
A.b2(b.typeUniverse,JSON.parse('{"bJy":{"dd":["@"],"dR":[]}}'))
var y={y:A.p("oA"),m:A.p("k8<@>"),D:A.p("dd<@>"),s:A.p("ao"),u:A.p("q<Dy>"),h:A.p("q<N>"),w:A.p("l"),g:A.p("pD")};(function constants(){var x=a.makeConstList
D.c_N=x([C.q2,C.ri,C.rj,C.rk],A.p("q<jq>"))
D.A7=new E.b0I(0,"UNKNOWN")
D.iW7={all_conversions:0,biddable_conversions:1,biddable_conversion_value:2,clicks:3,conversion_value:4,conversions:5,cost:6,impressions:7,view_through_conversions:8}
D.cmv=new A.az(D.iW7,9,A.p("az<l>"))
D.nH=A.H("epF")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"HSv","oLE",()=>A.b2n(!1,1,0,1,""))
x($,"HSu","oLD",()=>E.xRl(A.b2n(!1,1,0,1,"")))
x($,"Jq5","wEV",()=>A.D([C.rl,"Clicks",C.yo,"Impr.",C.tD,"Conv. value / cost",C.rg,"Conversions",C.rh,"Conversion value",C.ri,"In-app actions",C.q2,"Installs",C.lq,"CTR",C.l0,"Conv. rate",C.p9,"Spend",C.jM,"Cost / conv.",C.rj,"Cost / in-app actions",C.rk,"Cost / Install",C.lp,"Avg. CPC"],A.p("jq"),y.w))})()};
(a=>{a["mYMLv+4NchniVM2Cx38P9oZ8wn4="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_2167.part.js.map
