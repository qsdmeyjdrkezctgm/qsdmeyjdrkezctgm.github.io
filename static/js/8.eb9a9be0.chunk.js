(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[8],{613:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o}));var r=t(12),c=t.n(r),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=new c.a(e).dividedBy(new c.a(10).pow(n));return t.toNumber()},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return e.dividedBy(new c.a(10).pow(n)).toFixed()}},614:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"c",(function(){return b})),t.d(n,"d",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(4),c=t.n(r),a=t(15),o=t(12),i=t.n(o),s=t(616),u=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.approve(t.options.address,s.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r,a){var o,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="0x0000000000000000000000000000000000000000",-1!==document.cookie.indexOf("refer=")&&(s=document.cookie.indexOf("refer=")+6,u=document.cookie.substring(s).indexOf(";"),o=-1===u?document.cookie.substring(s):document.cookie.substring(s).substring(0,u)),e.abrupt("return",n.methods.deposit(t,new i.a(r).times(new i.a(10).pow(18)).toString(),o).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(n,t,r,c){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.withdraw(t,new i.a(r).times(new i.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,c){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="0x0000000000000000000000000000000000000000",-1!==document.cookie.indexOf("refer=")&&(o=document.cookie.indexOf("refer=")+6,i=document.cookie.substring(o).indexOf(";"),a=-1===i?document.cookie.substring(o):document.cookie.substring(o).substring(0,i)),e.abrupt("return",n.methods.deposit(t,"0",a).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(46),c=t(10),a=t(0),o=t.n(a),i=t(2);function s(){var e=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return s=function(){return e},e}var u=i.e.div(s(),(function(e){return e.size}),(function(e){return e.size})),b=function(e){var n,t=e.size,r=void 0===t?"md":t,o=Object(a.useContext)(i.a).spacing;switch(r){case"lg":n=o[6];break;case"sm":n=o[2];break;case"md":default:n=o[4]}return Object(c.jsx)(u,{size:n})};function l(){var e=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return l=function(){return e},e}function d(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: #abc12300;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return d=function(){return e},e}var j=i.e.div(d(),(function(e){return e.theme.spacing[4]})),f=i.e.div(l()),p=function(e){var n=e.children,t=o.a.Children.toArray(n).length;return Object(c.jsx)(j,{children:o.a.Children.map(n,(function(e,n){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{children:e}),n<t-1&&Object(c.jsx)(b,{})]})}))})}},619:function(e,n,t){"use strict";t.d(n,"b",(function(){return j})),t.d(n,"a",(function(){return f})),t.d(n,"c",(function(){return p}));var r=t(37),c=t(4),a=t.n(c),o=t(15),i=t(0),s=t(62),u=t(49),b=t(103),l=t(614),d=t(615),j=function(e){var n=Object(u.b)(),t=Object(s.m)().account,r=Object(d.d)();return{onReward:Object(i.useCallback)(Object(o.a)(a.a.mark((function c(){var o;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(l.b)(r,e,t);case 2:return o=c.sent,n(Object(b.a)(t)),c.abrupt("return",o);case 5:case"end":return c.stop()}}),c)}))),[t,n,e,r])}},f=function(e){var n=Object(s.m)().account,t=Object(d.d)();return{onReward:Object(i.useCallback)(Object(o.a)(a.a.mark((function c(){var o;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o=e.reduce((function(e,c){return[].concat(Object(r.a)(e),[Object(l.b)(t,c,n)])}),[]),c.abrupt("return",Promise.all(o));case 2:case"end":return c.stop()}}),c)}))),[n,e,t])}},p=function(e){var n=Object(u.b)(),t=Object(s.m)(),r=t.account,c=(Object(d.e)(e),Object(d.d)()),j=Object(i.useCallback)(Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.b)(c,e,r);case 2:n(Object(b.g)(e,r)),n(Object(b.f)(e,r));case 4:case"end":return t.stop()}}),t)}))),[r,n,c,e]);return{onReward:j}}},620:function(e,n,t){"use strict";var r=t(16),c=t(10),a=(t(0),t(25)),o=t(62),i=t(170);n.a=function(e){var n=Object(i.a)(),t=Object(o.m)(),s=t.connect,u=t.reset,b=Object(a.F)(s,u).onPresentConnectModal;return Object(c.jsx)(a.d,Object(r.a)(Object(r.a)({onClick:b},e),{},{children:n(292,"Unlock Wallet")}))}},623:function(e,n,t){"use strict";t.d(n,"a",(function(){return y}));var r=t(46),c=t(10),a=(t(0),t(2)),o=t(621),i=t(25);function s(){var e=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return s=function(){return e},e}function u(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return u=function(){return e},e}var b=a.e.div(u(),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),l=a.e.input(s(),(function(e){return e.theme.colors.primary})),d=function(e){var n=e.endAdornment,t=e.onChange,r=e.placeholder,a=e.startAdornment,o=e.value;return Object(c.jsxs)(b,{children:[!!a&&a,Object(c.jsx)(l,{placeholder:r,value:o,onChange:t}),!!n&&n]})};function j(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return j=function(){return e},e}function f(){var e=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return p=function(){return e},e}function x(){var e=Object(r.a)(["\n  width: ","px;\n"]);return x=function(){return e},e}function O(){var e=Object(r.a)([""]);return O=function(){return e},e}var m=a.e.div(O()),h=a.e.div(x(),(function(e){return e.theme.spacing[3]})),v=a.e.div(p()),k=a.e.div(f(),(function(e){return e.theme.colors.primary})),g=a.e.span(j(),(function(e){return e.theme.colors.primary})),y=function(e){var n=e.max,t=e.symbol,r=e.onChange,a=e.onSelectMax,s=e.value,u=e.depositFeeBP,b=void 0===u?0:u;return Object(c.jsxs)(m,{children:[Object(c.jsxs)(k,{children:[n.toLocaleString()," ",t," Available"]}),Object(c.jsx)(d,{endAdornment:Object(c.jsxs)(v,{children:[Object(c.jsx)(g,{children:t}),Object(c.jsx)(h,{}),Object(c.jsx)("div",{children:Object(c.jsx)(i.d,{size:"sm",onClick:a,children:"Max"})})]}),onChange:r,placeholder:"0",value:s}),b>0?Object(c.jsxs)(k,{children:["Deposit Fee: ",new o.a(s||0).times(b/1e4).toString()," ",t]}):null]})}},628:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(4),c=t.n(r),a=t(15),o=t(129),i=t.n(o),s=t(59),u=function(e,n){return new(new i.a(e).eth.Contract)(s,n)},b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(n,t),e.prev=1,e.next=4,a.methods.balanceOf(r).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n,t,r){return e.apply(this,arguments)}}()},629:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(621);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(1);var c=new r.a(10512e3)},630:function(e,n,t){"use strict";var r=t(46);function c(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return e},e}var a=t(2).e.div(c());n.a=a},631:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return a}));var r=t(10),c=(t(0),t(25)),a=function(){return Object(r.jsx)(c.y,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.B,{}),children:"No Fees"})},o=function(){return Object(r.jsx)(c.y,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.B,{}),children:"Core"})},i=function(){return Object(r.jsx)(c.y,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.l,{}),children:"Community"})},s=function(){return Object(r.jsx)(c.y,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},632:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return j}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(62),s=(t(616),t(49)),u=t(103),b=t(614),l=t(615),d=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)();return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function a(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,r,t);case 3:return o=c.sent,n(Object(u.a)(t)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[t,n,e,r])}},j=function(e,n){var t=Object(s.b)(),r=Object(i.m)().account,d=Object(l.e)(n);return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function a(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(e,d,r);case 3:return o=c.sent,t(Object(u.e)(n,r)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[r,t,e,d,n])}}},633:function(e,n,t){"use strict";t.d(n,"b",(function(){return d}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(62),s=t(49),u=t(103),b=t(614),l=t(615),d=function(e){var n=Object(s.b)(),t=Object(i.m)(),r=t.account,d=Object(l.d)(),j=(Object(l.e)(e),Object(o.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.c)(d,e,a,r);case 2:n(Object(u.h)(e,r)),n(Object(u.f)(e,r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[r,n,d,e]));return{onStake:j}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)();return{onStake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.c)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},634:function(e,n,t){"use strict";t.d(n,"b",(function(){return d}));var r=t(4),c=t.n(r),a=t(15),o=t(0),i=t(62),s=t(49),u=t(103),b=t(614),l=t(615),d=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)();return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.d)(r,e,o,t);case 2:n(Object(u.h)(e,t)),n(Object(u.f)(e,t)),n(Object(u.g)(e,t));case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.d)();return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.d)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},733:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Je}));var r=t(10),c=t(16),a=t(18),o=t(46),i=t(0),s=t(24),u=t(49),b=t(12),l=t.n(b),d=t(2),j=t(62),f=t(629),p=t(630),x=t(173),O=t(106),m=t(127),h=t(103),v=t(25);function k(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return k=function(){return e},e}var g=d.e.div(k(),(function(e){return e.theme.colors.primary})),y=function(e){var n=e.onClick,t=e.expanded;return Object(r.jsxs)(g,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(r.jsx)(v.z,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(r.jsx)(v.k,{}):Object(r.jsx)(v.j,{})]})};y.defaultProps={expanded:!1};var w=y,S=function(e){var n=e.tokenSymbol,t=e.tokenAddresses,r=e.quoteTokenSymbol,c=e.quoteTokenAdresses,a="BNB"===r?"BNB":c[56],o="BNB"===n?"BNB":t[56];return"".concat(a,"/").concat(o)};function C(){var e=Object(o.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return C=function(){return e},e}function T(){var e=Object(o.a)(["\n  margin-top: 24px;\n"]);return T=function(){return e},e}var z=d.e.div(T()),A=Object(d.e)(v.q)(C(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),P=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=e.removed,a=e.totalValueFormated,o=e.lpLabel,i=e.tokenSymbol,s=e.tokenAddresses,u=e.quoteTokenSymbol,b=e.quoteTokenAdresses,l=S({tokenSymbol:i,tokenAddresses:s,quoteTokenSymbol:u,quoteTokenAdresses:b});return Object(r.jsxs)(z,{children:[Object(r.jsxs)(v.m,{justifyContent:"space-between",children:[Object(r.jsx)(v.z,{children:"Stake:"}),Object(r.jsx)(A,{href:n?"https://pancakeswap.finance/swap/".concat(s[56]):"https://pancakeswap.finance/add/".concat(l),children:o})]}),!c&&Object(r.jsxs)(v.m,{justifyContent:"space-between",children:[Object(r.jsx)(v.z,{children:"Total Liquidity:"}),Object(r.jsx)(v.z,{children:a})]}),Object(r.jsx)(v.m,{justifyContent:"flex-start",children:Object(r.jsx)(v.p,{external:!0,href:t,bold:!1,children:"View on BscScan"})})]})},B=t(631);function D(){var e=Object(o.a)(["\n  display: flex;\n  position: relative;\n  right: 12px;\n"]);return D=function(){return e},e}function I(){var e=Object(o.a)(["\n  display: flex;\n  position: relative;\n  left: 12px;\n"]);return I=function(){return e},e}function q(){var e=Object(o.a)(["\n  display: flex;\n  margin: 8px 32px 0 32px;\n\n  &:hover {\n    .spin-cw {\n      transform: rotateZ(360deg);\n    }\n\n    .spin-ccw {\n      transform: rotateZ(-360deg);\n    }\n  }\n\n  .spin-cw {\n    transition: 0.4s ease-in-out;\n  }\n\n  .spin-ccw {\n    transition: 0.4s ease-in-out;\n  }\n"]);return q=function(){return e},e}function L(){var e=Object(o.a)(["\n  margin-left: 4px;\n"]);return L=function(){return e},e}function F(){var e=Object(o.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return F=function(){return e},e}var N=Object(d.e)(v.m)(F()),E=Object(d.e)(v.y)(L()),M=d.e.div(q()),R=d.e.div(I()),U=d.e.div(D()),H=function(e){var n=e.lpLabel,t=e.multiplier,c=(e.risk,e.farmImage,e.tokenSymbol,e.depositFee),a=e.token1,o=e.token2;return Object(r.jsx)(N,{justifyContent:"center",alignItems:"center",mb:"12px",children:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(r.jsxs)(v.m,{flexDirection:"column",alignItems:"center",children:[0===c?Object(r.jsx)(B.d,{}):Object(r.jsx)(E,{variant:"secondary",children:t}),Object(r.jsx)(v.n,{mb:"4px",children:n})]}),Object(r.jsxs)(M,{children:[Object(r.jsx)(R,{className:"spin-cw",children:Object(r.jsx)("img",{src:"/images/tokens/".concat(a,".png"),alt:a})}),Object(r.jsx)(U,{className:"spin-ccw",children:Object(r.jsx)("img",{src:"/images/tokens/".concat(o,".png"),alt:o})})]})]})})},W=t(4),Q=t.n(W),G=t(15),V=t(628),X=t(620),J=t(632),Z=t(170),$=t(633),_=t(634),Y=t(613),K=t(618),ee=t(623),ne=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,o=e.tokenName,s=void 0===o?"":o,u=e.depositFeeBP,b=void 0===u?0:u,l=Object(i.useState)(""),d=Object(a.a)(l,2),j=d[0],f=d[1],p=Object(i.useState)(!1),x=Object(a.a)(p,2),O=x[0],m=x[1],h=Object(Z.a)(),k=Object(i.useMemo)((function(){return Object(Y.b)(n)}),[n]),g=Object(i.useCallback)((function(e){f(e.currentTarget.value)}),[f]),y=Object(i.useCallback)((function(){f(k)}),[k,f]);return Object(r.jsxs)(v.t,{title:"".concat(h(316,"Deposit")," ").concat(s," Tokens"),onDismiss:c,children:[Object(r.jsx)(ee.a,{value:j,onSelectMax:y,onChange:g,max:k,symbol:s,depositFeeBP:b}),Object(r.jsxs)(K.a,{children:[Object(r.jsx)(v.d,{variant:"secondary",onClick:c,children:h(462,"Cancel")}),Object(r.jsx)(v.d,{disabled:O,onClick:Object(G.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,t(j);case 3:m(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:O?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},te=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,o=e.tokenName,s=void 0===o?"":o,u=Object(i.useState)(""),b=Object(a.a)(u,2),l=b[0],d=b[1],j=Object(i.useState)(!1),f=Object(a.a)(j,2),p=f[0],x=f[1],O=Object(Z.a)(),m=Object(i.useMemo)((function(){return Object(Y.b)(c)}),[c]),h=Object(i.useCallback)((function(e){d(e.currentTarget.value)}),[d]),k=Object(i.useCallback)((function(){d(m)}),[m,d]);return Object(r.jsxs)(v.t,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(r.jsx)(ee.a,{onSelectMax:k,onChange:h,value:l,max:m,symbol:s}),Object(r.jsxs)(K.a,{children:[Object(r.jsx)(v.d,{variant:"secondary",onClick:t,children:O(462,"Cancel")}),Object(r.jsx)(v.d,{disabled:p,onClick:Object(G.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,n(l);case 3:x(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:p?O(488,"Pending Confirmation"):O(464,"Confirm")})]})]})};function re(){var e=Object(o.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return re=function(){return e},e}var ce=d.e.div(re()),ae=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,o=e.pid,i=e.depositFeeBP,s=Object(Z.a)(),u=Object($.a)(o).onStake,b=Object(_.a)(o).onUnstake,l=Object(Y.a)(n),d=l.toLocaleString(),j=Object(v.E)(Object(r.jsx)(ne,{max:t,onConfirm:u,tokenName:c,depositFeeBP:i})),f=Object(a.a)(j,1)[0],p=Object(v.E)(Object(r.jsx)(te,{max:n,onConfirm:b,tokenName:c})),x=Object(a.a)(p,1)[0];return Object(r.jsxs)(v.m,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(v.n,{color:0===l?"textDisabled":"text",children:d}),0===l?Object(r.jsx)(v.d,{onClick:f,children:s(999,"Stake")}):Object(r.jsxs)(ce,{children:[Object(r.jsx)(v.o,{variant:"tertiary",onClick:x,mr:"6px",children:Object(r.jsx)(v.s,{color:"primary"})}),Object(r.jsx)(v.o,{variant:"tertiary",onClick:f,children:Object(r.jsx)(v.a,{color:"primary"})})]})]})},oe=t(619);function ie(){var e=Object(o.a)(["\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  cursor: not-allowed;\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: 48px;\n  line-height: 1;\n  -webkit-letter-spacing: 0.03em;\n  -moz-letter-spacing: 0.03em;\n  -ms-letter-spacing: 0.03em;\n  letter-spacing: 0.03em;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  outline: 0;\n  padding: 0 24px;\n  -webkit-transition: background-color 0.2s;\n  transition: background-color 0.2s;\n  opacity: 1;\n\n  background-color: #313131;\n  width: 160px;\n  font-size: 16px;\n  padding: 0;\n  color: #b1b1b1;\n}\n"]);return ie=function(){return e},e}function se(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return se=function(){return e},e}var ue=d.e.div(se()),be=d.e.div(ie()),le=function(e){var n=e.earnings,t=e.pid,c=e.harvestLockup,o=e.minutes,s=Object(i.useState)(!1),u=Object(a.a)(s,2),b=u[0],l=u[1],d=Object(oe.b)(t).onReward,j=Object(Y.a)(n),f=j.toLocaleString();return Object(r.jsxs)(v.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(v.n,{color:0===j?"textDisabled":"text",children:f}),Object(r.jsx)(ue,{children:c?Object(r.jsxs)(be,{children:["Lockup: ",o," minute",1!==o?"s":""]}):Object(r.jsx)(v.d,{disabled:0===j||b,onClick:Object(G.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,d();case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:"Harvest"})})]})};function de(){var e=Object(o.a)(["\n  padding-top: 16px;\n"]);return de=function(){return e},e}var je=d.e.div(de()),fe=function(e){var n,t=e.farm,c=e.ethereum,o=e.account,s=Object(i.useState)(!1),u=Object(a.a)(s,2),b=u[0],d=u[1],j=Object(O.a)(t.pid),f=j.pid,p=j.lpAddresses,x=j.tokenAddresses,m=j.isTokenOnly,h=j.depositFeeBP,k=Object(O.b)(f),g=k.allowance,y=k.tokenBalance,w=k.stakedBalance,S=k.earnings,C=p[56],T=x[56],z=t.lpSymbol.toUpperCase(),A=o&&g&&g.isGreaterThan(0),P=Object(i.useMemo)((function(){return m?Object(V.a)(c,T):Object(V.a)(c,C)}),[c,C,T,m]),B=Object(J.a)(P).onApprove,D=Object(i.useCallback)(Object(G.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,B();case 4:d(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[B]),I=new l.a((null===(n=t.userData)||void 0===n?void 0:n.nextHarvestUntil)||0).toNumber(),q=Math.floor(Date.now()/1e3),L=!1,F=0;if(I>0&&I-q>=0){L=!0;var N=I-q+1;F=Math.floor(N/60)+1}return Object(r.jsxs)(je,{children:[Object(r.jsxs)(v.m,{children:[Object(r.jsx)(v.z,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"UPWARD"}),Object(r.jsx)(v.z,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Earned"})]}),Object(r.jsx)(le,{earnings:S,pid:f,harvestLockup:L,minutes:F}),Object(r.jsxs)(v.m,{marginBottom:"8px",children:[Object(r.jsx)(v.z,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:z}),Object(r.jsx)(v.z,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Staked"})]}),o?A?Object(r.jsx)(ae,{stakedBalance:w,tokenBalance:y,tokenName:z,pid:f,depositFeeBP:h}):Object(r.jsx)(v.d,{fullWidth:!0,disabled:b,onClick:D,children:"Approve Contract"}):Object(r.jsx)(X.a,{fullWidth:!0})]})},pe=function(e){var n,t=e.numberOfDays,r=e.farmApy/100,c=t/365,a=1e3/e.cakePrice,o=a*Math.pow(1+r/365,365*c);return n=o-a,Math.round(100*n)/100},xe=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)};function Oe(){var e=Object(o.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);return Oe=function(){return e},e}function me(){var e=Object(o.a)(["\n  margin-bottom: '10px';\n"]);return me=function(){return e},e}function he(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);return he=function(){return e},e}var ve=d.e.div(he()),ke=d.e.div(me()),ge=Object(d.e)(v.z)(Oe()),ye=function(e){var n=e.onDismiss,t=e.lpLabel,c=e.tokenSymbol,a=e.tokenAddresses,o=e.quoteTokenSymbol,i=e.quoteTokenAdresses,s=e.cakePrice,u=e.apy,b=Object(Z.a)(),d=S({tokenSymbol:c,tokenAddresses:a,quoteTokenSymbol:o,quoteTokenAdresses:i}),j=u.times(new l.a(100)).toNumber(),f=1e3/s.toNumber(),p=pe({numberOfDays:1,farmApy:j,cakePrice:s}),x=pe({numberOfDays:7,farmApy:j,cakePrice:s}),O=pe({numberOfDays:30,farmApy:j,cakePrice:s}),m=pe({numberOfDays:365,farmApy:j,cakePrice:s});return Object(r.jsxs)(v.t,{title:"ROI",onDismiss:n,children:[Object(r.jsxs)(ve,{children:[Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:b(999,"Timeframe")})}),Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:b(999,"ROI")})}),Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:"UPWARD per $1000"})}),Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{children:"1d"})}),Object(r.jsx)(ke,{children:Object(r.jsxs)(v.z,{children:[xe({amountEarned:p,amountInvested:f}),"%"]})}),Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{children:p})}),Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{children:"7d"})}),Object(r.jsx)(ke,{children:Object(r.jsxs)(v.z,{children:[xe({amountEarned:x,amountInvested:f}),"%"]})}),Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{children:x})}),Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{children:"30d"})}),Object(r.jsx)(ke,{children:Object(r.jsxs)(v.z,{children:[xe({amountEarned:O,amountInvested:f}),"%"]})}),Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{children:O})}),Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{children:"365d(APY)"})}),Object(r.jsx)(ke,{children:Object(r.jsxs)(v.z,{children:[xe({amountEarned:m,amountInvested:f}),"%"]})}),Object(r.jsx)(ke,{children:Object(r.jsx)(v.z,{children:m})})]}),Object(r.jsx)(ge,{fontSize:"12px",color:"textSubtle",children:b(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(r.jsx)(v.m,{justifyContent:"center",children:Object(r.jsxs)(v.q,{href:"https://exchange.pancakeswap.finance/#/add/".concat(d),children:[b(999,"Get")," ",t]})})]})},we=function(e){var n=e.lpLabel,t=e.tokenSymbol,c=e.tokenAddresses,o=e.quoteTokenSymbol,i=e.quoteTokenAdresses,s=e.cakePrice,u=e.apy,b=Object(v.E)(Object(r.jsx)(ye,{lpLabel:n,quoteTokenAdresses:i,quoteTokenSymbol:o,tokenAddresses:c,tokenSymbol:t,cakePrice:s,apy:u})),l=Object(a.a)(b,1)[0];return Object(r.jsx)(v.o,{onClick:l,variant:"text",size:"sm",ml:"4px",style:{height:"24px"},children:Object(r.jsx)(v.g,{})})};function Se(){var e=Object(o.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return Se=function(){return e},e}function Ce(){var e=Object(o.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 14px auto;\n  width: 100%;\n"]);return Ce=function(){return e},e}function Te(){var e=Object(o.a)(["\n  align-self: baseline;\n  background: hsl(170deg 100% 4%);\n  border: 1px solid green;\n  box-shadow: inset 0 0px 40px -6px green;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);return Te=function(){return e},e}function ze(){var e=Object(o.a)(["\n  background: linear-gradient(0deg,\n    rgba(25, 75, 255, 1)    0%,\n    rgba(76, 255, 32, 1)   10%,\n    rgba(25, 75, 255, 1)   20%,\n    rgba(76, 255, 32, 1)   30%,\n    rgba(25, 75, 255, 1)   40%,\n    rgba(76, 255, 32, 1)   50%,\n    rgba(25, 75, 255, 1)   60%,\n    rgba(76, 255, 32, 1)   70%,\n    rgba(25, 75, 255, 1)   80%,\n    rgba(76, 255, 32, 1)   90%,\n    rgba(25, 75, 255, 1)  100%);\n\n  background-size: 300% 300%;\n  border-radius: 0;\n  filter: blur(20px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n  animation: "," 2s linear infinite;\n"]);return ze=function(){return e},e}function Ae(){var e=Object(o.a)(["\n  0% {\n    background-position: 0% 0%;\n  }\n  /* 50% {\n    background-position: 100% 50%;\n  } */\n  100% {\n    background-position: 0% 90%;\n  }\n"]);return Ae=function(){return e},e}var Pe=Object(d.f)(Ae()),Be=d.e.div(ze(),Pe),De=d.e.div(Te()),Ie=d.e.div(Ce(),(function(e){return e.theme.colors.borderColor})),qe=d.e.div(Se(),(function(e){return e.expanded?"100%":"0px"})),Le=function(e){var n=e.farm,t=e.removed,c=e.cakePrice,o=e.bnbPrice,s=e.btcPrice,u=e.ethereum,b=e.account,d=Object(i.useState)(!1),j=Object(a.a)(d,2),f=j[0],p=j[1],x=n.isTokenOnly?n.tokenSymbol.toLowerCase():"".concat(n.tokenSymbol.toLowerCase(),"-").concat(n.quoteTokenSymbol.toLowerCase()),O=Object(i.useMemo)((function(){return n.lpTotalInQuoteToken?"BNB"===n.quoteTokenSymbol?o.times(n.lpTotalInQuoteToken):"UPWARD"===n.quoteTokenSymbol?c.times(n.lpTotalInQuoteToken):"ETH"===n.quoteTokenSymbol?s.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[n,o,c,s,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),m=O?"$".concat(Number(O).toLocaleString(void 0,{maximumFractionDigits:0})):"-",h=n.lpSymbol,k=n.apy&&n.apy.times(new l.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),g=n.tokenSymbol,y=n.tokenAddresses,S=n.quoteTokenSymbol,C=n.quoteTokenAdresses,T=n.risk;return Object(r.jsxs)(De,{children:["UPWARD"===n.tokenSymbol&&Object(r.jsx)(Be,{}),Object(r.jsx)(H,{lpLabel:h,multiplier:n.multiplier,risk:T,depositFee:n.depositFeeBP,farmImage:x,tokenSymbol:n.tokenSymbol,token1:g,token2:S}),Object(r.jsxs)(v.m,{justifyContent:"space-between",children:[Object(r.jsx)(v.z,{children:"Earn:"}),Object(r.jsx)(v.z,{bold:!0,children:"UPWARD"})]}),Object(r.jsxs)(v.m,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(v.z,{children:"APR:"}),Object(r.jsx)(v.z,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(we,{lpLabel:h,tokenSymbol:g,tokenAddresses:y,quoteTokenSymbol:S,quoteTokenAdresses:C,cakePrice:c,apy:n.apy}),k,"%"]}):Object(r.jsx)(v.w,{height:24,width:80})})]}),Object(r.jsxs)(v.m,{justifyContent:"space-between",children:[Object(r.jsx)(v.z,{children:"Harvest Lockup:"}),Object(r.jsx)(v.z,{bold:!0,children:"2 hours"})]}),Object(r.jsxs)(v.m,{justifyContent:"space-between",children:[Object(r.jsx)(v.z,{children:"Deposit Fee:"}),Object(r.jsxs)(v.z,{bold:!0,children:[n.depositFeeBP/100,"%"]})]}),Object(r.jsx)(fe,{farm:n,ethereum:u,account:b}),Object(r.jsx)(Ie,{}),Object(r.jsx)(w,{onClick:function(){return p(!f)},expanded:f}),Object(r.jsx)(qe,{expanded:f,children:Object(r.jsx)(P,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:m,lpLabel:h,tokenSymbol:g,tokenAddresses:y,quoteTokenSymbol:S,quoteTokenAdresses:C})})]})},Fe=t(71);function Ne(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"]);return Ne=function(){return e},e}function Ee(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return Ee=function(){return e},e}var Me=d.e.div(Ee()),Re=d.e.div(Ne(),v.z),Ue=function(e){var n=e.stakedOnly,t=e.setStakedOnly,c=Object(s.g)(),a=c.url,o=c.isExact;return Object(r.jsxs)(Me,{children:[Object(r.jsxs)(Re,{children:[Object(r.jsx)(v.A,{checked:n,onChange:function(){return t(!n)}}),Object(r.jsx)(v.z,{children:"Staked only"})]}),Object(r.jsxs)(v.e,{activeIndex:o?0:1,size:"sm",variant:"subtle",children:[Object(r.jsx)(v.f,{as:Fe.b,to:"".concat(a),children:"Active"}),Object(r.jsx)(v.f,{as:Fe.b,to:"".concat(a,"/history"),children:"Inactive"})]})]})};function He(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  color: white;\n"]);return He=function(){return e},e}function We(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  font-size: 32px;\n  font-weight: bold;\n  color: white;\n\n  div {\n    display: flex;\n  }\n"]);return We=function(){return e},e}function Qe(){var e=Object(o.a)(["\n  align-items: center;\n  /* background-image: url('/images/banner-runitup.png'); */\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: contain;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  min-height: 116px;\n  text-align: center;\n"]);return Qe=function(){return e},e}var Ge=d.e.div(Qe()),Ve=d.e.div(We()),Xe=d.e.div(He()),Je=function(e){var n=Object(s.g)().path,t=Object(O.c)(),o=Object(O.h)(),b=Object(O.g)(),d=Object(O.f)(),v=Object(j.m)(),k=v.account,g=v.ethereum,y=e.tokenMode,w=Object(u.b)(),S=Object(m.a)().fastRefresh;Object(i.useEffect)((function(){k&&w(Object(h.a)(k))}),[k,w,S]);var C=Object(i.useState)(!1),T=Object(a.a)(C,2),z=T[0],A=T[1],P=t.filter((function(e){return!!e.isTokenOnly===!!y&&"0X"!==e.multiplier})),B=t.filter((function(e){return!!e.isTokenOnly===!!y&&"0X"===e.multiplier})),D=P.filter((function(e){return e.userData&&new l.a(e.userData.stakedBalance).isGreaterThan(0)})),I=Object(i.useCallback)((function(e,n){return e.map((function(e){var n=new l.a(e.upwardPerBlock||1).times(new l.a(e.poolWeight)).div(new l.a(10).pow(18)).times(f.a),t=o.times(n),r=new l.a(e.lpTotalInQuoteToken||0);return"BNB"===e.quoteTokenSymbol&&(r=r.times(b)),r.comparedTo(0)>0&&(t=t.div(r)),Object(c.a)(Object(c.a)({},e),{},{apy:t})})).map((function(e){return Object(r.jsx)(Le,{farm:e,removed:n,bnbPrice:b,cakePrice:o,btcPrice:d,ethereum:g,account:k},e.pid)}))}),[o,b,d,g,k]);return Object(r.jsxs)(x.a,{children:[Object(r.jsx)(Ge,{children:Object(r.jsx)(Ve,{children:Object(r.jsx)("div",{children:"LP Farms"})})}),Object(r.jsxs)(Xe,{children:[Object(r.jsx)("div",{children:"Stake LP tokens to earn UPWARD"}),Object(r.jsx)("div",{children:"Deposit fees will be used to buyback UPWARD"})]}),Object(r.jsx)(Ue,{stakedOnly:z,setStakedOnly:A}),Object(r.jsx)("div",{children:Object(r.jsxs)(p.a,{children:[Object(r.jsx)(s.a,{exact:!0,path:"".concat(n),children:I(z?D:P,!1)}),Object(r.jsx)(s.a,{exact:!0,path:"".concat(n,"/history"),children:I(B,!0)})]})})]})}}}]);
//# sourceMappingURL=8.eb9a9be0.chunk.js.map