for (let i = 0; i < mumbai.length; i++) {
    if (box_1 === "mumbai" && pickUp === mumbai[i]) {
        setTimeout(function () {
            window.location.href = "http://localhost:2520/fare_estimate";

        }, 1000);

        // break;

    } else if (pickUp != mumbai[i]) {
        returnvalue=false
        setTimeout(function () {
            errpickup.innerText = "Enter radious city";
            errpickup.style.border = "1px solid red";
            errpickup.style.backgroundColor = "white";
            errpickup.style.color = "red";
            errpickup.style.textAlign = "center";
            errpickup.style.width = "15%";
            errpickup.style.marginLeft = "5%";
            errpickup.style.fontSize = "13px";
            errpickup.style.padding = "2px";
            errpickup.style.borderRadius = "5px";

        }, 2000);
    }}