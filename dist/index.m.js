function t(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,"symbol"==typeof(i=function(t,r){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,"string");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e.key))?i:String(i),e)}var i}function r(r,n,e){return n&&t(r.prototype,n),e&&t(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function n(){return n=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},n.apply(this,arguments)}function e(t){return e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},e(t)}function i(t,r){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},i(t,r)}function o(t,r,n){return o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,r,n){var e=[null];e.push.apply(e,r);var o=new(Function.bind.apply(t,e));return n&&i(o,n.prototype),o},o.apply(null,arguments)}function u(t){var r="function"==typeof Map?new Map:void 0;return u=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return o(t,arguments,e(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},u(t)}var f=String.prototype.replace,a=/%20/g,c="RFC3986",l={default:c,formatters:{RFC1738:function(t){return f.call(t,a,"+")},RFC3986:function(t){return String(t)}},RFC1738:"RFC1738",RFC3986:c},s=Object.prototype.hasOwnProperty,v=Array.isArray,p=function(){for(var t=[],r=0;r<256;++r)t.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return t}(),y=function(t,r){for(var n=r&&r.plainObjects?Object.create(null):{},e=0;e<t.length;++e)void 0!==t[e]&&(n[e]=t[e]);return n},d={arrayToObject:y,assign:function(t,r){return Object.keys(r).reduce(function(t,n){return t[n]=r[n],t},t)},combine:function(t,r){return[].concat(t,r)},compact:function(t){for(var r=[{obj:{o:t},prop:"o"}],n=[],e=0;e<r.length;++e)for(var i=r[e],o=i.obj[i.prop],u=Object.keys(o),f=0;f<u.length;++f){var a=u[f],c=o[a];"object"==typeof c&&null!==c&&-1===n.indexOf(c)&&(r.push({obj:o,prop:a}),n.push(c))}return function(t){for(;t.length>1;){var r=t.pop(),n=r.obj[r.prop];if(v(n)){for(var e=[],i=0;i<n.length;++i)void 0!==n[i]&&e.push(n[i]);r.obj[r.prop]=e}}}(r),t},decode:function(t,r,n){var e=t.replace(/\+/g," ");if("iso-8859-1"===n)return e.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(e)}catch(t){return e}},encode:function(t,r,n,e,i){if(0===t.length)return t;var o=t;if("symbol"==typeof t?o=Symbol.prototype.toString.call(t):"string"!=typeof t&&(o=String(t)),"iso-8859-1"===n)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var u="",f=0;f<o.length;++f){var a=o.charCodeAt(f);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||i===l.RFC1738&&(40===a||41===a)?u+=o.charAt(f):a<128?u+=p[a]:a<2048?u+=p[192|a>>6]+p[128|63&a]:a<55296||a>=57344?u+=p[224|a>>12]+p[128|a>>6&63]+p[128|63&a]:(a=65536+((1023&a)<<10|1023&o.charCodeAt(f+=1)),u+=p[240|a>>18]+p[128|a>>12&63]+p[128|a>>6&63]+p[128|63&a])}return u},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,r){if(v(t)){for(var n=[],e=0;e<t.length;e+=1)n.push(r(t[e]));return n}return r(t)},merge:function t(r,n,e){if(!n)return r;if("object"!=typeof n){if(v(r))r.push(n);else{if(!r||"object"!=typeof r)return[r,n];(e&&(e.plainObjects||e.allowPrototypes)||!s.call(Object.prototype,n))&&(r[n]=!0)}return r}if(!r||"object"!=typeof r)return[r].concat(n);var i=r;return v(r)&&!v(n)&&(i=y(r,e)),v(r)&&v(n)?(n.forEach(function(n,i){if(s.call(r,i)){var o=r[i];o&&"object"==typeof o&&n&&"object"==typeof n?r[i]=t(o,n,e):r.push(n)}else r[i]=n}),r):Object.keys(n).reduce(function(r,i){var o=n[i];return r[i]=s.call(r,i)?t(r[i],o,e):o,r},i)}},b=Object.prototype.hasOwnProperty,h={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,r){return t+"["+r+"]"},repeat:function(t){return t}},g=Array.isArray,m=String.prototype.split,j=Array.prototype.push,w=function(t,r){j.apply(t,g(r)?r:[r])},O=Date.prototype.toISOString,E=l.default,R={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:d.encode,encodeValuesOnly:!1,format:E,formatter:l.formatters[E],indices:!1,serializeDate:function(t){return O.call(t)},skipNulls:!1,strictNullHandling:!1},S=function t(r,n,e,i,o,u,f,a,c,l,s,v,p,y){var b,h=r;if("function"==typeof f?h=f(n,h):h instanceof Date?h=l(h):"comma"===e&&g(h)&&(h=d.maybeMap(h,function(t){return t instanceof Date?l(t):t})),null===h){if(i)return u&&!p?u(n,R.encoder,y,"key",s):n;h=""}if("string"==typeof(b=h)||"number"==typeof b||"boolean"==typeof b||"symbol"==typeof b||"bigint"==typeof b||d.isBuffer(h)){if(u){var j=p?n:u(n,R.encoder,y,"key",s);if("comma"===e&&p){for(var O=m.call(String(h),","),E="",S=0;S<O.length;++S)E+=(0===S?"":",")+v(u(O[S],R.encoder,y,"value",s));return[v(j)+"="+E]}return[v(j)+"="+v(u(h,R.encoder,y,"value",s))]}return[v(n)+"="+v(String(h))]}var k,T=[];if(void 0===h)return T;if("comma"===e&&g(h))k=[{value:h.length>0?h.join(",")||null:void 0}];else if(g(f))k=f;else{var x=Object.keys(h);k=a?x.sort(a):x}for(var N=0;N<k.length;++N){var C=k[N],D="object"==typeof C&&void 0!==C.value?C.value:h[C];if(!o||null!==D){var $=g(h)?"function"==typeof e?e(n,C):n:n+(c?"."+C:"["+C+"]");w(T,t(D,$,e,i,o,u,f,a,c,l,s,v,p,y))}}return T},k=Object.prototype.hasOwnProperty,T=Array.isArray,x={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:d.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},N=function(t){return t.replace(/&#(\d+);/g,function(t,r){return String.fromCharCode(parseInt(r,10))})},C=function(t,r){return t&&"string"==typeof t&&r.comma&&t.indexOf(",")>-1?t.split(","):t},D=function(t,r,n,e){if(t){var i=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/g,u=n.depth>0&&/(\[[^[\]]*])/.exec(i),f=u?i.slice(0,u.index):i,a=[];if(f){if(!n.plainObjects&&k.call(Object.prototype,f)&&!n.allowPrototypes)return;a.push(f)}for(var c=0;n.depth>0&&null!==(u=o.exec(i))&&c<n.depth;){if(c+=1,!n.plainObjects&&k.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;a.push(u[1])}return u&&a.push("["+i.slice(u.index)+"]"),function(t,r,n,e){for(var i=e?r:C(r,n),o=t.length-1;o>=0;--o){var u,f=t[o];if("[]"===f&&n.parseArrays)u=[].concat(i);else{u=n.plainObjects?Object.create(null):{};var a="["===f.charAt(0)&&"]"===f.charAt(f.length-1)?f.slice(1,-1):f,c=parseInt(a,10);n.parseArrays||""!==a?!isNaN(c)&&f!==a&&String(c)===a&&c>=0&&n.parseArrays&&c<=n.arrayLimit?(u=[])[c]=i:"__proto__"!==a&&(u[a]=i):u={0:i}}i=u}return i}(a,r,n,e)}},$=function(t,r){var n=function(t){if(!t)return x;if(null!=t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");return{allowDots:void 0===t.allowDots?x.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:x.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:x.arrayLimit,charset:void 0===t.charset?x.charset:t.charset,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:x.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:x.comma,decoder:"function"==typeof t.decoder?t.decoder:x.decoder,delimiter:"string"==typeof t.delimiter||d.isRegExp(t.delimiter)?t.delimiter:x.delimiter,depth:"number"==typeof t.depth||!1===t.depth?+t.depth:x.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:x.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:x.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:x.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:x.strictNullHandling}}(r);if(""===t||null==t)return n.plainObjects?Object.create(null):{};for(var e="string"==typeof t?function(t,r){var n,e={},i=(r.ignoreQueryPrefix?t.replace(/^\?/,""):t).split(r.delimiter,Infinity===r.parameterLimit?void 0:r.parameterLimit),o=-1,u=r.charset;if(r.charsetSentinel)for(n=0;n<i.length;++n)0===i[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===i[n]?u="utf-8":"utf8=%26%2310003%3B"===i[n]&&(u="iso-8859-1"),o=n,n=i.length);for(n=0;n<i.length;++n)if(n!==o){var f,a,c=i[n],l=c.indexOf("]="),s=-1===l?c.indexOf("="):l+1;-1===s?(f=r.decoder(c,x.decoder,u,"key"),a=r.strictNullHandling?null:""):(f=r.decoder(c.slice(0,s),x.decoder,u,"key"),a=d.maybeMap(C(c.slice(s+1),r),function(t){return r.decoder(t,x.decoder,u,"value")})),a&&r.interpretNumericEntities&&"iso-8859-1"===u&&(a=N(a)),c.indexOf("[]=")>-1&&(a=T(a)?[a]:a),e[f]=k.call(e,f)?d.combine(e[f],a):a}return e}(t,n):t,i=n.plainObjects?Object.create(null):{},o=Object.keys(e),u=0;u<o.length;++u){var f=o[u],a=D(f,e[f],n,"string"==typeof t);i=d.merge(i,a,n)}return d.compact(i)},F=/*#__PURE__*/function(){function t(t,r,n){var e,i;this.name=t,this.definition=r,this.bindings=null!=(e=r.bindings)?e:{},this.wheres=null!=(i=r.wheres)?i:{},this.config=n}var n=t.prototype;return n.matchesUrl=function(t){var r=this;if(!this.definition.methods.includes("GET"))return!1;var n=this.template.replace(/(\/?){([^}?]*)(\??)}/g,function(t,n,e,i){var o,u="(?<"+e+">"+((null==(o=r.wheres[e])?void 0:o.replace(/(^\^)|(\$$)/g,""))||"[^/?]+")+")";return i?"("+n+u+")?":""+n+u}).replace(/^\w+:\/\//,""),e=t.replace(/^\w+:\/\//,"").split("?"),i=e[0],o=e[1],u=new RegExp("^"+n+"/?$").exec(i);if(u){for(var f in u.groups)u.groups[f]="string"==typeof u.groups[f]?decodeURIComponent(u.groups[f]):u.groups[f];return{params:u.groups,query:$(o)}}return!1},n.compile=function(t){var r=this;return this.parameterSegments.length?this.template.replace(/{([^}?]+)(\??)}/g,function(n,e,i){var o,u;if(!i&&[null,void 0].includes(t[e]))throw new Error("Ziggy error: '"+e+"' parameter is required for route '"+r.name+"'.");if(r.wheres[e]&&!new RegExp("^"+(i?"("+r.wheres[e]+")?":r.wheres[e])+"$").test(null!=(u=t[e])?u:""))throw new Error("Ziggy error: '"+e+"' parameter does not match required format '"+r.wheres[e]+"' for route '"+r.name+"'.");return encodeURI(null!=(o=t[e])?o:"").replace(/%7C/g,"|").replace(/%25/g,"%").replace(/\$/g,"%24")}).replace(this.origin+"//",this.origin+"/").replace(/\/+$/,""):this.template},r(t,[{key:"template",get:function(){var t=(this.origin+"/"+this.definition.uri).replace(/\/+$/,"");return""===t?"/":t}},{key:"origin",get:function(){return this.config.absolute?this.definition.domain?""+this.config.url.match(/^\w+:\/\//)[0]+this.definition.domain+(this.config.port?":"+this.config.port:""):this.config.url:""}},{key:"parameterSegments",get:function(){var t,r;return null!=(t=null==(r=this.template.match(/{[^}?]+\??}/g))?void 0:r.map(function(t){return{name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)}}))?t:[]}}]),t}(),P=/*#__PURE__*/function(t){var e,o;function u(r,e,i,o){var u;if(void 0===i&&(i=!0),(u=t.call(this)||this).t=null!=o?o:"undefined"!=typeof Ziggy?Ziggy:null==globalThis?void 0:globalThis.Ziggy,u.t=n({},u.t,{absolute:i}),r){if(!u.t.routes[r])throw new Error("Ziggy error: route '"+r+"' is not in the route list.");u.i=new F(r,u.t.routes[r],u.t),u.u=u.l(e)}return u}o=t,(e=u).prototype=Object.create(o.prototype),e.prototype.constructor=e,i(e,o);var f=u.prototype;return f.toString=function(){var t=this,r=Object.keys(this.u).filter(function(r){return!t.i.parameterSegments.some(function(t){return t.name===r})}).filter(function(t){return"_query"!==t}).reduce(function(r,e){var i;return n({},r,((i={})[e]=t.u[e],i))},{});return this.i.compile(this.u)+function(t,r){var n,e=t,i=function(t){if(!t)return R;if(null!=t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var r=t.charset||R.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=l.default;if(void 0!==t.format){if(!b.call(l.formatters,t.format))throw new TypeError("Unknown format option provided.");n=t.format}var e=l.formatters[n],i=R.filter;return("function"==typeof t.filter||g(t.filter))&&(i=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:R.addQueryPrefix,allowDots:void 0===t.allowDots?R.allowDots:!!t.allowDots,charset:r,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:R.charsetSentinel,delimiter:void 0===t.delimiter?R.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:R.encode,encoder:"function"==typeof t.encoder?t.encoder:R.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:R.encodeValuesOnly,filter:i,format:n,formatter:e,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:R.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:R.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:R.strictNullHandling}}(r);"function"==typeof i.filter?e=(0,i.filter)("",e):g(i.filter)&&(n=i.filter);var o=[];if("object"!=typeof e||null===e)return"";var u=h[r&&r.arrayFormat in h?r.arrayFormat:r&&"indices"in r?r.indices?"indices":"repeat":"indices"];n||(n=Object.keys(e)),i.sort&&n.sort(i.sort);for(var f=0;f<n.length;++f){var a=n[f];i.skipNulls&&null===e[a]||w(o,S(e[a],a,u,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.format,i.formatter,i.encodeValuesOnly,i.charset))}var c=o.join(i.delimiter),s=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&(s+="iso-8859-1"===i.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),c.length>0?s+c:""}(n({},r,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:function(t,r){return"boolean"==typeof t?Number(t):r(t)}})},f.v=function(t){var r=this;t?this.t.absolute&&t.startsWith("/")&&(t=this.p().host+t):t=this.h();var e={},i=Object.entries(this.t.routes).find(function(n){return e=new F(n[0],n[1],r.t).matchesUrl(t)})||[void 0,void 0];return n({name:i[0]},e,{route:i[1]})},f.h=function(){var t=this.p(),r=t.pathname,n=t.search;return(this.t.absolute?t.host+r:r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+n},f.current=function(t,r){var e=this.v(),i=e.name,o=e.params,u=e.query,f=e.route;if(!t)return i;var a=new RegExp("^"+t.replace(/\./g,"\\.").replace(/\*/g,".*")+"$").test(i);if([null,void 0].includes(r)||!a)return a;var c=new F(i,f,this.t);r=this.l(r,c);var l=n({},o,u);return!(!Object.values(r).every(function(t){return!t})||Object.values(l).some(function(t){return void 0!==t}))||Object.entries(r).every(function(t){return l[t[0]]==t[1]})},f.p=function(){var t,r,n,e,i,o,u="undefined"!=typeof window?window.location:{},f=u.host,a=u.pathname,c=u.search;return{host:null!=(t=null==(r=this.t.location)?void 0:r.host)?t:void 0===f?"":f,pathname:null!=(n=null==(e=this.t.location)?void 0:e.pathname)?n:void 0===a?"":a,search:null!=(i=null==(o=this.t.location)?void 0:o.search)?i:void 0===c?"":c}},f.has=function(t){return Object.keys(this.t.routes).includes(t)},f.l=function(t,r){var e=this;void 0===t&&(t={}),void 0===r&&(r=this.i),null!=t||(t={}),t=["string","number"].includes(typeof t)?[t]:t;var i=r.parameterSegments.filter(function(t){return!e.t.defaults[t.name]});if(Array.isArray(t))t=t.reduce(function(t,r,e){var o,u;return n({},t,i[e]?((o={})[i[e].name]=r,o):"object"==typeof r?r:((u={})[r]="",u))},{});else if(1===i.length&&!t[i[0].name]&&(t.hasOwnProperty(Object.values(r.bindings)[0])||t.hasOwnProperty("id"))){var o;(o={})[i[0].name]=t,t=o}return n({},this.g(r),this.m(t,r))},f.g=function(t){var r=this;return t.parameterSegments.filter(function(t){return r.t.defaults[t.name]}).reduce(function(t,e,i){var o,u=e.name;return n({},t,((o={})[u]=r.t.defaults[u],o))},{})},f.m=function(t,r){var e=r.bindings,i=r.parameterSegments;return Object.entries(t).reduce(function(t,r){var o,u,f=r[0],a=r[1];if(!a||"object"!=typeof a||Array.isArray(a)||!i.some(function(t){return t.name===f}))return n({},t,((u={})[f]=a,u));if(!a.hasOwnProperty(e[f])){if(!a.hasOwnProperty("id"))throw new Error("Ziggy error: object passed as '"+f+"' parameter is missing route model binding key '"+e[f]+"'.");e[f]="id"}return n({},t,((o={})[f]=a[e[f]],o))},{})},f.valueOf=function(){return this.toString()},f.check=function(t){return this.has(t)},r(u,[{key:"params",get:function(){var t=this.v();return n({},t.params,t.query)}}]),u}(/*#__PURE__*/u(String));function Z(t,r,n,e){var i=new P(t,r,n,e);return t?i.toString():i}function A(t){if(!t&&!globalThis.Ziggy&&"undefined"==typeof Ziggy)throw new Error("Ziggy error: missing configuration. Ensure that a `Ziggy` variable is defined globally or pass a config object into `useRoute()`.");return function(r,n,e,i){return void 0===i&&(i=t),Z(r,n,e,i)}}export{Z as default,A as useRoute};
