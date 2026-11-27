(function(){
 var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduce)return;
 // scroll reveal
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.08,rootMargin:'0px 0px -6% 0px'});
  var sel='main section > *, main article, main .grid > *, footer > *';
  document.querySelectorAll(sel).forEach(function(el,i){
   var r=el.getBoundingClientRect(); if(r.top<innerHeight*.9){return;}
   el.classList.add('rv'); el.style.transitionDelay=(i%4)*60+'ms'; io.observe(el);
  });
 }
 // page transition
 document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href]'); if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||a.target==='_blank')return;
  var u=new URL(a.href,location.href); if(u.origin!==location.origin||u.pathname===location.pathname&&u.search===location.search)return;
  e.preventDefault(); document.body.classList.add('leaving'); setTimeout(function(){location.href=a.href},200);
 });
 window.addEventListener('pageshow',function(){document.body.classList.remove('leaving')});
 // sand / dust motes
 var c=document.createElement('canvas'); c.id='dustCanvas'; document.body.appendChild(c);
 var x=c.getContext('2d'),w,h,dpr=Math.min(devicePixelRatio||1,2),n=innerWidth<640?22:48,ps=[],run=true;
 function size(){w=c.width=innerWidth*dpr;h=c.height=innerHeight*dpr}
 size(); addEventListener('resize',size);
 for(var i=0;i<n;i++)ps.push({x:Math.random(),y:Math.random(),r:(Math.random()*1.4+.5)*dpr,vx:(Math.random()*.00006+.00002),vy:-(Math.random()*.00005+.00001),a:Math.random()*.5+.2,t:Math.random()*6});
 document.addEventListener('visibilitychange',function(){run=!document.hidden;if(run)requestAnimationFrame(f)});
 function f(){ if(!run)return; x.clearRect(0,0,w,h);
  for(var i=0;i<ps.length;i++){var p=ps[i];p.x+=p.vx*16;p.y+=p.vy*16;p.t+=.02;
   if(p.x>1.02)p.x=-.02; if(p.y<-.02){p.y=1.02;p.x=Math.random();}
   x.globalAlpha=p.a*(.6+.4*Math.sin(p.t)); x.fillStyle='#f2ca50'; x.beginPath(); x.arc(p.x*w,p.y*h,p.r,0,6.283); x.fill();}
  requestAnimationFrame(f);}
 requestAnimationFrame(f);
})();

;(function(){var a=document.createElement('div');a.id='ambient';a.innerHTML='<div class="rays"></div><div class="disc"></div><div class="disc b"></div><div class="sweep"></div><div class="glyph g1"><svg viewBox="0 0 100 100"><circle cx="50" cy="38" r="16"/><path d="M50 54v40M34 68h32"/></svg></div><div class="glyph g2"><svg viewBox="0 0 100 100"><path d="M10 50Q50 18 90 50Q50 82 10 50Z"/><circle cx="50" cy="50" r="10"/><path d="M50 60v22q-8 10-18 8"/></svg></div><div class="glyph g3"><svg viewBox="0 0 100 100"><path d="M50 85V45M50 60Q30 55 28 30Q45 38 50 60M50 60Q70 55 72 30Q55 38 50 60M50 45Q40 30 50 12Q60 30 50 45"/></svg></div><div class="glyph g4"><svg viewBox="0 0 100 100"><path d="M20 80V30M20 30q-6-12 6-14t6 14M50 80V20M50 20q-6-12 6-14t6 14M80 80V30M80 30q-6-12 6-14t6 14M10 80h80"/></svg></div><svg class="dunes " viewBox="0 0 1200 200" preserveAspectRatio="none"><path d="M0 120C100 60 200 60 300 110S500 160 600 110 700 60 800 80 1000 150 1200 120V200H0Z" fill="#7a4a1c"/></svg><svg class="dunes d2" viewBox="0 0 1200 200" preserveAspectRatio="none"><path d="M0 120C100 60 200 60 300 110S500 160 600 110 700 60 800 80 1000 150 1200 120V200H0Z" fill="#a8742c"/></svg>';document.body.insertBefore(a,document.body.firstChild)})();

