/*
 *Crie uma função que verifique se uma string é um palíndromo, ignorando espaços, 
 *pontuação e diferenças entre maiúsculas e minúsculas. Um palíndromo é uma palavra, 
 *frase ou sequência que se lê da mesma forma de trás para frente.
 */

 texto = 'arara'
 texto2 = 'race car'
 texto3 = 'abacate'


 function descobre_polindromo(txt){
    sem_espacos = txt.replace(' ','')
    letras_maiuculas = sem_espacos.toUpperCase()
    array_texto = letras_maiuculas.split('')
    tamanho = array_texto.length
    //console.log(array_texto,tamanho)
    for (i = 0; i < tamanho; i++){
        if (array_texto[i] != array_texto[tamanho-[i+1]]){
            console.log(array_texto[i], array_texto[tamanho - [i+1]])
            console.log(false,'o texto não é políndromo')
        }else{
            console.log(true)
        }
    }
 }

 descobre_polindromo(texto)
 descobre_polindromo(texto2)
 descobre_polindromo(texto3)