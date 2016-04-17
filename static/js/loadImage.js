// Script for load image to gallery.html

var obj = JSON.parse(myGallery);

var rowPerPage = 3;
var img_row = 6;
var img_page = 18;

var x = obj['image'].length;
var pag = Math.ceil(x/img_page);

var i, j, k, px, rx;
var str;

for (j = 0; j < pag; j++) {
    $('#content').append('<div id="i' + j + '" class="z list-group gallery"></div>');
    str = j + 1;
    $('.pagination').append('<li id="j' + j + '"><a href="#">' + str + '</a></li>');
    $('#j0').addClass("active");
    for (k = 0; k < rowPerPage; k++) {
        $('#i' + j + '').append('<div id="r' + k + j + '" class="row"></div>');
    }
}

for (i = 0; i < x; i++) {
    // kam obrazek patri - px stranka, rx radek
    px = Math.floor(i/img_page);
    rx = Math.floor((i%img_page)/img_row);
    $('#r' + rx + px + '').append(
        '<div class="col-lg-2 col-md-4 col-sm-4 col-xs-6 thumb">' +
        '<a href="' + obj.image[i].linkBig + '" class="fancybox-button thumbnail" rel="ligthbox' + px + '"><img class="img-responsive" src="' + obj.image[i].linkBig + '" alt=""/></a>' +
        '</div>'
    );    
}

$('.z').hide();

var id_pag, index;

$('li').click(function(){
    id_pag = this.id;
    index = id_pag.split("");
    $('li').removeClass("active");
    $('.z1').hide();
    $('.z').hide();
    $('#i' + index[1] + '').show();
    $('li#' + id_pag + '').addClass("active");
//    console.log();
});
