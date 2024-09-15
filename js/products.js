$(document).ready(function(){
  $('.slider').slick({
    inFinte: true,
    slidesToShow: 3 ,
    sidesToScroll: 3 ,
    autoplay: true ,
    autoplaySpeed: 1500 ,
    prevArrow: ".pre",
    nextArrow: ".nex",
    responsive: [
      {
        breakpoint: 995,
        settings: {
        slidesToShow: 2 ,
        prevArrow: false,
        nextArrow: false
          
        }
      },
      {
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false
        }
      }
      // {
      //   breakpoint: 480,
      //   settings: {
          
      //   }
      // }
    ]
  });
});


var totop = document.querySelector(".fa-arrow-up")
 var nav = document.querySelector("nav")
//  console.log(totop);
 

window.onscroll=function(){
  if(window.scrollY>600){
totop.style.display="flex"
      
  }else{
totop.style.display="none"
  }
  if(window.scrollY > 0){
    nav.style.boxShadow="var(--primary) 0px 6px 12px -2px, var(--primary) 0px 3px 7px -3px"
  }else{
    nav.style.boxShadow=" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"

  } 
}

totop.addEventListener("click",function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})










var man_menu = document.querySelector(".fa-bars")
var links = document.querySelector('.down_nav .links ')


// console.log(links);

man_menu.addEventListener("click",function(){
man_menu.classList.toggle("open")
links.classList.toggle("open")

})

// cart desgin

var cart1 = document.querySelector(".cart")
var shopping = document.querySelector(".fa-cart-shopping")
var close_cart = document.querySelector(".fa-circle-xmark")
// console.log(close_cart , shopping);


shopping.onclick= function(){
cart1.classList.add("open")
}

close_cart.onclick=function(){
cart1.classList.remove("open")
}




// ............................................


// -------------------------------------------

var amount = document.querySelector("nav .starticon2 div .span")
var products = [
  {
      id:1 ,
      img:"images/icone.png" ,
      name:"Product one",
      price:30,
      x:0,
      totall:30,

  },
  {
      id:2 ,
      img:"images/jars.jpg" ,
      name:"Product two",
      price:45,
      x:0,
      totall:45,


  },
  {
      id:3 ,
      img:"images/plate-2.png" ,
      name:"Product three",
      price:28,
      x:0,
      totall:28,

      
  },
  {
      id:4 ,
      img:"images/plate-3.png" ,
      name:"Product four",
      price:28,
      x:0,
      totall:82,

     
  },
  {
      id:5 ,
      img:"images/plate-1.png" ,
      name:"Product five",
      price:50,
      x:0,
      totall:50,

      
  },
  {
      id:6 ,
      img:"images/salad-table.jpg" ,
      name:"Product six",
      price:60,
      x:0,
      totall:60,

     
  },
  {
      id:7 ,
      img:"images/yogurt.png" ,
      name:"Product seven",
      price:75,
      x:0,
      totall:75,

      
  },
  {
      id:8 ,
      img:"images/cupcake.png" ,
      name:"Product eight",
      price:72,
      x:0,
      totall:72,

      
  },
  {
      id:9 ,
      img:"images/food-table.jpg" ,
      name:"Product nine",
      price:80,
      x:0,
      totall:80,

      
  },
  {
      id:10,
      img:"images/coffee.jpg" ,
      name:"Product ten",
      price:100,
      x:0,
      totall:100,

     
  },
]

var container_pro = document.querySelector(".products .container_pro")
function set_item_on_html(){
var item =" "
for(var i = 0 ; i< products.length ; i++){
  item += `
          <div class="card">
            <div>
                <img src="${products[i].img}" alt="">
            </div>
            <div class="card_details">
                <b>${products[i].name}</b>
                <p>$${products[i].price}</p>
               
                <button onclick='add_to_cart(${i})'> Add To Cart </button>
            </div>
            </div>
            `
            container_pro.innerHTML=item
}
// ${i}
}
set_item_on_html()


var cart 
if(localStorage.getItem("cart")==null){
  cart = []
}else{
  cart=JSON.parse(localStorage.getItem("cart"))
}
function add_to_cart(index){

 if(products[index].x == 0){
  let new_quantity = products[index].x + 1;
  products[index].x = new_quantity ;
  cart.push(products[index])
localStorage.setItem("cart" , JSON.stringify(cart))
display_products()
 }

// console.log(index);
// cart.push(products[index])
// localStorage.setItem("cart" , JSON.stringify(cart))
// display_products()

}
var cart_continer =document.querySelector(".cart .continerimg")
var total_products = document.querySelector(".cart .total span")
// var delet_product =document.querySelector(".cart .continerimg .card .fa-trash ")

// console.log(total);


// var x = 0


function display_products(){
  var item =" "
var total = 0

for(var i = 0 ; i < cart.length ; i++){
  total += cart[i].price
    item+=`
     <div class="card">
            <img src="${cart[i].img}" alt="">
            <div class="cart_details">
                 <b>${cart[i].name}</b>
                 <p>$${cart[i].price}</p>
               

            </div>
            <div class="plus">
               <button onclick="change_quantity(${i} ,${cart[i].x + 1 } )" class="pluss">+</button>
               <span class="plus_minus">${cart[i].x}</span>
               <button onclick="change_quantity(${i} ,${cart[i].x - 1 } )" class="minus">-</button>
            </div>

            <i onclick="delet_product(${i})" class="fa-solid fa-trash"></i>

      </div>
    
    `
}
total_products.innerHTML=`${total}` 
if(cart.length>0){
  amount.innerHTML=cart.length
  cart_continer.innerHTML=item
  amount.style.color="var(--primary)"
}else{
  amount.innerHTML=cart.length
  cart_continer.innerHTML="your cart is empty"
  amount.style.color="red"

}
var delet_product =document.querySelector(".cart .continerimg .card .fa-trash ")




}
display_products()

function delet_product(indexnum){
  // console.log(indexnum);
  cart.splice(indexnum , 1)
localStorage.setItem("cart" , JSON.stringify(cart))

display_products()

}


var plus_minus = document.querySelector(".cart .continerimg .card .plus .plus_minus")
//  console.log( plus_minus);

function change_quantity(key , x){
  if(x == 0){
    cart.splice(key,1)
    
  }else{
    cart[key].x = x ;

    cart[key].price= x * cart[key].totall;

  }
display_products()
}
display_products()



// if(quantity == 0){
//   cart.splice(key,1)
// }else{
//   cart[key].quantity = quantity ;
//   cart[key].price = quantity * products[id - 1].price;
// }
// show_products_in_cart()






// var plus = document.querySelector(".cart .continerimg .card .plus .pluss ")
// var minus = document.querySelector(".cart .continerimg .card .plus .minus ")
// var plus_minus = document.querySelector(".cart .continerimg .card .plus .plus_minus ")
// console.log(plus ,minus , plus_minus);


// var plus_count = 1
// function product_plus(){
//   plus_count += 1
//   plus_minus.innerHTML=plus_count

//    console.log(true);
   
// }

// // // var minus_count = 1
// function product_minus(){
//   // plus_count -= 1
//   // plus_minus.innerHTML=plus_count
//   console.log(true);
  
//