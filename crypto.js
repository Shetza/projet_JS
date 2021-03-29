//feed
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

//dropdown

//quand l'utilisateur clique sur le bouton, le .toggle montre le contenu du menu
function functionDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // ferme le dropdown quand l'utilisateur clique en dehors du bouton
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }