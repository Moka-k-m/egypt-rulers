(function(){
 var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 var lite=(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4)||(navigator.deviceMemory&&navigator.deviceMemory<=4)||/Android [4-9]\b|Android 1[0-1]\b/.test(navigator.userAgent)&&Math.min(screen.width,screen.height)<=420&&(window.devicePixelRatio||1)<=2.5;
 var busy=false,el;
 function build(){
  el=document.createElement('div');el.id='rgate';el.setAttribute('aria-hidden','true');
  el.innerHTML='<i class="rg-l"></i><i class="rg-r"></i><i class="rg-beam"></i><i class="rg-flash"></i><i class="rg-vig"></i><div class="rg-card"><i class="rg-rays"></i><small class="rg-tag"></small><small class="rg-era"></small><b class="rg-name"></b><span class="rg-line"></span><em class="rg-yrs"></em><div class="rg-mapw"></div></div>';
  document.body.appendChild(el);
 }
 function letters(t){return String(t||'').split(' ').map(function(w,i){return '<u style="animation-delay:'+(i*250)+'ms">'+w+'</u>'}).join(' ')}

 var MAP={land:"M5.8 3.3 L15.1 4.0 L24.3 5.5 L35.5 8.5 L47.9 7.0 L52.3 4.0 L57.7 3.5 L64.8 4.0 L69.2 6.3 L79.8 8.0 L86.3 6.2 L89.1 15.0 L92.2 24.1 L90.2 28.7 L88.3 38.0 L86.5 41.7 L80.7 36.6 L76.3 28.5 L72.7 23.0 L71.4 19.5 L69.6 23.0 L72.3 28.0 L76.3 35.5 L82.5 46.5 L83.6 51.5 L92.2 68.3 L97.4 80.0 L98.5 90.0 L110.0 99.0 L4.4 99.0 L4.4 29.0Z",nile:["M74.5 78.1 L74.2 69.2 L72.3 62.0 L72.9 57.4 L63.9 53.4 L59.3 47.2 L55.4 38.0 L58.5 28.3 L59.8 18.5","M59.8 18.5 L58.5 14.0 L56.8 10.0 L52.3 4.4","M59.8 18.5 L61.2 14.0 L62.1 9.0 L64.9 4.3"],caps:{"منف":[59.9,20.5],"طيبة":[72.2,61.8],"إيت تاوي":[59.6,23.3],"أخيتاتون (العمارنة)":[56.8,42.5],"بر-رمسيس":[65.0,11.0],"الإسكندرية":[48.1,7.0],"الفسطاط":[59.7,19.0],"القطائع":[59.9,18.7],"القاهرة":[60.0,18.5]}};
 function mapHTML(cap){
  var c=MAP.caps[cap];if(!c)return '';
  var left=c[0]>62,tx=left?c[0]-6.5:c[0]+6.5;
  return '<svg class="rg-map" viewBox="0 0 110 100" aria-hidden="true"><path class="mp-land" d="'+MAP.land+'"/>'+MAP.nile.map(function(p){return '<path class="mp-nile" d="'+p+'"/>'}).join('')+'<circle class="mp-ring" cx="'+c[0]+'" cy="'+c[1]+'" r="3"/><circle class="mp-ring r2" cx="'+c[0]+'" cy="'+c[1]+'" r="3"/><g class="mp-pin"><circle cx="'+c[0]+'" cy="'+c[1]+'" r="2.1"/></g><text class="mp-lbl" x="'+tx+'" y="'+(c[1]+2.4)+'" text-anchor="'+(left?'end':'start')+'">'+cap.replace(/ \(.*\)/,'')+'</text></svg>';
 }
 var RG={on:{},run:function(info,mid,after){
  if(busy){mid();if(after)try{after()}catch(e){}return;}
  if(!el)build();
  busy=true;
  var ev=RG.on||{};
  el.querySelector('.rg-tag').textContent=info.tag||'';
  el.querySelector('.rg-era').textContent=info.era||'';
  el.querySelector('.rg-name').innerHTML=letters(info.name);
  el.querySelector('.rg-yrs').textContent=info.years||'';
  var mh=mapHTML(info.cap);var mhtml=mh?mh+'<div class="rg-cap"><span>العاصمة</span>'+String(info.cap).replace(/ \(.*\)/,'')+'</div>':'';el.querySelector('.rg-mapw').innerHTML='';
  void el.offsetWidth;
  el.className=(reduce?'on rd':'on')+(lite?' lite':'');
  var t1=reduce?160:700, t2=reduce?(mh?1900:700):(mh?6000:2700);
  if(ev.close)try{ev.close()}catch(e){}
  setTimeout(function(){try{mid()}catch(e){}el.classList.add('show');setTimeout(function(){if(busy)el.querySelector('.rg-mapw').innerHTML=mhtml},reduce?0:150);if(ev.show)try{ev.show()}catch(e){}},t1);
  setTimeout(function(){el.classList.add('out');if(ev.open)try{ev.open()}catch(e){}if(after)try{after()}catch(e){}},t2-(reduce?200:900));
  setTimeout(function(){el.className='';busy=false},t2);
 }};
 window.RulerGate=RG;
})();
