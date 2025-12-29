const readline = require('readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input,output});
function Question(info){
    return new Promise(resolve =>{
        rl.question(info,resolve);
    });
}



function ranked(win,loss){
    let SaldoVitoria = win - loss;
    let RANK = '';
    let porcento = (win/(win + loss))* 100
    switch (true) {
       case (SaldoVitoria < 10):
            RANK = 'Ferro';
            break;
        case (SaldoVitoria <= 20):
            RANK = 'Bronze';
            break;
        case (SaldoVitoria <= 50):
            RANK = 'Prata';
            break;
         case (SaldoVitoria <= 80):
            RANK = 'Ouro';
            break;
         case (SaldoVitoria <= 90):
            RANK = 'Diamante';
            break;
         case (SaldoVitoria <= 100):
            RANK = 'Lendario';
            break;
         default:
            RANK = 'Imortal';
            break;
            }
    const data = {
        "points": SaldoVitoria,
        "tier": RANK,
        "ratio": porcento
    }
    return data;
}

async function runcode(){
    const vitorias = Number(await Question('Informe seu numero de vitorias: '));
    const derrotas = Number(await Question('Informe seu numero de derrotas: '));
    let {points, tier, ratio}=ranked(vitorias,derrotas)
    console.log('\n ====== Registro de Saldo ======');
    console.log(`Vitorias: ${vitorias}`);
    console.log(`Derrotas: ${derrotas}`);
    console.log(`Saldo Vitorias: ${points}`)
    console.log(`Rank: ${tier}`)
    console.log(`Victory Ratio: ${ratio.toFixed(2)}%`)
    rl.close();
}

runcode();