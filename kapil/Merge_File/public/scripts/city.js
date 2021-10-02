

// // Get estimate function start here
// let errpickup = document.getElementById("err_pick_up");
// let errdropoff = document.getElementById("err_drop_off");
// let errmobilenum = document.getElementById("err_mobile_num");
// let errrequirement = document.getElementById("err_requirement");

// let errDiv_1 = document.getElementById("err_div_1");
// let errDiv_2 = document.getElementById("err_div_2");
// let errDiv_3 = document.getElementById("err_div_3");
// let errDiv_4 = document.getElementById("err_div_4");
// function show_error() {

//     let box_1 = document.getElementById("select_box_1").value;
//     // input value from user
//     let pickUp = document.getElementById("pick_up").value;
//     let dropOf = document.getElementById("drop_off").value;
//     let mobile_number = document.getElementById("mobile").value;
//     let req_value = document.getElementById("select_box_2").value;

//     let mumbai = ["thane", "solapur", "navi", "juhu", "bandra"];


//     if (pickUp === "" || dropOf === "" || mobile_number === "" || req_value === "") {
//         errpickup.innerText = "Enter pickup address";
//         errpickup.style.border = "1px solid red";
//         errpickup.style.backgroundColor = "white";
//         errpickup.style.color = "red";
//         errpickup.style.textAlign = "center";
//         errpickup.style.width = "15%";
//         errpickup.style.marginLeft = "5%";
//         errpickup.style.fontSize = "13px";
//         errpickup.style.padding = "2px";
//         errpickup.style.borderRadius = "5px";
//         errDiv_1.style.border = "1px solid red";

//         errdropoff.innerText = "Enter dropoff address";
//         errdropoff.style.border = "1px solid red";
//         errdropoff.style.backgroundColor = "white";
//         errdropoff.style.color = "red";
//         errdropoff.style.textAlign = "center";
//         errdropoff.style.width = "15%";
//         errdropoff.style.marginLeft = "5%";
//         errdropoff.style.fontSize = "13px";
//         errdropoff.style.padding = "2px";
//         errdropoff.style.borderRadius = "5px";
//         errDiv_2.style.border = "1px solid red";
//         // mobile number input
//         errmobilenum.innerText = "Enter mobile number";
//         errmobilenum.style.border = "1px solid red";
//         errmobilenum.style.backgroundColor = "white";
//         errmobilenum.style.color = "red";
//         errmobilenum.style.textAlign = "center";
//         errmobilenum.style.width = "15%";
//         errmobilenum.style.marginLeft = "5%";
//         errmobilenum.style.fontSize = "13px";
//         errmobilenum.style.padding = "2px";
//         errmobilenum.style.borderRadius = "5px";
//         errDiv_3.style.border = "1px solid red";

//         // requirement input
//         errrequirement.innerText = "Select requirement";
//         errrequirement.style.border = "1px solid red";
//         errrequirement.style.backgroundColor = "white";
//         errrequirement.style.color = "red";
//         errrequirement.style.textAlign = "center";
//         errrequirement.style.width = "15%";
//         errrequirement.style.marginLeft = "5%";
//         errrequirement.style.fontSize = "13px";
//         errrequirement.style.padding = "2px";
//         errrequirement.style.borderRadius = "5px";
//         errDiv_4.style.border = "1px solid red";
//     }
//     else if (mobile_number.length != 10 || isNaN(mobile_number)) {
//         errmobilenum.innerText = "Enter correct number";
//         errmobilenum.style.border = "1px solid red";
//         errmobilenum.style.backgroundColor = "white";
//         errmobilenum.style.color = "red";
//         errmobilenum.style.textAlign = "center";
//         errmobilenum.style.width = "15%";
//         errmobilenum.style.marginLeft = "5%";
//         errmobilenum.style.fontSize = "13px";
//         errmobilenum.style.padding = "2px";
//         errmobilenum.style.borderRadius = "5px";
//         errDiv_3.style.border = "1px solid red";

//     }

//     else {

//         for (let i = 0; i < mumbai.length; i++) {
//             if (box_1 === "mumbai" && pickUp === mumbai[i]) {
//                 setTimeout(function () {
//                     window.location.href = "http://localhost:2520/fare_estimate";

//                 }, 1000);

//                 // break;

//             } else if (pickUp != mumbai[i]) {

//                 setTimeout(function () {
//                     errpickup.innerText = "Enter radious city";
//                     errpickup.style.border = "1px solid red";
//                     errpickup.style.backgroundColor = "white";
//                     errpickup.style.color = "red";
//                     errpickup.style.textAlign = "center";
//                     errpickup.style.width = "15%";
//                     errpickup.style.marginLeft = "5%";
//                     errpickup.style.fontSize = "13px";
//                     errpickup.style.padding = "2px";
//                     errpickup.style.borderRadius = "5px";

//                 }, 2000);
//             }
//         }

//         data_location(pickUp, dropOf);
//     }


// }

// function data_location(pick, drop) {

//     let city_store = [
//         {
//             pick_up: pick,
//             drop_of: drop,

//         },
//     ]

//     let convert_json = JSON.stringify(city_store);
//     localStorage.setItem("city_val", convert_json);
// }



async function show_error() {
    let pickUp = document.getElementById("pick_up").value;
    let dropOf = document.getElementById("drop_off").value;

    let distanceMatrix = await fetch(`https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${pickUp}&destinations=${dropOf}&key=ioWaw43eHpkYS3cdowg6FAXeAeuLd`);


    let KmResults = await distanceMatrix.json();

    let { rows } = KmResults
    try {
        rows.forEach(({ elements }) => {
            elements.forEach(({ distance }) => {
                let { text } = distance
                data_location(pickUp, dropOf,text)
            })
        })
    }
    catch (err) {
        console.log(err)
    }

    setTimeout(function () {
                 window.location.href = "http://localhost:2520/fare_estimate";
        
                }, 1000);
}



function data_location(pick, drop,text) {

    let city_store = [
        {
            pick_up: pick,
            drop_of: drop,
            km:text,

        },
    ]

    let convert_json = JSON.stringify(city_store);
    localStorage.setItem("city_val", convert_json);
    console.log(convert_json)
}



