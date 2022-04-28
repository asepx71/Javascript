<script>
//<![CDATA[
var tmpNRghtClick='<div id="scrCoverRedirect"><div class="elmCoverShareFbGroup"><img src="" border="0"/></div>';
$("body").append(tmpNRghtClick);
function addEvent(obj, evt, fn) {
if (obj.addEventListener) {
obj.addEventListener(evt, fn, false);
} else if (obj.attachEvent) {
obj.attachEvent("on" + evt, fn);
}}
addEvent(window, "load", function(e) {
addEvent(document, "mouseout", function(e) {
e = e ? e : window.event;
var from = e.relatedTarget || e.toElement;
if (!from || from.nodeName == "HTML") {
setTimeout(function(){window.location.assign("http://codeflare.6te.net/Protection.html");},500);
$("#scrCoverRedirect").show("blind");
if($('.elmCoverShareFbGroup img').attr('src')==''){
$('.elmCoverShareFbGroup img').attr('src','https://1.bp.blogspot.com/-L7vJE650ZV0/X50FEzsYhaI/AAAAAAAADGM/-ZljwmzxIhg_JikIcacGLofsCWwAl__4wCLcBGAsYHQ/s256/codeflare-hacker-512.png');
}}});});
//]]>
</script>
