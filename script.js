function isValidAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}

document
    .getElementById("trackBtn")
    .addEventListener("click", () => {

        const address =
            document.getElementById("wallet").value.trim();

        const shortAddress =
            address.slice(0, 6) +
            "..." +
            address.slice(-4);

        const result =
            document.getElementById("result");

        if (!isValidAddress(address)) {
            alert("Invalid wallet address");
            return;
        }

        const data = {
            ethereum: "0.52 ETH",
            bnb: "1.8 BNB",
            polygon: "250 MATIC",
            arbitrum: "0.15 ETH"
        };

        result.innerHTML = `
            <h2 class="wallet-title">
                Wallet
            </h2>

            <p class="wallet-address">
                ${shortAddress}
            </p>

            <div class="card">
                <h3>Ethereum</h3>
                <p>${data.ethereum}</p>
            </div>

            <div class="card">
                <h3>BNB Chain</h3>
                <p>${data.bnb}</p>
            </div>

            <div class="card">
                <h3>Polygon</h3>
                <p>${data.polygon}</p>
            </div>

            <div class="card">
                <h3>Arbitrum</h3>
                <p>${data.arbitrum}</p>
            </div>
        `;
});