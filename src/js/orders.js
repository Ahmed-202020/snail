$(function(){
    var items = $(".orders .card") ; 
    var numItems = items.length ; 
    var perPage = 6 ; 
    items.slice(perPage).hide() ; 

    $('.paginations').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "السابق",
        nextText: "التالي",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
});

$( ".new-orders .light-theme a" ).replaceWith( ".new-orders .light-theme span " )

