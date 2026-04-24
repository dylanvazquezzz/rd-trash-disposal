((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
c8s(d,e,f,g,h,i){var x=new B.KB(new A.am(null,null,y.l),C.YP,i,d,e,f,e,g,D.cL)
x.y=h!=null
return x},
KB:function KB(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.f=_.e=!1
_.r=!0
_.y=_.x=_.w=!1
_.ax=_.at=_.as=_.Q=_.z=null
_.ay="checkbox"
_.ch=null
_.CW=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.fr=_.dy=null
_.fy=!1
_.id=null
_.a=j
_.b=k
_.c=l},
c8t(d,e){var x,w=new B.eIS(A.w(),A.w(),A.a_(d,e,0)),v=$.qVt
w.b=v==null?$.qVt=A.a3($.CFH,null):v
x=document.createElement("acx-scorecard")
w.c=x
w.a2("themeable")
return w},
F6f(d,e){return new B.i5W(A.k(d,e,y.w))},
F6r(d,e){return new B.i65(A.w(),A.k(d,e,y.w))},
F6t(d,e){return new B.i67(A.w(),A.k(d,e,y.w))},
F6v(d,e){return new B.i69(A.k(d,e,y.w))},
F6x(d,e){return new B.i6b(A.w(),A.k(d,e,y.w))},
eIS:function eIS(d,e,f){var _=this
_.e=d
_.f=e
_.y=_.x=_.w=_.r=$
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=null
_.c=_.b=_.a=_.fr=$
_.d=f},
i5W:function i5W(d){this.c=this.b=$
this.a=d},
i65:function i65(d,e){this.b=d
this.a=e},
i67:function i67(d,e){this.b=d
this.c=$
this.a=e},
i69:function i69(d){var _=this
_.c=_.b=$
_.d=null
_.a=d},
i6b:function i6b(d,e){this.b=d
this.a=e},
RL:function RL(d,e){this.a=d
this.b=e}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[415],B)
C=c[889]
B.KB.prototype={
ghO(){return this.as},
sFs(d){var x=this
x.e=x.f=x.r=!1
switch(d.toUpperCase()){case"POSITIVE":x.e=!0
break
case"NEGATIVE":x.f=!0
break
case"NEUTRAL":x.r=!0
break
default:throw A.Y(A.lS(d,"changeType",null))}},
ger(d){return this.x},
ser(d,e){this.x=e
this.bqj()
this.cy.ai()},
scq(d,e){var x,w=this
w.ay=e
w.cLf()
w.bqj()
x=!1
if(!w.y)if(w.w){x=w.ay
x=x==="button"||x==="checkbox"}w.at=x?"0":null
w.cy.ai()},
bqj(){var x,w=this,v=null
switch(w.ay){case"button":w.z=w.w?""+w.x:v
w.ax=w.as=w.Q=null
break
case"radio":case"checkbox":w.z=null
w.Q=w.w?""+w.x:v
w.ax=w.as=null
break
case"option":w.Q=w.z=null
w.as=""+w.x
w.ax=null
break
case"gridcell":w.Q=w.z=null
x=w.w
w.as=x?""+w.x:v
w.ax=x?v:"true"
break
default:w.ax=w.as=w.Q=w.z=null}},
cLf(){var x,w,v=this,u=v.w||v.ay==="gridcell"?v.ay:null
v.ch=u
x=v.cx
if(x!=null)w=x.c!=u
else w=!1
if(w)x.scq(0,u)},
scUP(d){var x=this,w="scorecard-color-",v=x.db,u=x.CW
v.classList.remove(w+u.b)
x.CW=d
v.classList.add(w+d.b)
x.cy.ai()},
gfHn(){var x=this,w=x.CW
switch(w.a){case 1:return x.dx.gjj().c
case 2:return x.dx.gjj().d
case 3:return x.dx.gjj().e
case 4:return x.dx.gjj().kJ
case 5:return x.dx.gjj().r
case 0:return x.dx.gjj().b
case 6:return x.dx.gjj().f
case 7:return x.dx.gjj().ho
case 12:return x.dx.gjj().w
case 8:case 9:case 10:case 11:return C.aYt.u(0,w)}},
t9(){var x=this
x.aZa()
if(x.w){x.ser(0,!x.x)
x.d.R(0,x.x)}},
hng(d){var x,w=d.keyCode
if(this.w)x=w===13||A.ux(d)
else x=!1
if(x){d.preventDefault()
this.t9()}},
gbu(d){return this.dy},
gaj(d){return this.fr},
ghD(){return null},
gbT(d){return this.id}}
B.eIS.prototype={
gq(){return"ScorecardComponent"},
gd6(){var x=y.h
return A.a([A.a([],x),A.a([],x),A.a([],x),A.a([],x)],y.v)},
n(d){var x,w,v,u,t,s=this,r=s.a,q=s.ao()
s.r=A.m(s,0,q,B.C7L())
x=document
s.p(A.t(x,q),"focus-ring")
w=A.t(x,q)
s.p(w,"label-name")
w.appendChild(s.e.b)
s.cg(w,0)
v=s.fr=A.t(x,q)
s.p(v,"label-value")
v.appendChild(s.f.b)
s.cg(v,1)
s.w=A.m(s,6,q,B.C7M())
A.u(q,"\n")
s.x=A.m(s,8,q,B.C7N())
A.u(q,"\n")
s.y=A.m(s,10,q,B.C7P())
A.u(q,"\n")
s.cg(q,3)
v=y.k
u=y.E
t=J.aO(q)
t.aa(q,"keydown",s.ah(r.gel(),v,u))
t.aa(q,"blur",s.a8(r.gj4(),v))
t.aa(q,"mousedown",s.ah(r.gfC(),v,y.f))
t.aa(q,"click",s.a8(r.gd3(),v))
t.aa(q,"focus",s.ah(r.gcj(r),v,v))
t.aa(q,"keypress",s.ah(r.ghnf(),v,u))},
t(){var x,w,v,u=this,t=u.a,s=u.r
s.c.sJ(t.w)
x=u.w
x.c.sJ(!1)
w=u.x
w.c.sJ(t.id!=null)
v=u.y
v.c.sJ(!1)
s.a.v()
x.a.v()
w.a.v()
v.a.v()
v=t.dy
s=v==null?"":v
u.e.Z(s)
t=t.fr
if(t==null)t=""
u.f.Z(t)
$.n().K(!1)},
G(){var x=this
x.r.a.A()
x.w.a.A()
x.x.a.A()
x.y.a.A()},
ad(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.a,l=m.z,k=n.Q!=l
if(k){A.a5(n.c,"aria-pressed",l)
n.Q=l}x=m.Q
if(n.as!=x){A.a5(n.c,"aria-checked",x)
n.as=x
k=!0}w=m.as
if(n.at!=w){A.a5(n.c,"aria-selected",w)
n.at=w
k=!0}v=m.ax
if(n.ax!=v){A.a5(n.c,"aria-readonly",v)
n.ax=v
k=!0}u=m.e
if(n.ay!==u){A.a1(n.c,"is-change-positive",u)
n.ay=u
k=!0}t=m.f
if(n.ch!==t){A.a1(n.c,"is-change-negative",t)
n.ch=t
k=!0}s=m.at
if(n.CW!=s){A.a5(n.c,"tabindex",s)
n.CW=s
k=!0}r=m.x
if(n.cx!==r){A.a1(n.c,"selected",r)
n.cx=r
k=!0}q=m.w
if(n.cy!==q){A.a1(n.c,"selectable",q)
n.cy=q
k=!0}p=m.ch
if(n.db!=p){A.a5(n.c,"role",p)
n.db=p
k=!0}o=m.x?m.gfHn():null
if(n.dx!=o){m=n.c.style
D.B.bU(m,D.B.bH(m,"background"),o,null)
n.dx=o
k=!0}if(n.dy!==!1){A.a1(n.c,"extra-big",!1)
n.dy=!1
k=!0}$.n().K(k)}}
B.i5W.prototype={
gq(){return"ScorecardComponent"},
n(d){var x,w=this,v=w.b=A.akU(w,0),u=v.c
w.gE().F(u)
x=A.akT(u)
w.c=x
v.W(0,x)
w.L(u)},
t(){this.b.B()},
G(){this.b.D()
this.c.M()}}
B.i65.prototype={
gq(){return"ScorecardComponent"},
n(d){var x=document.createElement("span")
this.p(x,"suggestion before")
x.appendChild(this.b.b)
this.L(x)},
t(){this.b.Z("")}}
B.i67.prototype={
gq(){return"ScorecardComponent"},
n(d){var x=this,w=document.createElement("span")
x.p(w,"description")
x.c=A.m(x,1,w,B.C7O())
A.u(w," ")
w.appendChild(x.b.b)
A.u(w,"  ")
x.cg(w,2)
x.L(w)},
t(){var x=this.a.a,w=this.c,v=x.fy&&x.id!==""&&!x.r
w.c.sJ(v)
w.a.v()
w=x.id
if(w==null)w=""
this.b.Z(w)},
G(){this.c.a.A()}}
B.i69.prototype={
gq(){return"ScorecardComponent"},
n(d){var x,w=this,v=w.b=A.au(w,0),u=v.c
v.a2("change-glyph")
A.e(u,"size","small")
x=new A.at(u,A.ae(null,!1))
w.c=x
v.W(0,x)
w.L(u)},
t(){var x=this,w=x.a.a.e?"arrow_upward":"arrow_downward",v=x.d!==w
if(v){x.c.saF(0,w)
x.d=w}if(v)x.b.d.f|=32
x.b.B()
$.n().K(v)},
G(){this.b.D()}}
B.i6b.prototype={
gq(){return"ScorecardComponent"},
n(d){var x=document.createElement("span")
this.p(x,"suggestion after")
x.appendChild(this.b.b)
this.L(x)},
t(){this.b.Z("")}}
B.RL.prototype={
aW(){return"ScorecardColor."+this.b}}
var z=a.updateTypes(["h<~>(c,J)","~()","~(cM)"]);(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u,v=a._static_2
var u
x(u=B.KB.prototype,"gd3","t9",1)
w(u,"ghnf","hng",2)
v(B,"C7L","F6f",0)
v(B,"C7M","F6r",0)
v(B,"C7N","F6t",0)
v(B,"C7O","F6v",0)
v(B,"C7P","F6x",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.KB,A.jT)
x(B.eIS,A.cf)
w(A.h,[B.i5W,B.i65,B.i67,B.i69,B.i6b])
x(B.RL,A.aS)})()
A.b2(b.typeUniverse,JSON.parse('{"eIS":{"c":[]},"i5W":{"h":["KB"],"c":[],"i":[]},"i65":{"h":["KB"],"c":[],"i":[]},"i67":{"h":["KB"],"c":[],"i":[]},"i69":{"h":["KB"],"c":[],"i":[]},"i6b":{"h":["KB"],"c":[],"i":[]},"RL":{"aS":[],"b8":[]},"cPH":{"a0Y":[]},"adS":{"kT":[],"d6":[],"aI":[]}}'))
var y={k:A.p("bO"),v:A.p("q<x<N>>"),h:A.p("q<N>"),E:A.p("cM"),f:A.p("e8"),w:A.p("KB"),l:A.p("am<y>")};(function constants(){C.YP=new B.RL(0,"blue")
C.b4C=new B.RL(1,"red")
C.b4G=new B.RL(2,"yellow")
C.b4H=new B.RL(3,"green")
C.clc=new B.RL(4,"grey")
C.b4I=new B.RL(5,"pink")
C.b4J=new B.RL(6,"purple")
C.YQ=new B.RL(7,"white")
C.ayB=new B.RL(8,"blueLight")
C.b4K=new B.RL(9,"redLight")
C.b4D=new B.RL(10,"yellowLight")
C.b4E=new B.RL(11,"greenLight")
C.b4F=new B.RL(12,"blueDark")
C.aYt=new A.bf([C.YP,"#1A73E8",C.b4C,"#D93025",C.b4G,"#F9AB00",C.b4H,"#188038",C.clc,"#F1F3F4",C.b4I,"#D01884",C.b4J,"#A142F4",C.YQ,"#FFFFFF",C.ayB,"#E8F0FE",C.b4K,"#FCE8E6",C.b4D,"#FEF7E0",C.b4E,"#E6F4EA",C.b4F,"#1967D2"],A.p("bf<RL,l>"))})();(function staticFields(){$.D5e=A.a(['._nghost-%ID%{--acx-comp-scorecard--container-color:var(--acx-sys-color--surface,#fff);--acx-comp-scorecard--label-text-color:var(--acx-sys-color--on-surface,#3c4043);--acx-comp-scorecard--label-text-selected-blue-color:var(--acx-sys-color--on-data-1,#fff);--acx-comp-scorecard--label-text-selected-green-color:var(--acx-sys-color--on-data-4,#fff);--acx-comp-scorecard--label-text-selected-red-color:var(--acx-sys-color--on-data-2,#fff);--acx-comp-scorecard--label-text-selected-yellow-color:var(--acx-sys-color--on-data-3,#202124);--acx-comp-scorecard--metric-text-selected-blue-color:var(--acx-sys-color--on-data-1,#fff);--acx-comp-scorecard--metric-text-selected-green-color:var(--acx-sys-color--on-data-4,#fff);--acx-comp-scorecard--metric-text-selected-red-color:var(--acx-sys-color--on-data-2,#fff);--acx-comp-scorecard--metric-text-selected-yellow-color:var(--acx-sys-color--on-data-3,#202124);--acx-comp-scorecard--outline-color:var(--acx-sys-color--hairline,#dadce0);--acx-comp-scorecard--overlay-container-color:var(--acx-sys-color--overlay,hsla(0,0%,100%,.7));--acx-comp-scorecard--overlay-container-hover-color:var(--acx-sys-color--overlay-hover,hsla(0,0%,100%,.85));--acx-comp-scorecard--overlay-icon-color:var(--acx-sys-color--on-surface-variant,#5f6368);--acx-comp-scorecard--overlay-icon-hover-color:var(--acx-sys-color--on-surface-variant-hover,#202124);--acx-comp-scorecard--secondary-text-negative-color:var(--acx-sys-color--error,#d93025);--acx-comp-scorecard--secondary-text-neutral-color:var(--acx-sys-color--on-surface-variant,#5f6368);--acx-comp-scorecard--secondary-text-positive-color:var(--acx-sys-color--success,#188038);color:var(--acx-comp-scorecard--label-text-color);background:inherit;display:inline-block;font-size:13px;padding:24px;position:relative}body.navmode-keyboard :focus._nghost-%ID%{outline:none}body.navmode-keyboard :focus._nghost-%ID% .focus-ring._ngcontent-%ID%{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% - 8px);width:calc(100% - 8px);border-color:#2a56c6}@media screen and (forced-colors:active){body.navmode-keyboard :focus._nghost-%ID% .focus-ring._ngcontent-%ID%{border-color:CanvasText}}body.navmode-keyboard :focus._nghost-%ID% .focus-ring._ngcontent-%ID%:after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors:active){body.navmode-keyboard :focus._nghost-%ID% .focus-ring._ngcontent-%ID%:after{border-color:CanvasText}}body.navmode-keyboard :focus._nghost-%ID% .focus-ring._ngcontent-%ID%:after{border-color:#e8f0fe}:hover.selectable._nghost-%ID%{cursor:pointer}:not(.selected).is-change-positive._nghost-%ID% .description._ngcontent-%ID%{color:#0f9d58}:not(.selected).is-change-negative._nghost-%ID% .description._ngcontent-%ID%{color:#db4437}.selected._nghost-%ID%{color:#fff}.selected._nghost-%ID% .description._ngcontent-%ID%,.selected._nghost-%ID% .suggestion._ngcontent-%ID%{color:inherit}@media (-ms-high-contrast:active),screen and (forced-colors:active){.selected._nghost-%ID%{text-decoration:underline;border-width:2px;background:SelectedItem!important}.selected.selected.selected._nghost-%ID%{color:SelectedItemText}}.right-align._nghost-%ID%{text-align:right}.extra-big._nghost-%ID%{margin:0;padding:24px}.extra-big._nghost-%ID% .label-name._ngcontent-%ID%{font-size:14px;padding-bottom:4px}.extra-big._nghost-%ID% .label-value._ngcontent-%ID%{font-size:34px}.extra-big._nghost-%ID% .description._ngcontent-%ID%{padding-top:4px;font-size:14px;display:block}.label-name._ngcontent-%ID%,.label-value._ngcontent-%ID%{clear:both;color:inherit;font-weight:400;line-height:normal;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.label-name._ngcontent-%ID%{font-size:13px;padding-bottom:8px}.label-value._ngcontent-%ID%{font-size:32px}.label-value._ngcontent-%ID% value._ngcontent-%ID%{line-height:1}.description._ngcontent-%ID%,.suggestion._ngcontent-%ID%{color:var(--acx-comp-scorecard--secondary-text-neutral-color);padding-top:8px}.change-glyph._ngcontent-%ID%{color:rgba(0,0,0,.54);vertical-align:middle}.gm-scorecard :not(.selected).is-change-positive._nghost-%ID% .description._ngcontent-%ID%,:not(.selected).is-change-positive.gm-scorecard._nghost-%ID% .description._ngcontent-%ID%{color:var(--acx-comp-scorecard--secondary-text-positive-color)}.gm-scorecard :not(.selected).is-change-negative._nghost-%ID% .description._ngcontent-%ID%,:not(.selected).is-change-negative.gm-scorecard._nghost-%ID% .description._ngcontent-%ID%{color:var(--acx-comp-scorecard--secondary-text-negative-color)}.gm-scorecard :not(.selected)._nghost-%ID% .description._ngcontent-%ID%,:not(.selected).gm-scorecard._nghost-%ID% .description._ngcontent-%ID%,.gm-scorecard :not(.selected)._nghost-%ID% .suggestion._ngcontent-%ID%,:not(.selected).gm-scorecard._nghost-%ID% .suggestion._ngcontent-%ID%{color:var(--acx-comp-scorecard--secondary-text-neutral-color)}.gm-scorecard ._nghost-%ID% .change-glyph._ngcontent-%ID%,.gm-scorecard._nghost-%ID% .change-glyph._ngcontent-%ID%{color:var(--acx-comp-scorecard--secondary-text-neutral-color)}.gm-scorecard ._nghost-%ID% .description._ngcontent-%ID%,.gm-scorecard._nghost-%ID% .description._ngcontent-%ID%,.gm-scorecard ._nghost-%ID% .suggestion._ngcontent-%ID%,.gm-scorecard._nghost-%ID% .suggestion._ngcontent-%ID%{color:var(--acx-comp-scorecard--secondary-text-neutral-color)}.gm-scorecard .selected._nghost-%ID%,.selected.gm-scorecard._nghost-%ID%{color:var(--acx-comp-scorecard--label-text-selected-blue-color)}.gm-scorecard .selected.scorecard-color-yellow._nghost-%ID%,.selected.scorecard-color-yellow.gm-scorecard._nghost-%ID%{color:var(--acx-comp-scorecard--label-text-selected-yellow-color)}.gm-scorecard .selected.scorecard-color-red._nghost-%ID%,.selected.scorecard-color-red.gm-scorecard._nghost-%ID%{color:var(--acx-comp-scorecard--label-text-selected-red-color)}.gm-scorecard .selected.scorecard-color-green._nghost-%ID%,.selected.scorecard-color-green.gm-scorecard._nghost-%ID%{color:var(--acx-comp-scorecard--label-text-selected-green-color)}.gm-scorecard .selected._nghost-%ID% .description._ngcontent-%ID%,.selected.gm-scorecard._nghost-%ID% .description._ngcontent-%ID%,.gm-scorecard .selected._nghost-%ID% .suggestion._ngcontent-%ID%,.selected.gm-scorecard._nghost-%ID% .suggestion._ngcontent-%ID%{color:inherit}.gm-scorecard-border ._nghost-%ID%,.gm-scorecard-border._nghost-%ID%{border-radius:var(--acx-sys-shape--corner-value-large,8px);border:1px solid var(--acx-comp-scorecard--outline-color)}.gm-scorecard-border .scorecard-bar ._nghost-%ID%{border-radius:0;border:0}'],y.h)
$.qVt=null
$.CFH=A.a([$.D5e],y.h)})()};
(a=>{a["RhOVZfnh53d7H33yCeXE6LKAHXg="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_828.part.js.map
