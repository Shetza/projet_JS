//feed
$(document).ready(function () {
    $.ajax({
        url: 'https://musing-ardinghelli-9cfa3b.netlify.app/v1.json',
        method: 'GET',
        dataType: 'json'
    }).done(function (reponse) {
        reponse.forEach(element => {
            console.log(element);
            if (element.code === "BTC") {
                const divbtc = document.querySelector("#outputbtc")
                divbtc.innerText = element.name
            } else if (element.code === "ETH") {
                const divbtc = document.querySelector("#outputeth")
                divbtc.innerText = element.name
            } else if (element.code === "XMR") {
                const divbtc = document.querySelector("#outputxmr")
                divbtc.innerText = element.name
            } else if (element.code === "XVG") {
                const divbtc = document.querySelector("#outputxvg")
                divbtc.innerText = element.name
            }
        })
    })
        .fail(function (erreur) {
            console.log("La requete a échoué" + JSON.stringify(erreur));
        })
        .always(function () {
            console.log("Requête effectuée");
        });
});

//dropdown

//quand l'utilisateur clique sur le bouton, le .toggle montre le contenu du menu
function functionDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// ferme le dropdown quand l'utilisateur clique en dehors du bouton
window.onclick = function (event) {
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

//formulaire

function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    let recuptext = document.getElementById("in").value;
    // Afficher la valeur
    //alert(recuptext);
    let b =document.body; 
    b.append(recuptext);
}

