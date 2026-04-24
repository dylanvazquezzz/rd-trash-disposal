((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,F,A={
xRl(d){return new A.cDk(d)},
cDk:function cDk(d){this.a=d},
oV0(d,e,f,g){return new A.jZ_(d,d-e,d+e,f,f<g)},
qmr(d,e,f,g){var w,v,u,t,s,r=null,q=d===D.YN,p=q?"point_estimate_multi_campaign":"point_estimate",o=q?"margin_of_error_multi_campaign":"margin_of_error",n=q?"p_value_multi_campaign":"p_value"
q=e+"#"
w=d.b
v=B.f1(f.u(0,q+w.toLowerCase()+":"+p))
if(B.a3t(v))u=r
else{v.toString
u=B.j9(v)}v=B.f1(f.u(0,q+w.toLowerCase()+":"+o))
if(B.a3t(v))t=r
else{v.toString
t=B.j9(v)}q=B.f1(f.u(0,q+w.toLowerCase()+":"+n))
if(B.a3t(q))s=r
else{q.toString
s=B.j9(q)}return u==null||t==null||s==null?r:A.oV0(u,t,s,g)},
o6V(d){if(d===0)return 0.05
return(1e5-d)/1e5},
jZ_:function jZ_(d,e,f,g,h){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.r=h},
p_G(){var w=$.qKu
return w==null?$.qKu=new A.cDk(new B.Gm("",1,1,0,!1,!1)):w},
llG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return new A.Dy(o,m,h,n,k,j==null?k:j,d,g,f,s,t,p,q,i,e,r,l)},
epI(d,e,f,g,h,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null
if($.dLz().u(0,a0)===C.uS&&f==null)throw B.Y(B.bl("No currency code passed for money-type stat: "+a0))
w=a0+"#"
v=A.qmr(D.As,a0,B.D([a0,h,w+"EXPERIMENT".toLowerCase()+":control",e,w+"EXPERIMENT".toLowerCase()+":point_estimate",a3,w+"EXPERIMENT".toLowerCase()+":margin_of_error",a1,w+"EXPERIMENT".toLowerCase()+":p_value",a2],x.w,x.b),A.o6V(d))
w=v==null
if(!w){u=A.p_G().aE(v.c)
t=A.p_G().aE(v.d)
s=$.vmn().aE(v.e)}else{s=i
t=s
u=t}r=A.Kk(h,i)-A.Kk(e,i)
q=A.p_F(a0,D.k.a7(r),f)
p=r>=0?B.b("+"+q,i,"positiveValue",B.a([q],x.h),i):q
o=A.p_F(a0,h,f)
n=A.yfW(a0,h,f)
m=A.p_F(a0,e,f)
l=w?i:v.e
if(l==null)l=1
k=A.p_G()
j=$.vmm()
k=k.aE(A.yfY(v,h,e,f,j,j,C.cmx.a6(0,a0)))
w=w?i:v.r
return A.llG(k,p,t,u,n,d,i,m,f,g,o,a0,l<0.001,w===!0,A.yfX(r),s,i)},
p_F(d,e,f){var w,v
if(B.a3t(e))return"—"
w=$.dLz().u(0,d)
if(w==null)throw B.Y(B.bl('Unsupported stats format for "'+d+'"'))
v=A.tiF().u(0,w)
if(v instanceof B.F8)return v.ii(B.D(["currencyCode",f],x.w,x.v),e)
else return v.aE(A.Kk(e,null))},
yfW(d,e,f){var w,v,u,t,s=null
if(B.a3t(e))return"—"
w=$.dLz().u(0,d)
switch(w){case C.aae:case C.y_:v=F.cDI(B.Zg(s,s,!1,D.tX,B.a8y(),!1,s,!1,s))
u=B.r0(e)
if(u!=null)return v.aE(u)
else return v.aE(e)
case C.uS:t=new B.jt(f)
t.iA(f,s,s,s)
return E.aF0(t.b.c,!1).E5(E.aff(e))
case C.XB:return A.tiF().u(0,w).aE(e)
default:throw B.Y(B.bl("Unsupported stats format found"))}},
yfX(d){if(d>0)return C.av8
else if(d===0)return C.aac
else return C.aad},
Kk(d,e){var w,v,u
if(B.a3t(d))return 0
if(e!=null){w=new B.jt(e)
w.iA(e,null,null,null)
d=D.c.lF(d,w.b.c,"")}v=B.r0(d)
if(v!=null)return v
w=$.qKt
u=(w==null?$.qKt=B.nb(B.hk()):w).ieC(d)
return u!=null?u:0},
yfY(d,e,f,g,h,i,j){var w,v,u=null,t=d==null?u:d.a
if(t!=null)return t
if(h.ag(0,0)||i.ag(0,0))return u
w=A.Kk(e,g)
if(w===0)return u
v=A.Kk(f,g)
if(v===0)return u
if(j)return w/v-1
return w*h.aq(0)/(v*i.aq(0))-1},
Dy:function Dy(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t},
b0I:function b0I(d,e){this.a=d
this.b=e},
tiF(){var w=$.rzD
return w==null?$.rzD=B.D([C.y_,B.w4("#,##0.00",B.hk()),C.uS,new B.F8(B.Zs(),B.B(x.v,x.B)),C.aae,B.w4("#,###",B.hk()),C.XB,new B.Gm("—",1,2,2,!1,!1)],x.k,x.b):w},
blU:function blU(d,e){this.a=d
this.b=e}},C,E
J=c[1]
B=c[0]
D=c[2]
F=c[732]
A=a.updateHolder(c[538],A)
C=c[1259]
E=c[776]
A.cDk.prototype={
bk(d,e){var w
if(d==null||J.q4E(d))return"—"
w=this.a.bk(d,e)
if(w==="—")return"—"
return J.d7R(d,0)&&!0?B.b("+"+w,null,"positiveValue",B.a([w],x.h),null):w},
aE(d){return this.bk(d,null)}}
A.jZ_.prototype={}
A.Dy.prototype={
gzx(){var w=this
return w.r!=null&&w.y!=null&&w.w!=null&&w.x!=null},
gd57(){if($.dLz().u(0,this.a)===C.uS){var w=this.ay
return w===C.aad||w===C.aac}w=this.ay
return w===C.av8||w===C.aac},
gj3(d){return this.b},
ge4(d){return this.ch}}
A.b0I.prototype={
aW(){return"MetricDirection."+this.b}}
A.blU.prototype={
aW(){return"MetricFormatType."+this.b}}
var z=a.updateTypes(["l?(N?[l?])"]);(function installTearOffs(){var w=a.installInstanceTearOff
w(A.cDk.prototype,"gci",0,1,function(){return[null]},["$2","$1"],["bk","aE"],0,0,0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(A.cDk,B.dd)
v(B.N,[A.jZ_,A.Dy])
v(B.aS,[A.b0I,A.blU])})()
B.b2(b.typeUniverse,JSON.parse('{"cDk":{"dd":["@"],"dR":[]},"b0I":{"aS":[],"b8":[]},"blU":{"aS":[],"b8":[]}}'))
var y={f:"stats.cost_per_biddable_app_install_conversions",e:"stats.cost_per_biddable_app_post_install_conversions"}
var x={h:B.p("q<N>"),k:B.p("blU"),B:B.p("Kx"),w:B.p("l"),b:B.p("@"),v:B.p("l?")};(function constants(){C.aac=new A.b0I(1,"NO_CHANGE")
C.av8=new A.b0I(2,"INCREASE")
C.aad=new A.b0I(3,"DECREASE")
C.y_=new A.blU(1,"DOUBLE")
C.uS=new A.blU(2,"MONEY")
C.aae=new A.blU(3,"NUMBER")
C.XB=new A.blU(4,"PERCENT")
C.iOF={"stats.conversion_value_per_cost":0,"stats.cost_per_conversion":1,"stats.cost_per_click":2,"stats.click_through_rate":3,"stats.conversion_rate":4,"stats.value_per_conversion":5,"stats.cost_per_in_app_actions":6,"stats.cost_per_install":7,"stats.cost_per_lifted_cookie":8,[y.e]:9,[y.f]:10,"stats.omnibidding_store_sale_conversion_value_per_cost":11,"stats.video_view_rate":12,"stats.cost_per_biddable_conversion":13,"stats.biddable_conversion_rate":14}
C.cmx=new B.az(C.iOF,15,B.p("az<l>"))})();(function staticFields(){$.qKu=null
$.qKt=null
$.rzD=null})();(function lazyInitializers(){var w=a.lazyFinal
w($,"HSB","vmm",()=>B.W(50))
w($,"HSC","vmn",()=>B.b2n(!1,1,0,1,""))
w($,"HSA","dKh",()=>B.b2n(!1,0,0,0.01,""))
w($,"KuH","dLz",()=>B.D(["stats.all_conversions",C.y_,"stats.biddable_app_post_install_conversions",C.y_,"stats.biddable_app_install_conversions",C.y_,"stats.conversions",C.y_,"stats.biddable_conversions",C.y_,"stats.conversion_value",C.y_,"stats.biddable_conversion_value",C.y_,"stats.conversion_value_per_cost",C.y_,"stats.biddable_conversion_value_per_cost",C.y_,"stats.value_per_conversion",C.y_,"stats.average_cpm",C.uS,"stats.average_cpv",C.uS,"stats.cost",C.uS,"stats.cost_per_conversion",C.uS,"stats.cost_per_click",C.uS,"stats.cost_per_biddable_conversion",C.uS,y.f,C.uS,y.e,C.uS,"stats.cost_per_lifted_cookie",C.uS,"stats.clicks",C.aae,"stats.impressions",C.aae,"stats.view_through_conversions",C.aae,"stats.biddable_conversion_rate",C.XB,"stats.conversion_rate",C.XB,"stats.click_through_rate",C.XB,"stats.absolute_brand_lift",C.XB],x.w,x.k))})()};
(a=>{a["UKEhMdpluzt45fPHuRZmV6oyAL4="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_2169.part.js.map
