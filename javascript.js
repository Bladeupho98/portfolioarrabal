var perros=[];

function llamada(){
	$.getJSON('https://dog.ceo/api/breeds/list', function(data) {
		if(data.status=="success"){
			perros=data.message;
			console.log(perros);
		}
	});
	rellenoselect(1000);
}

llamada();

function rellenoselect(valor){
	setTimeout(function hola(){
		for (var i = 0; i < perros.length; i++) {
			$('.slt').append('<option value="'+perros[i]+'">'+perros[i]+'</option>');
			console.log(perros[i]);
		}
	},valor);
}

$('.slt').change(function(e) {
	$('.contenido').empty();
	var basenji=$(this).val();
	pintarfotos(basenji);
	console.log($(this).val());
});

function pintarfotos(raza){
	var cont=10;
	var takata=setInterval(function carga(){
		if(cont>0){
			$.getJSON('https://dog.ceo/api/breed/'+raza+'/images/random', function(data) {
				if(data.status=="success"){
					$('.contenido').append('<img class ="foto" src="'+data.message+'">');
					console.log(data.message);
				}
			});
			cont-=1;
		}else{detener(takata);}
	},500)
}

function detener(intervalo){
	clearInterval(intervalo);
}