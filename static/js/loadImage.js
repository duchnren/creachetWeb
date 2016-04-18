// Script for load image to gallery.html

var obj = JSON.parse(myGallery);

var rowPerPage = 3;
var img_row = 6;
var img_page = 18;

var x = obj['image'].length;
var pag = Math.ceil(x/img_page);

var i, j, k, px, rx, prev, next;
var str;

for (j = 0; j < pag; j++) {
    $('#content').append('<div id="i' + j + '" class="z"></div>');
    str = j + 1;
    $('.pagination').append('<li class="pagi" id="j' + j + '"><a href="#">' + str + '</a></li>');
    $('#j0').addClass("active");
    for (k = 0; k < rowPerPage; k++) {
        $('#i' + j + '').append('<div id="r' + k + j + '" class="row"></div>');
    }
}

for (i = 0; i < x; i++) {
    // kam obrazek patri - px stranka, rx radek
    px = Math.floor(i/img_page);
    rx = Math.floor((i%img_page)/img_row);
    prev = i - 1;
    next = i + 1;
    $('#r' + rx + px + '').append(
        '<div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">' +
                '<a href="#image' + i + '">' +
                    '<img class="thumbnail img-responsive" src="' + obj.image[i].linkSmall + '">' +
                '</a>' +
            '<div id="image' + i + '" class="lightbox">' +
                '<div class="box-img">' +
                    '<a class="close" href="#">' +
                        '<span class="glyphicon glyphicon-remove"></span>' + 
                    '</a>' +
                    '<a href="#_">' +
                        '<img src="' + obj.image[i].linkBig + '">' + 
                    '</a>' +
                    '<nav>' + 
                        '<ul class="pager">' +
                            '<li class="previous">' + 
                                '<a href="#image' + prev + '">' + 
                                    '<span class="glyphicon glyphicon-arrow-left"></span>' + 
                                '</a>' + 
                            '</li>' +
                            '<li class="next">' + 
                                '<a href="#image' + next + '">' + 
                                    '<span class="glyphicon glyphicon-arrow-right"></span>' + 
                                '</a>' + 
                            '</li>' + 
                        '</ul>' + 
                    '</nav>' +
                '</div>' + 
            '</div>' +
        '</div>'
    ); 
}

$('.z').hide();

var id_pag, index, id_img, prev_img;

$('li.pagi').click(function(){
   id_pag = this.id;
   index = id_pag.split("");
   $('li').removeClass("active");
   $('.z1').hide();
   $('.z').hide();
   $('#i' + index[1] + '').show();
   $('li#' + id_pag + '').addClass("active");
});
