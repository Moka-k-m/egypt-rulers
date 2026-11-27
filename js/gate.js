(function(){
 var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 var busy=false,el;
 function build(){
  el=document.createElement('div');el.id='rgate';el.setAttribute('aria-hidden','true');
  el.innerHTML='<i class="rg-l"></i><i class="rg-r"></i><i class="rg-beam"></i><i class="rg-flash"></i><i class="rg-vig"></i><div class="rg-card"><i class="rg-rays"></i><small class="rg-tag"></small><small class="rg-era"></small><b class="rg-name"></b><span class="rg-line"></span><em class="rg-yrs"></em></div>';
  document.body.appendChild(el);
 }
 function letters(t){return String(t||'').split(' ').map(function(w,i){return '<u style="animation-delay:'+(i*250)+'ms">'+w+'</u>'}).join(' ')}
 var RG={on:{},run:function(info,mid){
  if(busy){mid();return;}
  if(!el)build();
  busy=true;
  var ev=RG.on||{};
  el.querySelector('.rg-tag').textContent=info.tag||'';
  el.querySelector('.rg-era').textContent=info.era||'';
  el.querySelector('.rg-name').innerHTML=letters(info.name);
  el.querySelector('.rg-yrs').textContent=info.years||'';
  void el.offsetWidth;
  el.className=reduce?'on rd':'on';
  var t1=reduce?160:700, t2=reduce?700:2700;
  if(ev.close)try{ev.close()}catch(e){}
  setTimeout(function(){try{mid()}catch(e){}el.classList.add('show');if(ev.show)try{ev.show()}catch(e){}},t1);
  setTimeout(function(){el.classList.add('out');if(ev.open)try{ev.open()}catch(e){}},t2-(reduce?200:900));
  setTimeout(function(){el.className='';busy=false},t2);
 }};
 window.RulerGate=RG;
})();
