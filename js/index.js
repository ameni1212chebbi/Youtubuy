 $(document).ready(function() {
    $(".first-list-element").addClass("active");
    //Delete the active class and place it when one of the top menu buttons is pressed
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    // when you click on the icon of the side menu
    $("#toggler").click(function(event) {
        $('#wrap').toggleClass('toggled');

       // add a black layer
        var right = $('.sidebar').css("right"); // we have given this property to the side menu so that it is on the right
        if (right == '0px') // the side menu is showing and should be closed
        {
            $('.sidebar').css({ 'right': '-17rem' });
            $('.layer').fadeOut(); /*hide the black layer*/
        }
        else { // the side menu is closed and should be shown
            $('.sidebar').css({ 'right': '0' });
            $('.layer').fadeIn(); /*show black layer*/
        }
    });

    // Hide the side menu and the black layer when clicking on the black layer
    $('.layer').click(function () {
        $('.sidebar').css({ 'right': '-17rem' });
        $('.layer').fadeOut();
    });

   // Hide and show the search field when pressing the search icon that appears in the medium and small screens
    $(".search-icon").click(function () {
        $(".search-input").slideToggle("slow"); 
    });

});