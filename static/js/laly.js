var laly = JSON.parse(laly);

var laly_len = laly['image'].length;

var rowPerPage = 3;
var img_page = 18;
var img_row = 6;

var pag, px, rx;
var id_gal, next, prev;

pag = Math.ceil(laly_len/img_page);
        
$('#head').append(
    '<span class="cz">Panenky Lalylala</span>' +
    '<span class="fr">Poupeés de Lalylala</span>' +
    '<span class="en">Dolls of Lalylala</span><hr>'
);
for (j=0; j < pag; j++) {
    $('#content').append('<div id="i' + j + '" class="z"></div>');
    str = j + 1;
   /* $('.pagination').append('<li class="pagi" id="j' + j + '"><a href="#">' + str + '</a></li>');
    $('#j0').addClass("active");*/
    for (k = 0; k < rowPerPage; k++) {
        $('#i' + j + '').append('<div id="r' + k + j + '" class="row"></div>');
    }
}
for (i = 0; i < laly_len; i++) {
    // kam obrazek patri - px stranka, rx radek
    px = Math.floor(i/img_page);
    rx = Math.floor((i%img_page)/img_row);
    prev = i - 1;
    next = i + 1;
    $('#r' + rx + px + '').append(
        '<div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">' +
                '<a href="#image' + i + '">' +
                    '<img class="thumbnail img-responsive" src="' + laly.image[i].linkSmall + '">' +
                '</a>' +
            '<div id="image' + i + '" class="lightbox">' +
                '<div class="box-img">' +
                    '<div class="close">' +
                        '<a href="#">' +
                            '<img src="../static/img/ic_close.png">' +
                        '</a>' +
                    '</div>' +
                    '<a href="#_">' +
                        '<img src="' + laly.image[i].linkBig + '">' + 
                    '</a>' +
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