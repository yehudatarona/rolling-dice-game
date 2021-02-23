let counter = 0;
let cost = 1;
let coins = 5;
const color_ar = ["red", "green"];
const diceImg_ar = ["dice-1.png", "dice-2.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png"];

// var diceImg_ar =["images/dice-1.png","images/dice-2.png","images/dice-2.png","images/dice-3.png","images/dice-4.png","images/dice-5.png","images/dice-6.png"];

window.onload =  ()=> {
    resetApp();

}

 const resetApp = ()=>{
    id_img.src = "../images/dice.png";
    id_spanCoins.innerHTML = coins;
    // id_score.innerHTML = counter;
    id_button.addEventListener("click", rolldice);
}

const rolldice = () => {

    rnd = Math.random() * 6;
    rnd = Math.ceil(rnd);
 
    id_img.src = `../images/${diceImg_ar[rnd]}`;

    if(coins){
        coins--;
        id_spanCoins.innerHTML = coins;
        if(rnd==6 || rnd==5){
                coins +=2;
                id_spanCoins.innerHTML = coins;
                id_h2.innerHTML =`You win in this game! now have you ${coins} conis`;
                id_h2.style.color=color_ar[1];
            }
    }
    if (coins<=0){
        id_h2.innerHTML ="You lost the game! go to the bank and bring some money";
        id_h2.style.color=color_ar[0];

    }
}

