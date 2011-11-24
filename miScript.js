$(document).ready
(	
	function()
	{
		$("#botonesRegistrarse .alertaGuardar").click
		(
			function()
			{
				alert("SE GUARDO SU INFORMACION"); 		
			}
		);
		
		$("#botonesSesion .alertaSesion").click
		(
			function()
			{
				alert("SESION INICIADA"); 		
			}
		);
		
		$("#botonesContactenos .alertaContactenos").click
		(
			function()
			{
				alert("GRACIAS POR SUCONSULTA"); 		
			}
		);
	}
	function confirmaFormaPago(){
		var pagina1="inicio.html"
		var pagina2="carro.html"
		var rd_Modopago = $("input:radio[name='rd_Modopago']:checked'").val();
		if (rd_Modopago == 1){
			return pagina1;
		}else{
			return pagina2;
		}
	}
);


