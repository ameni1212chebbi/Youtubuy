$(document).ready(function () {
   /*When the button is pressed, it calls a function that does not work and shows and hides the text*/
    $("#myBtn").on("click", function(){
        read();
    });
   /*Show and hide replies*/
    $(".reply").click(function() {
        $(this).parents("div.row").next("div.card").toggle();
    });
});
/*function
  which we use to show and hide items */
function read() {
    var dots = document.getElementById("dots");/*get the three dots*/
    var moreText = document.getElementById("more");/*fetch the text we want to show and hide*/ 
    var btnText = document.getElementById("myBtn");/*Get the button you're pressing*/
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";/*show dots */
      btnText.innerHTML = "عرض المزيد";
      moreText.style.display = "none";/*hide text */
    } else {/*If the three dots are visible which text is hidden and press the button */
      dots.style.display = "none"; /*hide dots */
      btnText.innerHTML = "عرض عناصر أقل";
      moreText.style.display = "inline"; /* Show hidden text */
    }
}