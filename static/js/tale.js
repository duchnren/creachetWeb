var bella = JSON.parse(tale);

var bella_len = bella['image'].length;

var rowPerPage = 3;
var img_page = 18;
var img_row = 6;

var pag, px, rx;
var id_gal, next, prev;

var zbytek = bella_len - 1;

pag = Math.ceil(bella_len/img_page);
        
$('#head').append(
    '<a href="gallery.html" class="zpet">' + 
    '<span class="cz">Zpět</span><span class="fr">Retour</span><span class="en">Back</span></a>' +
    '<span class="cz">Panenky Talento</span>' +
    '<span class="fr">Poupeés Talento</span>' +
    '<span class="en">Dolls Talento</span><hr>'
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
for (i = 0; i < bella_len; i++) {
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
                    '<img class="thumbnail img-responsive" src="' + bella.image[i].linkSmall + '">' +
                '</a>' +
            '<div id="image' + i + '" class="lightbox">' +
                '<div class="box-img">' +
                    '<div class="close">' +
                        '<a href="#static/js/tale.js">' +
                            '<img src="../static/img/ic_close.png">' +
                        '</a>' +
                    '</div>' +
                    '<a href="#image' + next + '">' +
                        '<img src="' + bella.image[i].linkBig + '">' + 
                    '</a>' +
                    '<div class="popis">' +
                        '<span class="cz">' + bella.image[i].nameCZ + '</span>' +
                        '<span class="fr">' + bella.image[i].nameFR + '</span>' +
                        '<span class="en">' + bella.image[i].nameEN + '</span>' +
                    '</div>' +
                    '<nav>' + 
                        '<ul class="pager">' +
                            '<li class="previous">' + 
                                '<a href="#image' + prev + '">' + 
                                    '<img src="../static/img/ic_prev.png">' + 
                                '</a>' + 
                            '</li>' +
                            '<li class="next">' + 
                                '<a href="#image' + next + '">' + 
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