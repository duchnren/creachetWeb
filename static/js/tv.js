var tv = JSON.parse(tv);

var tv_len = tv['image'].length;

var zbytek = tv_len - 1;

var rowPerPage = 3;
var img_page = 18;
var img_row = 6;

var pag, px, rx;
var id_gal, next, prev;

pag = Math.ceil(tv_len/img_page);
        
$('#head').append(
    '<a href="gallery.html" class="zpet">' + 
    '<span class="cz">Zpět</span><span class="fr">Retour</span><span class="en">Back</span></a>' +
    '<span class="cz">Filmoví hrdinové</span>' +
    '<span class="fr">\'Héros de cinéma</span>' +
    '<span class="en">Movie heroes</span><hr>'
);
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
    prev = i - 1;
    next = i + 1;
    
    if (prev < 0) {
        prev = 0;
    }
    
    if (next > zbytek) {
        next = zbytek;
    }
    
    $(document).keyup(function(e){
        // Press ESC key
        if (e.keyCode == 27) {
            location.href='gall_item.html#/static/js/tv.js';
        }
        // Press arrow keys
        //if (e.keyCode == 37) {//left
        //}
        //if (e.keyCode == 39) {//right
        //}
        
    });
    
    $('#r' + rx + px + '').append(
        '<div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">' +
                '<a href="#image' + i + '">' +
                    '<img class="thumbnail img-responsive" src="' + tv.image[i].linkSmall + '">' +
                '</a>' +
            '<div id="image' + i + '" class="lightbox">' +
                '<div class="box-img">' +
                    '<div class="close">' +
                        '<a href="#static/js/tv.js">' +
                            '<img src="../static/img/ic_close.png">' +
                        '</a>' +
                    '</div>' +
                    '<a href="#image' + next + '">' +
                        '<img src="' + tv.image[i].linkBig + '">' + 
                    '</a>' +
                    '<div class="popis">' +
                        '<span class="cz">' + tv.image[i].nameCZ + '</span>' +
                        '<span class="fr">' + tv.image[i].nameFR + '</span>' +
                        '<span class="en">' + tv.image[i].nameEN + '</span>' +
                    '</div>' +
                    '<nav>' + 
                        '<ul class="pager">' +
        '<li class="previous">' + 
            '<a href="#image' + prev + '">' + 
                '<img id="tam" src="../static/img/ic_prev.png">' + 
            '</a>' + 
        '</li>' +
        '<li class="next">' + 
            '<a id="sem" href="#image' + next + '">' + 
                '<img src="../static/img/ic_next.png">' + 
            '</a>' + 
        '</li>' +
        '</ul>' + 
                    '</nav>' +
                '</div>' + 
            '</div>' +
        '</div>'
    );
}

