// all display go for first section exept the contact in diffrant section
// www.themealdb.com/api/json/v1/1/filter.php?a=Canadian search by area nave country
let main = document.querySelector(".main")
let load = document.querySelector(".load")

/////////////////////////////defultl display////////////////
async function getDefultCards() {
    load.classList.remove("d-none")
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let data = await res.json()
    console.log(data)
    display(data)
}
getDefultCards()

function display(data) {
    let cartoona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartoona += `
        <div class="col-12 car col-sm-6 col-md-4 col-lg-3 ">
        <div class="image position-relative overflow-hidden ">
          <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
          <div class="layer bg-layer position-absolute d-flex align-items-center  rounded-3  w-100 h-100">
            <h2 class="px-2">${data.meals[i].strMeal}</h2>
          </div>
        </div>
    </div>
        `
    }
    main.innerHTML = cartoona
    load.classList.add("d-none")
    CardInfo(data)


}
/////////////////////////////defultl display////////////////
// ////////////////////////////AREA///////////////////////////////
$(".Area").click(

    async function areaApi() {
        load.classList.remove("d-none")

        let res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        let data = await res.json()

        // console.log(data.meals)
        displayArea(data)

    }
)
function displayArea(data) {
    let cartoona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartoona += `
    <div class="col-12 car areacard col-md-3 ">
        <div class="content text-center text-white">
          <i class="fa-solid  fa-house-laptop fa-4x"></i>
          <h2>${data.meals[i].strArea}</h2>
        </div>

    </div>
        
        `
    }
    main.innerHTML = cartoona
    load.classList.add("d-none")

    areaCards(data)
}
function areaCards(data) {

    for (let i = 0; i < data.meals.length; i++) {
        let dataa = data
        $(".areacard").eq(i).click(async function () {
            load.classList.remove("d-none")

            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${dataa.meals[i].strArea}`)
            let data = await res.json()

            displayAreaCard(data)

        })
    }
}
function displayAreaCard(data) {
    cartoona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartoona += `
        
    <div class="col-12 car col-sm-6 col-md-4 col-lg-3 ">
        <div class="image position-relative overflow-hidden ">
          <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
          <div class="layer bg-layer position-absolute d-flex align-items-center  rounded-3  w-100 h-100">
            <h2 class="px-2">${data.meals[i].strMeal}</h2>
          </div>
        </div>
    </div>`
    }

    main.innerHTML = cartoona
    load.classList.add("d-none")

    CardInfo(data)
}
// ////////////////////////////AREA///////////////////////////////
////////////////////////////categories////////////////////////////
$(".Categories").click(
    async function categorieApi() {
        load.classList.remove("d-none")

        let res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        let data = await res.json()
        displayCatogry(data)
    })
function displayCatogry(data) {
    let cartoona = ``;
    for (let i = 0; i < data.categories.length; i++) {
        cartoona += `
         <div class="col-12 car catogryCard col-sm-6 col-md-4 col-lg-3 ">
            <div class="image position-relative overflow-hidden ">
              <img src="${data.categories[i].strCategoryThumb}" class="w-100 rounded-3" alt="">
              <div class="layer bg-layer position-absolute d-flex align-items-center  rounded-3  w-100 h-100">
                <h2 class="ps-2">${data.categories[i].strCategory}</h2>
              </div>
            </div>
    
    
          </div>
        `
    }

    main.innerHTML = cartoona
    load.classList.add("d-none")

    categoreCards(data)


}
function categoreCards(data) {
    let dataa = data
    for (let i = 0; i < data.categories.length; i++) {
        $(".catogryCard").eq(i).click(async function () {
            //${data.meals[i].strArea}
            load.classList.remove("d-none")

            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${dataa.categories[i].strCategory}`)
            let data = await res.json()

            displayCatogryCard(data)


        })
    }
}

function displayCatogryCard(data) {
    cartoona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartoona += `
        
    <div class="col-12 car col-sm-6 col-md-4 col-lg-3 ">
        <div class="image position-relative overflow-hidden ">
          <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
          <div class="layer bg-layer position-absolute d-flex align-items-center  rounded-3  w-100 h-100">
            <h2 class="px-2">${data.meals[i].strMeal}</h2>
          </div>
        </div>
    </div>`
    }

    main.innerHTML = cartoona
    load.classList.add("d-none")

    CardInfo(data)
}
///////////////////categories////////////////////////////////////



