(function(){
 function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
 var F={build:function(r){
  var w=el('div','rf');
  var a=(r.achievements||[]).filter(Boolean);
  var m=[];(r.artifacts||[]).forEach(function(x,i){if(x&&x.title){x._i=i;m.push(x)}});
  var c1=el('section','rf-col');
  var h1=el('h3','rf-h');h1.appendChild(el('i','rf-ic','\u2605'));h1.appendChild(el('span','', 'أهم إنجازات '+r.name));c1.appendChild(h1);
  var ol=el('ol','rf-ol');a.forEach(function(t,i){var li=el('li','');li.appendChild(el('b','',String(i+1)));li.appendChild(el('span','',t));ol.appendChild(li)});c1.appendChild(ol);
  w.appendChild(c1);
  if(m.length){
   var c2=el('section','rf-col');
   var h2=el('h3','rf-h');h2.appendChild(el('i','rf-ic','\u25B2'));h2.appendChild(el('span','','أبرز الآثار والمعالم'));c2.appendChild(h2);
   var ul=el('ul','rf-ul');m.forEach(function(x){var li=el('li','');var mi=window.monImg&&window.monImg(r,x._i);if(mi){li.className='rf-has';var im=new Image();im.loading='lazy';im.decoding='async';im.width=120;im.height=80;im.alt=x.title;im.src=mi.s;im.className='rf-img';li.appendChild(im)}var tx=el('div','rf-tx');tx.appendChild(el('strong','',x.title));if(x.location)tx.appendChild(el('small','','\u2316 '+x.location));if(mi){var cr=el('a','rf-cr','\uD83D\uDCF7 '+mi.a+' \u00B7 '+mi.l);cr.href=mi.u;cr.target='_blank';cr.rel='noopener';tx.appendChild(cr)}li.appendChild(tx);ul.appendChild(li)});c2.appendChild(ul);
   w.appendChild(c2);
  }
  return w;
 },
 render:function(host,r){if(!host||!r)return;host.innerHTML='';host.appendChild(F.build(r))}};
 window.RulerFacts=F;
})();
