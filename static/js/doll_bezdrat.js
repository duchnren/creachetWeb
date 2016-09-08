var doll_bezdrat = JSON.parse(doll_bezdrat);

var doll_len = doll_bezdrat['image'].length;

var rowPerPage = 3;
var img_page = 18;
var img_row = 6;

var pag, px, rx;
var id_gal;

var zbytek = doll_len - 1;

pag = Math.ceil(doll_len/img_page);

// Bezdrat panenka
for (j=0; j < pag; j++) {
    $('#content_bezdrat').append('<div id="i' + j + '" class="z"></div>');
    /*$('.pagination').append('<li class="pagi" id="j' + j + '"><a href="#">' + str + '</a></li>');
    $('#j0').addClass("active");*/
    for (k = 0; k < rowPerPage; k++) {
        $('#i' + j + '').append('<div id="r' + k + j + '" class="row"></div>');
    }
}
for (i = 0; i < doll_len; i++) {
    // kam obrazek patri - px stranka, rx radek
    px = Math.floor(i/img_page);
    rx = Math.floor((i%img_page)/img_row);
    
    $('#r' + rx + px + '').append(
        '<div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">' +
            '<a href="' + doll_bezdrat.image[i].linkBig + '" data-toggle="lightbox" data-gallery="multiimages1" class="modal-body">' +
                '<img class="img-responsive  img-border" src="' + doll_bezdrat.image[i].linkSmall + '">' +
            '</a>' +
        '</div>'
    );
}
