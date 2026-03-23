let count = 0;

let homik1cost = 10
let homik2cost = 100

let homik1buyamt = 1;
let homik2buyamt = 1;

let interval = 33;
let gen = 1;
let homikdim1 = 1;
let homikdim2 = 0;

let homikdim1gen = 1;
document.getElementById('buy').innerHTML = 'buy homik dim 1 (' + homik1cost.toFixed(2).replace('+', '') + ')';
document.getElementById('buyhomik2').innerHTML = 'buy homik dim 2 (' + homik2cost.toFixed(2).replace('+', '') + ')';

setInterval(() => {
    document.getElementById('homikValue').innerText = count.toFixed(2).replace('+', '');
    document.getElementById('counter').innerText = count.toFixed(2).replace('+', '');
    document.getElementById('homikdim1Value').innerText = homikdim1;
    document.getElementById('homikdim2Value').innerText = homikdim2;
}, 33);

setInterval(() => {
    count += (homikdim1 * gen)/interval;
 
}, interval);


setInterval(() => {
    if (homikdim2 >= 1) {   
        homikdim1 += homikdim2 * homikdim1gen;
    }
}, interval*interval);

  
function buttonClick() {
    if (count >= homik1cost) {
        count -= homik1cost;
        homik1buyamt += 1;

           if (homik1buyamt % 10 == 0) {
            gen *= 2;
            homik1cost *= 10;
        }
        homikdim1 += 1;
        document.getElementById('buy').innerHTML = 'buy homik dim 1 (' + homik1cost.toExponential(2).replace('+', '') + ')';
    }
}

function buttonClickHomik2() {
 if (count >= homik2cost) {
        count -= homik2cost;
        homik2buyamt += 1;
        homikdim2 += 1;
        document.getElementById('buyhomik2').innerHTML = 'buy homik dim 2 (' + homik2cost.toExponential(2).replace('+', '') + ')';
          if (homik2buyamt % 10 == 0 && homik2buyamt != 0){
            homikdim1gen *= 2;
            homik2cost *= 10;
        }
     
    }
}

