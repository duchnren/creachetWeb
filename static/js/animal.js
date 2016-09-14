var rowPerPage = 3;
var img_page = 18;
var img_row = 6;

var px, rx, str, str1, px1, rx1;

//Teddy select
var teddy = JSON.parse(teddy);
var teddy_len = teddy['image'].length;
var pag_teddy = Math.ceil(teddy_len/img_page);

for (j=0; j < pag_teddy; j++) {
    $('#content_teddy').append('<div id="i1' + j + '" class="z"></div>');
//    str1 = j + 1;
//    $('.pag1').append('<li class="pagi1" id="j1' + j + '"><a href="#">' + str1 + '</a></li>');
//    $('#j0').addClass("active");
    for (k = 0; k < rowPerPage; k++) {
        $('#i1' + j + '').append('<div id="r1' + k + j + '" class="row"></div>');
    }
}

for (i = 0; i < teddy_len; i++) {
    // kam obrazek patri - px stranka, rx radek
    px1 = Math.floor(i/img_page);
    rx1 = Math.floor((i%img_page)/img_row);

    $('#r1' + rx1 + px1 + '').append(
        '<div class="col-lg-2 col-offset-md-6 col-md-4 col-sm-4 col-xs-6">' +
            '<a href="' + teddy.image[i].linkBig + '" data-toggle="lightbox" data-gallery="gall_teddy" class="modal-body">' +
                '<img class="img-responsive" src="' + teddy.image[i].linkSmall + '">' +
            '</a>' +
        '</div>'
    );
}

//var id_pag1, index1;
//
//$('li.pagi1').click(function(){
//    id_pag1 = this.id;
//    index1 = id_pag1.split("");
//    $('li').removeClass("active");
//    $('.z1').hide();
//    $('.z').hide();
//    $('#i1' + index1[1] + '').show();
//    $('li#' + id_pag1 + '').addClass("active");
//    $('.teddy').addClass("active");
//});

//Other animals select
var animal = JSON.parse(animal);
var animal_len = animal['image'].length;
var pag = Math.ceil(animal_len/img_page);

for (j = 0; j < pag; j++) {
    $('#content_zver').append('<div id="i' + j + '" class="z"></div>');
//    str = j + 1;
//    $('.pag2').append('<li class="pagi2" id="j' + j + '"><a href="#">' + str + '</a></li>');
//    $('#j0').addClass("active");
    for (k = 0; k < rowPerPage; k++) {
        $('#i' + j + '').append('<div id="r' + k + j + '" class="row"></div>');
    }
}

for (i = 0; i < animal_len; i++) {
    // kam obrazek patri - px stranka, rx radek
    px = Math.floor(i/img_page);
    rx = Math.floor((i%img_page)/img_row);
    
    $('#r' + rx + px + '').append(
        '<div class="col-lg-2 col-offset-md-6 col-md-4 col-sm-4 col-xs-6">' +
            '<a href="' + animal.image[i].linkBig + '" data-toggle="lightbox" data-gallery="gall_animal" class="modal-body">' +
                '<img class="img-responsive" src="' + animal.image[i].linkSmall + '">' +
            '</a>' +
        '</div>'
    );
}

//var id_pag, index;
//$('li.pagi2').click(function(){
//    id_pag = this.id;
//    index = id_pag.split("");
//    $('li').removeClass("active");
//    $('.z1').hide();
//    $('.z').hide();
//    $('#i' + index[1] + '').show();
//    $('li#' + id_pag + '').addClass("active");
//    $('.zver').addClass("active");
//});
