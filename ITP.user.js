// ==UserScript==
// @name       ITP
// @namespace  http://thomshutt.com/greasemonkey
// @version    0.1
// @description Reminds you to use the ITP Amazon link 
// @include    http*://amazon.*
// @include    http*://www.amazon.*
// @exclude    http*://*amazon.*indietravel*
// @exclude    http*://www.*.amazon.*
// @copyright  2013 Thom Shutt 
// ==/UserScript==

var node = document.body;
var infoDiv = d