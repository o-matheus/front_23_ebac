// // Usando XMLHttp Request -> Só pra saber que existe, muito menos utilizado
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('btn-buscar-cep').addEventListener('click', function () {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`

//         xhttp.open('GET', endpoint);
//         xhttp.send();

//     })
// })

// Fazendo com o Jquery (ebac) -> menos utilziado
// $(document).ready(function () {
//     $('#cep').mask('00000-000')

//     $('#btn-buscar-cep').click(function () {
//         const cep = $('#cep').val();
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;
//         const botao = $(this);
//         $(botao).find('i').addClass('d-none');
//         $(botao).find('span').removeClass('d-none');

//         $.ajax(endpoint).done(function (resposta) {
//             console.log(resposta)
//             const logradouro = resposta.logradouro;
//             const bairro = resposta.bairro;
//             const cidade = resposta.cidade;
//             const estado = resposta.estado;
//             const endereco = `${logradouro}. ${bairro} - ${cidade} - ${estado}`;
//             $('#endereco').val(endereco);

//             setTimeout(function () {
//                 $(botao).find('i').removeClass('d-none');
//                 $(botao).find('span').addClass('d-none');
//             }, 500)
//         })
//     })
// })


// Fetch (EBAC)
$(document).ready(function () {
    $('#cep').mask('00000-000')

    $('#btn-buscar-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        fetch(endpoint).then(function (resposta) {
            return resposta.json();
        })

            .then(function (json) {
                const logradouro = json.logradouro;
                const bairro = json.bairro;
                const cidade = json.cidade;
                const estado = json.estado;
                const endereco = `${logradouro}. ${bairro} - ${cidade} - ${estado}`;
                $('#endereco').val(endereco);
            })

            .catch(function (erro) {
                alert("A página não pode ser carregada no momento, tente mais tarde.")
            })

            .finally(function () {
                setTimeout(function () {
                    $(botao).find('i').removeClass('d-none');
                    $(botao).find('span').addClass('d-none');
                }, 500)
            })

    })
})


// Fazendo com o then e promise -> bom para projetos curtos ou resposta única (wellizx)

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('btn-buscar-cep').addEventListener('click', async function () {
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`

//         fetch(endpoint).then(async (resposta) => console.log(await resposta.json()));
//     })
// })


// Fazendo com o try catch -> bom para projetos mais robustos e múltiplas respostas (wellizx)

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('btn-buscar-cep').addEventListener('click', async function () {
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`
//         try {
//             const result = await fetch(endpoint);
//             console.log(result.json());
//         } catch (error) {
//             console.log(error);
//         }
//     })
// })
