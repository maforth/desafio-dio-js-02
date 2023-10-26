let qtdVitorias = 12;
let qtdDerrotas = 3;
let saldo;
let nivel;
function retornaSaldo(qtdVitorias, qtdDerrotas) {
  return qtdVitorias - qtdDerrotas;
}

saldo = retornaSaldo(qtdVitorias, qtdDerrotas);
if (qtdVitorias <= 10) {
  nivel = "Ferro";
} else if (qtdVitorias <= 20) {
  nivel = "Bronze";
} else if (qtdVitorias <= 50) {
  nivel = "Prata";
} else if (qtdVitorias <= 80) {
  nivel = "Ouro";
} else if (qtdVitorias <= 90) {
  nivel = "Diamante";
} else if (qtdVitorias <= 100) {
  nivel = "Lendário";
} else {
  nivel = "imortal";
}
console.log(`O herói tem saldo de ${saldo} está no nivel de: ${nivel}`);
