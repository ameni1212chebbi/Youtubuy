$(document).ready(function() {
    // Delete the video from the watch history when the error sign in the corner is pressed
    $(".remove").click(function () {
        $(this).parents('.card').hide(); 
    });
});