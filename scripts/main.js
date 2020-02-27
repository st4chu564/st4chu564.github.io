$(function() {
    $("div.painting img.painting").click(function(e, target) {
        let modalImg = $("div.modal-content img.painting-full");
        let modalTitle = $("div.modal-content b.title")
        let modalName = $("div.modal-content span.name");
        let modalPlace = $("div.modal-content p.place");
        console.log($(this).data("title"));
        modalImg.attr("src", $(this).attr("src"));
        modalTitle.html($(this).data("title"));
        modalName.html($(this).data("name"));
        modalPlace.html($(this).data("place"));
        $("#painting-zoomed").modal('toggle');
        $("#painting-zoomed .modal-dialog").css("max-width", "100%").width("auto").height("auto");
        $("body").css("padding-right", "0");
    })
})