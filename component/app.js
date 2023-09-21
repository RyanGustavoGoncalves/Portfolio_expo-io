function rodar(){
    document.getElementById('girar').style.transform = 'rotate(180deg)';
    document.getElementById('girar').style.transition = '0.5s'
    var volt = document.getElementById('girar');
    volt.addEventListener("mouseleave", (voltar) => {
        document.getElementById('girar').style.transform = 'rotate(0deg)';
        document.getElementById('girar').style.transition = '0.5s'
    });
}
// function voltar(){
//     document.getElementById('girar').style.transform = 'rotate(0deg)';
//     document.getElementById('girar').style.transition = '0.5s'
// }

function zoomTxt_T(elemento){
    const txt = elemento.innerText;
    const popup = document.getElementById('popup');
    const txtPop = document.getElementById('txtPop');
    document.body.classList.add('overFlow');

    txtPop.innerHTML = txt;
    popup.style.display = 'block';
}
function zoomTxt_F(){
    const popup = document.getElementById('popup');
    document.body.classList.remove('overFlow');

    popup.style.display = 'none';
}
