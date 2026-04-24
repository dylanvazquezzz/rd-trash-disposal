((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
a1B(d,e){var x=null,w=y.a
return new B.c0a(d,new A.G(x,x,y.s),new A.G(x,x,w),new A.G(x,x,w))},
c0a:function c0a(d,e,f,g){var _=this
_.a=null
_.b=d
_.d=_.c=null
_.r=_.e=!1
_.w=e
_.x=f
_.y=g
_.as=_.Q=_.z=null
_.ax=1
_.ch=_.ay=!1
_.aes$=null},
lgq:function lgq(d){this.a=d},
a1C(d,e){var x,w=new B.enO(A.a_(d,e,0)),v=$.qJ9
w.b=v==null?$.qJ9=A.a3($.CB5,null):v
x=document.createElement("material-toggle")
w.c=x
w.a2("themeable")
return w},
EJa(d,e){return new B.hDJ(A.w(),A.k(d,e,y.t))},
enO:function enO(d){var _=this
_.e=$
_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=null
_.c=_.b=_.a=_.dx=_.db=_.cy=_.cx=$
_.d=d},
lgn:function lgn(d){this.a=d},
hDJ:function hDJ(d,e){this.b=d
this.a=e}},E
J=c[1]
A=c[0]
C=c[2]
D=c[852]
B=a.updateHolder(c[822],B)
E=c[964]
B.c0a.prototype={
an(){this.wK()},
geE(d){var x=this.Q
return x==null?this.z:x},
M(){var x=this.c
if(x!=null)x.aT(0)},
aRd(){if(this.ch)var x=3
else x=this.ay?2:1
this.ax=x},
aAQ(){var x,w=this
if(!w.e){w.r=!w.r
w.wK()
w.w.R(0,w.r)
x=w.a
if(x!=null)x.$0()}},
jv(d){this.aAQ()
d.preventDefault()
d.stopPropagation()},
zt(d){var x=this
if(!x.e){x.ay=!0
x.aRd()
x.x.R(0,d)}},
SH(d){this.ay=!1
this.aRd()
this.y.R(0,d)},
hn3(){if(!this.e){this.ch=!0
this.aRd()}},
w2(d){if(d.keyCode===13||A.ux(d)){this.aAQ()
d.preventDefault()
d.stopPropagation()}},
wK(){var x=this.d
if(x==null)return
x.setAttribute("aria-checked",""+this.r)},
jG(d,e){this.r=e
this.wK()
this.b.ai()},
l1(d){var x=this.c
if(x!=null)x.aT(0)
x=this.w
this.c=new A.f(x,A.o(x).k("f<1>")).P(0,new B.lgq(d))},
om(d){this.a=d},
iZ(d){this.e=d
this.b.ai()},
gIa(){var x=0,w=A.U(y.b),v,u=this
var $async$gIa=A.Q(function(d,e){if(d===1)return A.R(e,w)
for(;;)switch(x){case 0:v=u.d
x=1
break
case 1:return A.S(v,w)}})
return A.T($async$gIa,w)},
$ifn:1,
gbu(d){return this.z}}
B.enO.prototype={
gq(){return"MaterialToggleComponent"},
gd6(){return A.a([A.a([],y.h)],y.v)},
n(d){var x,w,v,u,t=this,s="animated",r=t.a,q=t.ao(),p=document,o=t.cx=A.t(p,q)
t.p(o,"material-toggle")
A.e(o,"role","switch")
t.e=A.m(t,1,o,B.Bx7())
x=A.t(p,o)
t.p(x,"tgl-container")
w=t.cy=A.t(p,x)
A.e(w,s,"")
t.p(w,"tgl-bar")
v=A.t(p,x)
t.p(v,"tgl-btn-container")
w=t.db=A.t(p,v)
t.p(w,"tgl-btn-underlay")
w=t.dx=A.t(p,w)
A.e(w,s,"")
t.p(w,"tgl-btn")
t.cg(w,0)
t.p(A.t(p,x),"focus-ring")
w=y.k
u=y.d
C.n.aa(o,"blur",t.ah(r.gye(),w,u))
C.n.aa(o,"focus",t.ah(r.gva(),w,u))
C.n.aa(o,"mouseenter",t.a8(r.ghn2(),w))
C.n.aa(o,"mouseleave",t.ah(new B.lgn(t),w,w))
r.d=o
o=J.aO(q)
o.aa(q,"click",t.ah(r.gd3(),w,y.f))
o.aa(q,"keypress",t.ah(r.gd4(),w,y.E))},
t(){var x,w,v,u,t,s,r,q,p,o,n,m=this,l="elevation",k=m.a,j=m.e,i=k.z
i=i!=null&&i.length!==0
j.c.sJ(i)
j.a.v()
x=k.r
w=m.w!==x
if(w){A.a1(m.cx,"checked",x)
m.w=x}v=k.e
if(m.x!==v){A.a1(m.cx,"disabled",v)
m.x=v
w=!0}j=k.e
u=j?"-1":"0"
if(m.y!==u){A.a5(m.cx,"tabindex",u)
m.y=u
w=!0}t=k.e
if(m.z!==t){j=m.cx
i=""+t
A.e(j,"aria-disabled",i)
m.z=t
w=!0}j=k.Q
s=j==null?k.z:j
if(s==null)s=""
if(m.Q!==s){A.e(m.cx,"aria-label",s)
m.Q=s
w=!0}r=k.r
if(m.as!==r){j=m.cx
i=""+r
A.e(j,"aria-checked",i)
m.as=r
w=!0}q=k.ax
if(m.at!==q){j=m.cy
i=""+q
A.e(j,l,i)
m.at=q
w=!0}p=k.r
if(m.ax!==p){A.a1(m.db,"under-checked",p)
m.ax=p
w=!0}o=k.ay
if(m.ay!==o){A.a1(m.db,"under-focus",o)
m.ay=o
w=!0}n=k.ax
if(m.ch!==n){k=m.dx
j=""+n
A.e(k,l,j)
m.ch=n
w=!0}$.n().K(w)},
G(){this.e.a.A()},
ad(d){var x=this,w=x.a.ay,v=x.CW!==w
if(v){A.a1(x.c,"is-focused",w)
x.CW=w}$.n().K(v)}}
B.hDJ.prototype={
gq(){return"MaterialToggleComponent"},
n(d){var x=document.createElement("div")
this.p(x,"tgl-lbl")
x.appendChild(this.b.b)
this.L(x)},
t(){var x=this.a.a.z
if(x==null)x=""
this.b.Z(x)}}
var z=a.updateTypes(["~(f2)","~(e8)","~()","~(cM)","~(y)","h<~>(c,J)"])
B.lgq.prototype={
$1(d){return this.a.$1(d)},
$S:10}
B.lgn.prototype={
$1(d){var x=this.a.a
x.ch=!1
x.aRd()},
$S:0};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u,v=a._static_2
var u
x(u=B.c0a.prototype,"gd3","jv",1)
x(u,"gva","zt",0)
x(u,"gye","SH",0)
w(u,"ghn2","hn3",2)
x(u,"gd4","w2",3)
x(u,"goh","iZ",4)
v(B,"Bx7","EJa",5)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.c0a,D.bow)
w(A.bM,[B.lgq,B.lgn])
x(B.enO,A.cf)
x(B.hDJ,A.h)})()
A.b2(b.typeUniverse,JSON.parse('{"c0a":{"d6":[],"fn":["y"]},"enO":{"c":[]},"hDJ":{"h":["c0a"],"c":[],"i":[]}}'))
var y=(function rtii(){var x=A.p
return{k:x("bO"),d:x("f2"),v:x("q<x<N>>"),h:x("q<N>"),E:x("cM"),t:x("c0a"),f:x("e8"),a:x("G<f2>"),s:x("G<y>"),b:x("@")}})();(function constants(){E.om=A.H("Htt")})();(function staticFields(){$.CX5=A.a(['._nghost-%ID%{display:inline-block;text-align:initial}@media (-ms-high-contrast:active),screen and (forced-colors:active){._nghost-%ID% .material-toggle.disabled._ngcontent-%ID%{color:GrayText}._nghost-%ID% .material-toggle:not(.disabled)._ngcontent-%ID%{color:CanvasText}}.material-toggle._ngcontent-%ID%{display:inline-flex;align-items:center;justify-content:flex-end;cursor:pointer;outline:none;width:100%}.material-toggle.disabled._ngcontent-%ID%{cursor:not-allowed}.material-toggle.disabled._ngcontent-%ID% .tgl-container._ngcontent-%ID%,.material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{pointer-events:none}.tgl-container._ngcontent-%ID%{display:inline-block;min-width:36px;position:relative;vertical-align:middle;width:36px}.tgl-bar._ngcontent-%ID%{transition:background-color .13s cubic-bezier(.4,0,.2,1);transition:opacity .13s cubic-bezier(.4,0,.2,1);background-color:rgba(0,0,0,.26);border-radius:var(--acx-sys-shape--corner-value-large,8px);height:14px;margin:2px 0;outline:1px solid transparent;width:100%}.tgl-bar[animated]._ngcontent-%ID%{transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.tgl-bar[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.tgl-bar[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.tgl-bar[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.tgl-bar[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.tgl-bar[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.tgl-bar[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.2)}.material-toggle.checked:not(.disabled)._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:#009688;opacity:.5}.tgl-btn-container._ngcontent-%ID%{display:inline-flex;justify-content:flex-end;transition:width .13s cubic-bezier(.4,0,.2,1);margin-top:-2px;position:absolute;top:0;width:20px;overflow:visible}.material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{width:36px;color:#009688}.tgl-btn-underlay._ngcontent-%ID%{width:40px;height:40px;border-radius:50%;margin:-10px}.tgl-btn-underlay.under-focus._ngcontent-%ID%{background-color:hsla(0,0%,74%,.24);outline:1px dashed transparent}.tgl-btn-underlay.under-focus.under-checked._ngcontent-%ID%{background-color:rgba(0,150,136,.24)}.tgl-btn._ngcontent-%ID%{transition:background-color .13s cubic-bezier(.4,0,.2,1);margin:10px;background-color:#fafafa;opacity:1;border-radius:50%;height:20px;position:relative;width:20px}.tgl-btn[animated]._ngcontent-%ID%{transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.tgl-btn[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.tgl-btn[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.tgl-btn[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)}.tgl-btn[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.tgl-btn[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)}.tgl-btn[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.2)}.tgl-btn._ngcontent-%ID%:after{bottom:0;left:0;position:absolute;right:0;top:0;box-sizing:border-box;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}.material-toggle.checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#009688}.tgl-lbl._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:2px 8px 2px 0;position:relative;vertical-align:middle;white-space:normal}.material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{opacity:.54}.material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#bdbdbd}.material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:rgba(0,0,0,.12)}.gm-toggle ._nghost-%ID%,.gm-toggle._nghost-%ID%{--acx-comp-toggle--handle-color:var(--acx-sys-color--on-surface-variant,#5f6368);--acx-comp-toggle--handle-selected-color:var(--acx-sys-color--primary,#1a73e8);--acx-comp-toggle--handle-disabled-color:var(--acx-sys-color--on-disabled,#bdbdbd);--acx-comp-toggle--handle-selected-focus-color:var(--acx-sys-color--primary-focus,#1b5fb9);--acx-comp-toggle--handle-unselected-focus-color:var(--acx-sys-color--on-surface-variant-focus,#202124);--acx-comp-toggle--icon-color:var(--acx-sys-color--surface,#fff);--acx-comp-toggle--icon-disabled-color:var(--acx-sys-color--surface,#fff);--acx-comp-toggle--icon-selected-color:var(--acx-sys-color--on-primary,#fff);--acx-comp-toggle--label-text-disabled-color:var(--acx-sys-color--on-disabled,rgba(60,64,67,.38));--acx-comp-toggle--shadow-color:var(--acx-sys-color--shadow,#3c4043);--acx-comp-toggle--track-color:var(--acx-sys-color--hairline,#dadce0);--acx-comp-toggle--track-disabled-color:var(--acx-sys-color--disabled,rgba(60,64,67,.12));--acx-comp-toggle--track-selected-color:var(--acx-sys-color--primary-container-contrast,#aecbfa)}.gm-toggle ._nghost-%ID% .material-toggle:not(.disabled)._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle:not(.disabled)._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:var(--acx-comp-toggle--track-color);opacity:1}.gm-toggle ._nghost-%ID% .material-toggle:not(.disabled).checked._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle:not(.disabled).checked._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:var(--acx-comp-toggle--track-selected-color)}.gm-toggle ._nghost-%ID% .tgl-btn-underlay:hover:not(.under-focus)._ngcontent-%ID%,.gm-toggle._nghost-%ID% .tgl-btn-underlay:hover:not(.under-focus)._ngcontent-%ID%{background-color:rgb(from var(--acx-comp-toggle--shadow-color) r g b/.04)}.gm-toggle ._nghost-%ID% .tgl-btn-underlay:hover:not(.under-focus).under-checked._ngcontent-%ID%,.gm-toggle._nghost-%ID% .tgl-btn-underlay:hover:not(.under-focus).under-checked._ngcontent-%ID%{background-color:rgb(from var(--acx-comp-toggle--handle-selected-color) r g b/.04)}.gm-toggle ._nghost-%ID% .tgl-btn-underlay.under-focus._ngcontent-%ID%,.gm-toggle._nghost-%ID% .tgl-btn-underlay.under-focus._ngcontent-%ID%{background-color:rgb(from var(--acx-comp-toggle--shadow-color) r g b/.12)}.gm-toggle ._nghost-%ID% .tgl-btn-underlay.under-focus.under-checked._ngcontent-%ID%,.gm-toggle._nghost-%ID% .tgl-btn-underlay.under-focus.under-checked._ngcontent-%ID%{background-color:rgb(from var(--acx-comp-toggle--handle-selected-color) r g b/.12)}.gm-toggle ._nghost-%ID% .material-toggle:not(.disabled)._ngcontent-%ID% .tgl-btn-underlay:hover._ngcontent-%ID% .tgl-btn._ngcontent-%ID% toggle-icon material-icon.remove:not(.disabled),.gm-toggle._nghost-%ID% .material-toggle:not(.disabled)._ngcontent-%ID% .tgl-btn-underlay:hover._ngcontent-%ID% .tgl-btn._ngcontent-%ID% toggle-icon material-icon.remove:not(.disabled),.gm-toggle ._nghost-%ID% .material-toggle:not(.disabled)._ngcontent-%ID% .under-focus._ngcontent-%ID% .tgl-btn._ngcontent-%ID% toggle-icon material-icon.remove:not(.disabled),.gm-toggle._nghost-%ID% .material-toggle:not(.disabled)._ngcontent-%ID% .under-focus._ngcontent-%ID% .tgl-btn._ngcontent-%ID% toggle-icon material-icon.remove:not(.disabled){background-color:var(--acx-comp-toggle--handle-unselected-focus-color)}.gm-toggle ._nghost-%ID% .material-toggle:not(.disabled).checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle:not(.disabled).checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:var(--acx-comp-toggle--handle-selected-color)}.gm-toggle ._nghost-%ID% .material-toggle:not(.disabled).checked._ngcontent-%ID% .tgl-btn-underlay:hover._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle:not(.disabled).checked._ngcontent-%ID% .tgl-btn-underlay:hover._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.gm-toggle ._nghost-%ID% .material-toggle:not(.disabled).checked._ngcontent-%ID% .under-focus._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle:not(.disabled).checked._ngcontent-%ID% .under-focus._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:var(--acx-comp-toggle--handle-selected-focus-color)}.gm-toggle ._nghost-%ID% .tgl-btn-container._ngcontent-%ID%,.gm-toggle._nghost-%ID% .tgl-btn-container._ngcontent-%ID%{margin-top:-1px}@media (-ms-high-contrast:active),screen and (forced-colors:active){.gm-toggle ._nghost-%ID% .material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{color:CanvasText}}@media (-ms-high-contrast:active),screen and (forced-colors:active){.gm-toggle ._nghost-%ID% .material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{color:GrayText}}.gm-toggle ._nghost-%ID% .tgl-btn-underlay.under-focus._ngcontent-%ID%,.gm-toggle._nghost-%ID% .tgl-btn-underlay.under-focus._ngcontent-%ID%{outline:none}.gm-toggle ._nghost-%ID% .material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.gm-toggle ._nghost-%ID% .material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:var(--acx-comp-toggle--track-disabled-color)}.gm-toggle ._nghost-%ID% .material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.gm-toggle ._nghost-%ID% .material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:var(--acx-comp-toggle--handle-disabled-color)}.gm-toggle ._nghost-%ID% .material-toggle.checked.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle.checked.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%,.gm-toggle ._nghost-%ID% .material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%,.gm-toggle._nghost-%ID% .material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{color:var(--acx-comp-toggle--label-text-disabled-color);opacity:unset}.navmode-keyboard .gm-toggle .is-focused._nghost-%ID% .focus-ring._ngcontent-%ID%,.navmode-keyboard .is-focused.gm-toggle._nghost-%ID% .focus-ring._ngcontent-%ID%,.navmode-keyboard.gm-toggle .is-focused._nghost-%ID% .focus-ring._ngcontent-%ID%{pointer-events:none;border:2px solid #185abc;border-radius:6px;box-sizing:content-box;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 6px);width:calc(100% + 4px);display:inline-block;position:absolute}@media screen and (forced-colors:active){.navmode-keyboard .gm-toggle .is-focused._nghost-%ID% .focus-ring._ngcontent-%ID%,.navmode-keyboard .is-focused.gm-toggle._nghost-%ID% .focus-ring._ngcontent-%ID%,.navmode-keyboard.gm-toggle .is-focused._nghost-%ID% .focus-ring._ngcontent-%ID%{border-color:CanvasText}}.navmode-keyboard .gm-toggle .is-focused._nghost-%ID% .focus-ring._ngcontent-%ID%:after,.navmode-keyboard .is-focused.gm-toggle._nghost-%ID% .focus-ring._ngcontent-%ID%:after,.navmode-keyboard.gm-toggle .is-focused._nghost-%ID% .focus-ring._ngcontent-%ID%:after{content:"";border:2px solid #e8f0fe;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors:active){.navmode-keyboard .gm-toggle .is-focused._nghost-%ID% .focus-ring._ngcontent-%ID%:after,.navmode-keyboard .is-focused.gm-toggle._nghost-%ID% .focus-ring._ngcontent-%ID%:after,.navmode-keyboard.gm-toggle .is-focused._nghost-%ID% .focus-ring._ngcontent-%ID%:after{border-color:CanvasText}}'],y.h)
$.qJ9=null
$.CB5=A.a([$.CX5],y.h)})()};
(a=>{a["5Ch+pVR18MCz030stIlGK0l2pg8="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_199.part.js.map
