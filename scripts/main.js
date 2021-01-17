$(function() {
    $("div.painting img.painting").click(function(e, target) {
        let modalImg = $("div.modal-content img.painting-full");
        let modalTitle = $("div.modal-content b.title")
        let modalName = $("div.modal-content span.name");
        let modalPlace = $("div.modal-content p.place");
        modalImg.attr("src", $(this).attr("src"));
        let language = sessionStorage.getItem("language");
        if(language === null || language === 'polish'){
            modalTitle.html($(this).data("title-polish"));
            modalName.html($(this).data("name-polish"));
            modalPlace.html($(this).data("place-polish"));
        }
        else if(language === 'english'){
            modalTitle.html($(this).data("title-english"));
            modalName.html($(this).data("name-english"));
            modalPlace.html($(this).data("place-english"));
        }
        else if(language === 'french'){
            modalTitle.html($(this).data("title-french"));
            modalName.html($(this).data("name-french"));
            modalPlace.html($(this).data("place-french"));
        }
        $("#painting-zoomed").modal('toggle');
        $("#painting-zoomed .modal-dialog").css("max-width", "100%").width("auto").height("auto");
        $("body").css("padding-right", "0");
    })
})