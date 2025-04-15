function adicionar() {
    const input = document.getElementById("name").value;
    if (input.trim() === "") return; // Evita adicionar itens vazios

    const novoAluno = document.querySelector("ul");

    const novoLi = document.createElement("li");
    novoLi.classList.add("guest");

    const novoSpan = document.createElement("span");
    novoSpan.textContent = input; // Adiciona o texto dentro do <span>

    novoLi.appendChild(novoSpan);
    novoAluno.appendChild(novoLi);

    document.getElementById("name").value = ""; // Limpa o input após adicionar
}