var x = location.hash;
var comment = x.slice(1);
$('body').prepend(
    '<script src="' + comment + '"></script>'
);