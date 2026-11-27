(function(){
 function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
 var F={build:function(r){
  var w=el('div','rf');
  var a=(r.achievements||[]).filter(Boolean);
  var m=(r.artifacts||[]).filter(function(x){return x&&x.title});
  var c1=el('section','rf-col');
  var h1=el('h3','rf-h');h1.appendChild(el('i','rf-ic','\u2605'));h1.appendChild(el('span','', 'أهم إنجازات '+r.name));c1.appendChild(h1);
  var ol=el('ol','rf-ol');a.forEach(function(t,i){var li=el('li','');li.appendChild(el('b','',String(i+1)));li.appendChild(el('span','',t));ol.appendChild(li)});c1.appendChild(ol);
  w.appendChild(c1);
  if(m.length){
   var c2=el('section','rf-col');
   var h2=el('h3','rf-h');h2.appendChild(el('i','rf-ic','\u25B2'));h2.appendChild(el('span','','أبرز الآثار والمعالم'));c2.appendChild(h2);
   var ul=el('ul','rf-ul');m.forEach(function(x){var li=el('li','');li.appendChild(el('strong','',x.title));if(x.location)li.appendChild(el('small','','\u2316 '+x.location));ul.appendChild(li)});c2.appendChild(ul);
   w.appendChild(c2);
  }
  return w;
 },
 render:function(host,r){if(!host||!r)return;host.innerHTML='';host.appendChild(F.build(r))}};
 window.RulerFacts=F;
})();
