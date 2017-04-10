$(function(){
    
    function generos(){
                if( $('#gen_masc').prop('checked') && $('#gen_femem').prop('checked')) {
          $("#gen").text("All");
            }
else if ($('#gen_masc').prop('checked') && $('#gen_femem').prop('checked',false)){
          $("#gen").text("Masculino");
            }
            else if ($('#gen_masc').prop('checked') && $('#gen_femem').prop('checked',false)){
          $("#gen").text("Masculino");
            }
            else if ($('#gen_femem').prop('checked') && $('#gen_masc').prop('checked',false)){
          $("#gen").text("Femenino");
            }
            else if ($('#gen_masc').prop('checked',false) && $('#gen_femem').prop('checked',false)){
          $("#gen").text("Nada");}
    }
    function nse(){
        var niveles=[];
        var estratos=[];
        estratos[0]='#nse_1';
        estratos[1]='#nse_2';
        estratos[2]='#nse_3';
        for(var i=0;i<=2;i++ ){
            if( $(estratos[i]).prop('checked')){
        niveles[i]=i+" ";   
    }
    else{
       niveles[i]=" ";    
    }
        }
        if(niveles[0]===" "&&niveles[1]===" "&&niveles[2]===" "){
            
            $("#nse").text("Nada");
            
        }
        else if(niveles[0]!==" "&&niveles[1]!==" "&&niveles[2]!==" "){
            $("#nse").text("All");
        }
        else{
           $("#nse").text("Estrato "+niveles[0]+niveles[1]+niveles[2]);
         
        }
    }
    
     $('#nse_1').on('click',function(){
        nse();
        });
         $('#nse_2').on('click',function(){
        nse();
        });
         $('#nse_3').on('click',function(){
        nse();
        });
 $('#gen_masc').on('click',function(){
            generos();
        });
         $('#gen_femem').on('click',function(){
      generos();
        });
       
       $('#li_masc').on('click',function(){
            $('#gen_masc').click();
            generos();
        });
         $('#a_masc').on('click',function(){
            $('#gen_masc').click();
            generos();
        });
        $('#li_femem').on('click',function(){
            $('#gen_femem').click();
            generos();
        });        
         $('#a_femem').on('click',function(){
            $('#gen_femem').click();
            generos();
        });
        $('#li_nse_3').on('click',function(){
            $('#nse_3').click();
            nse();
        });
        $('#a_nse_3').on('click',function(){
            $('#nse_3').click();
            nse();
        });
        $('#a_nse_2').on('click',function(){
            $('#nse_2').click();
            nse();
        });
        $('#li_nse_2').on('click',function(){
            $('#nse_2').click();
            nse();
        });
        $('#a_nse_1').on('click',function(){
            $('#nse_1').click();
            nse();
        });
        $('#li_nse_1').on('click',function(){
            $('#nse_1').click();
            nse();
        });
        $('#a_edad_1').on('click',function(){
            $('#edad_1').click();
            edad();
        });
        $('#li_edad_1').on('click',function(){
            $('#edad_1').click();
            edad();
        });
        $('#a_edad_2').on('click',function(){
            $('#edad_2').click();
            edad();
        });
        $('#li_edad_2').on('click',function(){
            $('#edad_2').click();
            edad();
        });
        $('#a_edad_3').on('click',function(){
            $('#edad_3').click();
            edad();
        });
        $('#li_edad_3').on('click',function(){
            $('#edad_3').click();
            edad();
        });
        $('#a_edad_4').on('click',function(){
            $('#edad_4').click();
            edad();
        });
        $('#li_edad_4').on('click',function(){
            $('#edad_4').click();
            edad();
        });
        $('#a_edad_5').on('click',function(){
            $('#edad_5').click();
            edad();
        });
        $('#li_edad_5').on('click',function(){
            $('#edad_5').click();
            edad();
        });
        $('#a_edad_6').on('click',function(){
            $('#edad_6').click();
            edad();
        });
        $('#li_edad_6').on('click',function(){
            $('#edad_6').click();
            edad();
        });
        $('#todo_gen').on('click',function(){
            if ( $('#gen_masc').prop('checked',false)){
            $('#gen_masc').click();
            }
            if ( $('#gen_femem').prop('checked',false)){
            $('#gen_femem').click();
            }
            generos();
        });
        $('#nse_todo').on('click',function(){
            if ( $('#nse_1').prop('checked',false)){
            $('#nse_1').click();
            }
            if ( $('#nse_2').prop('checked',false)){
            $('#nse_2').click();
            } 
            if ( $('#nse_3').prop('checked',false)){
            $('#nse_3').click();
            }
            nse();
        });
        $('#edad_1').on('click',function(){
        edad();
        });
        $('#edad_2').on('click',function(){
        edad();
        });
        $('#edad_3').on('click',function(){
        edad();
        });
        $('#edad_4').on('click',function(){
        edad();
        });
        $('#edad_5').on('click',function(){
        edad();
        });
        $('#edad_6').on('click',function(){
        edad();
        });
        $('#edad_todo').on('click',function(){
            var edades=[];
            for(var i=0;i<=5;i++){
            edades[i]='#edad_'+(i+1);
            if ( $(edades[i]).prop('checked',false)){
            $(edades[i]).click();
            }
        }
             edad()();
        });
        function edad(){
        var niveles=[];
        var edades=[];
        var estratos=[];
        estratos[0]='#edad_1';
        estratos[1]='#edad_2';
        estratos[2]='#edad_3';
        estratos[3]='#edad_4';
        estratos[4]='#edad_5';
        estratos[5]='#edad_6';
        edades[0]='De 10 a 18 años|';
        edades[1]='De 18 a 25 años|';
        edades[2]='De 26 a 35 años|';
        edades[3]='De 36 a 45 años|';
        edades[4]='De 46 a 70 años|';
        edades[5]='Mas de 70 años|';
        for(var i=0;i<=5;i++ ){
            if( $(estratos[i]).prop('checked')){
        niveles[i]=edades[i]+" ";   
    }
    else{
       niveles[i]=" ";    
    }
        }
        
        if(niveles[0]===" "&&niveles[1]===" "&&niveles[2]===" " &&niveles[3]===" "&&niveles[4]===" "&&niveles[5]===" "){
            $("#edad").text("Nada");
        }
        else if((niveles[0]!==" "&&niveles[1]!==" "&&niveles[2]!==" " &&niveles[3]!==" "&&niveles[4]!==" "&&niveles[5]!==" ")){
            $("#edad").text("All");
        }
        else{
           $("#edad").text("Edades |"+niveles[0]+niveles[1]+niveles[2]+niveles[3]+niveles[4]+niveles[5]);
         
        }
    }
    
                function envio(texto,campo, my_callback){
            var resp = 5;
              $.ajax({
                type:'POST',//TIPO DE PETICION PUEDE SER GET
			dataType:"json",//EL TIPO DE DATO QUE DEVUELVE PUEDE SER JSON/TEXT/HTML/XML
			url:"myajax.php",//DIRECCION DONDE SE ENCUENTRA LA OPERACION A REALIZAR
			data:{tabla:'usuario',columnas:'*',Op:'wsaw',
                            condicion:"usur_nombre='"+texto+"'",leer:'leer'},//DATOS ENVIADOS PUEDE SER TEXT A TRAVEZ DE LA URL O PUEDE SER UN OBJETO	
                beforeSend: function(){//ACCION QUE SUCEDE ANTES DE HACER EL SUBMIT
                },success: function(response){//ACCION QUE SUCEDE DESPUES DE REALIZAR CORRECTAMENTE LA PETCION EL CUAL NOS TRAE UNA RESPUESTA

                if(response.mensaje=="GOOD"){//MANDAMOS EL MENSAJE QUE NOS DEVUELVE EL RESPONSE
                             resp=1; 
                             jQuery("#error-correo").show();
                                              }
				else{
                    resp= 0;             
                }	
            my_callback(resp);              
            },
			error: function(){//SI OCURRE UN ERROR 
			//	alert('El servicio no esta disponible intentelo mas tarde');//MENSAJE EN CASO DE ERROR
			}
                         
		});
               return resp;
            }
});


