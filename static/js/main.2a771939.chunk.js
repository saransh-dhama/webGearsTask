(this.webpackJsonpwebgearstask=this.webpackJsonpwebgearstask||[]).push([[0],{17:function(t,n,e){t.exports=e(27)},26:function(t,n,e){t.exports=e.p+"static/media/product.aa987d58.svg"},27:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),a=e(12),i=e.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=e(1),u={primaryColor:"#57a3ff",secondaryColor:"#E18726",background:"#2F2F31",elevated:"#504F4E",color:"#EAEAE3",colorInvert:"#2F2F31",fontLight:"300",fontRegular:"400",fontBold:"700",radius:"4px"},d=e(3),l=e(2);function p(){var t=Object(l.a)(["\n\ttext-align: center;\n\tfont-size: 1.5rem;\n\tfont-weight: ",";\n\tmargin-bottom: 30px;\n"]);return p=function(){return t},t}var s=c.b.h2(p(),(function(t){return t.theme.fontBold})),m=function(t){var n=t.className,e=t.children;return o.a.createElement(s,{className:n},e)};function f(){var t=Object(l.a)(["\n\tbackground: ",";\n\tpadding-top: 15px;\n\tborder-radius: 4px;\n"]);return f=function(){return t},t}var h=c.b.div(f(),(function(t){return t.theme.elevated})),g=function(t){var n=t.className,e=t.children;return o.a.createElement(h,{className:n},e)},b=e(16),v=e.n(b);function E(){var t=Object(l.a)(["\n\tbackground: none;\n\tbox-shadow: none;\n\tborder: none;\n\tcolor: ",";\n\tfont-size: 14px;\n\tline-height: 30px;\n\tmargin: 5px;\n\tborder-bottom: 1px solid #6d6d6d;\n\toutline: none !important;\n\twidth: ",";\n"]);return E=function(){return t},t}var x=c.b.input(E(),(function(t){return t.theme.color}),(function(t){return t.inputWidth+"%"})),y=function(t){var n=t.placeholder,e=t.name,r=t.id,a=t.type,i=t.value,c=t.className,u=t.onKeyUpHandler,d=t.handleChange,l=t.inputWidth;return o.a.createElement(x,{placeholder:n,name:e,id:r,type:a,value:i,className:c,onKeyUp:v.a.debounce(u,300),onChange:function(t){return d(t.target.value)},inputWidth:l,autoComplete:"off"})};function O(){var t=Object(l.a)(["\n\tfont-family: inherit;\n\tbackground: none;\n\tbox-shadow: none;\n\tborder: none;\n\tcolor: ",";\n\tfont-size: 14px;\n\tline-height: 30px;\n\tmargin: 5px;\n\tborder-bottom: 1px solid #6d6d6d;\n\toutline: none !important;\n\twidth: ",";\n"]);return O=function(){return t},t}var j=c.b.textarea(O(),(function(t){return t.theme.color}),(function(t){return t.inputWidth+"%"})),C=function(t){var n=t.placeholder,e=t.name,r=t.id,a=t.value,i=t.className,c=t.onKeyUpHandler,u=t.handleChange,d=t.inputWidth;return o.a.createElement(j,{placeholder:n,name:e,id:r,value:a,className:i,onKeyUp:c,onChange:function(t){return u(t.target.value)},inputWidth:d,rows:"3"})};function w(){var t=Object(l.a)(["\n\tborder: 0px;\n\toutline: none;\n\tborder-radius: 4px;\n\tfont-size: 1rem;\n\tbackground-color: ",";\n\tcolor: ",";\n\tcursor: pointer;\n"]);return w=function(){return t},t}function k(){var t=Object(l.a)(["\n\tfont-size: 0.9rem;\n"]);return k=function(){return t},t}function I(){var t=Object(l.a)(["\n\tfont-size: 1.2rem;\n\tspan {\n\t\tfloat: right;\n\t\tcolor: ",";\n\t}\n"]);return I=function(){return t},t}function T(){var t=Object(l.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 26px 1fr 30px;\n\tgrid-column-gap: 15px;\n\tgrid-row-gap: 5px;\n"]);return T=function(){return t},t}function _(){var t=Object(l.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tobject-fit: cover;\n"]);return _=function(){return t},t}function N(){var t=Object(l.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 110px 1fr;\n\tgrid-column-gap: 15px;\n\tborder-bottom: 1px solid ",";\n\tpadding: 15px 15px 30px 15px;\n\t&:hover {\n\t\tbutton {\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n\t.errorLoadingImage {\n\t\twidth: 70px;\n\t\tjustify-self: center;\n\t}\n"]);return N=function(){return t},t}var U=c.b.div(N(),(function(t){return t.theme.background}),(function(t){return t.theme.primaryColor})),D=c.b.img(_()),R=c.b.div(T()),Q=c.b.h3(I(),(function(t){return t.theme.primaryColor})),P=c.b.p(k()),A=c.b.button(w(),(function(t){return t.theme.background}),(function(t){return t.theme.color})),z=function(t){var n=t.product,a=t.addToCart,i=Object(r.useState)(n.productImage),c=Object(d.a)(i,2),u=c[0],l=c[1],p=Object(r.useState)("ProductImage"),s=Object(d.a)(p,2),m=s[0],f=s[1];return Object(r.useEffect)((function(){l(n.productImage)}),[n.productImage]),o.a.createElement(U,{className:"each_product"},o.a.createElement(D,{src:u,alt:n.description+" image",className:m,onError:function(){l(e(26)),f("errorLoadingImage")}}),o.a.createElement(R,null,o.a.createElement(Q,null,n.title," ",o.a.createElement("span",null,"$"+n.price)),o.a.createElement(P,null,n.description),o.a.createElement(A,{onClick:a},"Add to Order")))};function W(){var t=Object(l.a)(["\n\ttext-align: center;\n\tfont-size: 1.3rem;\n\tmargin-top: 15px;\n\topacity: 0.2;\n\tpadding-bottom: 15px;\n"]);return W=function(){return t},t}function K(){var t=Object(l.a)(["\n\tgrid-area: listOfProducts;\n\theight: calc(100vh - 60px);\n\toverflow-y: auto;\n"]);return K=function(){return t},t}var B=c.b.section(K()),M=c.b.p(W()),H=function(t){var n=t.products,e=t.dispatch;return o.a.createElement(B,null,o.a.createElement(g,{className:"product_elevated"},o.a.createElement(m,{className:"product_list_heading"},"List of Products"),n.length?n.map((function(t){return o.a.createElement(z,{key:t.id,product:t,addToCart:function(){return e(function(t){return{type:"ADD_ITEM_TO_CART",product:t}}(t))}})})):o.a.createElement(M,null,"No products found")))};function F(){var t=Object(l.a)(["\n\tborder: 0px;\n\toutline: none;\n\tborder-radius: 4px;\n\tfont-size: 0.8rem;\n\tbackground-color: ",";\n\tcolor: ",";\n\twidth: 110px;\n\tline-height: 18px;\n\tcursor: pointer;\n\t&:hover {\n\t\tbackground-color: ",";\n\t}\n"]);return F=function(){return t},t}function L(){var t=Object(l.a)(["\n\tfont-size: 1.2rem;\n\tspan {\n\t\tfloat: right;\n\t\tcolor: ",";\n\t}\n"]);return L=function(){return t},t}function S(){var t=Object(l.a)(["\n\tfont-size: 1.2rem;\n\tspan {\n\t\tfloat: right;\n\t\tcolor: ",";\n\t}\n"]);return S=function(){return t},t}function V(){var t=Object(l.a)(["\n\tfont-size: 2rem;\n\tcolor: #2f2f31;\n\tcursor: pointer;\n"]);return V=function(){return t},t}function $(){var t=Object(l.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-column-gap: 15px;\n"]);return $=function(){return t},t}function q(){var t=Object(l.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 15px;\n\tgrid-template-rows: 26px 26px;\n\tgrid-column-gap: 15px;\n\tgrid-row-gap: 5px;\n"]);return q=function(){return t},t}function J(){var t=Object(l.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-column-gap: 15px;\n\tborder-bottom: 1px solid ",";\n\tpadding: 15px 15px 10px 15px;\n"]);return J=function(){return t},t}var Y=c.b.div(J(),(function(t){return t.theme.background})),X=c.b.div(q()),G=c.b.div($()),Z=c.b.p(V()),tt=c.b.h3(S(),(function(t){return t.theme.primaryColor})),nt=c.b.p(L(),(function(t){return t.theme.primaryColor})),et=c.b.button(F(),(function(t){return t.theme.background}),(function(t){return t.theme.color}),(function(t){return t.theme.secondaryColor})),rt=function(t){var n=t.product,e=t.remove,r=t.reduce;return o.a.createElement(Y,{className:"each_item_in_cart"},o.a.createElement(X,null,o.a.createElement(G,null,o.a.createElement(tt,null,n.title," ",o.a.createElement("span",null,"$"+n.price*n.orderQuantity)),o.a.createElement("div",null,o.a.createElement(nt,null,"Quantity: ",o.a.createElement("span",null,n.orderQuantity)))),o.a.createElement(Z,{onClick:e},"X")),o.a.createElement(et,{onClick:r},n.orderQuantity>1?"Remove one item":"Clear"))};function ot(){var t=Object(l.a)(["\n\ttext-align: center;\n\tfont-size: 1.3rem;\n\tmargin-top: 15px;\n\topacity: 0.2;\n\tpadding-bottom: 15px;\n"]);return ot=function(){return t},t}function at(){var t=Object(l.a)(["\n\ttext-align: right;\n\tfont-size: 1.3rem;\n\tmargin-top: 15px;\n\tcolor: ",";\n\tpadding-right: 30px;\n\tpadding-bottom: 15px;\n"]);return at=function(){return t},t}function it(){var t=Object(l.a)(["\n\tgrid-area: shoppingCart;\n\theight: calc(100vh - 60px);\n\toverflow-y: auto;\n"]);return it=function(){return t},t}var ct=c.b.section(it()),ut=c.b.h4(at(),(function(t){return t.theme.primaryColor})),dt=c.b.p(ot()),lt=function(t){var n=t.products,e=t.dispatch,r=n.filter((function(t){return t.orderQuantity>0})),a=r.reduce((function(t,n){return t+n.price*n.orderQuantity}),0);return o.a.createElement(ct,null,o.a.createElement(g,{className:"cart_elevated"},o.a.createElement(m,{className:"cart_heading"},"Shopping Cart"),r.length?r.map((function(t){return o.a.createElement(rt,{key:t.id,product:t,remove:function(){return e({type:"REMOVE_ITEM_TO_CART",product:t})},reduce:function(){return e({type:"REDUCE_ITEM_QUANTITY",product:t})}})})):o.a.createElement(dt,null,"Cart Empty"),r.length>0&&o.a.createElement(ut,null,"Total: ",a,"$")))};function pt(){var t=Object(l.a)(["\n\tborder: 0px;\n\toutline: none;\n\tborder-radius: 4px;\n\tfont-size: 1rem;\n\tbackground-color: ",";\n\tcolor: ",";\n\tcursor: pointer;\n\twidth: 100%;\n\theight: 40px;\n\t","\n"]);return pt=function(){return t},t}function st(){var t=Object(l.a)(["\n\tpadding: 15px;\n\tborder-bottom: 5px solid ",";\n\t&:hover {\n\t\tbutton {\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n"]);return st=function(){return t},t}var mt=c.b.div(st(),(function(t){return t.theme.background}),(function(t){return t.theme.primaryColor})),ft=c.b.button(pt(),(function(t){return t.theme.background}),(function(t){return t.theme.color}),(function(t){return t.disabled?"opacity: 0.2":"opacity: 1"})),ht=function(t){var n=t.product,e=t.buttonText,a=t.onKeyUpHandler,i=t.onButtonClick,c=Object(r.useState)(n.title),u=Object(d.a)(c,2),l=u[0],p=u[1],s=Object(r.useState)(n.price),m=Object(d.a)(s,2),f=m[0],h=m[1],g=Object(r.useState)(n.productImage),b=Object(d.a)(g,2),v=b[0],E=b[1],x=Object(r.useState)(n.description),O=Object(d.a)(x,2),j=O[0],w=O[1],k={id:n.id,title:l,price:parseInt(f),productImage:v,description:j,orderQuantity:n.orderQuantity};return o.a.createElement(mt,null,o.a.createElement("form",null,o.a.createElement(y,{type:"text",name:"title",id:"titleid",placeholder:"Product Title (Required)",value:l,field:"title",handleChange:p,onKeyUpHandler:function(){return a(k)},inputWidth:60}),o.a.createElement("span",null,"$"),o.a.createElement(y,{type:"number",name:"price",id:"priceid",placeholder:"Price (Required)",value:"".concat(f),field:"price",handleChange:h,onKeyUpHandler:function(){return a(k)},inputWidth:30}),o.a.createElement(y,{type:"text",name:"productImage",id:"priceid",placeholder:"Image URL",value:v,handleChange:E,onKeyUpHandler:function(){return a(k)},inputWidth:100}),o.a.createElement(C,{name:"description",id:"descriptionid",placeholder:"Product Description",value:j,handleChange:w,onKeyUpHandler:function(){return a(k)},inputWidth:100}),o.a.createElement(ft,{type:"button",onClick:function(){return i(k)},disabled:!l||!f},l&&f?e:"Fill required fields")))};function gt(){var t=Object(l.a)(["\n\ttext-align: center;\n\tfont-size: 1.3rem;\n\tmargin-top: 15px;\n\topacity: 0.2;\n\tpadding-bottom: 15px;\n"]);return gt=function(){return t},t}function bt(){var t=Object(l.a)(["\n\tposition: fixed;\n\tbottom: 30px;\n\tmargin-right: 30px;\n\tbackground: ",";\n\tborder: 2px solid ",";\n\tmargin-left: -5px;\n"]);return bt=function(){return t},t}function vt(){var t=Object(l.a)(["\n\tgrid-area: inventory;\n\theight: calc(100vh - 320px);\n\toverflow-y: auto;\n\tpadding-bottom: 15px;\n"]);return vt=function(){return t},t}var Et=c.b.section(vt()),xt=c.b.div(bt(),(function(t){return t.theme.background}),(function(t){return t.theme.elevated})),yt=c.b.p(gt()),Ot={title:"",price:"",productImage:"",description:"",orderQuantity:0},jt=function(t){var n=t.products,e=t.dispatch,r=function(t){t.price&&t.title&&e(function(t){return{type:"UPDATE_PRODUCT",newValue:t}}(t))},a=function(t){e({type:"DELETE_PRODUCT",id:t.id})};return o.a.createElement(Et,null,o.a.createElement(g,{className:"inventory_elevated"},o.a.createElement(m,{className:"inventory_heading"},"Inventory"),n.length?n.map((function(t){return o.a.createElement(ht,{key:t.id,product:t,buttonText:"Remove "+t.title,onKeyUpHandler:r,onButtonClick:a})})):o.a.createElement(yt,null,"No products found"),o.a.createElement(xt,null,o.a.createElement(ht,{product:Ot,buttonText:"Add New Product",onKeyUpHandler:r,onButtonClick:function(t){e(function(t){return{type:"ADD_NEW_PRODUCT",newValue:t}}(t))}}))))};function Ct(){var t=Object(l.a)(["\n\tfont-size: 1rem;\n\tbackground-color: ",";\n\tmin-height: 100vh;\n\tpadding: 30px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tgrid-column-gap: 15px;\n\tborder: none;\n\tgrid-template-areas: 'listOfProducts shoppingCart inventory';\n"]);return Ct=function(){return t},t}var wt=c.b.article(Ct(),(function(t){return t.theme.background})),kt=function(t){var n=t.products,e=t.dispatch;return o.a.createElement(wt,null,o.a.createElement(H,{products:n,dispatch:e}),o.a.createElement(lt,{products:n,dispatch:e}),o.a.createElement(jt,{products:n,dispatch:e}))},It={products:[{id:"001",title:"Apple MacBooK Pro",price:1e3,productImage:"https://picsum.photos/200/300?image=1",description:"High-performance MacBook Pro with Magic Keyboard, and fast Intel Core i5 and i7 processors, is available with all 13-inch models. Buy now with free shipping.",orderQuantity:1},{id:"002",title:"Dream Catcher",price:20,productImage:"https://picsum.photos/200/300?image=104",description:"In some Native American and First Nations cultures, a dreamcatcher or dream catcher is a handmade willow hoop, on which is woven a net or web.",orderQuantity:0},{id:"003",title:"Red Lipstick",price:50,productImage:"https://picsum.photos/200/300?image=1027",description:"If there's one thing the beauty world can agree on, it's that the perfect red lip is always fire",orderQuantity:2},{id:"004",title:"Kids Bike",price:150,productImage:"https://picsum.photos/200/300?image=146",description:"where the fun begins! With the right bike, entering the world of cycling is child's play",orderQuantity:0}]},Tt=e(5),_t=e(4),Nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_ITEM_TO_CART":return Object(_t.a)({},t,{products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.product,r=t.products,o=r.findIndex((function(t){return t.id===e.id}));return r[o].orderQuantity=e.orderQuantity+1,Object(Tt.a)(r)}()});case"REDUCE_ITEM_QUANTITY":return Object(_t.a)({},t,{products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.product,r=t.products,o=r.findIndex((function(t){return t.id===e.id})),a=e.orderQuantity-1;return r[o].orderQuantity=a<0?0:a,Object(Tt.a)(r)}()});case"REMOVE_ITEM_TO_CART":return Object(_t.a)({},t,{products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.product,r=t.products,o=r.findIndex((function(t){return t.id===e.id}));return r[o].orderQuantity=0,Object(Tt.a)(r)}()});case"UPDATE_PRODUCT":return Object(_t.a)({},t,{products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.newValue,r=t.products,o=r.findIndex((function(t){return t.id===e.id}));return r[o]=Object(_t.a)({},e),Object(Tt.a)(r)}()});case"ADD_NEW_PRODUCT":return Object(_t.a)({},t,{products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.newValue,r=t.products,o=r.length;return e.id=o,[].concat(Object(Tt.a)(r),[e])}()});case"DELETE_PRODUCT":return Object(_t.a)({},t,{products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.id,r=t.products,o=r.findIndex((function(t){return t.id===e}));return r.splice(o,1),Object(Tt.a)(r)}()});default:return t}},Ut=Object(r.createContext)(It),Dt=Ut.Provider,Rt=function(t){var n=t.children,e=Object(r.useReducer)(Nt,It),a=Object(d.a)(e,2),i=a[0],c=a[1];return o.a.createElement(Dt,{value:[i,c]},n)},Qt=function(){var t=Object(r.useContext)(Ut),n=Object(d.a)(t,2),e=n[0],a=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(kt,{products:e.products,dispatch:a}))},Pt=function(){return o.a.createElement(Rt,null,o.a.createElement(c.a,{theme:u},o.a.createElement(Qt,null)))};i.a.render(o.a.createElement(Pt,null),document.getElementById("wrapper")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2a771939.chunk.js.map