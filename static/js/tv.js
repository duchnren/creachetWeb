var tv = JSON.parse(tv);

var tv_len = tv['image'].length;

var zbytek = tv_len - 1;

var rowPerPage = 3;
var img_page = 18;
var img_row = 6;

var pag, px, rx;
var id_gal, next, prev;

pag = Math.ceil(tv_len/img_page);

for (j=0; j < pag; j++) {
    $('#content').append('<div id="i' + j + '" class="z"></div>');
    str = j + 1;
    /*$('.pagination').append('<li class="pagi" id="j' + j + '"><a href="#">' + str + '</a></li>');
    $('#j0').addClass("active");*/
    for (k = 0; k < rowPerPage; k++) {
        $('#i' + j + '').append('<div id="r' + k + j + '" class="row"></div>');
    }
}
for (i = 0; i < tv_len; i++) {
    // kam obrazek patri - px stranka, rx radek
    px = Math.floor(i/img_page);
    rx = Math.floor((i%img_page)/img_row);
    
    $('#r' + rx + px + '').append(
        '<div class="col-lg-2 col-offset-md-6 col-md-4 col-sm-4 col-xs-6">' +
            '<a href="' + tv.image[i].linkBig + '" data-toggle="lightbox" data-gallery="multiimages" class="modal-body">' +
                '<img class="img-responsive" src="' + tv.image[i].linkSmall + '">' +
            '</a>' +
        '</div>'
    );
}

