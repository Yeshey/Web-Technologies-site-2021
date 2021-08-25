//Determine if it starts in the login or register state..
var i = window.location.href

    //let username = document.getElementById("reg-username").value;
    function registeror(form){
      if(form.checkValidity()){
        alert("Submissão com sucesso");
        window.location("../home.html", "_self");  //???!!?!
      } else {
        //alert('boya')
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