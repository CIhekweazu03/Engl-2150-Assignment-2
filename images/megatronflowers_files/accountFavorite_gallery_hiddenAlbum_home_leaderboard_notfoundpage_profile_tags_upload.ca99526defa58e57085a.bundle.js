(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0WSl":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return o});var a=n("E9Wd"),r="".concat(a.V,"/account/messages"),i="".concat(a.V,"/upload"),o="https://help.imgur.com/hc/en-us/articles/360038529112"},"7tjL":function(e,t,n){},"92em":function(e,t,n){},"BuJ/":function(e,t,n){},Et25:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return c});var a=n("b5GN"),r=n("GB65");function i(e,t,n){if(!e||!t)return null;var a=t.toJS();return e.map(function(e){var t=e.get("id");return e=e.set("voted_count",a[t]?a[t]:0),n===t&&(e=e.set("user_selected",!0)),e}).filter(function(e){return 0<e.get("voted_count")}).sort(function(e,t){return e.get("user_selected")?-1:t.get("user_selected")?1:t.get("voted_count")-e.get("voted_count")})}function o(){var e=Object(r.w)();return e&&e.startsWith("/".concat(a.f))}function c(e,t){var n=e.filter(function(e){return e.type===t});return 0<n.length?n[0]:{}}},LZBw:function(e,t,n){"use strict";var a=n("lwsE"),c=n.n(a),r=n("W8MJ"),o=n.n(r),i=n("7W2i"),s=n.n(i),l=n("a1gu"),u=n.n(l),d=n("Nsbk"),p=n.n(d),f=n("q1tI"),g=n.n(f),m=(n("17x9"),n("/MKj")),h=n("WSv3"),v=n("E9Wd"),b=n("G5ih"),y=n("lSNA"),N=n.n(y),k=n("TSYQ"),E=n.n(k),A=n("0WSl"),C=n("7oyi"),S=n("BWa0");n("X+lB");function O(e){var t=e.unseen,n=e.onClick,a=E()({NavbarMessageButton:!0,"notification-dot":0<t,"ProfileNavbar-item":!0,uScaleTransition:!0});return g.a.createElement(C.b,{className:a,href:A.b,onClick:n,title:Object(b.b)("labelChat"),image:g.a.createElement(S.eb,{title:Object(b.b)("labelChat"),name:S.f,width:"32",height:"32",fillColor:null})})}O.__docgenInfo={description:"",methods:[],displayName:"NavbarMessageButton",props:{unseen:{type:{name:"number"},required:!1,description:""},onClick:{type:{name:"func"},required:!1,description:""}}};var w=n("ANjH"),q=n("55Ip"),R=n("987h"),j=n("QSMB"),D=n("PSaT"),I=n("jHDt"),U=n("MxOc"),P=n("GB65"),M=n("Dhp7"),B=(n("b1r/"),n("NTmO")),_=n.n(B);function x(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p()(a);if(r){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)}}var T=function(e){s()(n,e);var t=x(n);function n(){return c()(this,n),t.apply(this,arguments)}return o()(n,[{key:"componentDidMount",value:function(){if(this.props.statusSS===D.G.NO_DATA&&this.props.fetchSecretSantaConfig(),this.props.isOpen)return Object(P.Ab)(this.props.markSantaTooltipAsViewed,7e3),this.props.markSantaTooltipAsRendered()}},{key:"componentDidUpdate",value:function(e){this.props.isCoverFixed&&!e.isCoverFixed&&this.props.markSantaTooltipAsViewed()}},{key:"render",value:function(){var e=this.props,t=e.profile,n=e.isOpen,a=e.isCoverFixed,r=e.isRegistrationOpen;if(e.statusSS!==D.G.READY)return null;var i=t.get("status")===D.E.NOT_FOUND,o=t.get("status")>D.E.NOT_FOUND,c=r&&i&&!a,s="NavbarButtonSS-tooltip ".concat(n&&"NavbarButtonSS-tooltip--open");return g.a.createElement(q.b,{to:o?D.db:D.U,className:"NavbarButtonSS",title:Object(U.a)("navbarButtonLabel")},g.a.createElement(j.B,{name:j.h,className:"uScaleTransition ProfileNavbar-item"}),c&&g.a.createElement("img",{className:s,src:_.a}))}}]),n}(g.a.Component);T.__docgenInfo={description:"",methods:[],displayName:"NavbarButtonSS",props:{profile:{type:{name:"object"},required:!0,description:""},statusSS:{type:{name:"string"},required:!0,description:""},isOpen:{type:{name:"bool"},required:!1,description:""},isCoverFixed:{type:{name:"bool"},required:!1,description:""},isRegistrationOpen:{type:{name:"bool"},required:!1,description:""},markSantaTooltipAsRendered:{type:{name:"func"},required:!0,description:""},markSantaTooltipAsViewed:{type:{name:"func"},required:!0,description:""},fetchSecretSantaConfig:{type:{name:"func"},required:!0,description:""}}};var F=Object(w.d)(Object(m.b)(function(e){var t=e.ui,n=e.secretSanta,a=e.user,r=n.config,i=n.register,o=n.tooltip;return{statusSS:n.status,isCoverFixed:t.cover.get("fixed"),isRegistrationOpen:i.get("isOpen")&&Object(M.k)(r.get("registrationOpenDate"),r.get("registrationCloseDate")),isOpen:o.get("isOpen"),isUserLoggedIn:a.get("isLoggedIn")}},{markSantaTooltipAsRendered:I.h,markSantaTooltipAsViewed:I.i,fetchSecretSantaConfig:I.f}),R.a)(T),W=n("PJYZ"),L=n.n(W),H=n("zTH+");n("awMJ");function V(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p()(a);if(r){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)}}var z=function(e){s()(i,e);var r=V(i);function i(){var t;c()(this,i);for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t=r.call.apply(r,[this].concat(n)),N()(L()(t),"confettiClass",E()({NavbarConfettiButton:!0,"ProfileNavbar-item":!0,uScaleTransition:!0})),N()(L()(t),"handleClick",function(e){e.preventDefault(),(0,t.props.confettiClickAnalytics)(),Object(P.Eb)("confetti")}),t}return o()(i,[{key:"render",value:function(){return g.a.createElement(C.b,{className:this.confettiClass,onClick:this.handleClick,image:g.a.createElement(S.eb,{name:S.e,width:"32",height:"32",viewBox:"3 2 26 27"})})}}]),i}(g.a.Component);z.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null}],displayName:"NavbarConfettiButton",props:{confettiClickAnalytics:{type:{name:"func"},required:!1,description:""}}};var J=Object(m.b)(null,{confettiClickAnalytics:H.f})(z),G=n("JzwX"),Y=n("xypG"),K=n("qh6O"),X=n("VJ7e");n("7tjL");function Z(e){var t=e.notification;if(!t)return null;var n,a=[],r=t.get("text"),i=t.get("id"),o=0,c="",s="",l=[];return t.getIn(["annotations","mention"]).forEach(function(e){l=e.get("indices"),c=r.substr(o,l.get(0)),s=r.substr(l.get(0),l.get(1)-l.get(0)),a.push(g.a.createElement("span",{key:"".concat(c,"-").concat(i)},c)),a.push(g.a.createElement("strong",{className:"NotificationCardText-annotation",key:"".concat(s,"-").concat(i)},s)),o=l.get(1)}),n=r.substr(o),a.push(g.a.createElement("span",{key:"".concat(n,"-").concat(i)},n)),g.a.createElement("div",{className:"NotificationCardText"},a)}Z.__docgenInfo={description:"",methods:[],displayName:"NotificationCardText",props:{notification:{type:{name:"object"},required:!1,description:""}}};n("BuJ/");function Q(e){var t=e.notification,n=e.onClick;if(!t)return null;var a=new Date(1e3*t.get("updated_at")),r=t.getIn(["image","url"]),i=E()({"NotificationCard-thumb":!0,isUnread:t.get("state")!==X.b});return g.a.createElement(q.a,{to:function(e){var t=e.get("action");if(!t)return"";var n=t.replace("imgur://","https://");return{pathname:new URL(n).pathname,search:"?nid=".concat(e.get("id")),state:{accoladeConfetti:e.get("type")===X.a,hash:e.getIn(["post_definition","post_hash"])}}}(t),className:"NotificationCard",onClick:n},g.a.createElement("div",{className:i},g.a.createElement("img",{className:"NotificationCard-dot",src:r})),g.a.createElement(Z,{notification:t}),g.a.createElement(K.a,{className:"When--notificationCard",date:a}))}Q.defaultProps={onClick:function(){}},Q.__docgenInfo={description:"",methods:[],displayName:"NotificationCard",props:{onClick:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},notification:{type:{name:"object"},required:!1,description:""}}};var $=n("oHla");function ee(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p()(a);if(r){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)}}var te=function(e){s()(a,e);var n=ee(a);function a(e){var t;return c()(this,a),t=n.call(this,e),N()(L()(t),"container",null),N()(L()(t),"isStyler",!1),N()(L()(t),"removeListenerResize",null),N()(L()(t),"getReference",function(e){(t.container=e)&&t.updateScrollStyler()}),N()(L()(t),"updateScrollStyler",function(){var e=t.container.offsetWidth-t.container.clientWidth;t.state.scrollBarWidth!==e&&t.container&&t.setState({scrollBarWidth:e})}),t.state={scrollBarWidth:0},t}return o()(a,[{key:"componentDidMount",value:function(){var e=this.props.userAgent;this.isStyler=Object($.b)(e)||Object($.a)(e)}},{key:"componentDidUpdate",value:function(e){this.isStyler&&e.width!==this.props.width&&this.updateScrollStyler()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.height,a=e.onWheel,r=e.onTouchMove,i=e.onScroll,o=this.state.scrollBarWidth;return g.a.createElement("div",{ref:this.getReference,className:"DropdownScrollbar Scrollbar",onWheel:a,onTouchMove:r,onScroll:i,style:{maxHeight:n}},t,this.isStyler&&g.a.createElement("div",{className:"styler",style:{width:o}}))}}]),a}(g.a.Component);te.defaultProps={height:0},te.__docgenInfo={description:"",methods:[{name:"getReference",docblock:null,modifiers:[],params:[{name:"element",type:null}],returns:null},{name:"updateScrollStyler",docblock:null,modifiers:[],params:[],returns:null}],displayName:"DropdownScrollbar",props:{height:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},children:{type:{name:"instanceOf",value:"Object"},required:!1,description:""},onWheel:{type:{name:"func"},required:!1,description:""},onTouchMove:{type:{name:"func"},required:!1,description:""},onScroll:{type:{name:"func"},required:!1,description:""},userAgent:{type:{name:"string"},required:!1,description:""},width:{type:{name:"number"},required:!1,description:""}}};var ne=Object(m.b)(function(e){var t=e.agent,n=e.display;return{userAgent:t.get("useragent"),width:n.getIn(["viewPort","width"])}})(te);function ae(e){var t=e.height,n=Object(b.b)("noNotifications");return g.a.createElement("div",{className:"NotificationsEmpty",style:{lineHeight:"".concat(Math.min(150,t),"px"),textAlign:"center"}},n)}ae.defaultProps={height:14},ae.__docgenInfo={description:"",methods:[],displayName:"NotificationsEmpty",props:{height:{defaultValue:{value:"14",computed:!1},type:{name:"number"},required:!1,description:""}}};n("PJRO");function re(e){var t=e.markAllAsRead;return g.a.createElement("div",{className:"NotificationsHeader cf"},g.a.createElement("span",{className:"NotificationsHeader-title left"},Object(b.b)("notifications")),t&&g.a.createElement("span",{className:"NotificationsHeader-markall right",onClick:t},Object(b.b)("markAllAsRead")))}re.__docgenInfo={description:"",methods:[],displayName:"NotificationsHeader",props:{markAllAsRead:{type:{name:"func"},required:!1,description:""}}};var ie=n("Cz+I");n("kacx");function oe(e){var t=e.error,n=e.tryAgain,a=e.dismiss;if(!t)return null;var r=t.get("message"),i=t.get("meta").toJS(),o=t.get("type");return g.a.createElement("div",{className:"NotificationError"},g.a.createElement("div",{className:"NotificationError-message"},r,g.a.createElement("span",{className:"NotificationError-buttons"},g.a.createElement("a",{className:"Button ButtonLink icon-retry NotificationError-retry",onClick:function(){n(o,i)}},Object(b.b)("errorRetry")),g.a.createElement("span",{className:"NotificationError-divider"}," • "),g.a.createElement("a",{className:"Button ButtonLink NotificationError-dismiss",onClick:a},Object(b.b)("errorDismiss")))))}oe.__docgenInfo={description:"",methods:[],displayName:"NotificationError",props:{error:{type:{name:"object"},required:!1,description:""},tryAgain:{type:{name:"func"},required:!0,description:""},dismiss:{type:{name:"func"},required:!0,description:""}}};var ce=Object(m.b)(function(e){return{error:e.notifications.get("error")}},function(r){return{tryAgain:function(e,t){var n=Object(ie.k)(e),a=t.options.params;n&&r(n(e=ie.f&&a?a.pageToken:null))},dismiss:function(){return r(Object(ie.i)())}}})(oe);n("y6ID");function se(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p()(a);if(r){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)}}var le=function(e){s()(i,e);var a=se(i);function i(){var r;c()(this,i);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r=a.call.apply(a,[this].concat(t)),N()(L()(r),"onClick",function(e){var t=r.props,n=t.markAsRead,a=t.closeNotifications;e.get("state")!==X.b&&n(e.get("id")),a()}),r}return o()(i,[{key:"render",value:function(){var t=this,e=this.props,n=e.markAllAsRead,a=e.isFetching,r=e.onWheel,i=e.onScroll,o=e.height,c=e.notifications;return g.a.createElement("div",{className:"NotificationCards"},g.a.createElement(re,{markAllAsRead:0<c.size?n:void 0}),g.a.createElement(ce,null),0!==c.size||a?g.a.createElement(ne,{onWheel:r,onScroll:i,height:o},c.map(function(e){return e&&g.a.createElement(Q,{key:"notif-".concat(e.get("id"),"-").concat(e.get("state")),notification:e,onClick:function(){return t.onClick(e)}})}),a&&g.a.createElement(Y.b,{model:"notifications",size:60,status:{loading:a},applyStyle:{position:"absolute",left:"calc(50% - 30px)",top:"calc(50% - 30px)"}})):g.a.createElement(ae,{height:o}),g.a.createElement("div",{className:"NotificationCards-bottomGradient"}))}}]),i}(f.Component);le.defaultProps={markAsRead:function(){},closeNotifications:function(){}},le.__docgenInfo={description:"",methods:[{name:"onClick",docblock:null,modifiers:[],params:[{name:"notification",type:null}],returns:null}],displayName:"NotificationCards",props:{markAsRead:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},closeNotifications:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},notifications:{type:{name:"object"},required:!1,description:""},markAllAsRead:{type:{name:"func"},required:!1,description:""},isFetching:{type:{name:"bool"},required:!1,description:""},onWheel:{type:{name:"func"},required:!1,description:""},onScroll:{type:{name:"func"},required:!1,description:""},height:{type:{name:"number"},required:!1,description:""}}};var ue=n("/PhX"),de=n("DUmG");function pe(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p()(a);if(r){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)}}function fe(e){var t=e.display,n=e.ui;return{height:t.getIn(["viewPort","height"]),positionY:t.get("positionY"),isOpen:n.notifications.get("open")}}function me(e){return Object(m.b)(fe,{closeNotifications:ue.z,toggleNotifications:ue.K})(function(p){var e=function(e){s()(n,e);var t=pe(n);function n(e){var o;return c()(this,n),o=t.call(this,e),N()(L()(o),"scrollElement",null),N()(L()(o),"dropdownHeight",0),N()(L()(o),"toggleDropdown",function(){var e=o.props,t=e.markAllAsSeen,n=e.isOpen,a=e.toggleNotifications;n||t(),a()}),N()(L()(o),"calculateDropdownHeight",function(e){o.dropdownHeight=e-de.$navbarHeight-100}),N()(L()(o),"handleWindowClick",function(e){var t=o.props,n=t.isOpen,a=t.closeNotifications,r=o.dropdown;n&&r&&(r===e.target||r.contains(e.target)||a());return!0}),N()(L()(o),"handleNotificationPagination",function(e){o.scrollElement=e.target}),N()(L()(o),"wheelHandler",function(e){var t=o.props,n=t.isFetching,a=t.reachedEnd,r=t.requestNextNotificationPage;if(!o.scrollElement||e.deltaY<=0||!o.scrollElement.scrollHeight)return!0;var i=o.dropdownHeight+o.scrollElement.scrollTop+100>o.scrollElement.scrollHeight;(n||i)&&(a||n||r(),e.preventDefault())}),o.calculateDropdownHeight(e.height),o}return o()(n,[{key:"closeDropdown",value:function(e,t){var n=this.props,a=n.isOpen,r=n.closeNotifications;if(!t&&a)return 100<e&&r()}},{key:"componentDidMount",value:function(){var e=this;this.autoCloser=Object(G.a)({el:function(){return e.dropdown},cb:this.handleWindowClick})}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.height,a=t.positionY,r=t.isFetching;n!==e.height&&this.calculateDropdownHeight(n),a!==e.positionY&&this.closeDropdown(a,r)}},{key:"componentWillUnmount",value:function(){this.scrollElement=null,"function"==typeof this.autoCloser&&this.autoCloser()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.unseen,a=t.isOpen;return n!==e.unseen||(a||e.isOpen)}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.className,r=n.markAsRead,i=n.markAllAsRead,o=n.isFetching,c=n.notifications,s=n.isOpen,l=n.unseen,u=n.closeNotifications,d=E()((e={NotificationsDropdown:!0},N()(e,a,a),N()(e,"open",s),e));return g.a.createElement("div",{ref:function(e){t.dropdown=e},className:d},p&&g.a.createElement(p,{unseen:l,onClick:this.toggleDropdown}),s&&g.a.createElement(le,{notifications:c,isFetching:o,markAllAsRead:i,markAsRead:r,closeNotifications:u,onWheel:this.wheelHandler,onScroll:this.handleNotificationPagination,height:this.dropdownHeight}))}}]),n}(g.a.Component);return e.defaultProps={isFetching:!1,reachedEnd:!1,className:""},e}(e))}n("NRal");function he(e){var t=e.unseen,n=e.onClick,a=E()({NotificationButton:!0,"notification-dot":0<t,"ProfileNavbar-item":!0,uScaleTransition:!0});return g.a.createElement(C.b,{className:a,onClick:n,title:Object(b.b)("notifications"),image:g.a.createElement(S.eb,{title:Object(b.b)("notifications"),name:S.v,width:"32",height:"32",viewBox:"0 -2 34 34"})})}var ge=me(he);he.__docgenInfo={description:"",methods:[],displayName:"NavbarNotificationButton",props:{unseen:{type:{name:"number"},required:!1,description:""},onClick:{type:{name:"func"},required:!1,description:""}}};var ve=n("/iGR"),be=n("Z6Av"),ye=n("Et25"),Ne="brazeNotificationSeen";function ke(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],a=n("rfzL");if(a.initialize(v.j,{enableHtmlInAppMessages:!0,noCookies:!0}),!Object(ye.b)()){a.subscribeToInAppMessage(function(e){!function(e){var t=function(e){var t=e.message.match(/\/\/ campaign ID: ([A-Za-z0-9-])+/);if(null!=t&&0<t.length)return t[0].substring("// campaign ID: ".length);var n=e.extras;return n.hasOwnProperty("campaignID")?n.campaignID:null}(e);if(t){var n=Object(P.F)(Ne);return(!n||n!==t)&&(Object(P.yb)(Ne,t),!0)}return!0}(e)||(function(e){var t=e.extras;if(t.hasOwnProperty("updateCustomAttributeOnShow")){var n={};try{n=JSON.parse(t.updateCustomAttributeOnShow)}catch(e){}n.key&&a.getUser().setCustomUserAttribute(n.key,n.value||null)}}(e),a.display.showInAppMessage(e))})}!Object(be.b)()&&v.s!==v.O||a.registerAppboyPushMessages(),a.changeUser(e),a.getUser().setCustomUserAttribute("UsesLegacyPostPage",!!t),a.openSession()}n("fuAU"),n("m6gU");function Ee(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p()(a);if(r){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)}}function Ae(e){var t=e.notifications,n=e.ui,a=e.user;return{unseenNotifications:t.get("unseenNotifications"),unseenConversations:t.get("unseenConversations"),notifications:t.get("notifications"),pageToken:t.get("pageToken"),reachedEnd:t.get("reachedEnd"),isUpdateRequired:t.get("isUpdateRequired"),isActive:!n.notifications.get("isSmallScreen")||n.notifications.get("open"),isFetching:n.spinner&&n.spinner.get("notifications")&&n.spinner.get("notifications").loading,userID:a.get("id")}}function Ce(t){return{handleFetchNotifications:function(e){t(Object(ie.j)(e))},handleMarkAllAsSeen:function(){t(Object(ie.m)())},handleMarkAllAsRead:function(){t(Object(ie.l)())},handleMarkAsRead:function(e){t(Object(ie.n)(e))},handleFireMessagingNavAnalytics:function(){t(Object(H.d)("topNavBar"))}}}function Se(e){return Object(m.b)(Ae,Ce)(function(h,n){var e=function(e){s()(r,e);var a=Ee(r);function r(){var i;c()(this,r);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i=a.call.apply(a,[this].concat(t)),N()(L()(i),"requestNextNotificationPage",function(){var e=i.props,t=e.reachedEnd,n=e.isFetching,a=e.pageToken,r=e.handleFetchNotifications;t||n||r(a)}),i}return o()(r,[{key:"componentDidMount",value:function(){var e=this.props.userID,t="1"!==Object(ve.a)(v.q,Object(P.y)("cookie"));this.requestNextNotificationPage(),n(e,t)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.isUpdateRequired,a=t.handleFetchNotifications;e.isUpdateRequired!==n&&n&&a(null)}},{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.className,a=e.username,r=e.unseenConversations,i=e.unseenNotifications,o=e.isFetching,c=e.notifications,s=e.handleFireMessagingNavAnalytics,l=e.reachedEnd,u=e.handleMarkAllAsSeen,d=e.handleMarkAllAsRead,p=e.handleMarkAsRead,f=e.cakeIcon;if(!h||!t)return null;var m={className:n,username:a,unseenConversations:r,unseenNotifications:i,isFetching:o,notifications:c,fireMessagingNavAnalytics:s,reachedEnd:l,markAllAsSeen:u,markAllAsRead:d,markAsRead:p,cakeIcon:f,requestNextNotificationPage:this.requestNextNotificationPage};return g.a.createElement(h,m)}}]),r}(g.a.Component);return e.defaultProps={isActive:!0},e}(e,ke))}var Oe=Se(me());n("p5h/");function we(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p()(a);if(r){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)}}var qe=function(e){s()(i,e);var r=we(i);function i(e){var t;c()(this,i),t=r.call(this,e);var n=!1,a=Date.now();return Date.parse(D.l)<a&&a<Date.parse(D.k)&&(n=!0),t.state={giftIcon:n},t}return o()(i,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.unseenConversations,a=e.unseenNotifications,r=e.handleFireMessagingNavAnalytics,i=e.cakeIcon,o=e.isFetching,c=e.notifications,s=e.reachedEnd,l=e.markAllAsSeen,u=e.markAllAsRead,d=e.markAsRead,p=e.requestNextNotificationPage,f=this.state.giftIcon,m=E()(N()({NavbarNotifications:!0},t,t)),h={unseen:a,isFetching:o,notifications:c,reachedEnd:s,markAllAsSeen:l,markAllAsRead:u,markAsRead:d,requestNextNotificationPage:p};return g.a.createElement("div",{className:m},f&&g.a.createElement(F,null),i&&g.a.createElement(J,null),g.a.createElement(O,{unseen:n,onClick:r}),g.a.createElement(ge,h))}}]),i}(g.a.Component);qe.defaultProps={className:""},qe.__docgenInfo={description:"",methods:[],displayName:"NavbarNotifications",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},unseenConversations:{type:{name:"number"},required:!1,description:""},unseenNotifications:{type:{name:"number"},required:!1,description:""},isFetching:{type:{name:"bool"},required:!1,description:""},notifications:{type:{name:"object"},required:!1,description:""},handleFireMessagingNavAnalytics:{type:{name:"func"},required:!1,description:""},reachedEnd:{type:{name:"bool"},required:!1,description:""},markAllAsSeen:{type:{name:"func"},required:!1,description:""},markAllAsRead:{type:{name:"func"},required:!1,description:""},markAsRead:{type:{name:"func"},required:!1,description:""},requestNextNotificationPage:{type:{name:"func"},required:!1,description:""},cakeIcon:{type:{name:"bool"},required:!1,description:""}}};var Re=Object(m.b)(function(e){return{cakeIcon:e.config.getIn(["featureFlags","cakeIcon"])}},function(e){return{handleFireMessagingNavAnalytics:function(){e(Object(H.d)("topNavBar"))}}})(Se(qe)),je=n("9rNq"),De=n("y/zE");n("ds3J");function Ie(e){var t,n=e.displayUsername,a=e.className,r=E()((t={},N()(t,a,a),N()(t,"NavbarAvatar",!0),t));return g.a.createElement(De.b,{className:r,displayUsername:n})}Ie.defaultProps={className:""},Ie.__docgenInfo={description:"",methods:[],displayName:"NavbarAvatar",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},displayUsername:{type:{name:"string"},required:!1,description:""}}};var Ue=n("4TFA"),Pe=n("pNV7");n("SINw");function Me(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p()(a);if(r){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)}}var Be=function(e){s()(n,e);var t=Me(n);function n(){return c()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.unseenConversations,a=e.unseenNotifications,r=e.isLoggedIn,i=e.handleToggleNotifications,o=E()(N()({NavbarUserMenuNotifications:!0},t,!!t));return g.a.createElement("div",{className:o},r&&g.a.createElement(O,{unseen:n,onClick:H.d}),r&&g.a.createElement(he,{markAllAsSeen:ie.m,unseen:a,onClick:i}))}}]),n}(g.a.Component);Be.defaultProps={className:""},Be.__docgenInfo={description:"",methods:[],displayName:"NavbarUserMenuNotifications",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},unseenConversations:{type:{name:"number"},required:!1,description:""},unseenNotifications:{type:{name:"number"},required:!1,description:""},isLoggedIn:{type:{name:"bool"},required:!1,description:""},fireMessagingNavAnalytics:{type:{name:"func"},required:!1,description:""},handleToggleNotifications:{type:{name:"func"},required:!1,description:""}}};var _e=Object(m.b)(function(e){var t=e.user,n=e.notifications;return{isLoggedIn:t.get("isLoggedIn"),unseenNotifications:n.get("unseenNotifications"),unseenConversations:n.get("unseenConversations")}},function(e){return{fireMessagingNavAnalytics:function(){e(Object(H.d)("topNavBar"))},handleToggleNotifications:function(){e(Object(ie.m)()),e(Object(ue.K)())}}})(Be);n("92em");function xe(e){var t=e.username,n=e.displayUsername;return g.a.createElement("div",{className:"NavbarUserMenuCover",style:{backgroundImage:"url(".concat(v.V,"/user/").concat(t,"/cover)")}},g.a.createElement("div",{className:"NavbarUserMenuCover-row"},g.a.createElement(De.b,{className:"NavbarAvatar NavbarAvatar-menu",displayUsername:n}),g.a.createElement(_e,{className:"NavbarNotifications-menu",username:t})),g.a.createElement("div",{className:"NavbarUserMenuCover-row NavbarUserMenuCover-user"},n||t))}xe.__docgenInfo={description:"",methods:[],displayName:"NavbarUserMenuCover",props:{username:{type:{name:"string"},required:!0,description:""},displayUsername:{type:{name:"string"},required:!1,description:""}}};n("gAaL");function Te(e){function t(e){return function(){o(e)}}var n=e.username,a=e.displayUsername,r=e.logout,i=e.profileBeta,o=e.userMenuClickAnalytics,c=a||n,s=i?g.a.createElement(q.b,{className:"Dropdown-option",to:"/user/".concat(c,"/posts"),onClick:t(Ue.e)},Object(b.b)("navbarMenuPosts")):g.a.createElement("a",{className:"Dropdown-option",href:"/user/".concat(c,"/submitted"),onClick:t(Ue.e)},Object(b.b)("navbarMenuPosts")),l=i?g.a.createElement(q.b,{className:"Dropdown-option",to:"/user/".concat(c,"/comments"),onClick:t(Ue.b)},Object(b.b)("navbarMenuComments")):g.a.createElement("a",{className:"Dropdown-option",href:"/user/".concat(c),onClick:t(Ue.b)},Object(b.b)("navbarMenuComments"));return g.a.createElement("div",{className:"NavbarUserMenuBlock"},g.a.createElement(je.d,{className:"NavbarUserMenu",value:c,dropdownIcon:g.a.createElement(Ie,{className:"NavbarAvatar-navbar"}),onClickDropdown:function(e,t){e&&e.target.classList.contains("NavbarAvatar")&&t&&(o(Ue.f),Object(P.db)("".concat(v.V,"/user/").concat(c)))},disableGravity:!0},g.a.createElement(xe,{username:n,displayUsername:a}),g.a.createElement("div",{className:"Dropdown-option-group"},s,g.a.createElement(q.b,{className:"Dropdown-option",to:"/user/".concat(c,"/favorites"),onClick:t(Ue.c)},Object(b.b)("navbarMenuFavorites")),l,i&&g.a.createElement(q.b,{className:"Dropdown-option",to:"/user/".concat(c,"/about")},Object(b.b)("navbarMenuAbout")),g.a.createElement("a",{className:"Dropdown-option",href:"https://".concat(c,".").concat(v.U,"/all"),onClick:t(Ue.d)},Object(b.b)("navbarMenuImages"))),g.a.createElement("div",{className:"Dropdown-option-group Dropdown-option-footer"},g.a.createElement("a",{className:"Dropdown-option",onClick:t(Ue.g),href:v.a},g.a.createElement(Pe.W,{name:Pe.w}),g.a.createElement("span",null,Object(b.b)("navbarMenuSettings"))),g.a.createElement("div",{className:"Dropdown-option",onClick:r},g.a.createElement(Pe.W,{name:Pe.x}),g.a.createElement("span",null,Object(b.b)("signOut"))))))}Te.__docgenInfo={description:"",methods:[],displayName:"NavbarUserMenu",props:{username:{type:{name:"string"},required:!0,description:""},displayUsername:{type:{name:"string"},required:!1,description:""},logout:{type:{name:"func"},required:!1,description:""},profileBeta:{type:{name:"bool"},required:!1,description:""},userMenuClickAnalytics:{type:{name:"func"},required:!0,description:""}}};function Fe(){return g.a.createElement("a",{className:"EmeraldButton Button",href:"/".concat(Le.f,"?source=").concat(He.t)},Object(Ve.a)("goAdFree"))}var We=n("bWDY"),Le=n("b5GN"),He=n("OX3u"),Ve=n("AG5K");n("UuzF");Fe.__docgenInfo={description:"",methods:[],displayName:"EmeraldButton"};n("o0ye");function ze(e){var t=e.username,n=e.displayUsername,a=e.handleLogout,r=e.userMenuClickAnalytics,i=e.profileBeta,o=e.isSmallScreen,c=e.adsEnabled,s=e.cakeIcon,l=c&&!Object(ye.b)();if(t)return g.a.createElement("div",{className:"ProfileNavbar ProfileNavbar-loggedIn"},l&&g.a.createElement(Fe,null),o?g.a.createElement(Oe,{className:"NavbarNotifications-dropdown"}):g.a.createElement(Re,null),g.a.createElement(Te,{username:t,displayUsername:n,logout:a,userMenuClickAnalytics:r,profileBeta:i,disableGravity:!0}));var u="?redirect=".concat(encodeURIComponent(Object(P.w)())),d=Object(b.b)("navbarSignUp"),p=Object(b.b)("navbarSignIn");return g.a.createElement("div",{className:"ProfileNavbar ProfileNavbar-loggedOut"},g.a.createElement("div",{className:"NavbarNotifications NavbarNotifications-navbar"},s&&g.a.createElement(J,null)),l&&g.a.createElement(Fe,null),g.a.createElement("a",{onClick:function(){r("sign in")},className:"Navbar-signin",href:"".concat(v.V,"/signin").concat(u)},p),g.a.createElement(C.b,{className:"Button Navbar-signup",label:d,title:d,onClick:function(){r("sign up")},href:"".concat(v.V,"/register").concat(u)}))}var Je=Object(m.b)(function(e,t){var n=e.user,a=e.ui,r=e.ad,i=e.config;return{username:n.get("username"),displayUsername:n.get("displayUsername"),isSmallScreen:void 0===t.isSmallScreen?a.notifications.get("isSmallScreen"):t.isSmallScreen,profileBeta:n.getIn(["flags","desktopProfilePageBeta"]),adsEnabled:Object(We.g)(r,n),cakeIcon:i.getIn(["featureFlags","cakeIcon"])}},function(t){return{userMenuClickAnalytics:function(e){t(Object(H.g)(e))},handleLogout:function(){t(Object(h.I)()),t(Object(H.g)("logout"))}}})(ze);function Ge(a){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=p()(a);if(r){var n=p()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u()(this,e)}}ze.__docgenInfo={description:"",methods:[],displayName:"ProfileNavbar",props:{username:{type:{name:"string"},required:!1,description:""},displayUsername:{type:{name:"string"},required:!1,description:""},handleLogout:{type:{name:"func"},required:!0,description:""},profileBeta:{type:{name:"bool"},required:!1,description:""},userMenuClickAnalytics:{type:{name:"func"},required:!0,description:""},isSmallScreen:{type:{name:"bool"},required:!1,description:""},adsEnabled:{type:{name:"bool"},required:!1,description:""},cakeIcon:{type:{name:"bool"},required:!1,description:""}}};var Ye=function(e){s()(n,e);var t=Ge(n);function n(){return c()(this,n),t.apply(this,arguments)}return o()(n,[{key:"componentDidMount",value:function(){this.props.isUserLoaded||this.props.fetchUserData()}},{key:"render",value:function(){return this.props.isUserLoaded?g.a.createElement(Je,this.props):null}}]),n}(g.a.Component);Ye.__docgenInfo={description:"",methods:[],displayName:"ProfileNavbarContainer",props:{fetchUserData:{type:{name:"func"},required:!0,description:""},isUserLoaded:{type:{name:"bool"},required:!1,description:""}}};t.a=Object(m.b)(function(e){return{isUserLoaded:e.user.get("isLoaded")}},{fetchUserData:h.D})(Ye)},NRal:function(e,t,n){},NTmO:function(e,t,n){e.exports=n.p+"desktop-assets/ss-2020-tooltip.55c7e4767a08549eb6458f7833c98990.svg"},PJRO:function(e,t,n){},SINw:function(e,t,n){},UuzF:function(e,t,n){},"X+lB":function(e,t,n){},awMJ:function(e,t,n){},"b1r/":function(e,t,n){},ds3J:function(e,t,n){},fuAU:function(e,t,n){},gAaL:function(e,t,n){},kacx:function(e,t,n){},m6gU:function(e,t,n){},o0ye:function(e,t,n){},oHla:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});n("aYmD");function a(e){return/firefox/.test(e.toLowerCase())}function r(e){return/edge/.test(e.toLowerCase())}},"p5h/":function(e,t,n){},qh6O:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("lSNA"),c=n.n(a),r=n("q1tI"),s=n.n(r),i=n("TSYQ"),l=n.n(i),u=(n("17x9"),n("Nm7g"));function o(e){var t=e.date,n=e.datetime,a=e.timestamp,r=e.className,i=t||new Date(a||Date.parse(n)),o=l()(c()({When:!0},r,r));return s.a.createElement("span",{className:o,title:i},Object(u.c)(i.getTime()/1e3))}o.defaultProps={className:""},o.__docgenInfo={description:"TODO:\nfromNow, and utils/formatting is a problem. That code should not be there\nit should be in here. It's also not internationalized. Anytime at all that we\nwant to have a formatted datetime, it will be inside a React Component, so we should\njust have a react component that does the formatting, which is what this does. At somepoint\nwe should change over all uses of the `fromNow` code where ever it used to this component\nand then to also internationalize the component. Date formatting is a job of a view. It's\npresentation data, and it doesn't belong in utils.\n\nfromNow is also problematic in that it expects a PHP generated timestamp, which is seconds\nfrom UTC. It should have accepted a date object.\n\nAnother problem with the fromNow is that it shows plural s when there shouldn't be a plural s,\nlike \"1 days\" should be \"1 day\".\n\nBy it being in a react component we can also ensure that dates always look the same. Same CSS\nsame exact date format.",methods:[],displayName:"When",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},date:{type:{name:"instanceOf",value:"Date"},required:!1,description:""},datetime:{type:{name:"string"},required:!1,description:""},timestamp:{type:{name:"number"},required:!1,description:""}}}},y6ID:function(e,t,n){},ygTn:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n("q1tI"),r=n.n(a),i=(n("17x9"),n("/MKj")),o=n("55Ip"),c=n("GB65"),s=n("zTH+"),l=n("BWa0");function u(e){var t=e.frontPageBeta,n=e.logoClicked,a=t?r.a.createElement(o.b,{className:"Navbar-logo",to:"/",onClick:function(){"/"===Object(c.w)()&&Object(c.ib)()}},r.a.createElement(l.eb,{className:"icon stroke fill",name:l.t,width:"94",height:"34",viewBox:"0 0 94 34",fillColor:"#ffffff",onClick:n})):r.a.createElement("a",{className:"Navbar-logo",href:"/"},r.a.createElement(l.eb,{className:"icon stroke fill",name:l.t,width:"94",height:"34",viewBox:"0 0 94 34",fillColor:"#ffffff",onClick:n}));return r.a.createElement("div",{className:"Navbar-logo-container"},a)}var d=Object(i.b)(function(e){return{frontPageBeta:e.user.getIn(["flags","desktopFrontPageBeta"])}},{logoClicked:s.e})(u);u.__docgenInfo={description:"",methods:[],displayName:"NavbarLogo",props:{frontPageBeta:{type:{name:"bool"},required:!1,description:""},logoClicked:{type:{name:"func"},required:!0,description:""}}}}}]);