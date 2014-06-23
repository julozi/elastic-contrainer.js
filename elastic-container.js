$(document).ready(function () {
    $(window).resize(resizeElasticContent);
    resizeElasticContent();
});

/*
 * Resize elastic content
 */
function resizeElasticContent()
{
    //resizing content-boxes elastic content
    $(".elastic-container").each(function () {

        // we first calculate the sum of heights of not elastic elements
        var fixedChildrenHeight = 0;
        $(this).children(":not(.elastic-content):visible").each(function (){
            fixedChildrenHeight += $(this).outerHeight(true);
        });

        // we give the same height to all elastic elements
        var elasticChildren = $(this).children(".elastic-content:visible");
        var elasticHeight = ($(this).height() - fixedChildrenHeight) / elasticChildren.length;
        elasticChildren.each(function() {
            $(this).height(elasticHeight - ($(this).outerHeight(true)-$(this).height()));
            $(this).css("overflow-y", "hidden");
        });
    })
}