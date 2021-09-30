let get_item = localStorage.getItem("city_val");
 console.log("get_item ", get_item);

let convert_obj = JSON.parse(get_item);

document.getElementById("pick_up_location").innerText = convert_obj[0].pick_up;
document.getElementById("drop_off_location").innerText = convert_obj[0].drop_of;

let totalKm=convert_obj[0].km

let convertToNum=parseInt(totalKm)
vehiclePricePerKm(convertToNum);

function vehiclePricePerKm(km){
    let threeWheeler = 34 * km;
    let eightFt=44 * km;
    let threeWheelerHelper=37 * km;
    showPriceByVehicleType(threeWheeler,eightFt,threeWheelerHelper)
}

function showPriceByVehicleType(threeWheeler,eightFt,threeWheelerHelper){
 document.getElementById("price_1").innerHTML=`₹ ${threeWheeler}`;
 document.getElementById("price_2").innerHTML=`₹ ${eightFt}`;
 document.getElementById("price_3").innerHTML=`₹ ${threeWheelerHelper}`;
}


let btn = document.getElementById("show_edit_option");

function showDiv() {
    let main_parent = document.createElement("div");

    main_parent.setAttribute("id", "m_p");

    let main_div_1 = document.createElement("div");
    main_div_1.setAttribute("id", "m_d_1");

    let main_div_1_child_1 = document.createElement("div");
    main_div_1_child_1.innerText = "Get Trip Estimate";

    let main_div_1_child_2 = document.createElement("div");

    let cross_image = document.createElement("img");

    cross_image.src = "https://simg.nicepng.com/png/small/242-2425648_close-remove-delete-exit-cross-cancel-trash-comments.png";

    main_div_1_child_2.append(cross_image);

    main_div_1.append(main_div_1_child_1, main_div_1_child_2);

    let main_div_2 = document.createElement("div");
    main_div_2.setAttribute("id", "m_d_2");


    let main_div_2_child_1 = document.createElement("div");
    let main_div_2_child_2 = document.createElement("div");
    let main_div_2_child_3 = document.createElement("div");
    let main_div_2_child_4 = document.createElement("div");




    let input_1 = document.createElement("input");
    input_1.setAttribute("type", "text");
    input_1.placeholder = "Pick Up";

    let input_2 = document.createElement("input");
    input_2.setAttribute("type", "text");
    input_2.placeholder = "Drop Location";
 
    let button = document.createElement("button");
    button.innerText = "GET ESTIMATE"

    let select = document.createElement("select");
    let option_1 = document.createElement("option");
    option_1.innerText = "CITY"
    let option_2 = document.createElement("option");
    option_2.value = "mumbai";
    option_2.innerText = "MUMBAI";
    let option_3 = document.createElement("option");
    option_3.value = "delhi";
    option_3.innerText = "DELHI NCR";
    let option_4 = document.createElement("option");
    option_4.value = "bangalore";
    option_4.innerText = "BANGALORE";

    select.append(option_1, option_2, option_3, option_4);

    main_div_2_child_1.append(select);
    main_div_2_child_2.append(input_1);
    main_div_2_child_3.append(input_2);
    main_div_2_child_4.append(button);

    main_div_2.append(main_div_2_child_1, main_div_2_child_2, main_div_2_child_3, main_div_2_child_4);

    main_parent.append(main_div_1, main_div_2);
    document.getElementById("main_parent_fare").append(main_parent);

    document.getElementById('fare_parent_1').style.visibility = "hidden"

    remove_show(cross_image, main_parent);
    Change_Value(input_1, input_2, button, main_parent);

}

btn.addEventListener("click", showDiv);


function remove_show(img, main_parent) {
    img.onclick = function () {
        document.getElementById('fare_parent_1').style.visibility = "visible";
        main_parent.style.display = "none";
    }

}

function Change_Value(input_1, input_2, btn, main_parent) {
    btn.onclick = function () {
        changePrice(input_1, input_2)
        let store_new_val = [

            {
                new_pick_up: input_1.value,
                new_drop_off: input_2.value,


            }
        ]


        let convert_json = JSON.stringify(store_new_val);

        localStorage.setItem("new_pick_drop", convert_json);

        let store_new_pick_up = localStorage.getItem("new_pick_drop");

        let convert_obj = JSON.parse(store_new_pick_up);


    document.getElementById("pick_up_location").innerText = convert_obj[0].new_pick_up;
    document.getElementById("drop_off_location").innerText = convert_obj[0].new_drop_off;

        setTimeout(function () {

            main_parent.style.display = "none";
            document.getElementById('fare_parent_1').style.visibility = "visible";

        }, 1000)

    }
        
}

async function changePrice(input_1,input_2){
    
    let pickUp=input_1.value
    let dropOf=input_2.value

    let distanceMatrix = await fetch(`https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${pickUp}&destinations=${dropOf}&key=ioWaw43eHpkYS3cdowg6FAXeAeuLd`);


    let KmResults = await distanceMatrix.json();

    let { rows } = KmResults
    try {
        rows.forEach(({ elements }) => {
            elements.forEach(({ distance }) => {
                let { text } = distance
                let km=parseInt(text)
                let threeWheeler = 34 * km;
                let eightFt= 44 * km;
                let threeWheelerHelper= 37 * km;
                changeVehiclePrice(threeWheeler,eightFt,threeWheelerHelper)
            })
        })
    }
    catch (err) {
        console.log(err)
    }


}


function changeVehiclePrice(threeWheeler,eightFt,threeWheelerHelper){
 document.getElementById("price_1").innerHTML=`₹ ${threeWheeler}`;
 document.getElementById("price_2").innerHTML=`₹ ${eightFt}`;
 document.getElementById("price_3").innerHTML=`₹ ${threeWheelerHelper}`;
}