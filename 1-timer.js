import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s,f}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),n={day:document.querySelector("[data-days]"),hour:document.querySelector("[data-hours]"),minute:document.querySelector("[data-minutes]"),second:document.querySelector("[data-seconds]")};let i,c;o.disabled=!0;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,dateFormat:"Y-m-d H:i",minuteIncrement:1,onClose(e){g(e)}};s.settings({resetOnHover:!0,icon:"material-icons",class:"custom-toast",icon:"icon-person",color:"#ef4040",titleSize:"16px",titleColor:"#fff",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",progressBarColor:"#b51b1b",theme:"light",progressBar:!0,timeout:2500,close:!1});const p=new Date;function g(e){const t=e[0];t<p?s.show({title:"Error",message:"Please choose a date in the future"}):(i=t,o.disabled=!1)}f("#datetime-picker",h);function r(e){const d=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:l,seconds:m}}function S(){const e=new Date().getTime(),t=i.getTime()-e;if(t<=0){clearInterval(c),o.disabled=!1,a.disabled=!1;return}else n.day.innerText=String(r(t).days).padStart(2,"0"),n.hour.innerText=String(r(t).hours).padStart(2,"0"),n.minute.innerText=String(r(t).minutes).padStart(2,"0"),n.second.innerText=String(r(t).seconds).padStart(2,"0")}function y(){c=setInterval(S,1e3),o.disabled=!0,a.disabled=!0}o.addEventListener("click",y);
//# sourceMappingURL=1-timer.js.map
