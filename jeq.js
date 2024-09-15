// var button =document.querySelector("button")
// button.addEventListener("click",function(){
//     console.log(true);
    
// })

// $("button").click(function(){
//     console.log(true);
    
// })

// $(".box div").mouseenter(function(){
//     this.style.backgroundColor="blue"
//     this.style.borderRadius="50%"
// })
// $(".box div").mouseleave(function(){
//     this.style.backgroundColor="black"
//     this.style.borderRadius="0"

//     setTimeout(()=>{
//         this.style.backgroundColor=" orangered"
//     },1500)
// })


// $(".box .btns .hide").click(function(){
//     $(".box section").hide(1000)
// })
// $(".box .btns .show").click(function(){
//     $(".box section").show(1000)
// })

// $(".box .btns .togel").click(function(){
//     $(".box section").toggle(1000)
// })

// $(".fadeout").click(function(){
//     $("section").fadeOut(1000)
// })

// $(".fadein").click(function(){
//     $("section").fadeIn(1000)
// })
// $(".fadetoggle").click(function(){
//     $("section").fadeToggle(1000)
// })

// $(".slideup").click(function(){
//     $("section h1").slideUp(1000)
// })
// $(".slidedown").click(function(){
//     $("section h1").slideDown(1000)
// })
// $(".slidetoggle").click(function(){
//     $(" section h1").slideToggle(1000)
// })


// console.log(scrollY);


// $(window).scroll(function(){
//     if(scrollY > 800){
//         $(".continer .img img").show(1000)
//         $(".continer .details h1").slideDown(1000)
//         $(".continer .details p").slideDown(1000)
//     }else{
//         $(".continer .img img").hide(1000)
//         $(".continer .details h1").slideUp(1000)
//         $(".continer .details p").slideUp(1000)
         
//     }
    
// })

// $("button").click(function(){
//     //    console.log(true);
//     // $(".continer div").css({backgroundColor:"red" , borderRadius:"50px" , border:"2px solid green"})
//     $(".continer div").animate({backgroundColor:"black" , width:"400px" , height:"700px"},1000)

//     // $(".continer div").text("hello jequery")
//     $(".continer div").html("<h1>hello jequery</h1>")
//     $(".continer div").before("<h3>hello jequery amy ahmed</h3>")
//     $(".continer div").after("<h3>hello jequery amy eslam</h3>")

//     $(".continer div").append("<h4>hello jequery amy ahmed</h4>")
//     $(".continer div").prepend("<h4>hello jequery amy ahmed</h4>")


//     $(".continer div").animate({marginLeft:"200px"},5000)
//                       .animate({marginTop:"200px"},5000)
//                       .animate({marginLeft:"0px"},5000)
//                       .animate({marginTop:"0px"},5000)

//      })



// $("button").click(function(){
//     $("button").text("loading...")
    
//    $(".continer div").show(1000)

//  var i =0
//    setInterval(()=>{
// //  var i = 0

//    $(".continer div").text(i +=1)
      
//         },10)

//        if( $(".continer div").text(i +=1)==10){
//         console.log(true);
        
//        }


    
// })


   setInterval(()=>{
    ++counter
