const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.body;e.addEventListener("click",(function(){intervalId=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(intervalId),e.disabled=!1,t.disabled=!0,d.style.backgroundColor=""}));
//# sourceMappingURL=01-color-switcher.b0760b52.js.map
