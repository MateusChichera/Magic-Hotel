

//CEP
$(document).ready(function() {
	
	$("#cep").mask("99999-999",{completed:function(){
		var cep = $(this).val().replace(/[^0-9]/, "");
		
		if(cep.length != 8){
			return false;
		}
		var url = "https://viacep.com.br/ws/"+cep+"/json/";
		
		$.getJSON(url, function(dadosRetorno){
			try{
				
				$("#endereco").val(dadosRetorno.logradouro);
				$("#bairro").val(dadosRetorno.bairro);
				$("#cidade").val(dadosRetorno.localidade);
				$("#uf").val(dadosRetorno.uf);
				$("#nr_end").focus();
			}catch(ex){}
		});
	}});
	
});
//CPF
function mCpf() {
    var cpf = event.target.value;
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    event.target.value = cpf;
 }

function validarCPF() {
    var cpf = event.target.value;
    var ok = 1;
    var add;
    var par = document.getElementById('p4');
    if (cpf != "") {
       cpf = cpf.replace(/[^\d]+/g, '');
       if (cpf.length != 11 ||
          cpf == "00000000000" ||
          cpf == "11111111111" ||
          cpf == "22222222222" ||
          cpf == "33333333333" ||
          cpf == "44444444444" ||
          cpf == "55555555555" ||
          cpf == "66666666666" ||
          cpf == "77777777777" ||
          cpf == "88888888888" ||
          cpf == "99999999999")
              ok = 0;
       if (ok == 1) {
          add = 0;
          for (i = 0; i < 9; i++)
             add += parseInt(cpf.charAt(i)) * (10 - i);
             rev = 11 - (add % 11);
             if (rev == 10 || rev == 11)
                rev = 0;
             if (rev != parseInt(cpf.charAt(9)))
                ok = 0;
             if (ok == 1) {
                add = 0;
                for (i = 0; i < 10; i++)
                   add += parseInt(cpf.charAt(i)) * (11 - i);
                rev = 11 - (add % 11);
                if (rev == 10 || rev == 11)
                   rev = 0;
                if (rev != parseInt(cpf.charAt(10)))
                   ok = 0;
             }
         }
         if (ok == 0) {
            par.style.color='red';
            par.style.display='block';
            par.innerHTML="Cpf inválido";
            event.target.focus();
         }
         else
         {par.style.display='none';

         }
     }
 }
//mascara do cpf


function testa(strCPF)
{   

    var testando=TestaCPF(strCPF);
    var p4=document.getElementById("p4");

    if(testando==false)
    {

        cpfa=document.getElementById("cpf");
        cpfa.style.color = "red";
        p4.style.display = "block";
        p4.innerHTML="Digite o cpf correto";
        p4.style.color = "red";
        
       
    }
    if(testando==true)
    {
        cpfa.style.color = "green";
        p4.style.display = "none";
        
    }
    
    }

