// 1. Variáveis, nome e a quantidade de experiência (XP)
let nomeHeroi = "Yago_ADS";
let xp = 7500;
let nivel = "";

// 2. Estrutura de decisão para classificar o nível
if (xp < 1000) {
    nivel = "Ferro";
} 

else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} 

else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata Ouro";
} 

else if (xp >= 6001 && xp <= 7000) {
    nivel = "Platina Diamante";
} 

else if (xp >= 7001 && xp <= 8000) {
    nivel = "Ascendente";
} 

else if (xp >= 8001 && xp <= 9000) {
    nivel = "Imortal";
} 

else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} 

else {
    nivel = "Radiante";
}

console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivel}**`);