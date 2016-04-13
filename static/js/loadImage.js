// Script for load image to gallery.html

var obj = JSON.parse(myGallery);
var img_p = []; 
var img_r = [];
var imgByPage = [];
var imgByRow = [];

var rowPerPage = 3;
var img_row = 6;
var img_page = 18;

var x = obj['image'].length;
var r = Math.ceil(x/img_row);
var pag = Math.ceil(x/img_page);


console.log(rowPerPage);

var i, j, k, l, m, p, px, rx;
var str;


for (k=0,l=x; k<l; k+=img_page) {
    img_p = obj['image'].slice(k,k+img_page);
    imgByPage.push(img_p);
}

for (var n=0, q=x; n<q; n+=img_row) {
    img_r = obj['image'].slice(n,n+img_row);
    imgByRow.push(img_r);
}

console.log(obj['image'].length);


for (j = 0; j < pag; j++) {
    $('#content').append('<div id="i' + j + '" class="z"></div>');
    str = j + 1;
    $('.pagination').append('<li id="j' + j + '"><a href="#">' + str + '</a></li>');
    
    for (k = 0; k < rowPerPage; k++) {
        $('#i' + j + '').append('<div id="r' + k + j + '" class="row"></div>');
    }
}

for (i = 0; i < x; i++) {
    // kam obrazek patri - px stranka, rx radek
    px = Math.floor(i/img_page);
    rx = Math.floor((i%img_page)/img_row);
    $('#r' + rx + px + '').append(
        '<div class="col-lg-2 col-md-3 col-xs-4 thumb">' +
        '<a class="thumbnail" href="' + obj.image[i].linkBig + '"><img class="img-responsive" src="' + obj.image[i].linkBig + '" alt=""/></a>' +
        '</div>'
    );    
}

$('.z').hide();

var id_pag, index;

$('li').click(function(){
    id_pag = this.id;
    index = id_pag.split("");
    $('.z1').hide();
    $('.z').hide();
    $('#i' + index[1] + '').show();
//    console.log();
});
