var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Xiomi', "Samsung", "Huwei", "Apple"],
      datasets: [{
          label: 'Usage',
          data: [127, 78, 440, 59],
          backgroundColor: ["purple", "#ff4646", "dodgerblue", "orangered"],
      }]
  },
  options:{
    legend:{
      display:false
    },
    animation:{
      duration: 5000
    }
  }
});




const btn = document.getElementById("mbtn");
const input = document.getElementById("myInput");
const para = document.querySelector(".para");

btn.addEventListener("click",()=>{
  input.select();
  document.execCommand("copy");
  if(input.value !==""){
    para.classList.add("show");
    setTimeout(function(){
    para.classList.remove("show");
    }, 1500)
  }
 
})





// ===================================================
$(document).ready(function () {
  $("#bar").on('click',function(){
    $(".side_nav").toggleClass("active");
    $(".main").toggleClass("active");
    $(".canvas").addClass("active");

  })

  $(".canvas").click(function(){
    $(".side_nav").removeClass("active");
    $(this).removeClass("active");
  })


  $(".side_nav ul li a").on('click',function(){
    $(".side_nav ul li a").removeClass("active");
    $(this).addClass("active");
  })

  $(".chat_btn").click(function(){
    $(".chat_box").toggleClass("active");
  });

 


  


});


