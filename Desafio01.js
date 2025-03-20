/*
 *Desafio do dia (nível iniciante): Inversor de strings
 *Crie uma função que receba uma string como entrada e retorne a mesma string, mas com os caracteres em ordem inversa.
*/

let texto = "programação"


function inverte_texto(txt){
    let texto_dividido = txt.split("")
    let tamanho = texto_dividido.length
    let texto_invertido = []
    for (i = 0; i <= tamanho; i++){
        texto_invertido[tamanho - i] = texto_dividido[i]
    }
    console.log(texto_invertido.join(""))
}

inverte_texto(texto)

