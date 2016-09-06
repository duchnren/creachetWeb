var animal = JSON.parse(animal);

var animal_len = animal['image'].length;

var rowPerPage = 3;
var img_page = 18;
var img_row = 6;

var pag, px, rx;
var id_gal, next, prev;

var zbytek = animal_len - 1;

pag = Math.ceil(animal_len/img_page);

for (j=0; j < pag; j++) {
    $('#content').append('<div id="i' + j + '" class="z"></div>');
    /*$('.pagination').append('<li class="pagi" id="j' + j + '"><a href="#">' + str + '</a></li>');
    $('#j0').addClass("active");*/
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
            '<a href="' + animal.image[i].linkBig + '" data-toggle="lightbox" data-gallery="multiimages" class="modal-body">' +
                '<img class="img-responsive" src="' + animal.image[i].linkSmall + '">' +
            '</a>' +
        '</div>'
    );
}



var id_pag, index, id_img, prev_img;

/*$('li.pagi').click(function(){
   id_pag = this.id;
   index = id_pag.split("");
   $('li').removeClass("active");
   $('.z1').hide();
   $('.z').hide();
   $('#i' + index[1] + '').show();
   $('li#' + id_pag + '').addClass("active");
});*/
