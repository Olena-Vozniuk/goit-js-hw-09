!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body;t.addEventListener("click",(function(){intervalId=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(intervalId),t.disabled=!1,e.disabled=!0,n.style.backgroundColor=""}))}();
//# sourceMappingURL=01-color-switcher.5ed9c3bf.js.map