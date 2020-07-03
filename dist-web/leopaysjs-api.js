var leopaysjs_api=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=70)}({7:function(e,t,r){"use strict";var n=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o},i=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(n(arguments[t]));return e},a=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(8).RIPEMD160.hash,s="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var c=function(){for(var e=Array(256).fill(-1),t=0;t<s.length;++t)e[s.charCodeAt(t)]=t;return e}();var l,f=function(){for(var e=Array(256).fill(-1),t=0;t<u.length;++t)e[u.charCodeAt(t)]=t;return e["=".charCodeAt(0)]=0,e}();function h(e){return 0!=(128&e[e.length-1])}function p(e){for(var t=1,r=0;r<e.length;++r){var n=(255&~e[r])+t;e[r]=n,t=n>>8}}function y(e,t){for(var r=new Uint8Array(e),n=0;n<t.length;++n){var i=t.charCodeAt(n);if(i<"0".charCodeAt(0)||i>"9".charCodeAt(0))throw new Error("invalid number");for(var a=i-"0".charCodeAt(0),o=0;o<e;++o){var s=10*r[o]+a;r[o]=s,a=s>>8}if(a)throw new Error("number is out of range")}return r}function d(e,t){void 0===t&&(t=1);for(var r=Array(t).fill("0".charCodeAt(0)),n=e.length-1;n>=0;--n){for(var a=e[n],o=0;o<r.length;++o){var s=(r[o]-"0".charCodeAt(0)<<8)+a;r[o]="0".charCodeAt(0)+s%10,a=s/10|0}for(;a;)r.push("0".charCodeAt(0)+a%10),a=a/10|0}return r.reverse(),String.fromCharCode.apply(String,i(r))}function g(e,t){for(var r=new Uint8Array(e),n=0;n<t.length;++n){var i=c[t.charCodeAt(n)];if(i<0)throw new Error("invalid base-58 value");for(var a=0;a<e;++a){var o=58*r[a]+i;r[a]=o,i=o>>8}if(i)throw new Error("base-58 value is out of range")}return r.reverse(),r}function m(e,t){var r,n,o,u;void 0===t&&(t=1);var l=[];try{for(var f=a(e),h=f.next();!h.done;h=f.next()){for(var p=h.value,y=0;y<l.length;++y){var d=(c[l[y]]<<8)+p;l[y]=s.charCodeAt(d%58),p=d/58|0}for(;p;)l.push(s.charCodeAt(p%58)),p=p/58|0}}catch(e){r={error:e}}finally{try{h&&!h.done&&(n=f.return)&&n.call(f)}finally{if(r)throw r.error}}try{for(var g=a(e),m=g.next();!m.done;m=g.next()){if(m.value)break;l.push("1".charCodeAt(0))}}catch(e){o={error:e}}finally{try{m&&!m.done&&(u=g.return)&&u.call(g)}finally{if(o)throw o.error}}return l.reverse(),String.fromCharCode.apply(String,i(l))}function v(e,t){for(var r=new Uint8Array(e.length+t.length),n=0;n<e.length;++n)r[n]=e[n];for(n=0;n<t.length;++n)r[e.length+n]=t.charCodeAt(n);return o(r)}function b(e,t,r,n){var i=g(r+4,e),a={type:t,data:new Uint8Array(i.buffer,0,r)},o=new Uint8Array(v(a.data,n));if(o[0]!==i[r+0]||o[1]!==i[r+1]||o[2]!==i[r+2]||o[3]!==i[r+3])throw new Error("checksum doesn't match");return a}function w(e,t,r){for(var n=new Uint8Array(v(e.data,t)),i=new Uint8Array(e.data.length+4),a=0;a<e.data.length;++a)i[a]=e.data[a];for(a=0;a<4;++a)i[a+e.data.length]=n[a];return r+m(i)}function _(e){if("string"!=typeof e)throw new Error("expected string containing public key");if("LPC"===e.substr(0,3)){for(var r=g(t.publicKeyDataSize+4,e.substr(3)),n={type:l.k1,data:new Uint8Array(t.publicKeyDataSize)},i=0;i<t.publicKeyDataSize;++i)n.data[i]=r[i];var a=new Uint8Array(o(n.data));if(a[0]!==r[t.publicKeyDataSize]||a[1]!==r[34]||a[2]!==r[35]||a[3]!==r[36])throw new Error("checksum doesn't match");return n}if("PUB_K1_"===e.substr(0,7))return b(e.substr(7),l.k1,t.publicKeyDataSize,"K1");if("PUB_R1_"===e.substr(0,7))return b(e.substr(7),l.r1,t.publicKeyDataSize,"R1");throw new Error("unrecognized public key format")}function A(e){if(e.type===l.k1&&e.data.length===t.publicKeyDataSize)return w(e,"K1","PUB_K1_");if(e.type===l.r1&&e.data.length===t.publicKeyDataSize)return w(e,"R1","PUB_R1_");throw new Error("unrecognized public key format")}function z(e){return"LPC"===e.substr(0,3)?A(_(e)):e}t.isNegative=h,t.negate=p,t.decimalToBinary=y,t.signedDecimalToBinary=function(e,t){var r="-"===t[0];r&&(t=t.substr(1));var n=y(e,t);if(r){if(p(n),!h(n))throw new Error("number is out of range")}else if(h(n))throw new Error("number is out of range");return n},t.binaryToDecimal=d,t.signedBinaryToDecimal=function(e,t){if(void 0===t&&(t=1),h(e)){var r=e.slice();return p(r),"-"+d(r,t)}return d(e,t)},t.base58ToBinary=g,t.binaryToBase58=m,t.base64ToBinary=function(e){var t=e.length;if(1==(3&t)&&"="===e[t-1]&&(t-=1),0!=(3&t))throw new Error("base-64 value is not padded correctly");var r=t>>2,n=3*r;t>0&&"="===e[t-1]&&("="===e[t-2]?n-=2:n-=1);for(var i=new Uint8Array(n),a=0;a<r;++a){var o=f[e.charCodeAt(4*a+0)],s=f[e.charCodeAt(4*a+1)],u=f[e.charCodeAt(4*a+2)],c=f[e.charCodeAt(4*a+3)];i[3*a+0]=o<<2|s>>4,3*a+1<n&&(i[3*a+1]=(15&s)<<4|u>>2),3*a+2<n&&(i[3*a+2]=(3&u)<<6|c)}return i},function(e){e[e.k1=0]="k1",e[e.r1=1]="r1"}(l=t.KeyType||(t.KeyType={})),t.publicKeyDataSize=33,t.privateKeyDataSize=32,t.signatureDataSize=65,t.stringToPublicKey=_,t.publicKeyToString=A,t.convertLegacyPublicKey=z,t.convertLegacyPublicKeys=function(e){return e.map(z)},t.stringToPrivateKey=function(e){if("string"!=typeof e)throw new Error("expected string containing private key");if("PVT_R1_"===e.substr(0,7))return b(e.substr(7),l.r1,t.privateKeyDataSize,"R1");throw new Error("unrecognized private key format")},t.privateKeyToString=function(e){if(e.type===l.r1)return w(e,"R1","PVT_R1_");throw new Error("unrecognized private key format")},t.stringToSignature=function(e){if("string"!=typeof e)throw new Error("expected string containing signature");if("SIG_K1_"===e.substr(0,7))return b(e.substr(7),l.k1,t.signatureDataSize,"K1");if("SIG_R1_"===e.substr(0,7))return b(e.substr(7),l.r1,t.signatureDataSize,"R1");throw new Error("unrecognized signature format")},t.signatureToString=function(e){if(e.type===l.k1)return w(e,"K1","SIG_K1_");if(e.type===l.r1)return w(e,"R1","SIG_R1_");throw new Error("unrecognized signature format")}},70:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{u(n.next(e))}catch(e){a(e)}}function s(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){e.done?i(e.value):new r((function(t){t(e.value)})).then(o,s)}u((n=n.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r},s=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o},u=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e},c=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}};Object.defineProperty(t,"__esModule",{value:!0});var l=r(71),f=r(72),h=r(73),p=function(){function e(e){this.contracts=new Map,this.cachedAbis=new Map,this.rpc=e.rpc,this.authorityProvider=e.authorityProvider||e.rpc,this.abiProvider=e.abiProvider||e.rpc,this.signatureProvider=e.signatureProvider,this.chainId=e.chainId,this.textEncoder=e.textEncoder,this.textDecoder=e.textDecoder,this.abiTypes=l.getTypesFromAbi(l.createInitialTypes(),f),this.transactionTypes=l.getTypesFromAbi(l.createInitialTypes(),h)}return e.prototype.rawAbiToJson=function(e){var t=new l.SerialBuffer({textEncoder:this.textEncoder,textDecoder:this.textDecoder,array:e});if(!l.supportedAbiVersion(t.getString()))throw new Error("Unsupported abi version");return t.restartRead(),this.abiTypes.get("abi_def").deserialize(t)},e.prototype.getCachedAbi=function(e,t){return void 0===t&&(t=!1),i(this,void 0,void 0,(function(){var r,n,i,o;return a(this,(function(a){switch(a.label){case 0:if(!t&&this.cachedAbis.get(e))return[2,this.cachedAbis.get(e)];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this.abiProvider.getRawAbi(e)];case 2:return n=a.sent().abi,i=this.rawAbiToJson(n),r={rawAbi:n,abi:i},[3,4];case 3:throw(o=a.sent()).message="fetching abi for "+e+": "+o.message,o;case 4:if(!r)throw new Error("Missing abi for "+e);return this.cachedAbis.set(e,r),[2,r]}}))}))},e.prototype.getAbi=function(e,t){return void 0===t&&(t=!1),i(this,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return[4,this.getCachedAbi(e,t)];case 1:return[2,r.sent().abi]}}))}))},e.prototype.getTransactionAbis=function(e,t){return void 0===t&&(t=!1),i(this,void 0,void 0,(function(){var r,n,o,s=this;return a(this,(function(c){return r=e.actions.map((function(e){return e.account})),n=new Set(r),o=u(n).map((function(e){return i(s,void 0,void 0,(function(){var r;return a(this,(function(n){switch(n.label){case 0:return r={accountName:e},[4,this.getCachedAbi(e,t)];case 1:return[2,(r.abi=n.sent().rawAbi,r)]}}))}))})),[2,Promise.all(o)]}))}))},e.prototype.getContract=function(e,t){return void 0===t&&(t=!1),i(this,void 0,void 0,(function(){var r,n,i,o,s,u,f,h,p,y,d;return a(this,(function(a){switch(a.label){case 0:return!t&&this.contracts.get(e)?[2,this.contracts.get(e)]:[4,this.getAbi(e,t)];case 1:i=a.sent(),o=l.getTypesFromAbi(l.createInitialTypes(),i),s=new Map;try{for(u=c(i.actions),f=u.next();!f.done;f=u.next())h=f.value,p=h.name,y=h.type,s.set(p,l.getType(o,y))}catch(e){r={error:e}}finally{try{f&&!f.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}return d={types:o,actions:s},this.contracts.set(e,d),[2,d]}}))}))},e.prototype.serialize=function(e,t,r){this.transactionTypes.get(t).serialize(e,r)},e.prototype.deserialize=function(e,t){return this.transactionTypes.get(t).deserialize(e)},e.prototype.serializeTransaction=function(e){var t=new l.SerialBuffer({textEncoder:this.textEncoder,textDecoder:this.textDecoder});return this.serialize(t,"transaction",n({max_net_usage_words:0,max_cpu_usage_ms:0,delay_sec:0,context_free_actions:[],actions:[],transaction_extensions:[]},e)),t.asUint8Array()},e.prototype.deserializeTransaction=function(e){var t=new l.SerialBuffer({textEncoder:this.textEncoder,textDecoder:this.textDecoder});return t.pushArray(e),this.deserialize(t,"transaction")},e.prototype.serializeActions=function(e){return i(this,void 0,void 0,(function(){var t=this;return a(this,(function(r){switch(r.label){case 0:return[4,Promise.all(e.map((function(e){var r=e.account,n=e.name,o=e.authorization,s=e.data;return i(t,void 0,void 0,(function(){var e;return a(this,(function(t){switch(t.label){case 0:return[4,this.getContract(r)];case 1:return e=t.sent(),[2,l.serializeAction(e,r,n,o,s,this.textEncoder,this.textDecoder)]}}))}))})))];case 1:return[2,r.sent()]}}))}))},e.prototype.deserializeActions=function(e){return i(this,void 0,void 0,(function(){var t=this;return a(this,(function(r){switch(r.label){case 0:return[4,Promise.all(e.map((function(e){var r=e.account,n=e.name,o=e.authorization,s=e.data;return i(t,void 0,void 0,(function(){var e;return a(this,(function(t){switch(t.label){case 0:return[4,this.getContract(r)];case 1:return e=t.sent(),[2,l.deserializeAction(e,r,n,o,s,this.textEncoder,this.textDecoder)]}}))}))})))];case 1:return[2,r.sent()]}}))}))},e.prototype.deserializeTransactionWithActions=function(e){return i(this,void 0,void 0,(function(){var t,r;return a(this,(function(i){switch(i.label){case 0:return"string"==typeof e&&(e=l.hexToUint8Array(e)),t=this.deserializeTransaction(e),[4,this.deserializeActions(t.actions)];case 1:return r=i.sent(),[2,n({},t,{actions:r})]}}))}))},e.prototype.transact=function(e,t){var r=void 0===t?{}:t,o=r.broadcast,s=void 0===o||o,u=r.sign,c=void 0===u||u,f=r.blocksBehind,h=r.expireSeconds;return i(this,void 0,void 0,(function(){var t,r,i,o,u,p,y,d,g;return a(this,(function(a){switch(a.label){case 0:return this.chainId?[3,2]:[4,this.rpc.get_info()];case 1:t=a.sent(),this.chainId=t.chain_id,a.label=2;case 2:return"number"==typeof f&&h?t?[3,4]:[4,this.rpc.get_info()]:[3,6];case 3:t=a.sent(),a.label=4;case 4:return[4,this.rpc.get_block(t.head_block_num-f)];case 5:r=a.sent(),e=n({},l.transactionHeader(r,h),e),a.label=6;case 6:if(!this.hasRequiredTaposFields(e))throw new Error("Required configuration or TAPOS fields are not present");return[4,this.getTransactionAbis(e)];case 7:return i=a.sent(),o=[{},e],u={},[4,this.serializeActions(e.actions)];case 8:return e=n.apply(void 0,o.concat([(u.actions=a.sent(),u)])),p=this.serializeTransaction(e),y={serializedTransaction:p,signatures:[]},c?[4,this.signatureProvider.getAvailableKeys()]:[3,12];case 9:return d=a.sent(),[4,this.authorityProvider.getRequiredKeys({transaction:e,availableKeys:d})];case 10:return g=a.sent(),[4,this.signatureProvider.sign({chainId:this.chainId,requiredKeys:g,serializedTransaction:p,abis:i})];case 11:y=a.sent(),a.label=12;case 12:return s?[2,this.pushSignedTransaction(y)]:[2,y]}}))}))},e.prototype.pushSignedTransaction=function(e){var t=e.signatures,r=e.serializedTransaction;return i(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.rpc.push_transaction({signatures:t,serializedTransaction:r})]}))}))},e.prototype.hasRequiredTaposFields=function(e){var t=e.expiration,r=e.ref_block_num,n=e.ref_block_prefix;o(e,["expiration","ref_block_num","ref_block_prefix"]);return!!(t&&r&&n)},e}();t.Api=p},71:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o},a=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e},o=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}};Object.defineProperty(t,"__esModule",{value:!0});var s=r(7),u=function(e){void 0===e&&(e={}),this.skippedBinaryExtension=!1,this.options=e};t.SerializerState=u;var c=function(){function e(e){var t=void 0===e?{}:e,r=t.textEncoder,n=t.textDecoder,i=t.array;this.readPos=0,this.array=i||new Uint8Array(1024),this.length=i?i.length:0,this.textEncoder=r||new TextEncoder,this.textDecoder=n||new TextDecoder("utf-8",{fatal:!0})}return e.prototype.reserve=function(e){if(!(this.length+e<=this.array.length)){for(var t=this.array.length;this.length+e>t;)t=Math.ceil(1.5*t);var r=new Uint8Array(t);r.set(this.array),this.array=r}},e.prototype.haveReadData=function(){return this.readPos<this.length},e.prototype.restartRead=function(){this.readPos=0},e.prototype.asUint8Array=function(){return new Uint8Array(this.array.buffer,this.array.byteOffset,this.length)},e.prototype.pushArray=function(e){this.reserve(e.length),this.array.set(e,this.length),this.length+=e.length},e.prototype.push=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.pushArray(e)},e.prototype.get=function(){if(this.readPos<this.length)return this.array[this.readPos++];throw new Error("Read past end of buffer")},e.prototype.pushUint8ArrayChecked=function(e,t){if(e.length!==t)throw new Error("Binary data has incorrect size");this.pushArray(e)},e.prototype.getUint8Array=function(e){if(this.readPos+e>this.length)throw new Error("Read past end of buffer");var t=new Uint8Array(this.array.buffer,this.array.byteOffset+this.readPos,e);return this.readPos+=e,t},e.prototype.pushUint16=function(e){this.push(e>>0&255,e>>8&255)},e.prototype.getUint16=function(){var e=0;return e|=this.get()<<0,e|=this.get()<<8},e.prototype.pushUint32=function(e){this.push(e>>0&255,e>>8&255,e>>16&255,e>>24&255)},e.prototype.getUint32=function(){var e=0;return e|=this.get()<<0,e|=this.get()<<8,e|=this.get()<<16,(e|=this.get()<<24)>>>0},e.prototype.pushNumberAsUint64=function(e){this.pushUint32(e>>>0),this.pushUint32(Math.floor(e/4294967296)>>>0)},e.prototype.getUint64AsNumber=function(){var e=this.getUint32();return 4294967296*(this.getUint32()>>>0)+(e>>>0)},e.prototype.pushVaruint32=function(e){for(;;){if(!(e>>>7)){this.push(e);break}this.push(128|127&e),e>>>=7}},e.prototype.getVaruint32=function(){for(var e=0,t=0;;){var r=this.get();if(e|=(127&r)<<t,t+=7,!(128&r))break}return e>>>0},e.prototype.pushVarint32=function(e){this.pushVaruint32(e<<1^e>>31)},e.prototype.getVarint32=function(){var e=this.getVaruint32();return 1&e?~e>>1|2147483648:e>>>1},e.prototype.pushFloat32=function(e){this.pushArray(new Uint8Array(new Float32Array([e]).buffer))},e.prototype.getFloat32=function(){return new Float32Array(this.getUint8Array(4).slice().buffer)[0]},e.prototype.pushFloat64=function(e){this.pushArray(new Uint8Array(new Float64Array([e]).buffer))},e.prototype.getFloat64=function(){return new Float64Array(this.getUint8Array(8).slice().buffer)[0]},e.prototype.pushName=function(e){if("string"!=typeof e)throw new Error("Expected string containing name");function t(e){return e>="a".charCodeAt(0)&&e<="z".charCodeAt(0)?e-"a".charCodeAt(0)+6:e>="1".charCodeAt(0)&&e<="5".charCodeAt(0)?e-"1".charCodeAt(0)+1:0}for(var r=new Uint8Array(8),n=63,i=0;i<e.length;++i){var a=t(e.charCodeAt(i));n<5&&(a<<=1);for(var o=4;o>=0;--o)n>=0&&(r[Math.floor(n/8)]|=(a>>o&1)<<n%8,--n)}this.pushArray(r)},e.prototype.getName=function(){for(var e=this.getUint8Array(8),t="",r=63;r>=0;){for(var n=0,i=0;i<5;++i)r>=0&&(n=n<<1|e[Math.floor(r/8)]>>r%8&1,--r);t+=n>=6?String.fromCharCode(n+"a".charCodeAt(0)-6):n>=1?String.fromCharCode(n+"1".charCodeAt(0)-1):"."}for(;t.endsWith(".");)t=t.substr(0,t.length-1);return t},e.prototype.pushBytes=function(e){this.pushVaruint32(e.length),this.pushArray(e)},e.prototype.getBytes=function(){return this.getUint8Array(this.getVaruint32())},e.prototype.pushString=function(e){this.pushBytes(this.textEncoder.encode(e))},e.prototype.getString=function(){return this.textDecoder.decode(this.getBytes())},e.prototype.pushSymbolCode=function(e){if("string"!=typeof e)throw new Error("Expected string containing symbol_code");var t=[];for(t.push.apply(t,a(this.textEncoder.encode(e)));t.length<8;)t.push(0);this.pushArray(t.slice(0,8))},e.prototype.getSymbolCode=function(){var e,t=this.getUint8Array(8);for(e=0;e<t.length&&t[e];++e);return this.textDecoder.decode(new Uint8Array(t.buffer,t.byteOffset,e))},e.prototype.pushSymbol=function(e){var t=e.name,r=[255&e.precision];for(r.push.apply(r,a(this.textEncoder.encode(t)));r.length<8;)r.push(0);this.pushArray(r.slice(0,8))},e.prototype.getSymbol=function(){var e,t=this.get(),r=this.getUint8Array(7);for(e=0;e<r.length&&r[e];++e);return{name:this.textDecoder.decode(new Uint8Array(r.buffer,r.byteOffset,e)),precision:t}},e.prototype.pushAsset=function(e){if("string"!=typeof e)throw new Error("Expected string containing asset");var t=0,r="",n=0;"-"===(e=e.trim())[t]&&(r+="-",++t);for(var i=!1;t<e.length&&e.charCodeAt(t)>="0".charCodeAt(0)&&e.charCodeAt(t)<="9".charCodeAt(0);)i=!0,r+=e[t],++t;if(!i)throw new Error("Asset must begin with a number");if("."===e[t])for(++t;t<e.length&&e.charCodeAt(t)>="0".charCodeAt(0)&&e.charCodeAt(t)<="9".charCodeAt(0);)r+=e[t],++n,++t;var a=e.substr(t).trim();this.pushArray(s.signedDecimalToBinary(8,r)),this.pushSymbol({name:a,precision:n})},e.prototype.getAsset=function(){var e=this.getUint8Array(8),t=this.getSymbol(),r=t.name,n=t.precision,i=s.signedBinaryToDecimal(e,n+1);return n&&(i=i.substr(0,i.length-n)+"."+i.substr(i.length-n)),i+" "+r},e.prototype.pushPublicKey=function(e){var t=s.stringToPublicKey(e);this.push(t.type),this.pushArray(t.data)},e.prototype.getPublicKey=function(){var e=this.get(),t=this.getUint8Array(s.publicKeyDataSize);return s.publicKeyToString({type:e,data:t})},e.prototype.pushPrivateKey=function(e){var t=s.stringToPrivateKey(e);this.push(t.type),this.pushArray(t.data)},e.prototype.getPrivateKey=function(){var e=this.get(),t=this.getUint8Array(s.privateKeyDataSize);return s.privateKeyToString({type:e,data:t})},e.prototype.pushSignature=function(e){var t=s.stringToSignature(e);this.push(t.type),this.pushArray(t.data)},e.prototype.getSignature=function(){var e=this.get(),t=this.getUint8Array(s.signatureDataSize);return s.signatureToString({type:e,data:t})},e}();function l(e){var t=Date.parse(e);if(Number.isNaN(t))throw new Error("Invalid time format");return t}function f(e){return Math.round(1e3*l(e+"Z"))}function h(e){var t=new Date(e/1e3).toISOString();return t.substr(0,t.length-1)}function p(e){return Math.round(l(e+"Z")/1e3)}function y(e){var t=new Date(1e3*e).toISOString();return t.substr(0,t.length-1)}function d(e){return Math.round((l(e+"Z")-9466848e5)/500)}function g(e){var t=new Date(500*e+9466848e5).toISOString();return t.substr(0,t.length-1)}function m(e){if("string"!=typeof e)throw new Error("Expected string containing symbol");var t=e.match(/^([0-9]+),([A-Z]+)$/);if(!t)throw new Error("Invalid symbol");return{name:t[2],precision:+t[1]}}function v(e){var t=e.name;return e.precision+","+t}function b(e){var t,r,n="";try{for(var i=o(e),a=i.next();!a.done;a=i.next()){n+=("00"+a.value.toString(16)).slice(-2)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n.toUpperCase()}function w(e){if("string"!=typeof e)throw new Error("Expected string containing hex digits");if(e.length%2)throw new Error("Odd number of hex digits");for(var t=e.length/2,r=new Uint8Array(t),n=0;n<t;++n){var i=parseInt(e.substr(2*n,2),16);if(Number.isNaN(i))throw new Error("Expected hex string");r[n]=i}return r}function _(e,t){throw new Error("Don't know how to serialize "+this.name)}function A(e){throw new Error("Don't know how to deserialize "+this.name)}function z(e,t,r,n){var i,a;if(void 0===r&&(r=new u),void 0===n&&(n=!0),"object"!=typeof t)throw new Error("expected object containing data: "+JSON.stringify(t));this.base&&this.base.serialize(e,t,r,n);try{for(var s=o(this.fields),c=s.next();!c.done;c=s.next()){var l=c.value;if(l.name in t){if(r.skippedBinaryExtension)throw new Error("unexpected "+this.name+"."+l.name);l.type.serialize(e,t[l.name],r,n&&l===this.fields[this.fields.length-1])}else{if(!n||!l.type.extensionOf)throw new Error("missing "+this.name+"."+l.name+" (type="+l.type.name+")");r.skippedBinaryExtension=!0}}}catch(e){i={error:e}}finally{try{c&&!c.done&&(a=s.return)&&a.call(s)}finally{if(i)throw i.error}}}function x(e,t,r){var n,i,a;void 0===t&&(t=new u),void 0===r&&(r=!0),a=this.base?this.base.deserialize(e,t,r):{};try{for(var s=o(this.fields),c=s.next();!c.done;c=s.next()){var l=c.value;r&&l.type.extensionOf&&!e.haveReadData()?t.skippedBinaryExtension=!0:a[l.name]=l.type.deserialize(e,t,r)}}catch(e){n={error:e}}finally{try{c&&!c.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}return a}function S(e,t,r,n){if(!Array.isArray(t)||2!==t.length||"string"!=typeof t[0])throw new Error('expected variant: ["type", value]');var i=this.fields.findIndex((function(e){return e.name===t[0]}));if(i<0)throw new Error('type "'+t[0]+'" is not valid for variant');e.pushVaruint32(i),this.fields[i].type.serialize(e,t[1],r,n)}function U(e,t,r){var n=e.getVaruint32();if(n>=this.fields.length)throw new Error("type index "+n+" is not valid for variant");var i=this.fields[n];return[i.name,i.type.deserialize(e,t,r)]}function T(e,t,r,n){var i,a;e.pushVaruint32(t.length);try{for(var s=o(t),u=s.next();!u.done;u=s.next()){var c=u.value;this.arrayOf.serialize(e,c,r,!1)}}catch(e){i={error:e}}finally{try{u&&!u.done&&(a=s.return)&&a.call(s)}finally{if(i)throw i.error}}}function E(e,t,r){for(var n=e.getVaruint32(),i=[],a=0;a<n;++a)i.push(this.arrayOf.deserialize(e,t,!1));return i}function P(e,t,r,n){null==t?e.push(0):(e.push(1),this.optionalOf.serialize(e,t,r,n))}function k(e,t,r){return e.get()?this.optionalOf.deserialize(e,t,r):null}function D(e,t,r,n){this.extensionOf.serialize(e,t,r,n)}function C(e,t,r){return this.extensionOf.deserialize(e,t,r)}function O(e){return n({name:"<missing name>",aliasOfName:"",arrayOf:null,optionalOf:null,extensionOf:null,baseName:"",base:null,fields:[],serialize:_,deserialize:A},e)}function K(e,t){if(Number.isNaN(+e)||Number.isNaN(+t)||"number"!=typeof e&&"string"!=typeof e)throw new Error("Expected number");if(+e!=+t)throw new Error("Number is out of range");return+e}function B(e,t){var r=e.get(t);if(r&&r.aliasOfName)return B(e,r.aliasOfName);if(r)return r;if(t.endsWith("[]"))return O({name:t,arrayOf:B(e,t.substr(0,t.length-2)),serialize:T,deserialize:E});if(t.endsWith("?"))return O({name:t,optionalOf:B(e,t.substr(0,t.length-1)),serialize:P,deserialize:k});if(t.endsWith("$"))return O({name:t,extensionOf:B(e,t.substr(0,t.length-1)),serialize:D,deserialize:C});throw new Error("Unknown type: "+t)}function N(e,t,r,n,i,a){var o=e.actions.get(r);if(!o)throw new Error("Unknown action "+r+" in contract "+t);var s=new c({textEncoder:i,textDecoder:a});return o.serialize(s,n),b(s.asUint8Array())}function R(e,t,r,n,i,a){var o=e.actions.get(r);if("string"==typeof n&&(n=w(n)),!o)throw new Error("Unknown action "+r+" in contract "+t);var s=new c({textDecoder:a,textEncoder:i});return s.pushArray(n),o.deserialize(s)}t.SerialBuffer=c,t.supportedAbiVersion=function(e){return e.startsWith("eosio::abi/1.")},t.dateToTimePoint=f,t.timePointToDate=h,t.dateToTimePointSec=p,t.timePointSecToDate=y,t.dateToBlockTimestamp=d,t.blockTimestampToDate=g,t.stringToSymbol=m,t.symbolToString=v,t.arrayToHex=b,t.hexToUint8Array=w,t.createInitialTypes=function(){var e=new Map(Object.entries({bool:O({name:"bool",serialize:function(e,t){if("boolean"!=typeof t)throw new Error("Expected true or false");e.push(t?1:0)},deserialize:function(e){return!!e.get()}}),uint8:O({name:"uint8",serialize:function(e,t){e.push(K(t,255&t))},deserialize:function(e){return e.get()}}),int8:O({name:"int8",serialize:function(e,t){e.push(K(t,t<<24>>24))},deserialize:function(e){return e.get()<<24>>24}}),uint16:O({name:"uint16",serialize:function(e,t){e.pushUint16(K(t,65535&t))},deserialize:function(e){return e.getUint16()}}),int16:O({name:"int16",serialize:function(e,t){e.pushUint16(K(t,t<<16>>16))},deserialize:function(e){return e.getUint16()<<16>>16}}),uint32:O({name:"uint32",serialize:function(e,t){e.pushUint32(K(t,t>>>0))},deserialize:function(e){return e.getUint32()}}),uint64:O({name:"uint64",serialize:function(e,t){e.pushArray(s.decimalToBinary(8,""+t))},deserialize:function(e){return s.binaryToDecimal(e.getUint8Array(8))}}),int64:O({name:"int64",serialize:function(e,t){e.pushArray(s.signedDecimalToBinary(8,""+t))},deserialize:function(e){return s.signedBinaryToDecimal(e.getUint8Array(8))}}),int32:O({name:"int32",serialize:function(e,t){e.pushUint32(K(t,0|t))},deserialize:function(e){return 0|e.getUint32()}}),varuint32:O({name:"varuint32",serialize:function(e,t){e.pushVaruint32(K(t,t>>>0))},deserialize:function(e){return e.getVaruint32()}}),varint32:O({name:"varint32",serialize:function(e,t){e.pushVarint32(K(t,0|t))},deserialize:function(e){return e.getVarint32()}}),uint128:O({name:"uint128",serialize:function(e,t){e.pushArray(s.decimalToBinary(16,""+t))},deserialize:function(e){return s.binaryToDecimal(e.getUint8Array(16))}}),int128:O({name:"int128",serialize:function(e,t){e.pushArray(s.signedDecimalToBinary(16,""+t))},deserialize:function(e){return s.signedBinaryToDecimal(e.getUint8Array(16))}}),float32:O({name:"float32",serialize:function(e,t){e.pushFloat32(t)},deserialize:function(e){return e.getFloat32()}}),float64:O({name:"float64",serialize:function(e,t){e.pushFloat64(t)},deserialize:function(e){return e.getFloat64()}}),float128:O({name:"float128",serialize:function(e,t){e.pushUint8ArrayChecked(w(t),16)},deserialize:function(e){return b(e.getUint8Array(16))}}),bytes:O({name:"bytes",serialize:function(e,t){t instanceof Uint8Array||Array.isArray(t)?e.pushBytes(t):e.pushBytes(w(t))},deserialize:function(e,t){return t&&t.options.bytesAsUint8Array?e.getBytes():b(e.getBytes())}}),string:O({name:"string",serialize:function(e,t){e.pushString(t)},deserialize:function(e){return e.getString()}}),name:O({name:"name",serialize:function(e,t){e.pushName(t)},deserialize:function(e){return e.getName()}}),time_point:O({name:"time_point",serialize:function(e,t){e.pushNumberAsUint64(f(t))},deserialize:function(e){return h(e.getUint64AsNumber())}}),time_point_sec:O({name:"time_point_sec",serialize:function(e,t){e.pushUint32(p(t))},deserialize:function(e){return y(e.getUint32())}}),block_timestamp_type:O({name:"block_timestamp_type",serialize:function(e,t){e.pushUint32(d(t))},deserialize:function(e){return g(e.getUint32())}}),symbol_code:O({name:"symbol_code",serialize:function(e,t){e.pushSymbolCode(t)},deserialize:function(e){return e.getSymbolCode()}}),symbol:O({name:"symbol",serialize:function(e,t){e.pushSymbol(m(t))},deserialize:function(e){return v(e.getSymbol())}}),asset:O({name:"asset",serialize:function(e,t){e.pushAsset(t)},deserialize:function(e){return e.getAsset()}}),checksum160:O({name:"checksum160",serialize:function(e,t){e.pushUint8ArrayChecked(w(t),20)},deserialize:function(e){return b(e.getUint8Array(20))}}),checksum256:O({name:"checksum256",serialize:function(e,t){e.pushUint8ArrayChecked(w(t),32)},deserialize:function(e){return b(e.getUint8Array(32))}}),checksum512:O({name:"checksum512",serialize:function(e,t){e.pushUint8ArrayChecked(w(t),64)},deserialize:function(e){return b(e.getUint8Array(64))}}),public_key:O({name:"public_key",serialize:function(e,t){e.pushPublicKey(t)},deserialize:function(e){return e.getPublicKey()}}),private_key:O({name:"private_key",serialize:function(e,t){e.pushPrivateKey(t)},deserialize:function(e){return e.getPrivateKey()}}),signature:O({name:"signature",serialize:function(e,t){e.pushSignature(t)},deserialize:function(e){return e.getSignature()}})}));return e.set("extended_asset",O({name:"extended_asset",baseName:"",fields:[{name:"quantity",typeName:"asset",type:e.get("asset")},{name:"contract",typeName:"name",type:e.get("name")}],serialize:z,deserialize:x})),e},t.getType=B,t.getTypesFromAbi=function(e,t){var r,n,a,s,u,c,l,f,h,p,y=new Map(e);if(t.types)try{for(var d=o(t.types),g=d.next();!g.done;g=d.next()){var m=g.value,v=m.new_type_name,b=m.type;y.set(v,O({name:v,aliasOfName:b}))}}catch(e){r={error:e}}finally{try{g&&!g.done&&(n=d.return)&&n.call(d)}finally{if(r)throw r.error}}if(t.structs)try{for(var w=o(t.structs),_=w.next();!_.done;_=w.next()){var A=_.value,T=A.name,E=A.base,P=A.fields;y.set(T,O({name:T,baseName:E,fields:P.map((function(e){return{name:e.name,typeName:e.type,type:null}})),serialize:z,deserialize:x}))}}catch(e){a={error:e}}finally{try{_&&!_.done&&(s=w.return)&&s.call(w)}finally{if(a)throw a.error}}if(t.variants)try{for(var k=o(t.variants),D=k.next();!D.done;D=k.next()){var C=D.value,K=C.name,N=C.types;y.set(K,O({name:K,fields:N.map((function(e){return{name:e,typeName:e,type:null}})),serialize:S,deserialize:U}))}}catch(e){u={error:e}}finally{try{D&&!D.done&&(c=k.return)&&c.call(k)}finally{if(u)throw u.error}}try{for(var R=o(y),M=R.next();!M.done;M=R.next()){var V=i(M.value,2);V[0];(b=V[1]).baseName&&(b.base=B(y,b.baseName));try{for(var I=o(b.fields),j=I.next();!j.done;j=I.next()){var F=j.value;F.type=B(y,F.typeName)}}catch(e){h={error:e}}finally{try{j&&!j.done&&(p=I.return)&&p.call(I)}finally{if(h)throw h.error}}}}catch(e){l={error:e}}finally{try{M&&!M.done&&(f=R.return)&&f.call(R)}finally{if(l)throw l.error}}return y},t.transactionHeader=function(e,t){return{expiration:y(p(e.timestamp)+t),ref_block_num:65535&e.block_num,ref_block_prefix:e.ref_block_prefix}},t.serializeActionData=N,t.serializeAction=function(e,t,r,n,i,a,o){return{account:t,name:r,authorization:n,data:N(e,t,r,i,a,o)}},t.deserializeActionData=R,t.deserializeAction=function(e,t,r,n,i,a,o){return{account:t,name:r,authorization:n,data:R(e,t,r,i,a,o)}}},72:function(e){e.exports={version:"eosio::abi/1.1",structs:[{name:"extensions_entry",base:"",fields:[{name:"tag",type:"uint16"},{name:"value",type:"bytes"}]},{name:"type_def",base:"",fields:[{name:"new_type_name",type:"string"},{name:"type",type:"string"}]},{name:"field_def",base:"",fields:[{name:"name",type:"string"},{name:"type",type:"string"}]},{name:"struct_def",base:"",fields:[{name:"name",type:"string"},{name:"base",type:"string"},{name:"fields",type:"field_def[]"}]},{name:"action_def",base:"",fields:[{name:"name",type:"name"},{name:"type",type:"string"},{name:"ricardian_contract",type:"string"}]},{name:"table_def",base:"",fields:[{name:"name",type:"name"},{name:"index_type",type:"string"},{name:"key_names",type:"string[]"},{name:"key_types",type:"string[]"},{name:"type",type:"string"}]},{name:"clause_pair",base:"",fields:[{name:"id",type:"string"},{name:"body",type:"string"}]},{name:"error_message",base:"",fields:[{name:"error_code",type:"uint64"},{name:"error_msg",type:"string"}]},{name:"variant_def",base:"",fields:[{name:"name",type:"string"},{name:"types",type:"string[]"}]},{name:"abi_def",base:"",fields:[{name:"version",type:"string"},{name:"types",type:"type_def[]"},{name:"structs",type:"struct_def[]"},{name:"actions",type:"action_def[]"},{name:"tables",type:"table_def[]"},{name:"ricardian_clauses",type:"clause_pair[]"},{name:"error_messages",type:"error_message[]"},{name:"abi_extensions",type:"extensions_entry[]"},{name:"variants",type:"variant_def[]$"}]}]}},73:function(e){e.exports={version:"eosio::abi/1.0",types:[{new_type_name:"account_name",type:"name"},{new_type_name:"action_name",type:"name"},{new_type_name:"permission_name",type:"name"}],structs:[{name:"permission_level",base:"",fields:[{name:"actor",type:"account_name"},{name:"permission",type:"permission_name"}]},{name:"action",base:"",fields:[{name:"account",type:"account_name"},{name:"name",type:"action_name"},{name:"authorization",type:"permission_level[]"},{name:"data",type:"bytes"}]},{name:"extension",base:"",fields:[{name:"type",type:"uint16"},{name:"data",type:"bytes"}]},{name:"transaction_header",base:"",fields:[{name:"expiration",type:"time_point_sec"},{name:"ref_block_num",type:"uint16"},{name:"ref_block_prefix",type:"uint32"},{name:"max_net_usage_words",type:"varuint32"},{name:"max_cpu_usage_ms",type:"uint8"},{name:"delay_sec",type:"varuint32"}]},{name:"transaction",base:"transaction_header",fields:[{name:"context_free_actions",type:"action[]"},{name:"actions",type:"action[]"},{name:"transaction_extensions",type:"extension[]"}]}]}},8:function(e,t,r){"use strict";class n{constructor(){}static get_n_pad_bytes(e){return 64-(e+8&63)}static pad(e){const t=e.byteLength,r=n.get_n_pad_bytes(t),[i,a]=(o=t,s=536870912,[Math.floor(o/s),o%s]).map((e,t)=>t?8*e:e);var o,s;const u=new Uint8Array(t+r+8);u.set(new Uint8Array(e),0);const c=new DataView(u.buffer);return c.setUint8(t,128),c.setUint32(t+r,a,!0),c.setUint32(t+r+4,i,!0),u.buffer}static f(e,t,r,n){return 0<=e&&e<=15?t^r^n:16<=e&&e<=31?t&r|~t&n:32<=e&&e<=47?(t|~r)^n:48<=e&&e<=63?t&n|r&~n:64<=e&&e<=79?t^(r|~n):void 0}static K(e){return 0<=e&&e<=15?0:16<=e&&e<=31?1518500249:32<=e&&e<=47?1859775393:48<=e&&e<=63?2400959708:64<=e&&e<=79?2840853838:void 0}static KP(e){return 0<=e&&e<=15?1352829926:16<=e&&e<=31?1548603684:32<=e&&e<=47?1836072691:48<=e&&e<=63?2053994217:64<=e&&e<=79?0:void 0}static add_modulo32(){return 0|Array.from(arguments).reduce((e,t)=>e+t,0)}static rol32(e,t){return e<<t|e>>>32-t}static hash(e){const t=n.pad(e),r=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],i=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],a=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],o=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],s=t.byteLength/64,u=new Array(s).fill(void 0).map((e,r)=>e=>new DataView(t,64*r,64).getUint32(4*e,!0));let c=[1732584193,4023233417,2562383102,271733878,3285377520];for(let e=0;e<s;++e){let t=c[0],s=c[1],l=c[2],f=c[3],h=c[4],p=t,y=s,d=l,g=f,m=h;for(let c=0;c<80;++c){let v=n.add_modulo32(n.rol32(n.add_modulo32(t,n.f(c,s,l,f),u[e](r[c]),n.K(c)),a[c]),h);t=h,h=f,f=n.rol32(l,10),l=s,s=v,v=n.add_modulo32(n.rol32(n.add_modulo32(p,n.f(79-c,y,d,g),u[e](i[c]),n.KP(c)),o[c]),m),p=m,m=g,g=n.rol32(d,10),d=y,y=v}let v=n.add_modulo32(c[1],l,g);c[1]=n.add_modulo32(c[2],f,m),c[2]=n.add_modulo32(c[3],h,p),c[3]=n.add_modulo32(c[4],t,y),c[4]=n.add_modulo32(c[0],s,d),c[0]=v}const l=new ArrayBuffer(20),f=new DataView(l);return c.forEach((e,t)=>f.setUint32(4*t,e,!0)),l}}e.exports={RIPEMD160:n}}});