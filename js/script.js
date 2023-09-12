const btnSubmit = document.querySelector('.submit');
const addEmail = document.getElementById('email');

btnSubmit.addEventListener('click', function (){

  // VALUE EMAIL
  let valueEmail = addEmail.value;
  console.log(valueEmail);
  let samEmail = false

  // LIST
  const listEmail= ['cincinnati@gmail.com','batticinque@gmail.com','sonomagico7@gmail.com']

  // 'cillumini99@gmail.com','pensapete@gmail.com','papete2000@gmail.com','spidermanreal.98@gmail.com','alloroelimone@gmail.com','solosoletto@gmail.com','carriola58246@gmail.com','hakerpercaso007@gmail.com','ciattacchilachiave@gmail.com','otellorottello@gmail.com'
  
  // CONTROL
  for (let i=0; i < listEmail.length; i++){
    const emailControl = list.listEmail[i];

    if (addEmail === emailControl )
    samEmail=true

  }





})






