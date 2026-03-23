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

function loadGame() {
  const raw = localStorage.getItem("homikDimensionsSave");
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    count = Number(data.count) || 0;
    homikdim1 = Number(data.homikdim1) || 1;
    homikdim2 = Number(data.homikdim2) || 0;
    homik1cost = Number(data.homik1cost) || homik1cost;
    homik2cost = Number(data.homik2cost) || homik2cost;
    homik1buyamt = Number(data.homik1buyamt) || homik1buyamt;
    homik2buyamt = Number(data.homik2buyamt) || homik2buyamt;
    gen = Number(data.gen) || gen;
  } catch (e) {
    console.warn("Failed to load save", e);
  }
}
loadGame();

function saveGame() {
  const data = {
    count, homikdim1, homikdim2,
    homik1cost, homik2cost,
    homik1buyamt, homik2buyamt,
    gen
  };
  localStorage.setItem("homikDimensionsSave", JSON.stringify(data));
}

setInterval(saveGame, 5000);

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
        document.getElementById('buy').innerHTML = 'buy homik dim 1 (' + homik1cost.toFixed(2).replace('+', '') + ')';
    }
}

function buttonClickHomik2() {
 if (count >= homik2cost) {
        count -= homik2cost;
        homik2buyamt += 1;
        homikdim2 += 1;
        document.getElementById('buyhomik2').innerHTML = 'buy homik dim 2 (' + homik2cost.toFixed(2).replace('+', '') + ')';
          if (homik2buyamt % 10 == 0 && homik2buyamt != 0){
            homikdim1gen *= 2;
            homik2cost *= 10;
        }
     
    }
}

