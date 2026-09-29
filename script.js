function toggleMenu(){const menu=document.getElementById('menu');menu.classList.toggle('active')}

function enviarWhatsApp(event){
    event.preventDefault();
    const nombre=document.getElementById('nombre').value.trim();
    const empresa=document.getElementById('empresa').value.trim();
    const telefono=document.getElementById('telefono').value.trim();
    const servicio=document.getElementById('servicio').value;
    const mensaje=document.getElementById('mensaje').value.trim();
    const texto=`Hola, LimpiaPro.\n\nQuisiera solicitar una cotización.\n\nNombre: ${nombre}\nEmpresa: ${empresa}\nTeléfono: ${telefono}\nServicio requerido: ${servicio}\nDetalle: ${mensaje}`;
    const url='https://wa.me/51999999999?text='+encodeURIComponent(texto);
    window.open(url,'_blank','noopener,noreferrer');
}

document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>document.getElementById('menu').classList.remove('active')));