//////////////////ingredients///////////////////////////////////
$(".Ingredients").on("click", async function () {

    load.classList.remove("d-none")

    let res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let data = await res.json()
    // console.log(data )
    displayIntgrty(data)
})
function displayIntgrty(data) {
    let cartoona = ``;
    for (let i = 0; i < 20; i++) {//do not forget to write name of arr contain objects 
        cartoona += `
    <div class="col-12 ingredient car col-sm-6 col-md-4 col-lg-3">
      <div class="content text-center text-white">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h2>${data.meals[i].strIngredient}</h2>
        <p>${data.meals[i].strDescription.slice(0, 150)}.</p>
      </div>
    </div>
    `
    }

    main.innerHTML = cartoona
    load.classList.add("d-none")

    ingredientCards(data)
}
function ingredientCards(data) {
    let dataa = data
    for (let i = 0; i < data.meals.length; i++) {
        //must write display for ingredient
        $(".ingredient").eq(i).click(async function () {
            load.classList.remove("d-none")

            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${dataa.meals[i].strIngredient}`)
            let data = await res.json()
            //    console.log(data)

            displayIngredientCards(data)


        })
    }
}
function displayIngredientCards(data) {
    cartoona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartoona += `
        
    <div class="col-12 car col-sm-6 col-md-4 col-lg-3 ">
        <div class="image position-relative overflow-hidden ">
          <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
          <div class="layer bg-layer position-absolute d-flex align-items-center  rounded-3  w-100 h-100">
            <h2 class="px-2">${data.meals[i].strMeal}</h2>
          </div>
        </div>
    </div>`
    }

    main.innerHTML = cartoona
    load.classList.add("d-none")

    CardInfo(data)
}
//////////////////ingredients//////////////////////////////////

////////////////card INFORMATION//////////////////////////////
function CardInfo(data) {
    let showCard = $(".car")
    let dataa = data
    for (let i = 0; i < showCard.length; i++) {
        showCard.eq(i).click(async function () {
            load.classList.remove("d-none")

            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dataa.meals[i].idMeal}`)
            let data = await res.json()
            displayCardInfo(data)


        })

    }

}
function displayCardInfo(data) {


    let cartoona = `
     <div class="col-md-4 col-10 offset-2 offset-md-0">
        <div class="image rounded-4">
          <img src="${data.meals[0].strMealThumb}" class="w-100 mb-2 rounded-4" alt="food">
          <h3>${data.meals[0].strMeal}</h3>


        </div>
     </div>

      <div class="col-md-8 col-10 offset-2 offset-md-0">
        <div class="content">
          <h3>Instructions</h3>
          <p>Fry ${data.meals[0].strInstructions}</p>
          <p class="h3">Area : <span class="h4">${data.meals[0].strArea}</span> </p>
          <p class="h3">Category : <span class="h4">${data.meals[0].strCategory}</span> </p>
          <p class="h3 pb-3">Recipes :<br>
          <ul class="d-flex flex-wrap list-unstyled">
          ${recipes(data)}
          </ul>
          </p>
          <p class="h3 mb-4 tag">Tags :
          <ul class="list-unstyled">${tags(data)}</ul>
         
          </p>
          <button class="btn mt-2 mb-2 btn-success"><a class="text-decoration-none text-white" target="_blank" href="${data.meals[0].strSource}">Source</a></button>
          <button class="btn mt-2 mb-2 btn-danger"><a class="text-decoration-none text-white" target="_blank" href="${data.meals[0].strYoutube}">Youtube</a></button>
        </div>
      </div>
        `


    main.innerHTML = cartoona
    load.classList.add("d-none")
    document.querySelector(".searchTERM").classList.add("d-none")



}

function tags(data) {
    let box = ``
    if (data.meals[0].strTags != null & data.meals[0].strTags != "" & data.meals[0].strTags != undefined) {
        let arrOFdata = data.meals[0].strTags.split(",")
        for (let index = 0; index < arrOFdata.length; index++) {
            box+=` 
            <li class="h6  ms-2 bgtag p-1 rounded-1 d-inline">${arrOFdata[index]}</li>
            
            `
            
        }
    }
    
    return box


}

