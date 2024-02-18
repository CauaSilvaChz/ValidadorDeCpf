const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let entrada = document.querySelector('#entrada').value;

    function validar(){
        if((entrada.length != 11) || Number.isNaN(Number.parseInt(entrada))){
            alert('digite os 11 numeros do cpf (sem . ou -)')
        }else{
            var somaDigitoUm = Number(entrada.charAt(0) * 10) +
                               Number(entrada.charAt(1) * 9) +
                               Number(entrada.charAt(2) * 8) +
                               Number(entrada.charAt(3) * 7) +
                               Number(entrada.charAt(4) * 6) +
                               Number(entrada.charAt(5) * 5) +
                               Number(entrada.charAt(6) * 4) +
                               Number(entrada.charAt(7) * 3) +
                               Number(entrada.charAt(8) * 2)


            var somaDigitoDois = Number(entrada.charAt(0) * 11) +
                                Number(entrada.charAt(1) * 10) +
                                Number(entrada.charAt(2) * 9) +
                                Number(entrada.charAt(3) * 8) +
                                Number(entrada.charAt(4) * 7) +
                                Number(entrada.charAt(5) * 6) +
                                Number(entrada.charAt(6) * 5) +
                                Number(entrada.charAt(7) * 4) +
                                Number(entrada.charAt(8) * 3) +
                                Number(entrada.charAt(9) * 2)
        }

        let resultadoDigitoUm = somaDigitoUm * 10 % 11;
        let resultadoDigitoDois = somaDigitoDois * 10 % 11;

        if(resultadoDigitoUm == 10){
            resultadoDigitoUm = 0;
        }

        if(resultadoDigitoDois == 10){
            resultadoDigitoDois = 0;
        }

        if(Number(entrada.charAt(9) == resultadoDigitoUm) && Number(entrada.charAt(10) == resultadoDigitoDois)){
            document.querySelector('#saida').textContent = 'CPF válido'
        }else{
            document.querySelector('#saida').textContent = 'CPF inválido. Digite novamente'
        }

    }
    validar()
})