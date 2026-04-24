((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={auy:function auy(d){this.a=d}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[521],C)
D=c[1201]
C.auy.prototype={
jk(d){var x,w,v,u,t=null,s="group-separator-error"
y.a.a(d)
x=d.Q
if(d.b==null||x==null)return t
w=this.a.fy
v=x.split(w.b)
if(v.length===2&&B.c.a6(B.a.gbI(v),w.c)){u=y.g
return A.D([s,A.b("The number separators you've entered aren't compatible with your account's number format. Try reversing the order of the separators.",t,"GroupSeparatorValidator_separatorAfterDecimalErrMsg",t,t)],u,u)}if(!this.fzs(B.a.gam(v))){u=y.g
return A.D([s,A.b("Can't recognize this number format. Use your account's number format instead.",t,"GroupSeparatorValidator_separatorSpacingErrMsg",t,t)],u,u)}return t},
fzs(d){var x,w,v,u,t=this.a.fy,s=t.Q
if(s==="#,##0.###")x=3
else{if(s!=="#,##,##0.###")throw A.Y("Pattern "+s+" not recognized")
x=2}w=d.split(t.c)
if(w.length===1)return!0
if(B.a.gam(w).length>x)return!1
for(v=w.length-1,u=1;u<v;++u)if(w[u].length!==x)return!1
if(B.a.gbI(w).length!==3)return!1
return!0},
$iie:1}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(C.auy,A.N)})()
A.b2(b.typeUniverse,JSON.parse('{"auy":{"ie":[]}}'))
var y={a:A.p("rX<@>"),g:A.p("l")};(function constants(){D.Rb=A.H("auy")})()};
(a=>{a["k9reLgBnqCTto61dJScIM8Y1u5w="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_2136.part.js.map