function nomee(strNome)
{
   var nome=document.getElementById("nome");
   
  var vett='a';
for(let i=0;i<vett.length;i++)
{
    const verificaEspaco=strNome.indexOf(' '+`${vett[i]} ` );


}

if(verificaEspaco=='1')
{
    return true;
}
if(verificaEspaco=='-1'){
    return false;
}else{
p1.style.display=none;
}
}
function vnome()
{
    nome=vefnome()

    if(!nome)
    {
        res=document.getElementById('p1');
        res.style.display="flex";
        res.style.color='red';
        res.innerHTML='Nome inválido'
    }
    else
    res.style.display="none";


}

    function vefsob()
    {   
        var sob= document.getElementById('sobrenome').value;
        if(sob.length<2)
        {
            res=document.getElementById('p2');
            res.style.display="flex";
            res.style.color='red';
            res.innerHTML='Sobrenome inválido'

        }
        else
        {
            
            res.innerHTML='';
        }

    }
    function validacaoEmail(field) 
        {
            usuario = field.value.substring(0, field.value.indexOf("@"));
            dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

            if ((usuario.length >=1) &&
                (dominio.length >=3) &&
                (usuario.search("@")==-1) &&
                (dominio.search("@")==-1) &&
                (usuario.search(" ")==-1) &&
                (dominio.search(" ")==-1) &&
                (dominio.search(".")!=-1) &&
                (dominio.indexOf(".") >=1)&&
                (dominio.lastIndexOf(".") < dominio.length - 1)) {
                document.getElementById("msgemail").innerHTML="<font color='green'>E-mail válido";
                 
            }
                else{
                document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
                 
            }
        }

        function verlogin()
    {
        var log2=document.getElementById("nome").value;
        var muda2=document.getElementById("p1");
        if(log2.length<2)
            {
                muda2.style.display="flex";
                muda2.style.color="red";
                muda2.innerHTML="Nome deve conter no minimo 2 caracteres";
            }
        else
            {
                muda2.innerHTML=""; 
            }
            

    }
    function verlogin1()
    {
        var log2=document.getElementById("sobrenome").value;
        var muda2=document.getElementById("p2");
        if(log2.length<2)
            {
                muda2.style.display="flex";
                muda2.style.color="red";
                muda2.innerHTML="Sobrenome deve conter no minimo 2 caracteres";
            }
        else
            {
                muda2.innerHTML=""; 
            }
            

    }


    function conferesenha()
    {
        var sen1=document.getElementById("senha").value;
        var sen2=document.getElementById("senha2").value;
        var muda=document.getElementById("psenha");
        var log=document.getElementById("nome").value;
        var conf1=true;
        var conf2=true;

      if(log.length<5)
        {       
            conf1=false;
        }  

      if(sen1!==sen2)
        {
            conf2=false;
        }

      if(sen1!==sen2 && log.length<5)
        {
            conf1=false;
            conf2=false;
        }

      if(conf1==true && conf2==false)
        {
            muda.style.display="flex";
            muda.style.color="red";
            muda.innerHTML="Senhas não conferem";
        }

    else if(conf1==false && conf2==true)
        {
            muda.style.display="flex";
            muda.style.color="red";
            muda.innerHTML="Nome deve conter 6 caracteres";
        }

    else if(conf1==false && conf2==false)
        {
            muda.style.display="flex";
            muda.style.color="red";
            muda.innerHTML="Senhas não conferem e nome deve conter 6 caracteres";
        }

    if(sen1.length<6 && sen2.length<6)
        {
            muda.style.display="flex";
            muda.style.color="red";
            muda.innerHTML="Senha minimo 6 caracteres";
        }

    else if(conf1==true && conf2==true && sen1.length>=1)
        {
            muda.style.display="none";
            muda.style.color="black";
            
        }

    }

    function vefnum()
    {
        num=document.getElementById("nr_end");
        muda=document.getElementById('pn');
        if(num.value<1)
        {
            muda.style.display="flex";
            muda.style.color="red";
            muda.innerHTML="Numero inválido";
        }
        else{
            muda.style.display="none";
            muda.style.color="black";
            
        }
    }
    function validadata(){
        var data = document.getElementById("nascimento").value; // pega o valor do input
        data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
        var data_array = data.split("-"); // quebra a data em array
        
        // para o IE onde será inserido no formato dd/MM/yyyy
        if(data_array[0].length != 4){
           data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
        }
        
        // comparo as datas e calculo a idade
        var hoje = new Date();
        var nasc  = new Date(data);
        var idade = hoje.getFullYear() - nasc.getFullYear();
        var m = hoje.getMonth() - nasc.getMonth();
        muda=document.getElementById('pnasc');
        if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
        
        if(idade < 0)
        {
            //alert("Voce nem nasceu");
            muda.style.display="flex";
            muda.style.color="red";
            muda.innerHTML="Nascimento inválido";
        }
        else
        {   
            muda.style.display="none";
        muda.style.color="black";
            
        }
        if(idade >= 18 && idade <= 100){
           //alert("Maior de 18, pode se cadastrar.");
           return true;
        }
        
        // se for maior que 60 não vai acontecer nada!
        return false;
     }

/*<script src="https://code.jquery.com/jquery-3.0.0.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.js" type="text/javascript"></script>
    <script type="text/javascript"></script>
    <script type="text/javascript" src="formsjs.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>*/
        