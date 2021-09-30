

// async function data() {
//     let dat = await fetch("http://localhost:2520/review");
//     let res = await dat.json()
//     let { review } = res

//     review.forEach(({ author,city,imageUrl,content }) => {
//         document.getElementById("rev_img_3").src = imageUrl
//         document.getElementById("rev_con_3").innerHTML = content

     
      
//         document.getElementById("city_name_3").src = city
//         console.log(author)
//         let new_div = document.createElement("div")
//         new_div.innerHTML=author
//         document.getElementById("user_name_3").append(new_div)

//     })
// }

// data()