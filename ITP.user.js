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
var infoDiv = document.createElement('div');
infoDiv.style.width= "100%";
infoDiv.style.backgroundColor = "orange";
infoDiv.innerHTML = "<center>HAVE YOU USED A REFERRAL LINK?? If not, then click: <a href='http://www.indietravelpod