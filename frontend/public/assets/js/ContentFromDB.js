(() => {
    document.addEventListener('DOMContentLoaded', () => {
        loadContent();
    });

})();

function loadContent() {
    // Hvis url'en er tom, vis alt indhold
    var queryString = window.location.search.substring(1);
    // console.log(window.location.search.substring(1));
    if (queryString == "") {
        getContent();
    } else {
        var handling = queryString.split('=')[0];
        var værdi = queryString.split('=')[1];
        switch (handling) {

            case "content": getContent(værdi); break;

            case "id": getProducts(0, "", værdi); break;

            default:
                break;
        }
    }
}

// Funktion som henter data til visning i content
function getContent(type = 0, id = 0) {
let url = 'http://localhost:1338/content';
if (type > 0) url += '/content/' + type;
if (id > 0) url += "/id/" + id;
// console.log(url);
fetch(url)
    .then((response) => {
        // grib svarets indhold (body) og send det som et json objekt til næste .then()
        return response.json();
    })
    .then((data) => {
        // nu er json objektet lagt ind i data variablen, udskriv data
        console.log(data);
        var type = '';
        document.getElementById('content').innerHTML = "";
        data.forEach(function (item) {
            document.getElementById('content').innerHTML += `
                <img class="card-img-top img-fluid mt-2" src="assets/img/${item.billede}" alt="${item.navn}">
            `;
        })
    })
}