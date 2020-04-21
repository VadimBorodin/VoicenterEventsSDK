!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("socket.io-client/socket.io")):"function"==typeof define&&define.amd?define(["socket.io-client/socket.io"],t):(e=e||self).VoicenterEventsSDK=t(e.io)}(this,function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e=e&&e.hasOwnProperty("default")?e.default:e;var c={LOGIN_STATUS:"loginStatus",LOGIN:"login",LOGIN_USER:"loginUser",LOGIN_CODE:"loginUserCode",LOGIN_ACCOUNT:"loginAccount",LOGIN_RESPONSE:"loginResponse",QUEUE_EVENT:"QueueEvent",QUEUES_UPDATED:"QueuesUpdated",DIALERS_UPDATED:"DialersUpdated",EXTENSION_EVENT:"ExtensionEvent",EXTENSION_UPDATED:"ExtensionsUpdated",ALL_EXTENSION_STATUS:"AllExtensionsStatus",CONNECT_ERROR:"connect_error",CONNECT_TIMEOUT:"connect_timeout",DISCONNECT:"disconnect",PONG:"pong",RECONNECT:"reconnect",RECONNECT_ATTEMPT:"reconnect_attempt",RESYNC:"resync",RECONNECTING:"reconnecting",RECONNECT_ERROR:"reconnect_error",RECONNECT_FAILED:"reconnect_failed",KEEP_ALIVE:"keepalive",KEEP_ALIVE_RESPONSE:"keepaliveResponse",CLOSE:"closeme",ERROR:"error"},a=[{URLID:59,Priority:5,Version:2,Domain:"monitor1.voicenter.co"},{URLID:3,Priority:4,Version:2,Domain:"monitor3.voicenter.co.il"},{URLID:4,Priority:3,Version:2,Domain:"monitor4.voicenter.co.il"},{URLID:11,Priority:2,Version:2,Domain:"monitor11.voicenter.co"},{URLID:5,Priority:0,Version:2,Domain:"monitor5.voicenter.co.il"}],u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this.debug=t.debug}return o(e,[{key:"_log",value:function(e,t){var n=t?"".concat(e,", %c Data -> ").concat(JSON.stringify(t)):"".concat(e),i=(new Date).toUTCString();console.log("%c ".concat(i,": %c ").concat(n),"color: #276749;","color: #4299e1;","color: #2c3e50;")}},{key:"_error",value:function(e,t){var n=t?"".concat(e,", Data -> ").concat(JSON.stringify(t)):"".concat(e),i=(new Date).toUTCString();console.error("".concat(i,": ").concat(n))}},{key:"log",value:function(e,t){this.debug&&(e&&!t?this._log(e):this._log(e,t))}},{key:"error",value:function(e,t){this.debug&&(e&&!t?this._error(e):this._error(e,t))}}]),e}();var l=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},v="object"==typeof h&&h&&h.Object===Object&&h,f="object"==typeof self&&self&&self.Object===Object&&self,E=v||f||Function("return this")(),p=function(){return E.Date.now()},d=E.Symbol,y=Object.prototype,g=y.hasOwnProperty,m=y.toString,_=d?d.toStringTag:void 0;var T=function(e){var t=g.call(e,_),n=e[_];try{e[_]=void 0;var i=!0}catch(e){}var o=m.call(e);return i&&(t?e[_]=n:delete e[_]),o},O=Object.prototype.toString;var S=function(e){return O.call(e)},N="[object Null]",C="[object Undefined]",k=d?d.toStringTag:void 0;var D=function(e){return null==e?void 0===e?C:N:k&&k in Object(e)?T(e):S(e)};var R=function(e){return null!=e&&"object"==typeof e},I="[object Symbol]";var A=function(e){return"symbol"==typeof e||R(e)&&D(e)==I},L=NaN,b=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,U=/^0o[0-7]+$/i,P=parseInt;var M=function(e){if("number"==typeof e)return e;if(A(e))return L;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(b,"");var n=x.test(e);return n||U.test(e)?P(e.slice(2),n?2:8):w.test(e)?L:+e},j="Expected a function",F=Math.max,Q=Math.min;var G=function(e,t,n){var i,o,r,s,c,a,u=0,h=!1,v=!1,f=!0;if("function"!=typeof e)throw new TypeError(j);function E(t){var n=i,r=o;return i=o=void 0,u=t,s=e.apply(r,n)}function d(e){var n=e-a;return void 0===a||n>=t||n<0||v&&e-u>=r}function y(){var e=p();if(d(e))return g(e);c=setTimeout(y,function(e){var n=t-(e-a);return v?Q(n,r-(e-u)):n}(e))}function g(e){return c=void 0,f&&i?E(e):(i=o=void 0,s)}function m(){var e=p(),n=d(e);if(i=arguments,o=this,a=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(y,t),h?E(e):s}(a);if(v)return clearTimeout(c),c=setTimeout(y,t),E(a)}return void 0===c&&(c=setTimeout(y,t)),s}return t=M(t)||0,l(n)&&(h=!!n.leading,r=(v="maxWait"in n)?F(M(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),m.cancel=function(){void 0!==c&&clearTimeout(c),u=0,i=a=o=c=void 0},m.flush=function(){return void 0===c?s:g(p())},m},V=[c.CONNECT_ERROR,c.CONNECT_TIMEOUT,c.DISCONNECT,c.RECONNECT_ATTEMPT,c.RECONNECTING,c.RECONNECT_ERROR,c.RECONNECT_FAILED,{NEWCALL:"NEWCALL",ANSWER:"ANSWER",HANGUP:"HANGUP"}.CLOSE];function K(e){var t=e.eventData,n=e.store,i=e.extensionsModuleName,o=e.queuesModuleName,r=t.name,s=t.data;switch(n.commit("".concat(i,"/SET_IS_SOCKET_OFFLINE"),function(e){var t=e.name;return V.includes(t)}(t)),r){case c.ALL_EXTENSION_STATUS:n.dispatch("".concat(i,"/setExtensions"),s.extensions);break;case c.EXTENSION_EVENT:var a=s.data;a.lastEvent={reason:s.reason,ivrid:s.ivruniqueid};var u=n.state[i].extensions.findIndex(function(e){return e.userID===a.userID});-1!==u&&n.dispatch("".concat(i,"/updateExtension"),{index:u,extension:a});break;case c.LOGIN_STATUS:n.commit("".concat(i,"/SET_SERVER_TIME"),s),n.dispatch("".concat(o,"/setQueues"),s.queues);break;case c.QUEUE_EVENT:var l=s.data,h=(n.state[o].all||[]).findIndex(function(e){return e.QueueID===l.QueueID});-1!==h&&n.dispatch("".concat(o,"/updateQueue"),{index:h,queue:l})}}var q,W=100,X=101,$="hold",B="SET_EXTENSIONS",H="UPDATE_EXTENSIONS",J="SET_SERVER_TIME",Y="SET_IS_SOCKET_OFFLINE";function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.callstatus||"";return t=t.toLowerCase(),e.answered&&t===$}var Z,ee={namespaced:!0,state:{extensions:[],serverTime:null,serverDelta:0,serverOffset:0,isSocketOffline:!1,offlineSocketTimestamp:null},mutations:(r(q={},B,function(e,t){e.extensions=t}),r(q,H,function(e,t){var n=t.index,i=t.extension;e.extensions.splice(n,1,i)}),r(q,J,function(e,t){e.serverOffset=60*t.servertimeoffset*1e3||108e5,e.serverTime=1e3*t.servertime-e.serverOffset,e.serverDelta=(new Date).getTime()-e.serverTime}),r(q,Y,function(e,t){e.isSocketOffline=t,e.offlineSocketTimestamp=t?(new Date).getTime():null}),q),actions:{setExtensions:async function(e,t){(0,e.commit)(B,t)},updateExtension:async function(e,t){(0,e.commit)(H,t)}},getters:{isSocketOffline:function(e){if(!e.offlineSocketTimestamp||isNaN(e.offlineSocketTimestamp))return!1;var t=(new Date).getTime();return e.isSocketOffline&&t-e.offlineSocketTimestamp>6e4},extensionsWithCalls:function(e){return function(t){var n=[];return e.extensions.forEach(function(e){e.calls.length>0&&(e.calls.filter(z).length?e.representativeStatus=X:e.representativeStatus=W),n.push(e)}),t?n.filter(function(e){return 2!==e.representativeStatus}):n}},extensionCountByStatus:function(e,t){return function(e){return t.extensionWithCalls.filter(function(t){return t.representativeStatus===e}).length||0}}}},te="SET_QUEUES",ne="UPDATE_QUEUES",ie={namespaced:!0,state:{all:[]},mutations:(r(Z={},te,function(e,t){e.all=t}),r(Z,ne,function(e,t){var n=t.index,i=t.queue;e.all.splice(n,1,i)}),Z),actions:{setQueues:async function(e,t){(0,e.commit)(te,t)},updateQueue:async function(e,t){(0,e.commit)(ne,t)}},getters:{queueWithActiveCalls:function(e){return e.all.filter(function(e){return e.Calls.length})},allQueueCalls:function(e,t){var n=[];return t.queueWithActiveCalls.forEach(function(e){var t=e.Calls||[];n.push.apply(n,s(t))}),n},filterQueuesByIds:function(e){return function(t){return t&&Array.isArray(t)?e.all.filter(function(e){return t.includes(e.QueueID)}):e.all}}}};var oe={url:"https://monitorapi.voicenter.co.il/monitorAPI/getMonitorUrls",servers:a,token:null,forceNew:!0,reconnectionDelay:1e4,reconnectionDelayMax:1e4,maxReconnectAttempts:2,timeout:1e4,keepAliveTimeout:6e4,idleInterval:3e5,protocol:"https",transports:["websocket"],upgrade:!1,store:null,extensionsModuleName:"sdkExtensions",queuesModuleName:"sdkQueues",serverFetchStrategy:"remote",serverType:null},re=[],se=new Map,ce=function(){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n(this,i),this.options=Object.assign({},oe,{},e),this.argumentOptions=Object.assign({},e),!this.options.token)throw new Error("A token property should be provided");this.Logger=new u(this.options),this.servers=[],this.server=null,this.socket=null,this.connected=!1,this.connectionEstablished=!1,this._lastEventTimestamp=(new Date).getTime(),this._initReconnectOptions(),this._listenersMap=se,this._retryConnection=G(this._connect.bind(this),this.reconnectOptions.reconnectionDelay,{leading:!0,trailing:!1}),this._lastLoginTimestamp=null,this._handleLocalEvents=!1,this._registerExtensionsModule(),this._registerQueueModule()}return o(i,[{key:"getLastEventTimestamp",value:function(){return this._lastEventTimestamp}},{key:"_registerExtensionsModule",value:function(){var e=this.options.extensionsModuleName||"sdkExtensions";this._validateStoreModule(e)&&(this.options.store.registerModule(e,ee),this._handleLocalEvents=!0)}},{key:"_registerQueueModule",value:function(){var e=this.options.queuesModuleName||"sdkQueues";this._validateStoreModule(e)&&(this.options.store.registerModule(e,ie),this._handleLocalEvents=!0)}},{key:"_validateStoreModule",value:function(e){var t=this.options.store;return!!t&&(t.state[e]&&t.unregisterModule(e),!0)}},{key:"_initReconnectOptions",value:function(){this.reconnectOptions={retryCount:1,maxReconnectAttempts:this.options.maxReconnectAttempts,reconnectionDelay:this.options.reconnectionDelay,minReconnectionDelay:this.options.reconnectionDelay,maxReconnectionDelay:3e5}}},{key:"_onConnect",value:function(){this._initReconnectDelays(),this.connected=!0,this.Logger.log(c.CONNECT,this.reconnectOptions)}},{key:"_initReconnectDelays",value:function(){this.reconnectOptions.retryCount=1;var e=this.reconnectOptions.minReconnectionDelay;this.reconnectOptions.reconnectionDelay=e,this.socket.io.reconnectionDelay(e),this.socket.io.reconnectionDelayMax(e)}},{key:"_onConnectError",value:function(e){this._retryConnection("next"),this.connected=!1,this.Logger.log(c.CONNECT_ERROR,e)}},{key:"_onError",value:function(e){this.Logger.log(c.ERROR,e)}},{key:"_onReconnectFailed",value:function(){this._retryConnection("next"),this.Logger.log(c.RECONNECT_FAILED,this.reconnectOptions)}},{key:"_onConnectTimeout",value:function(){this._retryConnection("next"),this.Logger.log(c.CONNECT_TIMEOUT,this.reconnectOptions)}},{key:"_onReconnectAttempt",value:function(){if(this.reconnectOptions.retryCount>=this.reconnectOptions.maxReconnectAttempts)this._retryConnection("next");else{if(this.reconnectOptions.reconnectionDelay<this.reconnectOptions.maxReconnectionDelay){var e=this.reconnectOptions.minReconnectionDelay*this.reconnectOptions.retryCount;this.reconnectOptions.reconnectionDelay=e,this.socket.io.reconnectionDelay(e),this.socket.io.reconnectionDelayMax(e)}this.reconnectOptions.retryCount++,this.Logger.log(c.RECONNECT_ATTEMPT,this.reconnectOptions)}}},{key:"_onDisconnect",value:function(e){this.connected=!1,this.Logger.log(c.DISCONNECT,e),this._connect("next")}},{key:"_onKeepAlive",value:function(e){("object"!==t(e)||0===e.errorCode)&&e&&this.connected?(this.Logger.log(c.KEEP_ALIVE_RESPONSE),this._lastEventTimestamp=(new Date).getTime()):this._initSocketConnection()}},{key:"_onLoginResponse",value:function(e){0===e.ErrorCode&&e.Token&&!this.options.token&&(this.options.token=e.Token)}},{key:"_parsePacket",value:function(e){return e.data?{name:e.data[0],data:e.data[1]}:{}}},{key:"_connect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=null;if("default"===e)t=this._findCurrentServer();else if("next"===e)t=this._findNextAvailableServer();else{if("prev"!==e)throw new Error("Incorrect 'server' parameter passed to connect function ".concat(e,". Should be 'default' or 'next'"));t=this._findMaxPriorityServer()}t||(this.server=this._findCurrentServer()),this._initSocketConnection(),this._initSocketEvents(),this._initKeepAlive(),this._initReconnectDelays(),this.login()}},{key:"_checkInit",value:function(){if(!this.connectionEstablished)throw new Error('Make sure you call "sdk.init()" before doing other operations.')}},{key:"_initSocketConnection",value:function(){var t=this.server.Domain,n=this.options.protocol,i="".concat(n,"://").concat(t);this.Logger.log("Connecting to..",i),this.closeAllConnections(),this.socket=e(i,Object.assign({},this.options,{query:{token:this.options.token},debug:!1})),re.push(this.socket),this.connectionEstablished=!0}},{key:"_initSocketEvents",value:function(){this.socket.onevent=this._onEvent.bind(this)}},{key:"_initKeepAlive",value:function(){var e=this;this.keepAliveInterval&&clearInterval(this.keepAliveInterval),this.idleInterval&&clearInterval(this.idleInterval),this.keepAliveInterval=setInterval(function(){var t=(new Date).getTime(),n=2*e.options.keepAliveTimeout;t>e.getLastEventTimestamp()+n?e._connect("next"):e.socket?t>e.getLastEventTimestamp()+e.options.keepAliveTimeout&&e.emit(c.KEEP_ALIVE,e.options.token):e._initSocketConnection()},this.options.keepAliveTimeout),this.idleInterval=setInterval(function(){e.reSync(!1)},this.options.idleInterval)}},{key:"_findCurrentServer",value:function(){var e=null;if(this.servers.length&&(e=this.servers[0]),this.server=e,!this.server)throw new Error("Could not find any server to establish connection with");return this.server}},{key:"_findNextAvailableServer",value:function(){var e=this.server.Priority;if(this.Logger.log("Failover -> Trying to find another server"),e>0){var t=e-1,n=this.servers.find(function(e){return e.Priority===t});if(!n&&!(n=this._findMaxPriorityServer()))return;if(this.server.Domain!==n.Domain)return this.server=n,this.server;this.Logger.log("Failover -> Found new server. Connecting to it...",this.server)}return null}},{key:"_findMaxPriorityServer",value:function(){this.Logger.log("Fallback -> Trying to find previous server","_findMaxPriorityServer");var e,t,n,i=(e=this.servers,t=null,n=-1,e.forEach(function(e){e.Priority>n&&(n=e.Priority,t=e)}),t);return this.server&&i.Domain!==this.server.Domain?(this.server=i,this.Logger.log("Fallback -> Trying to find previous server",this.server),this.server):null}},{key:"_getServers",value:async function(){if("static"===this.options.serverFetchStrategy&&this.argumentOptions.servers&&Array.isArray(this.argumentOptions.servers)&&this.argumentOptions.servers.length>1)this.servers=this.argumentOptions.servers;else try{var e={};this.options.serverType&&(e.type=this.options.serverType);var t=await fetch("".concat(this.options.url,"/").concat(this.options.token),e);this.servers=await t.json()}catch(e){this.servers=this.argumentOptions.servers||a}}},{key:"_onEvent",value:function(e){var t,n=this;if(e.data){var i=this._parsePacket(e);this.Logger.log("New event -> ".concat(i.name),i),this._lastEventTimestamp=(new Date).getTime(),this._listenersMap.forEach(function(e,t){"*"===t?e(i):i.name===t&&e(i)});var o=(r(t={},c.RECONNECT_ATTEMPT,this._onReconnectAttempt),r(t,c.RECONNECT_FAILED,this._onReconnectFailed),r(t,c.CONNECT,this._onConnect),r(t,c.DISCONNECT,this._onDisconnect),r(t,c.ERROR,this._onError),r(t,c.CONNECT_ERROR,this._onConnectError),r(t,c.CONNECT_TIMEOUT,this._onConnectTimeout),r(t,c.KEEP_ALIVE_RESPONSE,this._onKeepAlive),r(t,c.LOGIN_RESPONSE,this._onLoginResponse),r(t,c.EXTENSION_UPDATED,this._retryConnection),r(t,c.QUEUES_UPDATED,this._retryConnection),r(t,c.DIALERS_UPDATED,this._retryConnection),r(t,c.LOGIN_STATUS,function(){n.connected||n._onConnect()}),t)[i.name];o&&"function"==typeof o&&o.call(this,i.data),this._handleLocalEvents&&K(Object.assign({eventData:i},this.options))}}},{key:"init",value:async function(){return!!this.connectionEstablished||(this.socket&&this.emit(c.CLOSE),await this._getServers(),this._connect(),this._initReconnectDelays(),!0)}},{key:"setToken",value:async function(e){this.options.token=e,this.disconnect(),await this.init()}},{key:"closeAllConnections",value:function(){re.forEach(function(e){e.close(),e.disconnect()}),re=[],this.socket&&(this.socket.disconnect(),this.socket=null)}},{key:"disconnect",value:function(){this._listenersMap=new Map,this.closeAllConnections()}},{key:"on",value:function(e,t){this._listenersMap.set(e,t),this._checkInit()}},{key:"emit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._checkInit(),this.Logger.log("EMIT -> ".concat(e),t),this.socket.emit(e,t)}},{key:"reSync",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.emit(c.RESYNC,{cache:e})}},{key:"setMonitorUrl",value:async function(e){var t=this.options.url,n=this.options.serverFetchStrategy;try{if(!e)return;this.options.url=e,this.options.serverFetchStrategy="remote",await this.init()}catch(e){this._onError(e),this.options.url=t,this.options.serverFetchStrategy=n,await this.init()}}},{key:"login",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login";if(this._lastLoginTimestamp+1e3>(new Date).getTime())return Promise.resolve();var n=this;this._checkInit();var i=!1;return this._lastLoginTimestamp=(new Date).getTime(),new Promise(function(o,r){e.on(c.LOGIN_STATUS,function(e){n.onLogin&&n.onLogin(e),i=!0,o(e)}),e.socket.on(c.ERROR,function(e){n.onError&&n.onError(e),!1===i&&r(e)}),"login"===t?e.emit(c.LOGIN,{token:e.options.token}):"user"===t?e.emit(c.LOGIN_USER,{user:e.options.user,password:e.options.password}):"code"===t?e.emit(c.LOGIN_CODE,{code:e.options.code,orgCode:e.options.organizationCode}):"account"===t&&e.emit(c.LOGIN_USER,{user:e.options.user,password:e.options.password})})}}]),i}();return"undefined"!=typeof window&&(window.EventsSDK=ce),ce});
//# sourceMappingURL=voicenter-events-sdk.umd.js.map
