var image__portada = $("#portada__avatar");
var input__portada = $("#portada");
var button__subir = $("#button__subir__portada");
$(image__portada).on('click',function(){
	input__portada.click();
});
$(button__subir).on('click',function(){
	image__portada.attr('src','../assets/images/background/avatar5.png');
})