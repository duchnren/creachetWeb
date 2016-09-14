var rowPerPage = 3;
var img_page = 18;
var img_row = 6;

var px, rx, px1, rx1;


//Doll no wire
var doll_bezdrat = JSON.parse(doll_bezdrat);
var doll_len = doll_bezdrat['image'].length;
var pag = Math.ceil(doll_len/img_page);

// Bezdrat panenka
for (j=0; j < pag; j++) {
    $('#content_bezdrat').append('<div id="i' + j + '" class="z"></div>');
    //str = j + 1;
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
            '<a href="' + doll_bezdrat.image[i].linkBig + '" data-toggle="lightbox" data-gallery="gall_bezdrat" class="modal-body">' +
                '<img class="img-responsive  img-border" src="' + doll_bezdrat.image[i].linkSmall + '">' +
            '</a>' +
        '</div>'
    );
}


//Dolls wire
var doll_drat = JSON.parse(doll_drat);

var doll_len_dr = doll_drat['image'].length;
var pag_dr = Math.ceil(doll_len_dr / img_page);

//Drat panenka
for (j = 0; j < pag_dr; j++) {
    $('#content_drat').append('<div id="i1' + j + '" class="z"></div>');
//    str = j + 1;
//    $('.pagination').append('<li class="pagi" id="j' + j + '"><a href="#">' + str + '</a></li>');
//    $('#j0').addClass("active");
    for (k = 0; k < rowPerPage; k++) {
        $('#i1' + j + '').append('<div id="r1' + k + j + '" class="row"></div>');
    }
}
for (i = 0; i < doll_len_dr; i++) {
    // kam obrazek patri - px stranka, rx radek
    px1 = Math.floor(i / img_page);
    rx1 = Math.floor((i % img_page) / img_row);

    $('#r1' + rx + px + '').append(
        '<div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">' +
            '<a href="' + doll_drat.image[i].linkBig + '" data-toggle="lightbox" data-gallery="gall_drat" class="modal-body">' +
                '<img class="img-responsive  img-border" src="' + doll_drat.image[i].linkSmall + '" id="im' + i + '">' +
            '</a>' +
        '</div>'
    );
}

//$('.z').hide();
//
//var id_pag, index, id_img, prev_img;
//
//$('li.pagi').click(function(){
//    id_pag = this.id;
//    index = id_pag.split("");
//    $('li').removeClass("active");
//    $('.z1').hide();
//    $('.z').hide();
//    $('#i' + index[1] + '').show();
//    $('li#' + id_pag + '').addClass("active");
//    $('.ac_dr').addClass("active");
//});
