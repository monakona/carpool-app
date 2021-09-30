"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6777],{63971:(r,e,n)=>{n.d(e,{Z:()=>s});var o=n(94015);var a=n.n(o);var t=n(23645);var c=n.n(t);var d=c()(a());d.push([r.id,"/*\nName:   DuoTone-Dark\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-dark.CodeMirror { background: #2a2734; color: #6c6783; }\n.cm-s-duotone-dark div.CodeMirror-selected { background: #545167!important; }\n.cm-s-duotone-dark .CodeMirror-gutters { background: #2a2734; border-right: 0px; }\n.cm-s-duotone-dark .CodeMirror-linenumber { color: #545167; }\n\n/* begin cursor */\n.cm-s-duotone-dark .CodeMirror-cursor { border-left: 1px solid #ffad5c; /* border-left: 1px solid #ffad5c80; */ border-right: .5em solid #ffad5c; /* border-right: .5em solid #ffad5c80; */ opacity: .5; }\n.cm-s-duotone-dark .CodeMirror-activeline-background { background: #363342; /* background: #36334280;  */ opacity: .5;}\n.cm-s-duotone-dark .cm-fat-cursor .CodeMirror-cursor { background: #ffad5c; /* background: #ffad5c80; */ opacity: .5;}\n/* end cursor */\n\n.cm-s-duotone-dark span.cm-atom, .cm-s-duotone-dark span.cm-number, .cm-s-duotone-dark span.cm-keyword, .cm-s-duotone-dark span.cm-variable, .cm-s-duotone-dark span.cm-attribute, .cm-s-duotone-dark span.cm-quote, .cm-s-duotone-dark span.cm-hr, .cm-s-duotone-dark span.cm-link { color: #ffcc99; }\n\n.cm-s-duotone-dark span.cm-property { color: #9a86fd; }\n.cm-s-duotone-dark span.cm-punctuation, .cm-s-duotone-dark span.cm-unit, .cm-s-duotone-dark span.cm-negative { color: #e09142; }\n.cm-s-duotone-dark span.cm-string { color: #ffb870; }\n.cm-s-duotone-dark span.cm-operator { color: #ffad5c; }\n.cm-s-duotone-dark span.cm-positive { color: #6a51e6; }\n\n.cm-s-duotone-dark span.cm-variable-2, .cm-s-duotone-dark span.cm-variable-3, .cm-s-duotone-dark span.cm-type, .cm-s-duotone-dark span.cm-string-2, .cm-s-duotone-dark span.cm-url { color: #7a63ee; }\n.cm-s-duotone-dark span.cm-def, .cm-s-duotone-dark span.cm-tag, .cm-s-duotone-dark span.cm-builtin, .cm-s-duotone-dark span.cm-qualifier, .cm-s-duotone-dark span.cm-header, .cm-s-duotone-dark span.cm-em { color: #eeebff; }\n.cm-s-duotone-dark span.cm-bracket, .cm-s-duotone-dark span.cm-comment { color: #6c6783; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n.cm-s-duotone-dark span.cm-error, .cm-s-duotone-dark span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-dark span.cm-header { font-weight: normal; }\n.cm-s-duotone-dark .CodeMirror-matchingbracket { text-decoration: underline; color: #eeebff !important; } \n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/duotone-dark.css"],names:[],mappings:"AAAA;;;;;CAKC;;AAED,gCAAgC,mBAAmB,EAAE,cAAc,EAAE;AACrE,6CAA6C,6BAA6B,EAAE;AAC5E,yCAAyC,mBAAmB,EAAE,iBAAiB,EAAE;AACjF,4CAA4C,cAAc,EAAE;;AAE5D,iBAAiB;AACjB,wCAAwC,8BAA8B,EAAE,sCAAsC,EAAE,gCAAgC,EAAE,wCAAwC,EAAE,WAAW,EAAE;AACzM,uDAAuD,mBAAmB,EAAE,4BAA4B,EAAE,WAAW,CAAC;AACtH,uDAAuD,mBAAmB,EAAE,2BAA2B,EAAE,WAAW,CAAC;AACrH,eAAe;;AAEf,sRAAsR,cAAc,EAAE;;AAEtS,sCAAsC,cAAc,EAAE;AACtD,+GAA+G,cAAc,EAAE;AAC/H,oCAAoC,cAAc,EAAE;AACpD,sCAAsC,cAAc,EAAE;AACtD,sCAAsC,cAAc,EAAE;;AAEtD,qLAAqL,cAAc,EAAE;AACrM,6MAA6M,cAAc,EAAE;AAC7N,yEAAyE,cAAc,EAAE;;AAEzF,iJAAiJ;AACjJ,2EAA2E,WAAW,EAAE;;AAExF,oCAAoC,mBAAmB,EAAE;AACzD,iDAAiD,0BAA0B,EAAE,yBAAyB,EAAE",sourcesContent:["/*\nName:   DuoTone-Dark\nAuthor: by Bram de Haan, adapted from DuoTone themes by Simurai (http://simurai.com/projects/2016/01/01/duotone-themes)\n\nCodeMirror template by Jan T. Sott (https://github.com/idleberg), adapted by Bram de Haan (https://github.com/atelierbram/)\n*/\n\n.cm-s-duotone-dark.CodeMirror { background: #2a2734; color: #6c6783; }\n.cm-s-duotone-dark div.CodeMirror-selected { background: #545167!important; }\n.cm-s-duotone-dark .CodeMirror-gutters { background: #2a2734; border-right: 0px; }\n.cm-s-duotone-dark .CodeMirror-linenumber { color: #545167; }\n\n/* begin cursor */\n.cm-s-duotone-dark .CodeMirror-cursor { border-left: 1px solid #ffad5c; /* border-left: 1px solid #ffad5c80; */ border-right: .5em solid #ffad5c; /* border-right: .5em solid #ffad5c80; */ opacity: .5; }\n.cm-s-duotone-dark .CodeMirror-activeline-background { background: #363342; /* background: #36334280;  */ opacity: .5;}\n.cm-s-duotone-dark .cm-fat-cursor .CodeMirror-cursor { background: #ffad5c; /* background: #ffad5c80; */ opacity: .5;}\n/* end cursor */\n\n.cm-s-duotone-dark span.cm-atom, .cm-s-duotone-dark span.cm-number, .cm-s-duotone-dark span.cm-keyword, .cm-s-duotone-dark span.cm-variable, .cm-s-duotone-dark span.cm-attribute, .cm-s-duotone-dark span.cm-quote, .cm-s-duotone-dark span.cm-hr, .cm-s-duotone-dark span.cm-link { color: #ffcc99; }\n\n.cm-s-duotone-dark span.cm-property { color: #9a86fd; }\n.cm-s-duotone-dark span.cm-punctuation, .cm-s-duotone-dark span.cm-unit, .cm-s-duotone-dark span.cm-negative { color: #e09142; }\n.cm-s-duotone-dark span.cm-string { color: #ffb870; }\n.cm-s-duotone-dark span.cm-operator { color: #ffad5c; }\n.cm-s-duotone-dark span.cm-positive { color: #6a51e6; }\n\n.cm-s-duotone-dark span.cm-variable-2, .cm-s-duotone-dark span.cm-variable-3, .cm-s-duotone-dark span.cm-type, .cm-s-duotone-dark span.cm-string-2, .cm-s-duotone-dark span.cm-url { color: #7a63ee; }\n.cm-s-duotone-dark span.cm-def, .cm-s-duotone-dark span.cm-tag, .cm-s-duotone-dark span.cm-builtin, .cm-s-duotone-dark span.cm-qualifier, .cm-s-duotone-dark span.cm-header, .cm-s-duotone-dark span.cm-em { color: #eeebff; }\n.cm-s-duotone-dark span.cm-bracket, .cm-s-duotone-dark span.cm-comment { color: #6c6783; }\n\n/* using #f00 red for errors, don't think any of the colorscheme variables will stand out enough, ... maybe by giving it a background-color ... */\n.cm-s-duotone-dark span.cm-error, .cm-s-duotone-dark span.cm-invalidchar { color: #f00; }\n\n.cm-s-duotone-dark span.cm-header { font-weight: normal; }\n.cm-s-duotone-dark .CodeMirror-matchingbracket { text-decoration: underline; color: #eeebff !important; } \n"],sourceRoot:""}]);const s=d},23645:r=>{r.exports=function(r){var e=[];e.toString=function e(){return this.map((function(e){var n=r(e);if(e[2]){return"@media ".concat(e[2]," {").concat(n,"}")}return n})).join("")};e.i=function(r,n,o){if(typeof r==="string"){r=[[null,r,""]]}var a={};if(o){for(var t=0;t<this.length;t++){var c=this[t][0];if(c!=null){a[c]=true}}}for(var d=0;d<r.length;d++){var s=[].concat(r[d]);if(o&&a[s[0]]){continue}if(n){if(!s[2]){s[2]=n}else{s[2]="".concat(n," and ").concat(s[2])}}e.push(s)}};return e}},94015:r=>{function e(r,e){return c(r)||t(r,e)||o(r,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(r,e){if(!r)return;if(typeof r==="string")return a(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor)n=r.constructor.name;if(n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(r,e)}function a(r,e){if(e==null||e>r.length)e=r.length;for(var n=0,o=new Array(e);n<e;n++){o[n]=r[n]}return o}function t(r,e){var n=r&&(typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"]);if(n==null)return;var o=[];var a=true;var t=false;var c,d;try{for(n=n.call(r);!(a=(c=n.next()).done);a=true){o.push(c.value);if(e&&o.length===e)break}}catch(s){t=true;d=s}finally{try{if(!a&&n["return"]!=null)n["return"]()}finally{if(t)throw d}}return o}function c(r){if(Array.isArray(r))return r}r.exports=function r(n){var o=e(n,4),a=o[1],t=o[3];if(!t){return a}if(typeof btoa==="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(t))));var d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c);var s="/*# ".concat(d," */");var i=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(r," */")}));return[a].concat(i).concat([s]).join("\n")}return[a].join("\n")}},56777:(r,e,n)=>{n.r(e);n.d(e,{default:()=>s});var o=n(93379);var a=n.n(o);var t=n(63971);var c={};c.insert="head";c.singleton=false;var d=a()(t.Z,c);const s=t.Z.locals||{}},93379:(r,e,n)=>{var o=function r(){var e;return function r(){if(typeof e==="undefined"){e=Boolean(window&&document&&document.all&&!window.atob)}return e}}();var a=function r(){var e={};return function r(n){if(typeof e[n]==="undefined"){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement){try{o=o.contentDocument.head}catch(a){o=null}}e[n]=o}return e[n]}}();var t=[];function c(r){var e=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===r){e=n;break}}return e}function d(r,e){var n={};var o=[];for(var a=0;a<r.length;a++){var d=r[a];var s=e.base?d[0]+e.base:d[0];var i=n[s]||0;var u="".concat(s," ").concat(i);n[s]=i+1;var m=c(u);var A={css:d[1],media:d[2],sourceMap:d[3]};if(m!==-1){t[m].references++;t[m].updater(A)}else{t.push({identifier:u,updater:p(A,e),references:1})}o.push(u)}return o}function s(r){var e=document.createElement("style");var o=r.attributes||{};if(typeof o.nonce==="undefined"){var t=true?n.nc:0;if(t){o.nonce=t}}Object.keys(o).forEach((function(r){e.setAttribute(r,o[r])}));if(typeof r.insert==="function"){r.insert(e)}else{var c=a(r.insert||"head");if(!c){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}c.appendChild(e)}return e}function i(r){if(r.parentNode===null){return false}r.parentNode.removeChild(r)}var u=function r(){var e=[];return function r(n,o){e[n]=o;return e.filter(Boolean).join("\n")}}();function m(r,e,n,o){var a=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(r.styleSheet){r.styleSheet.cssText=u(e,a)}else{var t=document.createTextNode(a);var c=r.childNodes;if(c[e]){r.removeChild(c[e])}if(c.length){r.insertBefore(t,c[e])}else{r.appendChild(t)}}}function A(r,e,n){var o=n.css;var a=n.media;var t=n.sourceMap;if(a){r.setAttribute("media",a)}else{r.removeAttribute("media")}if(t&&typeof btoa!=="undefined"){o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")}if(r.styleSheet){r.styleSheet.cssText=o}else{while(r.firstChild){r.removeChild(r.firstChild)}r.appendChild(document.createTextNode(o))}}var f=null;var l=0;function p(r,e){var n;var o;var a;if(e.singleton){var t=l++;n=f||(f=s(e));o=m.bind(null,n,t,false);a=m.bind(null,n,t,true)}else{n=s(e);o=A.bind(null,n,e);a=function r(){i(n)}}o(r);return function e(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap){return}o(r=n)}else{a()}}}r.exports=function(r,e){e=e||{};if(!e.singleton&&typeof e.singleton!=="boolean"){e.singleton=o()}r=r||[];var n=d(r,e);return function r(o){o=o||[];if(Object.prototype.toString.call(o)!=="[object Array]"){return}for(var a=0;a<n.length;a++){var s=n[a];var i=c(s);t[i].references--}var u=d(o,e);for(var m=0;m<n.length;m++){var A=n[m];var f=c(A);if(t[f].references===0){t[f].updater();t.splice(f,1)}}n=u}}}}]);
//# sourceMappingURL=6777.866776e05e7c30409ef9.js.map?v=866776e05e7c30409ef9