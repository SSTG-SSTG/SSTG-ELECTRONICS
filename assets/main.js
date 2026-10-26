(function(){
  var WA="918220732684";
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.textContent=o?'Close':'Menu';});}
  document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear();});
  var sel=document.getElementById('service');
  if(sel&&sel.tagName==='SELECT'){
    var q=new URLSearchParams(location.search).get('service');
    if(q){for(var i=0;i<sel.options.length;i++){if(sel.options[i].text===q){sel.selectedIndex=i;}}}
  }
  function validPhone(v){return /^[6-9]\d{9}$/.test(v.replace(/[\s+\-]/g,'').replace(/^91/,''));}
  document.querySelectorAll('form[data-wa]').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var ph=f.querySelector('[name=phone]'),er=f.querySelector('.err');
      if(ph&&!validPhone(ph.value)){er.textContent='Enter a valid 10-digit mobile number.';er.style.display='block';ph.focus();return;}
      if(er){er.style.display='none';}
      var lines=[f.getAttribute('data-wa')];
      f.querySelectorAll('[name]').forEach(function(el){
        if(el.value.trim()){lines.push(el.getAttribute('data-label')+': '+el.value.trim());}
      });
      window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener');
    });
  });
})();
