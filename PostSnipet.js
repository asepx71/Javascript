function customFeaturedPostSnippet(){var e=document.querySelector(".featured-info .featured-desc"),t=document.querySelector(".featured-info .js-featured-desc");null!==t&&(e.innerHTML=t.innerHTML.slice(4,-3))}function customPostSnippet(){for(var e,t,n=document.querySelectorAll(".post-outer"),o=0;o<n.length;o++)e=n[o].querySelector(".post-snippet"),null!==(t=n[o].querySelector(".js-post-snippet"))&&(e.innerHTML=t.innerHTML.slice(4,-3))}customFeaturedPostSnippet(),customPostSnippet(),"undefined"!=typeof infinite_scroll&&infinite_scroll.on("load",function(){customPostSnippet()});