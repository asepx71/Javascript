var uri;if((uri=window.location.toString()).indexOf("%3D","%3D")>0){var clean_uri=uri.substring(0,uri.indexOf("%3D"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("%3D%3D","%3D%3D")>0){clean_uri=uri.substring(0,uri.indexOf("%3D%3D"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("&m=1","&m=1")>0){clean_uri=uri.substring(0,uri.indexOf("&m=1"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("?m=1","?m=1")>0){clean_uri=uri.substring(0,uri.indexOf("?m=1"));window.history.replaceState({},document.title,clean_uri)}var protocol=window.location.protocol.replace(/\:/g,"");if("http"==protocol){var url=window.location.href.replace("http","https");window.location.replace(url)}
