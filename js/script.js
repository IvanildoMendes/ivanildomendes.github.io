function che(){
	document.getElementById("resul").disabled = true;
	let cke1 = document.getElementById("L");
	if(cke1.checked){
		var texto1 = "<input type=radio class=input id=minu name=mi value=minu checked> Minúsculo<br>";
		document.getElementById("min").innerHTML = texto1;
		var texto2 = "<input type=radio class=input id=maus name=mi value=maus > Maiúsculo<br>";
		document.getElementById("mas").innerHTML = texto2;
		var texto3 = "<input type=radio class=input id=minu_maus name=mi value=minu_maus > Minúsculo/Maiúsculo<br>";
		document.getElementById("min_mas").innerHTML = texto3;
	}else{
		document.getElementById("min").innerHTML = "";
		document.getElementById("mas").innerHTML = "";
		document.getElementById("min_mas").innerHTML = "";
	}

}
	
function gerar(){
	let cke1 = document.getElementById("L");
	let cke2 = document.getElementById("N");
	let cke3 = document.getElementById("S");
	if((cke1.checked)||(cke2.checked)||(cke3.checked)){
		gera();
	}else{
		caixa("<b>Selecione algum dos tipos de caracteres para entrada.</b>");
	}
}
	
function gera(){
	var abc = Array();
	var abcmi = Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
	var abcMA = Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	var nume = Array("0","1","2","3","4","5","6","7","8","9");
	var simbo = Array("_","&","@","#","!",";",".","$","%");
	
	var cara = document.getElementById("numero").value;
	let cke1 = document.getElementById("L");
	let cke2 = document.getElementById("N");
	let cke3 = document.getElementById("S");
	if(cke1.checked){
		var rad1 = document.querySelector('#minu').checked;
		if(rad1){
			abc = abc.concat(abcmi);
		}
		var rad2 = document.querySelector('#maus').checked;
		if(rad2){
			abc = abc.concat(abcMA);
		}
		var rad3 = document.querySelector('#minu_maus').checked;
		if(rad3){
			abc = abc.concat(abcmi);
			abc = abc.concat(abcMA);
		}
	}
	if(cke2.checked){
		abc = abc.concat(nume);
	}
	if(cke3.checked){
		abc = abc.concat(simbo);
	}
	var qu = abc.length - 1;
	var str = "";
	for(var a = 0;a < cara;a++){
		var numRan = Math.abs(Math.random()*(qu - 0) + 0).toFixed(0);
		str = str + abc[numRan];
	}
	document.getElementById('resul').value = str;
}
	
function copiar(){
	document.getElementById("resul").disabled = false;
	document.querySelector("#resul").select(); 
	document.execCommand("copy");
	document.getElementById("resul").disabled = true;
	caixa("<b>Senha copiada.</b>");
}



function caixa(texto){
	document.getElementById("resultado").innerHTML = texto;
	var square = document.getElementById("tes");
	square.style.transform = "translateY(400px)";
	setTimeout(feixarCaixa, 4000);
}

function feixarCaixa(){
	var square = document.getElementById("tes");
	square.style.transform = "translateY(0px)";
}


/*rodape*/
function ano(){
	var data = new Date();
	var ano = data.getFullYear();
	document.getElementById('copyraty').innerHTML = `2022 - ${ano} Copyright&#169; Todos os direitos resevados - by ivanildo.net.br. All Rights Reserved.`;
}
