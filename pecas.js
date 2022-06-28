var ListaDePecas = ["Motor", "Amortecedor", "Freio", "Cambio", " Radiador", "Pneu"]

let peso = 70;
if(peso < 100){
    console.log("A peça deve pesar no mínimo 100g")
}else{
    console.log("A peça possui peso adequado")
}



if (ListaDePecas.length < 10){
    console.log("É possível cadastrar mais peças")
}else{
    console.log("Não é possível cadastrar. Sem espaço na lista")
}



let nomePeca = "Radiador"

if(nomePeca.length > 3){
    console.log("Nome adequado para o cadastro!")
}else {
    console.log("O nome deve ter mais de 3 caracteres")
}