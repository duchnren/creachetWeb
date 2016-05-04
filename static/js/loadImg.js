var obj = JSON.parse(myGallery);

var rowPerPage = 3;
var img_page = 18;
var img_row = 6;

var x = obj['image'].length;
var pag = Math.ceil(x/img_page);

for (j=0; j < pag; j++) {
    $('#content').append('<div id="i' + j + '" class="z"></div>');
    str = j + 1;
    $('.pagination').append('<li class="pagi" id="j' + j + '"><a href="#">' + str + '</a></li>');
    $('#j0').addClass("active");
    for (k = 0; k < rowPerPage; k++) {
        $('#i' + j + '').append('<div id="r' + k + j + '" class="row"></div>');
    }
}