;(function(){var feed=document.getElementById('chatFeed');if(!feed)return;var sec=feed.closest('section');if(!sec)return;
var mq=window.matchMedia('(max-width:700px)');
function apply(){var on=mq.matches;document.body.classList.toggle('chat-fs',on);sec.classList.toggle('fs-chat',on);
 if(on){var h=document.querySelector('header,nav');var b=0;document.querySelectorAll('header,nav').forEach(function(e){var cs=getComputedStyle(e);if(cs.position==='fixed'||cs.position==='sticky'){b=Math.max(b,e.getBoundingClientRect().bottom)}});
 sec.style.setProperty('--hdr',Math.round(b||100)+'px')}}
apply();(mq.addEventListener?mq.addEventListener('change',apply):mq.addListener(apply));window.addEventListener('resize',apply);})();

;(function(){var h1=document.querySelector('main h1');var hero=h1&&h1.closest('section');if(!hero||!/index\.html$|\/$/.test(location.pathname))return;
hero.classList.add('pylon-hero');
var wing='<svg viewBox="0 0 400 110" class="scarab" aria-hidden="true"><g fill="none" stroke="#f2ca50" stroke-width="2" stroke-linecap="round"><path d="M200 60C170 30 110 20 20 40c50 4 80 14 100 32-30-4-60-2-95 12 50-4 90 2 120 14M200 60c30-30 90-40 180-20-50 4-80 14-100 32 30-4 60-2 95 12-50-4-90 2-120 14"/><path d="M60 52c40 0 80 8 110 24M340 52c-40 0-80 8-110 24M95 70c30 0 55 6 80 18M305 70c-30 0-55 6-80 18" opacity=".6"/></g><circle cx="200" cy="34" r="16" fill="#f2ca50" opacity=".9"/><ellipse cx="200" cy="72" rx="15" ry="19" fill="#0d1f45" stroke="#f2ca50" stroke-width="2.5"/><path d="M200 55v34M186 66l28 12M214 66l-28 12" stroke="#f2ca50" stroke-width="1.5"/></svg>';
var tower='<div class="pylon-tower"><i></i><i></i><i></i><i></i><i></i></div>';
hero.insertAdjacentHTML('afterbegin','<div class="pylon pylon-l">'+tower+'</div><div class="pylon pylon-r">'+tower+'</div><div class="lintel"><div class="cornice"></div>'+wing+'</div>');
h1.classList.add('cartouche');
})();
;(function(){if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;var a=document.getElementById('ambient');if(!a)return;var rays=a.querySelector('.rays'),d1=a.querySelector('.disc'),d2=a.querySelector('.disc.b'),t=0;
function f(){t=0;var y=scrollY;a.style.setProperty('--py',(y*-.12).toFixed(1)+'px');a.style.setProperty('--py2',(y*.08).toFixed(1)+'px')}
addEventListener('scroll',function(){if(!t)t=requestAnimationFrame(f)},{passive:true});
document.querySelectorAll('main [class*="rounded-xl"]').forEach(function(c){if(matchMedia('(hover:hover)').matches)c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');c.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')})})})();

;(function(){var a=document.getElementById('ambient');if(!a||!/index\.html$|\/$/.test(location.pathname))return;
var c=navigator.connection||{};var slow=c.saveData||/(^|-)2g$/.test(c.effectiveType||'');
var box=document.createElement('div');box.className='bgvideo';box.style.backgroundImage='url(pyramids-poster.jpg)';a.insertBefore(box,a.firstChild);
if(!slow&&matchMedia('(hover:hover) and (min-width:901px)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){var v=document.createElement('video');v.muted=true;v.loop=true;v.playsInline=true;v.autoplay=true;v.setAttribute('muted','');v.setAttribute('playsinline','');v.preload='auto';v.src='pyramids-loop.mp4';v.addEventListener('playing',function(){box.classList.add('on')});box.appendChild(v);var p=v.play();if(p&&p.catch)p.catch(function(){});
document.addEventListener('visibilitychange',function(){document.hidden?v.pause():v.play().catch(function(){})})}
var f=document.querySelector('footer');if(f){var s=document.createElement('p');s.className='vid-credit';s.textContent='لقطات الخلفية: Blanka OG، عبر Pexels (ترخيص Pexels المجاني).';f.appendChild(s)}
})();
