!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("socket.io-client/socket.io")):"function"==typeof define&&define.amd?define(["socket.io-client/socket.io"],t):(e=e||self).VoicenterEventsSDK=t(e.io)}(this,function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e=e&&e.hasOwnProperty("default")?e.default:e;var s={LOGIN_STATUS:"loginStatus",LOGIN:"login",LOGIN_USER:"loginUser",LOGIN_CODE:"loginUserCode",LOGIN_ACCOUNT:"loginAccount",LOGIN_RESPONSE:"loginResponse",QUEUE_EVENT:"QueueEvent",QUEUES_UPDATED:"QueuesUpdated",DIALERS_UPDATED:"DialersUpdated",EXTENSION_EVENT:"ExtensionEvent",EXTENSION_UPDATED:"ExtensionsUpdated",ALL_EXTENSION_STATUS:"AllExtensionsStatus",CONNECT_ERROR:"connect_error",CONNECT_TIMEOUT:"connect_timeout",DISCONNECT:"disconnect",PONG:"pong",RECONNECT:"reconnect",RECONNECT_ATTEMPT:"reconnect_attempt",RESYNC:"resync",RECONNECTING:"reconnecting",RECONNECT_ERROR:"reconnect_error",RECONNECT_FAILED:"reconnect_failed",KEEP_ALIVE:"keepalive",KEEP_ALIVE_RESPONSE:"keepaliveResponse",CLOSE:"closeme",ERROR:"error"},c=[{URLID:59,Priority:5,Version:2,Domain:"monitor1.voicenter.co"},{URLID:3,Priority:4,Version:2,Domain:"monitor3.voicenter.co.il"},{URLID:4,Priority:3,Version:2,Domain:"monitor4.voicenter.co.il"},{URLID:11,Priority:2,Version:2,Domain:"monitor11.voicenter.co"},{URLID:5,Priority:0,Version:2,Domain:"monitor5.voicenter.co.il"}],a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this.debug=t.debug}return i(e,[{key:"_log",value:function(e,t){var n=t?"".concat(e,", %c Data -> ").concat(JSON.stringify(t)):"".concat(e),o=(new Date).toUTCString();console.log("%c ".concat(o,": %c ").concat(n),"color: #276749;","color: #4299e1;","color: #2c3e50;")}},{key:"_error",value:function(e,t){var n=t?"".concat(e,", Data -> ").concat(JSON.stringify(t)):"".concat(e),o=(new Date).toUTCString();console.error("".concat(o,": ").concat(n))}},{key:"log",value:function(e,t){this.debug&&(e&&!t?this._log(e):this._log(e,t))}},{key:"error",value:function(e,t){this.debug&&(e&&!t?this._error(e):this._error(e,t))}}]),e}();var l=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h="object"==typeof u&&u&&u.Object===Object&&u,v="object"==typeof self&&self&&self.Object===Object&&self,f=h||v||Function("return this")(),p=function(){return f.Date.now()},y=f.Symbol,E=Object.prototype,g=E.hasOwnProperty,d=E.toString,_=y?y.toStringTag:void 0;var O=function(e){var t=g.call(e,_),n=e[_];try{e[_]=void 0;var o=!0}catch(e){}var i=d.call(e);return o&&(t?e[_]=n:delete e[_]),i},m=Object.prototype.toString;var k=function(e){return m.call(e)},T="[object Null]",C="[object Undefined]",N=y?y.toStringTag:void 0;var S=function(e){return null==e?void 0===e?C:T:N&&N in Object(e)?O(e):k(e)};var R=function(e){return null!=e&&"object"==typeof e},D="[object Symbol]";var b=function(e){return"symbol"==typeof e||R(e)&&S(e)==D},A=NaN,I=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,P=/^0o[0-7]+$/i,U=parseInt;var x=function(e){if("number"==typeof e)return e;if(b(e))return A;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(I,"");var n=w.test(e);return n||P.test(e)?U(e.slice(2),n?2:8):L.test(e)?A:+e},M="Expected a function",j=Math.max,F=Math.min;var G=function(e,t,n){var o,i,r,s,c,a,u=0,h=!1,v=!1,f=!0;if("function"!=typeof e)throw new TypeError(M);function y(t){var n=o,r=i;return o=i=void 0,u=t,s=e.apply(r,n)}function E(e){var n=e-a;return void 0===a||n>=t||n<0||v&&e-u>=r}function g(){var e=p();if(E(e))return d(e);c=setTimeout(g,function(e){var n=t-(e-a);return v?F(n,r-(e-u)):n}(e))}function d(e){return c=void 0,f&&o?y(e):(o=i=void 0,s)}function _(){var e=p(),n=E(e);if(o=arguments,i=this,a=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(g,t),h?y(e):s}(a);if(v)return clearTimeout(c),c=setTimeout(g,t),y(a)}return void 0===c&&(c=setTimeout(g,t)),s}return t=x(t)||0,l(n)&&(h=!!n.leading,r=(v="maxWait"in n)?j(x(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),_.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=a=i=c=void 0},_.flush=function(){return void 0===c?s:d(p())},_};var K={url:"https://monitorapi.voicenter.co.il/monitorAPI/getMonitorUrls",servers:c,token:null,forceNew:!0,reconnectionDelay:1e4,reconnectionDelayMax:1e4,maxReconnectAttempts:2,timeout:1e4,keepAliveTimeout:6e4,idleTimeout:9e5,protocol:"https",transports:["websocket"],upgrade:!1,serverFetchStrategy:"remote",serverType:null},V=[],Q=new Map,X=function(){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n(this,o),this.options=Object.assign({},K,{},e),this.argumentOptions=Object.assign({},e),!this.options.token)throw new Error("A token property should be provided");this.Logger=new a(this.options),this.servers=[],this.server=null,this.socket=null,this.connected=!1,this.connectionEstablished=!1,this.lastKeepAliveTimestamp=(new Date).getTime(),this._initReconnectOptions(),this._listenersMap=Q,this._retryConnection=G(this._connect.bind(this),this.reconnectOptions.reconnectionDelay,{leading:!0,trailing:!1})}return i(o,[{key:"_initReconnectOptions",value:function(){this.reconnectOptions={retryCount:1,maxReconnectAttempts:this.options.maxReconnectAttempts,reconnectionDelay:this.options.reconnectionDelay,minReconnectionDelay:this.options.reconnectionDelay,maxReconnectionDelay:3e5}}},{key:"_onConnect",value:function(){this._initReconnectDelays(),this.connected=!0,this.Logger.log(s.CONNECT,this.reconnectOptions)}},{key:"_initReconnectDelays",value:function(){this.reconnectOptions.retryCount=1;var e=this.reconnectOptions.minReconnectionDelay;this.reconnectOptions.reconnectionDelay=e,this.socket.io.reconnectionDelay(e),this.socket.io.reconnectionDelayMax(e)}},{key:"_onConnectError",value:function(e){this._retryConnection("next"),this.connected=!1,this.Logger.log(s.CONNECT_ERROR,e)}},{key:"_onError",value:function(e){this.Logger.log(s.ERROR,e)}},{key:"_onReconnectFailed",value:function(){this._retryConnection("next"),this.Logger.log(s.RECONNECT_FAILED,this.reconnectOptions)}},{key:"_onConnectTimeout",value:function(){this._retryConnection("next"),this.Logger.log(s.CONNECT_TIMEOUT,this.reconnectOptions)}},{key:"_onReconnectAttempt",value:function(){if(this.reconnectOptions.retryCount>=this.reconnectOptions.maxReconnectAttempts)this._retryConnection("next");else{if(this.reconnectOptions.reconnectionDelay<this.reconnectOptions.maxReconnectionDelay){var e=this.reconnectOptions.minReconnectionDelay*this.reconnectOptions.retryCount;this.reconnectOptions.reconnectionDelay=e,this.socket.io.reconnectionDelay(e),this.socket.io.reconnectionDelayMax(e)}this.reconnectOptions.retryCount++,this.Logger.log(s.RECONNECT_ATTEMPT,this.reconnectOptions)}}},{key:"_onDisconnect",value:function(e){this.connected=!1,this.Logger.log(s.DISCONNECT,e),this._connect("next")}},{key:"_onKeepAlive",value:function(e){("object"!==t(e)||0===e.errorCode)&&e&&this.connected?(this.Logger.log(s.KEEP_ALIVE_RESPONSE),this.lastKeepAliveTimestamp=(new Date).getTime()):this._initSocketConnection()}},{key:"_onLoginResponse",value:function(e){0===e.ErrorCode&&e.Token&&!this.options.token&&(this.options.token=e.Token)}},{key:"_onPong",value:function(e){e&&e>this.options.idleTimeout&&this._retryConnection("next")}},{key:"_parsePacket",value:function(e){return e.data?{name:e.data[0],data:e.data[1]}:{}}},{key:"_connect",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=null;if("default"===e)t=this._findCurrentServer();else if("next"===e)t=this._findNextAvailableServer();else{if("prev"!==e)throw new Error("Incorrect 'server' parameter passed to connect function ".concat(e,". Should be 'default' or 'next'"));t=this._findMaxPriorityServer()}t||(this.server=this._findCurrentServer()),this._initSocketConnection(),this._initSocketEvents(),this._initKeepAlive(),this._initReconnectDelays(),"default"!==e?this.login():this.reSync(!1)}},{key:"_checkInit",value:function(){if(!this.connectionEstablished)throw new Error('Make sure you call "sdk.init()" before doing other operations.')}},{key:"_initSocketConnection",value:function(){var t=this.server.Domain,n=this.options.protocol,o="".concat(n,"://").concat(t);this.Logger.log("Connecting to..",o),this.closeAllConnections(),this.socket=e(o,Object.assign({},this.options,{debug:!1})),V.push(this.socket),this.connectionEstablished=!0}},{key:"_initSocketEvents",value:function(){this.socket.onevent=this._onEvent.bind(this)}},{key:"_initKeepAlive",value:function(){var e=this;this.keepAliveInterval&&clearInterval(this.keepAliveInterval),this.keepAliveInterval=setInterval(function(){var t=(new Date).getTime(),n=3*e.options.keepAliveTimeout;t>e.lastKeepAliveTimestamp+n&&e._connect("next"),e.socket?e.emit(s.KEEP_ALIVE,e.options.token):e._initSocketConnection()},this.options.keepAliveTimeout)}},{key:"_findCurrentServer",value:function(){var e=null;if(this.servers.length&&(e=this.servers[0]),this.server=e,!this.server)throw new Error("Could not find any server to establish connection with");return this.server}},{key:"_findNextAvailableServer",value:function(){var e=this.server.Priority;if(this.Logger.log("Failover -> Trying to find another server"),e>0){var t=e-1,n=this.servers.find(function(e){return e.Priority===t});if(!n&&!(n=this._findMaxPriorityServer()))return;if(this.server.Domain!==n.Domain)return this.server=n,this.server;this.Logger.log("Failover -> Found new server. Connecting to it...",this.server)}return null}},{key:"_findMaxPriorityServer",value:function(){this.Logger.log("Fallback -> Trying to find previous server","_findMaxPriorityServer");var e,t,n,o=(e=this.servers,t=null,n=-1,e.forEach(function(e){e.Priority>n&&(n=e.Priority,t=e)}),t);return this.server&&o.Domain!==this.server.Domain?(this.server=o,this.Logger.log("Fallback -> Trying to find previous server",this.server),this.server):null}},{key:"_getServers",value:async function(){if("static"===this.options.serverFetchStrategy&&this.argumentOptions.servers&&Array.isArray(this.argumentOptions.servers)&&this.argumentOptions.servers.length>1)this.servers=this.argumentOptions.servers;else try{var e={};this.options.serverType&&(e.type=this.options.serverType);var t=await fetch("".concat(this.options.url,"/").concat(this.options.token),e);this.servers=await t.json()}catch(e){this.servers=this.argumentOptions.servers||c}}},{key:"_onEvent",value:function(e){var t,n=this;if(e.data){var o=this._parsePacket(e);this.Logger.log("New event -> ".concat(o.name),o),this._listenersMap.forEach(function(e,t){"*"===t?e(o):o.name===t&&e(o)});var i=(r(t={},s.RECONNECT_ATTEMPT,this._onReconnectAttempt),r(t,s.RECONNECT_FAILED,this._onReconnectFailed),r(t,s.CONNECT,this._onConnect),r(t,s.DISCONNECT,this._onDisconnect),r(t,s.ERROR,this._onError),r(t,s.CONNECT_ERROR,this._onConnectError),r(t,s.CONNECT_TIMEOUT,this._onConnectTimeout),r(t,s.KEEP_ALIVE_RESPONSE,this._onKeepAlive),r(t,s.LOGIN_RESPONSE,this._onLoginResponse),r(t,s.PONG,this._onPong),r(t,s.EXTENSION_UPDATED,this._retryConnection),r(t,s.QUEUES_UPDATED,this._retryConnection),r(t,s.DIALERS_UPDATED,this._retryConnection),r(t,s.LOGIN_STATUS,function(){n.connected||n._onConnect()}),t)[o.name];i&&"function"==typeof i&&i.call(this,o.data)}}},{key:"init",value:async function(){return!!this.connectionEstablished||(this.socket&&this.emit(s.CLOSE),await this._getServers(),this._connect(),this._initReconnectDelays(),!0)}},{key:"setToken",value:async function(e){this.options.token=e,this.disconnect(),await this.init()}},{key:"closeAllConnections",value:function(){V.forEach(function(e){e.close(),e.disconnect()}),V=[],this.socket&&(this.socket.disconnect(),this.socket=null)}},{key:"disconnect",value:function(){this._listenersMap=new Map,this.closeAllConnections()}},{key:"on",value:function(e,t){this._listenersMap.set(e,t),this._checkInit()}},{key:"emit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._checkInit(),this.Logger.log("EMIT -> ".concat(e),t),this.socket.emit(e,t)}},{key:"reSync",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.emit(s.RESYNC,{cache:e})}},{key:"setMonitorUrl",value:async function(e){var t=this.options.url,n=this.options.serverFetchStrategy;try{if(!e)return;this.options.url=e,this.options.serverFetchStrategy="remote",await this.init()}catch(e){this._onError(e),this.options.url=t,this.options.serverFetchStrategy=n,await this.init()}}},{key:"login",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login",n=this;this._checkInit();var o=!1;return new Promise(function(i,r){e.on(s.LOGIN_STATUS,function(e){n.onLogin&&n.onLogin(e),o=!0,i(e)}),e.socket.on(s.ERROR,function(e){n.onError&&n.onError(e),!1===o&&r(e)}),"login"===t?e.emit(s.LOGIN,{token:e.options.token}):"user"===t?e.emit(s.LOGIN_USER,{user:e.options.user,password:e.options.password}):"code"===t?e.emit(s.LOGIN_CODE,{code:e.options.code,orgCode:e.options.organizationCode}):"account"===t&&e.emit(s.LOGIN_USER,{user:e.options.user,password:e.options.password})})}}]),o}();return"undefined"!=typeof window&&(window.EventsSDK=X),X});
//# sourceMappingURL=voicenter-events-sdk.umd.js.map
