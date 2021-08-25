var str = window.location.href
str = str.substring(str.indexOf("?") + 1);
//str = /:(.+)/.exec(str)[1];
//str = str.split(":").pop();

//var str = "Abc: Lorem ipsum sit amet";
//str = str.substring(str.indexOf(":") + 1);
if (str=='http://127.0.0.1:5501/home.html' || str=='http://127.0.0.1:5501/home.html#1' || str=='http://127.0.0.1:5501/home.html#2' || str=='http://127.0.0.1:5501/home.html#3' || str=='http://127.0.0.1:5501/home.html#4' || str=='http://127.0.0.1:5501/home.html#5'){

} else {
document.querySelector('.useronpage').textContent=str;
}

/*document.querySelector('.useronpage').addEventListener('click',function(){
  //document.querySelector(".undead").setAttribute('style','background-color:green')
  //document.querySelector(".container").classList.toggle("log-in");
  alert('BOYA, i = ' + str);
  document.querySelector('.useronpage').textContent=str;
  
});*/

function registerpm(form){


  if(form.checkValidity()){
    alert ('Obrigado pelo seu comentário.');
  } else {
    form.querySelectorAll(':invalid')[0].focus();
}
    
}

