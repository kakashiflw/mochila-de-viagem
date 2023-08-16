const formulario = document.getElementById('novoItem');

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
});

function criaElemento (nome, quantidade) {

    const novaLista = document.createElement('li');
    novaLista = classList.add("item");

    const novoNumero = document.createElement('strong');
    novoNumero.innerHTML = quantidade;

    console.log(novoNumero);
}