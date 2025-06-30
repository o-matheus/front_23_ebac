$(document).ready(function () {
    const endpoint = 'https://api.github.com/users/o-matheus'

    fetch(endpoint).then(function (resposta) {
        return resposta.json();
    })
        .then(function (json) {
            const profilePicture = json.avatar_url;
            const name = json.name;
            const login = json.login;
            const repositorios = json.public_repos;
            const seguidores = json.followers;
            const seguindo = json.following;
            const gitLink = json.html_url;

            $('#imgAvatar').attr('src', profilePicture);
            $('#nomePerfil').text(name);
            $('#user').text(login);
            $('#quantidadeRepo').text(repositorios);
            $('#quantidadeSeguidores').text(seguidores);
            $('#quantidadeSeguindo').text(seguindo);
            $('#gitLink').attr('href', gitLink);
            
        })
        .catch(function (erro) {
            console.log("Ocorreu um erro de comunicação com o servidor")
        })
})
