//Determine if it starts in the login or register state..
var i = window.location.href
if (i=='http://127.0.0.1:5501/login/index.html?id=register'){
  document.querySelector(".container").classList.toggle("log-in");
}

//document.querySelector('.info-btn').addEventListener('click',function(){ });

document.querySelector('#info-btnID1').addEventListener('click',function(){
  //document.querySelector(".undead").setAttribute('style','background-color:green')
  document.querySelector(".container").classList.toggle("log-in");
  
});
document.querySelector('#info-btnID2').addEventListener('click',function(){
  //document.querySelector(".undead").setAttribute('style','background-color:green')
  document.querySelector(".container").classList.toggle("log-in");
});


/*
function validar(form){
  let username = document.getElementById("log-username").value;
  let password = document.getElementById("log-password").value;
  //alert("The variable named username has value:  " + username + ", And password: " + password);
  //window.location = "../home.html";
  //window.open("https://www.youtube.com");
  //window.open("../home.html");
  if ( username == "test" && password == "test"){
    alert ("Login com sucesso");
    //window.open("https://www.youtube.com","_self");
    //window.open("https://www.youtube.com");
    //window.location = "../home.html";
    window.open("loginsucesso.html?logged-in");
    //window.location = "https://www.youtube.com";
  }
  else{
    alert("Nome de Utilizador ou Palavra Pass errados");
    }

  }*/

  function loginin(form){
    let username = document.getElementById("log-username").value;
    let password = document.getElementById("log-password").value;
    //alert("The variable named username has value:  " + username + ", And password: " + password);
    //window.location = "../home.html";
    //window.open("https://www.youtube.com");
    //window.open("../home.html");
    if ( username == "test" && password == "test"){
      //alert ("Login com sucesso");
      //window.open("https://www.youtube.com","_self");
      //window.open("https://www.youtube.com");
      //window.location = "../home.html";

      //window.open("../home.html?user=" + username);

      window.open("loginsucesso.html?logged-in");
      //window.location = "https://www.youtube.com";
    }
    else{
      alert("Nome de Utilizador ou Palavra Pass errados");
      }
  
    }

    //let username = document.getElementById("reg-username").value;
    function registerer(form){
      if(form.checkValidity()){

        let username = document.getElementById("reg-username").value;
        let password = document.getElementById("reg-password").value;
        //window.open("https://www.youtube.com","_self");
        //alert("The variable named username has value:  " + username + ", And password: " + password);
        if(username && password){
          alert("Registado com Sucesso");
          window.open("../home.html?" + username);
        }
        else{
          //alert("Preencha os dados corretamente");
        }
        
      } else {
        form.querySelectorAll(':invalid')[0].focus();
    }

    }


//TESTS:
/*
var i = window.location.href
if (i=='http://127.0.0.1:5501/login/index.html?id=111'){
  alert("The variable named i has value:  " + i);
}

//Regex?

  document.querySelector('.undead').addEventListener('click',function(){
  //document.querySelector(".undead").setAttribute('style','background-color:green')
  document.querySelector(".container").classList.toggle("log-in");

    //alert('GET CLICKED ON!!!');
    alert("The variable named i has value:  " + i);

});
*/

/*
const info_btn = document.getElementsByClassName("info-btn")
for (let i = 0; i < info_btn.length; i++) {
  info_btn[i].onclick = () => {
    document.querySelector(".container").classList.toggle("log-in");
  }; 
}
*/