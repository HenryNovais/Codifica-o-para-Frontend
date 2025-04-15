function Converter() {
    var valor = document.getElementById("amount").value;
    var moeda = document.getElementById("currency").value;
    var descricao = document.getElementById("description");
    var resultado = document.getElementById("result");
    var footer = document.getElementById("footer");

    var valorNumerico = parseFloat(valor);
    var convertido = 0;

    if (moeda == "USD") {
        convertido = valorNumerico * 5.74;
        descricao.innerText = "U$$ 1 = R$ 5,74";
        footer.style.display = "block";
        resultado.innerText = "U$$ " + convertido.toFixed(2); 
    }else if (moeda == "EUR") {
        convertido = valorNumerico * 6.20;
        descricao.innerText = " € 1 = R$ 6,20";
        footer.style.display = "block";
        resultado.innerText = "€ " + convertido.toFixed(2); 
    }else if (moeda == "GBP") {
        convertido = valorNumerico * 7.43;
        descricao.innerText = " £ 1 = R$ 7,43";
        footer.style.display = "block";
        resultado.innerText = "£ " + convertido.toFixed(2); 
    }
}
