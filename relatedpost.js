var randomRelatedIndex,showRelatedPost;!function(e,t,a){var n={widgetTitle:"<h3 class='title'>Related Posts</h3>",widgetStyle:1,homePage:"http://www.jagodesain.com",numPosts:7,summaryLength:320,titleLength:"auto",thumbnailSize:200,noImage:"data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",containerId:"related-posts",newTabLink:!1,moreText:"Read more",callBack:function(){}};for(var l in relatedPostConfig)n[l]="undefined"==relatedPostConfig[l]?n[l]:relatedPostConfig[l];var r=function(e){var n=t.createElement("script");n.async="async",n.rel="preload",n.src=e,a.appendChild(n)},i=function(e){var t,a,n=e.length;if(0===n)return!1;for(;--n;)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},s="object"==typeof labelArray&&labelArray.length>0?"/-/"+i(labelArray)[0]:"";randomRelatedIndex=function(e){var t=e.feed.openSearch$totalResults.$t-n.numPosts,a=function(e,t){return Math.floor(Math.random()*(t-1+1))+1}(0,t>0?t:1);r(n.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+s+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+n.numPosts+"&callback=showRelatedPost")},showRelatedPost=function(e){var t,a,l,r,s=document.getElementById(n.containerId),o=i(e.feed.entry),d=n.widgetStyle,m=n.widgetTitle+'<ul class="related style-'+d+'">';if(n.newTabLink,s){for(var c=0;c<n.numPosts&&c!=o.length;c++){a=o[c].title.$t,l="auto"!==n.titleLength&&n.titleLength<a.length?a.substring(0,n.titleLength)+"&hellip;":a,r="media$thumbnail"in o[c]&&!1!==n.thumbnailSize?o[c].media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/\/s[0-9]+(\-c)?/,"/s"+n.thumbnailSize):n.noImage,"summary"in o[c]&&n.summaryLength>0&&o[c].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,n.summaryLength);for(var u=0,h=o[c].link.length;u<h;u++)t="alternate"==o[c].link[u].rel?o[c].link[u].href:"#";m+='<li><div class="item"><div class="itemThumbnail"><a aria-label="'+l+'" href="'+t+'"><div class="lazy" data-bg="'+r+'"></div></a></div><div class="itemTitle"><a href="'+t+'"><span>'+l+"</span></a></div></div></li>"}s.innerHTML=m+="</ul>",n.callBack()}},r(n.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+s+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")}(window,document,document.getElementsByTagName("head")[0]);
