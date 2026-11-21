document.getElementById('year').textContent=new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.topbar nav');
toggle?.addEventListener('click',()=>{const open=nav.style.display==='flex';nav.style.display=open?'none':'flex';if(!open){nav.style.position='absolute';nav.style.top='75px';nav.style.right='5%';nav.style.background='var(--paper)';nav.style.padding='20px';nav.style.flexDirection='column';nav.style.alignItems='flex-start';nav.style.zIndex='10';nav.style.border='1px solid var(--line)';}});
