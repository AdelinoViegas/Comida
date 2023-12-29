
/*Menu mobile*/
let estado = true;
let menuToggle = document.getElementById('menutoggle');
let nav = document.getElementById('nav'); 
	
	menuToggle.onclick  = ()=>{
		document.body.style.overflow = estado ? 'hidden' : 'initial'; 
		nav.classList.toggle('on');
     	estado = !estado;
   }



