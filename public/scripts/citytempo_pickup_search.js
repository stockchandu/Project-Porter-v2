let parent = document.getElementById("pickupdata")
function pickup() {
    let input = document.getElementById("pick_up").value
    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&format=json&apiKey=94b97299ca644638853d668420863b21`)
        .then(response => response.json())
        .then(result => showdata(result))
        .catch(error => console.log('error', error));
}


function showdata(result) {
    parent.style.display = "block"
    if (document.getElementById("pick_up").value === "") {
        document.getElementById("pickupdata").style.display = "none"
    }
    parent.innerHTML = null

    let { results } = result
    results.forEach(({ formatted }) => {
        let div = document.createElement("div");
        let div2 = document.createElement('img');
        div2.src = "https://cdn-icons.flaticon.com/png/512/3082/premium/3082383.png?token=exp=1636039239~hmac=c0b733337ccd4a47cce1d526e2d51acb"
        div.innerHTML = formatted
        let maindiv = document.createElement("div");
        maindiv.append(div2, div)
        parent.append(maindiv)
        getinput(div);
    })
}



function getinput(data) {
    data.onclick = function () {
        document.getElementById("pick_up").value = data.innerHTML
        document.getElementById("pickupdata").style.display = "none"
    }

}