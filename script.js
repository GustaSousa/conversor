document.querySelector(".button").addEventListener("click", async function (event) {
    event.preventDefault();

    const realInput = document.querySelector(".real").value;

    try {
        const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
        const data = await response.json();
        const dolarRate = parseFloat(data.USDBRL.bid);

        const convertedValue = (realInput / dolarRate).toFixed(2);
        document.querySelector(".dolar").textContent = `$${convertedValue}`;
    } catch (error) {
        console.error("Erro ao buscar cotação:", error);
        alert("Não foi possível obter a cotação. Tente novamente mais tarde.");
    }
});