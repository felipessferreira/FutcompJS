
function VerificarConfronto(form){
	var timeCasa = document.getElementById("timeCasa").value;
    timeCasa = parseInt(timeCasa) + 15;
	var select = document.querySelector('select');
	var option = select.children[select.selectedIndex];
	var time1 = option.textContent;
	
    var timeVisitante = document.getElementById("timeVisitante").value;
	var select = document.querySelector('#timeVisitante');
	var option = select.children[select.selectedIndex];
    var time2 = option.textContent;
	
	if(time1 != time2 && time1 != " Casa" && time2 != " Visitante"){
        if(timeCasa > timeVisitante){
            document.getElementById('divResultado').innerHTML = time1 + "vencerá o jogo!";

            }else if(timeVisitante > timeCasa){
                document.getElementById('divResultado').innerHTML = time2 + "vencerá o jogo!";
            } else{
                document.getElementById('divResultado').innerHTML = "O jogo irá empatar!"
            }
        }else{
            alert("Os juízes do Futcomp não conseguem analisar este confronto, selecione equipes diferentes!");
        }
}
