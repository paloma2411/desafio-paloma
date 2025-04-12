// Lista de heróis com nome e experiência
let herois = [
    { nome: "Artemis", xp: 8500 },
    { nome: "Thalos", xp: 2300 },
    { nome: "Lyra", xp: 700 },
    { nome: "Kael", xp: 15000 }
];

// Laço de repetição para classificar cada herói
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    // Estrutura de decisão para definir o nível
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibe o resultado
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
