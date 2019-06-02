/**
 * skylark-tinycon - A version of tinycon that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.2
 * @link https://github.com/skylark-integration/skylark-tinycon/
 * @license MIT
 */
define(["skylark-langx/skylark"],function(e){var t,n={},i=null,r=null,o=null,a=null,l={},c=window.devicePixelRatio||1,u=16*c,f={width:7,height:9,font:10*c+"px arial",color:"#ffffff",background:"#F03D25",fallback:!0,crossOrigin:!0,abbreviate:!0},g=(t=navigator.userAgent.toLowerCase(),function(e){return-1!==t.indexOf(e)}),h=g("trident"),d=(g("chrome"),g("chrome")||g("safari")),m=g("safari")&&!g("chrome"),s=g("mozilla")&&!g("chrome")&&!g("safari"),b=function(){if(!r||!i){var e=function(){for(var e=document.getElementsByTagName("link"),t=0,n=e.length;t<n;t++)if((e[t].getAttribute("rel")||"").match(/\bicon\b/i))return e[t];return!1}();i=e?e.getAttribute("href"):"/favicon.ico",r||(r=i)}return i},v=function(){return a||((a=document.createElement("canvas")).width=u,a.height=u),a},k=function(e){if(e){!function(){for(var e=document.getElementsByTagName("link"),t=document.getElementsByTagName("head")[0],n=0,i=e.length;n<i;n++)void 0!==e[n]&&(e[n].getAttribute("rel")||"").match(/\bicon\b/i)&&t.removeChild(e[n])}();var t=document.createElement("link");t.type="image/x-icon",t.rel="icon",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)}},y=function(e){if(l.fallback){var t=document.title;"("===t[0]&&(t=t.slice(t.indexOf(" "))),document.title=(e+"").length>0?"("+e+") "+t:t}},T=function(e,t,n){"number"==typeof t&&t>99&&l.abbreviate&&(t=w(t));var i=(t+"").length-1,r=l.width*c+6*c*i,o=l.height*c,a=u-o,f=u-r-c,g=16*c,h=16*c,m=2*c;e.font=(d?"bold ":"")+l.font,e.fillStyle=l.background,e.strokeStyle=l.background,e.lineWidth=c,e.beginPath(),e.moveTo(f+m,a),e.quadraticCurveTo(f,a,f,a+m),e.lineTo(f,g-m),e.quadraticCurveTo(f,g,f+m,g),e.lineTo(h-m,g),e.quadraticCurveTo(h,g,h,g-m),e.lineTo(h,a+m),e.quadraticCurveTo(h,a,h-m,a),e.closePath(),e.fill(),e.beginPath(),e.strokeStyle="rgba(0,0,0,0.3)",e.moveTo(f+m/2,g),e.lineTo(h-m/2,g),e.stroke(),e.fillStyle=l.color,e.textAlign="right",e.textBaseline="top",e.fillText(t,2===c?29:15,s?7*c:6*c)},x=function(){v().getContext&&k(v().toDataURL())},w=function(e){for(var t=[["G",1e9],["M",1e6],["k",1e3]],n=0;n<t.length;++n)if(e>=t[n][1]){e=C(e/t[n][1])+t[n][0];break}return e},C=function(e,t){return new Number(e).toFixed(t)};return n.setOptions=function(e){for(var t in l={},e.colour&&(e.color=e.colour),f)l[t]=e.hasOwnProperty(t)?e[t]:f[t];return this},n.setImage=function(e){return i=e,x(),this},n.setBubble=function(e,t){return function(e,t){if(!v().getContext||h||m||"force"===l.fallback)return y(e);var n=v().getContext("2d"),i=(t=t||"#000000",b());(o=document.createElement("img")).onload=function(){n.clearRect(0,0,u,u),n.drawImage(o,0,0,o.width,o.height,0,0,u,u),(e+"").length>0&&T(n,e,t),x()},!i.match(/^data/)&&l.crossOrigin&&(o.crossOrigin="anonymous"),o.src=i}(e=e||"",t),this},n.reset=function(){i=r,k(r)},n.setOptions(f),e.attach("itg.tinycon",n)});
//# sourceMappingURL=sourcemaps/tinycon.js.map
