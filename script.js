let totalCompra = 0

function adicionarProduto() {
   
    let nome = document.getElementById("nome").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let quantidade = parseFloat(document.getElementById("quantidade").value);
    console.log(nome, preco, quantidade)
    
    let totalProduto = preco * quantidade;
    console.log(totalProduto);

    totalCompra += totalProduto

    document.getElementById("totalValue").textContent = totalCompra.toFixed(2);
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";

}

const adicionarCompra = document.querySelector(".adicionar")

adicionarCompra.addEventListener("click", (evento) =>{
    evento.preventDefault();
    adicionarProduto();
});