function recipes(data) {
    let box = ``
    for (let i = 1; i <= 20; i++) {
        let strIngredient = "strIngredient"
        let strMeasure="strMeasure"

        if (data.meals[0][strIngredient + i] != "" & data.meals[0][strIngredient + i] != null) {
            box += `<li class="h6 m-1 p-2  recipes">${data.meals[0][strMeasure + i]} ${data.meals[0][strIngredient + i]}</li>
             `


        }
    }
    return box

}
// //////////////////////////////////////////////////////////


// ////////////////////////SEARCH//////////////////////////////
$(".search").click(function () {

    main.innerHTML = ""
    document.querySelector(".searchTERM").classList.toggle("d-none")

})
function removeSearch() {
    document.querySelector(".searchTERM").classList.add("d-none")
}
let byname=document.querySelector(".byname")
let byfirstletter=document.querySelector(".byfirstletter")
byname.addEventListener("input",async function (e) {
    load.classList.remove("d-none")

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`)
    let data = await res.json()
    load.classList.add("d-none")
    //  displaySearchInfo(data)
    display(data)
})
// function displaySearchInfo(data) {

//     cartoona = ``
//     for (let i = 0; i < data.meals.length; i++) {
//         cartoona += `
        
//     <div class="col-12 car col-sm-6 col-md-4 col-lg-3 ">
//         <div class="image position-relative overflow-hidden ">
//           <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-3" alt="">
//           <div class="layer bg-layer position-absolute d-flex align-items-center  rounded-3  w-100 h-100">
//             <h2 class="px-2">${data.meals[i].strMeal}</h2>
//           </div>
//         </div>
//     </div>`
//     }
//     main.innerHTML = cartoona
//     CardInfo(data)

// }
byfirstletter.addEventListener("input",async function (e) {
    if(e.target.value=="" || e.target.value==null)
        return;

    load.classList.remove("d-none")
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`)
    let data = await res.json()
    load.classList.add("d-none")
    // displaySearchInfo(data)
    display(data)
})
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
let warning = {
    0: "Special characters & capital char & numbers => not allowed",
    1: "example.com",
    2: "must egyption number",
    3: "none valid age",
    4: "MIN 5 MAX 15 WRITE ANYTHING",
    5: "MUST BE LIKE PASSWORD & must password valid"
}
let valids = {
    0: /^[a-z]{2,9}\s?[A-Z]?([a-z]{2,9})?$/,
    1: /^.{3,15}.com/,
    2: /^01[0125][0-9]{8}$/,
    3: /^[0-9]{1,3}$/,
    4: /^.{5,15}$/


}
function validation() {
    let allInput = document.querySelectorAll(".contact input")
    let alerts = document.querySelectorAll(".alert")
    let button = document.querySelector(".contact .btn-outline-success")
    let resetbtn = document.querySelector(".contact .btn-outline-danger")
    for (let i = 0; i < allInput.length; i++) {

        allInput[i].addEventListener("input", function (e) {
            if (e.target == allInput[5] & allInput[4].value != null) {
                if (allInput[5].value == allInput[4].value & allInput[4].classList.contains("is-valid")) {
                    alerts[5].classList.add("d-none")
                    allInput[5].classList.remove("is-invalid")
                    allInput[5].classList.add("is-valid")
                }
                else {
                    alerts[5].classList.remove("d-none")
                    alerts[5].innerHTML = warning[5]
                    allInput[5].classList.add("is-invalid")
                    allInput[5].classList.remove("is-valid")

                }
            }
            else if (valids[i].test(e.target.value)) {
                alerts[i].classList.add("d-none")
                allInput[i].classList.remove("is-invalid")
                allInput[i].classList.add("is-valid")


            }
            else {
                allInput[i].classList.remove("is-valid")
                allInput[i].classList.add("is-invalid")
                alerts[i].innerHTML = warning[i]
                alerts[i].classList.remove("d-none")

            }
            enable()

        })
        

    }
function enable(){
    let f = 0;
    for (let i = 0; i < 6; i++) {
        if (allInput[i].classList.contains("is-valid")) {
            f++

        }
        else {
            f--
        }
    }
    if (f == 6) {
        button.classList.remove("disabled")
    }
    else{
        button.classList.add("disabled")

    }
}

button.addEventListener("click", function () {
        let flag = 0;
        for (let i = 0; i < allInput.length; i++) {
            if (allInput[i].classList.contains("is-valid")) {
                flag++
            }
            else {
                flag--
            }
        }
        if (flag == 6) {
           

            
            getDefultCards()

           document.querySelector(".modal-body").innerHTML="Welcom"
           document.querySelector(".modal-content").classList.add("bg-success")
           document.querySelector(".modal-content").classList.remove("bg-danger")



        }
        else {
                    document.querySelector("#exampleModalLabel").innerHTML=""
           document.querySelector(".modal-body").innerHTML="Must Completly The Form "
           document.querySelector(".modal-content").classList.add("bg-danger")
           document.querySelector(".modal-content").classList.remove("bg-success")


        }})
    
    resetbtn.addEventListener("click", function () {
        for (let i = 0; i < 6; i++) {
            allInput[i].value = ""
            allInput[i].classList.remove("is-valid")
            allInput[i].classList.remove("is-invalid")
            alerts[i].classList.add("d-none")
        }

    })

}
$(".contactus").on("click", function (e) {

    let cartoona = `
      <div class="contact w-65 m-auto vh-100 d-flex align-items-center ">
      <div class="row gy-4 justify-content-center ">
        <div class="col-12 col-md-6">
          <input type="text" placeholder="Enter your name" class="form-control">
          <p class="alert d-none alert-danger"></p>
        </div>
        <div class="col-12 col-md-6">
          <input type="text" placeholder="Enter Your Email" class="form-control">
          <p class="alert d-none alert-danger"></p>
  
        </div>
        <div class="col-12 col-md-6">
          <input type="number" placeholder="Enter your Phone" class="form-control">
          <p class="alert d-none alert-danger"></p>
  
        </div>
        <div class="col-12 col-md-6">
          <input type="number" placeholder="Enter your Age" class="form-control">
          <p class="alert d-none alert-danger"></p>
  
        </div>
        <div class="col-12 col-md-6">
          <input type="password" placeholder="Enter your Password" class="form-control">
          <p class="alert d-none alert-danger"></p>
  
        </div>
        <div class="col-12 col-md-6">
          <input type="password" placeholder="Enter your RePassword" class="form-control">
          <p class="alert d-none alert-danger"></p>
  
        </div>
  
        <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-success disabled mx-2 w-10">Submit</button>
        <button type="reset" class="btn btn-outline-danger reset w-10">Reset</button>
      </div>
    </div> 
    `
    main.innerHTML = cartoona
    validation()

})
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
///////////////////aside bar///////////////////////////////////
let widthOfLeftSide = $(".leftside").outerWidth()
let icons = document.querySelectorAll(".iconi")
let li=$(".aside ul li")
let aside=$(".aside")
$(".iconi").on("click", function (e) {
   
    boolean(true)


 

    
    if (aside.css("left") == "0px") {
        closeSidebar()

    }
    else {
        aside.css("left", `0px`)
        icons[0].classList.remove("d-none")
        icons[1].classList.add("d-none")

    }

})
function closeSidebar() {
    boolean(false)
  
    aside.css("left", `${-widthOfLeftSide}px`)
    icons[0].classList.add("d-none")
    icons[1].classList.remove("d-none")
  


}
li.click(closeSidebar)
$(".aside .leftside li.c").click(removeSearch)

function boolean(boolean){
    if(boolean==true){
        li.eq(0).animate({"top":"0px"},500)
        li.eq(1).animate({"top":"0px"},600)
        li.eq(2).animate({"top":"0px"},700)
        li.eq(3).animate({"top":"0px"},800)
        li.eq(4).animate({"top":"0px"},900)

    }
    else if(boolean==false){
        li.eq(0).animate({"top":"300px"},50)
        li.eq(1).animate({"top":"300px"},60)
        li.eq(2).animate({"top":"300px"},70)
        li.eq(3).animate({"top":"300px"},80)
        li.eq(4).animate({"top":"300px"},90)
     

    }
}

///////////////////aside bar///////////////////////////////////













