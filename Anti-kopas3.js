<script type='text/javascript'>
//<![CDATA[
var txtNotify = "Copied to clipboard !!!";
var txtAltName = "Sumber";
var txtSource = "";
var useNotify = true;
/* Main Script */
function showcopytip(){
var a = document.createElement('div');
a.id = 'CFLtooltip';
a.style.cssText = 'position:fixed;background:#0083da;color:white;padding:5px;z-index:+99999;border-radius:5px; font-size:16px;box-shadow:0px 3px 3px rgba(0,0,0,.4);transition:opacity 0.3s;top:0;left:calc(50% - 80px);clear:both;width:160px;text-align:center;';
a.innerHTML = txtNotify;
document.body.appendChild(a);
var b = setTimeout(function(){
$('#CFLtooltip').remove();
}, 1000);}

function addLink(e) {
e.preventDefault();
if(txtSource==""){txtSource=document.location.href;}
var today = new Date();
var pagelink = '\n\n'+'\u00a9 '+today.getFullYear()+' '+document.title+'\n'+txtAltName+' : <a href="'+document.location.href+'">'+txtSource+'</a>'+'\n'+'\u26A0 Do not share without permission.';
copytext = window.getSelection() + pagelink;
if(useNotify==true){showcopytip();}
clipdata = e.clipboardData || window.clipboardData;
if(clipdata){clipdata.setData('Text', copytext);}}
document.addEventListener('copy', addLink);
//]]>
</script>
