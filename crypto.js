$(function(){
    $.ajax({
        url: 'https://api.n.exchange/en/api/v1/currency/', 
        method: 'GET', 
        dataType : 'json' 
    }).done(function(crypto){    
        crypto.forEach(element => {
            if ( element.code === "BTC") {
                const divbtc = document.querySelector("#outputbtc")
                divbtc.innerText = element.name
            } else if ( element.code === "ETH") {
                const divbtc = document.querySelector("#outputeth")
                divbtc.innerText = element.name
            } else if ( element.code === "XMR") {
                const divbtc = document.querySelector("#outputxmr")
                divbtc.innerText = element.name
            } else if ( element.code === "XVG") {
                const divbtc = document.querySelector("#outputxvg")
                divbtc.innerText = element.name
            }
        })
    })
    .fail(function(erreur){
        alert("La requete a échoué" + JSON.stringify(erreur));
    })
    .always(function(){
        alert("Requête effectuée");
    });
});

