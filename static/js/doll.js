var doll_bezdrat = JSON.parse(doll_bezdrat);
var doll_drat = JSON.parse(doll_drat);

var doll_len = doll_bezdrat['image'].length;
var doll_drat_len = doll_drat['image'].length;

var rowPerPage = 3;
var img_page = 18;
var img_row = 6;

var pag, px, rx;
var id_gal;

var zbytek = doll_len - 1;
var zbytek_d = doll_drat_len - 1;

pag = Math.ceil(doll_len/img_page);
pag_d = Math.ceil(doll_drat_len/img_page);
        
//$('#head').append(
//    '<a href="gallery.html" class="zpet">' +
//    '<span class="cz">Zpět</span><span class="fr">Retour</span><span class="en">Back</span></a>' +
//    '<span class="cz">Kolekce panenek</span>' +
//    '<span class="fr">Assortiment de poupées</span>' +
//    '<span class="en">Assortment of dolls</span><hr>'
//);

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
            '<a href="' + doll_bezdrat.image[i].linkBig + '" data-toggle="lightbox" data-gallery="multiimages" class="modal-body">' +
                '<img class="img-responsive" src="' + doll_bezdrat.image[i].linkSmall + '">' +
            '</a>' +
        '</div>'
    );
}

//Drat panenka
for (j=0; j < pag_d; j++) {
    $('#content_drat').append('<div id="i' + j + '" class="z"></div>');
    /*$('.pagination').append('<li class="pagi" id="j' + j + '"><a href="#">' + str + '</a></li>');
    $('#j0').addClass("active");*/
    for (k = 0; k < rowPerPage; k++) {
        $('#i' + j + '').append('<div id="r' + k + j + '" class="row"></div>');
    }
}
for (i = 0; i < doll_drat_len; i++) {
    // kam obrazek patri - px stranka, rx radek
    px = Math.floor(i/img_page);
    rx = Math.floor((i%img_page)/img_row);
    
    $('#r' + rx + px + '').append(
        '<div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">' +
            '<a href="' + doll_drat.image[i].linkBig + '" data-toggle="lightbox" data-gallery="multiimages" class="modal-body">' +
                '<img class="img-responsive" src="' + doll_drat.image[i].linkSmall + '">' +
            '</a>' +
        '</div>'
    );
}
