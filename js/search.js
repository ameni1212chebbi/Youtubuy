$(document).ready(function() {
    // open and close search filters
    $("#search-filters-icon").click(function () {
        $(".filter-column").slideToggle("slow");
    });
    /*Choose one option from each of the checkboxes*/
    $("input:checkbox").click(function () {
        var $box = $(this);// Select the checked checkbox that was pressed

        if ($box.is(":checked")) {//If tick box is checked?
           //attr Get the name of the checkbox by property
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);// False setting for all checkboxes in the group that have the name we brought in the previous line
            $box.prop("checked", true);// check only true for the checkbox that we pressed
        }
    });
});