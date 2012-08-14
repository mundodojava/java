﻿    // Função para criar mascara de telefone, CPF, CEP, CNPJ
    //
    function mascara(o,f){
    v_obj=o;
    v_fun=f;
    setTimeout("execmascara()",1);
    }

    function execmascara(){
    v_obj.value=v_fun(v_obj.value);
    }

    function leech(v){
    v=v.replace(/o/gi,"0");
    v=v.replace(/i/gi,"1");
    v=v.replace(/z/gi,"2");
    v=v.replace(/e/gi,"3");
    v=v.replace(/a/gi,"4");
    v=v.replace(/s/gi,"5");
    v=v.replace(/t/gi,"7");
    return v;
    }

    function soNumeros(v){
    return v.replace(/\D/g,"");
    }

    function telefone(v){
    	v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
        v=v.replace(/^(\d\d)(\d)/g,"($1) $2") ;//Coloca parênteses em volta dos dois primeiros dígitos
    	
        if(v.length <= 13){
        v=v.replace(/(\d{4})(\d)/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
        }else if(v.length >= 14){
        	    v=v.replace(/(\d{5})(\d)/,"$1-$2"); //Coloca hífen entre o quinto e o sexto dígitos	
        }
        return v;
    }

    function data(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/(\d{2})(\d)/,"$1/$2"); //Coloca uma barra entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{2})(\d)/,"$1/$2"); //Coloca uma barra entre o terceiro e o quarto dígitos
    return v;
    }
    
    function hora(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/(\d{2})(\d)/,"$1:$2"); //Coloca dois pontos entre o terceiro e o quarto dígitos	
    return v;
    }
    
    function cpf(v){
        v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
        v=v.replace(/(\d{3})(\d)/,"$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
        return v;
        }
    
    function tiraEspaco(v){
        return  v=v.replace(" ","");
   }
