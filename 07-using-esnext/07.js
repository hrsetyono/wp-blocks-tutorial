!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(2),a=n(1),c=n(3);
/**!
 * Tutorial 07 - Using ESNext Syntax
 * 
 * This code is compiled from /esnext/07.js
 * 
 * Checkout the README in this folder on how to compile the ESNext file.
 */
Object(i.registerBlockType)("my/tut-07",{title:"07 - Converting Tut02 to JSX",icon:"book",category:"layout",example:{},attributes:{title:{type:"array",source:"children",selector:"h2"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},ingredients:{type:"array",source:"children",selector:".ingredients"},steps:{type:"array",source:"children",selector:".steps"}},edit:function(e){var t=e.attributes;return Object(r.createElement)("div",{className:e.className},Object(r.createElement)(a.RichText,{tagName:"h2",inline:!0,placeholder:"Write Recipe title…",value:t.title,onChange:function(t){e.setAttributes({title:t})}})," ",Object(r.createElement)("div",{className:"recipe-image"},Object(r.createElement)(a.MediaUpload,{allowedTypes:"image",value:t.mediaID,onSelect:function(t){e.setAttributes({mediaURL:t.url,mediaID:t.id})},render:function(e){return Object(r.createElement)(c.Button,{className:t.mediaID?"button button--transparent":"button",onClick:e.open},t.mediaID?Object(r.createElement)("img",{src:t.mediaURL}):"Upload Image")}})),Object(r.createElement)("h3",null,"Ingredients"),Object(r.createElement)(a.RichText,{tagName:"ul",multiline:"li",placeholder:"Write a list of ingredients…",className:"ingredients",value:t.ingredients,onChange:function(t){e.setAttributes({ingredients:t})}}),Object(r.createElement)("h3",null,"Steps"),Object(r.createElement)(a.RichText,{tagName:"div",inline:!1,placeholder:"Write instructions…",value:t.steps,onChange:function(t){e.setAttributes({steps:t})}}))},save:function(e){var t=e.attributes;return Object(r.createElement)("div",{className:e.className},Object(r.createElement)(a.RichText.Content,{tagName:"h2",value:t.title}),t.mediaURL&&Object(r.createElement)("div",{className:"recipe-image"},Object(r.createElement)("img",{src:t.mediaURL})),Object(r.createElement)("h3",null,"Ingredients"),Object(r.createElement)(a.RichText.Content,{tagName:"ul",className:"ingredients",value:t.ingredients}),Object(r.createElement)("h3",null,"Instructions"),Object(r.createElement)(a.RichText.Content,{tagName:"div",className:"steps",value:t.steps}))}})}]);