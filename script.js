// Nome da cantina
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

// Quantidade de salgados disponíveis
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

// Preço fixo do salgado
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);
 // Atualizando o número de salgados e calculando quanto foi vendido
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);
 Aqui vamos explorar o comportamento de var, let e const.

// Testando alteração do preço do salgado (const não pode ser alterado)
try {
  precoSalgado = 6; // Isso vai gerar um erro
} catch (error) {
  console.log("Erro ao tentar mudar precoSalgado: " + error.message);
}

// Teste de escopo de var e let
if (true) {
  var testeVar = "Sou var"; // var tem escopo global ou de função
  let testeLet = "Sou let"; // let tem escopo de bloco
  console.log(testeVar); // funciona
  console.log(testeLet); // funciona
}

console.log(testeVar); // funciona porque var é global ou de função
try {
  console.log(testeLet); // Gera erro porque let é de escopo de bloco
} catch (error) {
  console.log("Erro ao acessar testeLet: " + error.message);
}