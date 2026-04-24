((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,A={
xWC(){var x=new A.bMz()
x.a5()
return x},
bMz:function bMz(){this.a=$},
e4L(){var x=new A.Xj()
x.a5()
return x},
Xj:function Xj(){this.a=$},
fRR:function fRR(){},
fRS:function fRS(){},
fRT:function fRT(){},
t41(d,e){var x,w,v={}
v.a=e
if(e==null)v.a=new A.ocy()
if(d==null)v=null
else{x=d.ghg()
w=C.a0(x).k("P<1>")
v=C.V(new C.P(x,new A.ocz(v),w),w.k("L.E"))}return v==null?C.a([],y.h):v},
rYr(d){var x,w,v,u,t,s,r,q,p=null,o=A.e4L(),n=d.gbwL()
n.toString
x=o.a
x.I(1,n)
x.I(2,d.gbu(0))
n=d.a
w=n.bO(0,"description",p)
x.I(3,w==null?"":w)
v=n.bO(0,"customer-id",p)
if(v!=null){w=C.h1(v,10,!0)
w.toString
x.I(0,w)}u=n.bO(0,"customer-descriptive-name",p)
w=C.cFZ()
t=u==null?"":u
w.a.I(0,t)
x.N(9,w)
s=n.bO(0,"primary-account-type",p)
if(s!=null){w=x.l(7)
t=C.iRr(s)
t.toString
w.a.N(7,t)}r=n.bO(0,"external-customer-id",p)
if(r!=null){w=x.l(7)
t=C.h1(r,10,!0)
t.toString
w.a.I(3,t)}q=n.bO(0,"customer-scope-distance",p)
if(q!=null){n=x.l(7)
x=C.W(q)
n.a.I(9,x)}return o},
ocy:function ocy(){},
ocz:function ocz(d){this.a=d},
bbL:function bbL(d,e){this.a=d
this.b=e},
a0q:function a0q(d,e){this.a=d
this.b=e},
asQ:function asQ(d,e){this.a=d
this.b=e},
aG4:function aG4(d,e){this.a=d
this.b=e}},B
C=c[0]
D=c[2]
A=a.updateHolder(c[648],A)
B=c[916]
A.bMz.prototype={
a3(d){return C.A(this,y.p)},
ga0(){return $.uxU()},
gb3(d){return this.a.X(2)},
gca(d){return this.a.l(5)},
gbT(d){return this.a.X(7)}}
A.Xj.prototype={
a3(d){return C.A(this,y.a)},
ga0(){return $.uy_()},
gbJ(){return this.a.S(0)},
cP(){return this.a.U(0)},
gb3(d){return this.a.X(2)},
gbT(d){return this.a.X(3)},
gca(d){return this.a.l(4)},
gfz(){return this.a.l(7)},
sfz(d){this.a.N(9,d)},
p6(){return this.a.U(7)},
$iE:1}
A.fRR.prototype={}
A.fRS.prototype={}
A.fRT.prototype={}
A.bbL.prototype={}
A.a0q.prototype={}
A.asQ.prototype={}
A.aG4.prototype={}
var z=a.updateTypes(["bMz()","Xj()","Xj(dK)"])
A.ocy.prototype={
$1(d){return!0},
$S:32}
A.ocz.prototype={
$1(d){return d.gcWJ()!=null&&d.a.bO(0,"customizable",!1)&&this.a.a.$1(d)},
$S:32};(function installTearOffs(){var x=a._static_0,w=a._static_1
x(A,"t07","xWC",0)
x(A,"o1p","e4L",1)
w(A,"AgH","rYr",2)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(C.z,[A.bMz,A.fRR])
v(A.fRS,A.fRR)
v(A.fRT,A.fRS)
v(A.Xj,A.fRT)
w(C.bM,[A.ocy,A.ocz])
w(C.ab,[A.bbL,A.a0q,A.asQ,A.aG4])
x(A.fRR,C.v)
x(A.fRS,C.X)
x(A.fRT,C.kf)})()
C.b2(b.typeUniverse,JSON.parse('{"bMz":{"z":[]},"Xj":{"v":["@","@"],"X":[],"z":[],"E":["@","@"],"kf":[],"v.V":"@","v.K":"@"},"bbL":{"ab":[]},"a0q":{"ab":[]},"asQ":{"ab":[]},"aG4":{"ab":[]}}'))
var y={p:C.p("bMz"),a:C.p("Xj"),h:C.p("q<dK>")};(function constants(){var x=a.makeConstList
B.bx1=new A.aG4(2,"ENABLED")
B.bx2=new C.asR(1,"NEW")
B.e4V=new A.bbL(0,"UNKNOWN")
B.e4W=new A.bbL(1,"LIMIT_EXCEEDED")
B.e4X=new A.bbL(2,"ILLEGAL_STATE")
B.h2Z=x([B.e4V,B.e4W,B.e4X],C.p("q<bbL>"))
B.eAU=new A.asQ(0,"UNKNOWN")
B.eAV=new A.asQ(1,"SUCCESS")
B.eAW=new A.asQ(2,"FAILED")
B.eAX=new A.asQ(3,"PENDING")
B.eAY=new A.asQ(4,"BLOCKED")
B.eAZ=new A.asQ(5,"PENDING_FROM_FAILED")
B.bQI=x([B.eAU,B.eAV,B.eAW,B.eAX,B.eAY,B.eAZ],C.p("q<asQ>"))
B.eB0=new C.asR(0,"UNKNOWN")
B.hlW=x([B.eB0,B.bx2,D.aPC,D.bx3],C.p("q<asR>"))
B.eAH=new A.aG4(0,"UNKNOWN")
B.eAI=new A.aG4(1,"NEW")
B.eAJ=new A.aG4(3,"REMOVED")
B.bX9=x([B.eAH,B.eAI,B.bx1,B.eAJ],C.p("q<aG4>"))
B.eAK=new A.a0q(0,"UNKNOWN")
B.eAL=new A.a0q(1,"LIMIT_EXCEEDED")
B.eAM=new A.a0q(2,"CORRUPTED_ID")
B.eAT=new A.a0q(3,"MERGE_CONFLICT_COLUMN_VALUE_TYPE")
B.eAS=new A.a0q(4,"UNSUPPORTED_FEATURE_TABLE_REFERENCE")
B.eAR=new A.a0q(5,"UNSUPPORTED_FEATURE_TIME_SCOPED")
B.eAN=new A.a0q(6,"ILLEGAL_STATE")
B.eAO=new A.a0q(7,"UNSUPPORTED_VALUE_TYPE")
B.eAP=new A.a0q(8,"FAILED_DS_VALIDATION")
B.eAQ=new A.a0q(9,"BLOCKED_BY_DEPENDING_ENTITY")
B.c2l=x([B.eAK,B.eAL,B.eAM,B.eAT,B.eAS,B.eAR,B.eAN,B.eAO,B.eAP,B.eAQ],C.p("q<a0q>"))
B.abs=new C.bE("ads.awapps.anji.proto.customdimension.customdimensionschema")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"GSz","uxU",()=>{var w=null,v=C.C("CustomDimensionColumn",A.t07(),w,w,D.abk,w,w)
v.T()
v.T()
v.ac(3,"name")
v.T()
v.T()
v.al(6,"status",B.bX9,C.p("aG4"))
v.T()
v.ac(8,"description")
v.T()
v.T()
return v})
x($,"GSG","uy_",()=>{var w,v,u=null,t=C.C("CustomDimensionSchema",A.o1p(),u,u,B.abs,u,u)
t.ab(1,"customerId")
t.ab(2,"customDimensionSchemaId")
t.ac(3,"name")
t.ac(4,"description")
t.al(5,"status",B.hlW,C.p("asR"))
t.ab(6,"lastModificationTimeMicros")
t.av(7,"columns",A.t07(),y.p)
t.a4(9,"entityOwnerInfo",C.zz(),C.p("K_"))
w=C.p("asQ")
t.al(10,"migrationStatus",B.bQI,w)
v=C.p("a0q")
t.eD(11,"migrationFailureReasons",B.c2l,v)
t.ab(12,"creationTimeMicros")
t.al(13,"aggregateMigrationStatus",B.bQI,w)
t.ab(14,"maxColumnCreationTimeMicros")
t.ab(15,"totalColumnCount")
t.ab(16,"successColumnCount")
t.ab(17,"failedColumnCount")
t.ab(18,"totalRowCount")
t.ab(19,"successRowCount")
t.ab(20,"failedRowCount")
t.ab(21,"totalCampaignAssociationCount")
t.ab(22,"successCampaignAssociationCount")
t.ab(23,"failedCampaignAssociationCount")
t.ab(24,"totalAdGroupAssociationCount")
t.ab(25,"successAdGroupAssociationCount")
t.ab(26,"failedAdGroupAssociationCount")
t.al(27,"sampleCustomDimensionMigrationFailureReason",B.c2l,v)
t.al(28,"sampleAssociationMigrationFailureReason",B.h2Z,C.p("bbL"))
t.ab(29,"totalCriterionAssociationCount")
t.ab(30,"successCriterionAssociationCount")
t.ab(31,"failedCriterionAssociationCount")
t.ab(32,"totalCreativeAssociationCount")
t.ab(33,"successCreativeAssociationCount")
t.ab(34,"failedCreativeAssociationCount")
return t})})()};
(a=>{a["j/Ud0IIMneRp+NddVv9d72DtPUs="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_1922.part.js.map
