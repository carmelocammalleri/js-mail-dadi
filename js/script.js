const btnSubmit = document.querySelector('.submit');
const addEmail = document.getElementById('email');

btnSubmit.addEventListener('click', function (){

  // VALUE EMAIL
  let valueEmail = addEmail.value;
  console.log(valueEmail);

  // LIST
  const listEmail = ['cincinnati@gmail.com', 'batticinque@gmail.com', 'sonomagico7@gmail.com','cillumini99@gmail.com','pensapete@gmail.com','papete2000@gmail.com','spidermanreal.98@gmail.com','alloroelimone@gmail.com','solosoletto@gmail.com','carriola58246@gmail.com','hakerpercaso007@gmail.com','ciattacchilachiave@gmail.com','otellorottello@gmail.com']

 

  // CONTROL
  let samEmail = false;

  for (let i=0; i < listEmail.length; i++){
    const emailControl = listEmail[i];

    if (valueEmail === emailControl){
      samEmail = true
    }
    
    let dice = document.getElementById('game-dice');
    const roll = document.getElementById('shoot');

    // GAME DICE
    if (samEmail ===true){
      dice.innerHTML = `Benvenuto nel gioco, tira il tuo dado`;
      roll.classList.remove('d-none')

      // TIRA IL DADO
      roll.addEventListener('click', function() {
        const min= 1;
        const max= 6;
        const randomUser = Math.floor(Math.random()*(max - min +1))+ min;
        const randomPc = Math.floor(Math.random()*(max - min +1))+ min;
        console.log(randomUser, randomPc); 

        const risultato = document.getElementById('winner');
        if (randomUser === randomPc){
          risultato.innerHTML= `Il risultato del tuo dado è stato ${randomUser} Il risultato del pc è stato ${randomPc}. Avete quindi pareggiato`

        } else if (randomUser > randomPc){
          risultato.innerHTML= `Il risultato del tuo dado è stato ${randomUser} Il risultato del pc è stato ${randomPc}. HAI VINTO :D`

        } else if (randomUser < randomPc){
          risultato.innerHTML= `Il risultato del tuo dado è stato ${randomUser} Il risultato del pc è stato ${randomPc}. Hai perso :(`
        } 
      })

    // INSERT CORRECT EMAIL
    } else {
      dice.innerHTML =`Inserire email corretta`;
    } 
  }
})






