

// fake comment source-https://codepen.io/NathzRyuzaki/pen/WWwLeZ
function submit_comment() {
    var comment = $('.commentar').val();
    el = document.createElement('li');
    el.className = "box_result row";
    el.innerHTML =
        '<div class=\"avatar_comment col-md-1\">' +
        '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\"/>' +
        '</div>' +
        '<div class=\"result_comment col-md-11\">' +
        '<h4>Anonimous</h4>' +
        '<p>' + comment + '</p>' +
        '<div class=\"tools_comment\">' +
        '<a class=\"like\" href=\"#\">Like</a><span aria-hidden=\"true\"> · </span>' +
        '<i class=\"fa fa-thumbs-o-up\"></i> <span class=\"count\">0</span>' +
        '<span aria-hidden=\"true\"> · </span>' +
        '<a class=\"replay\" href=\"#\">Reply</a><span aria-hidden=\"true\"> · </span>' +
        '<span>1m</span>' +
        '</div>' +
        '<ul class="child_replay"></ul>' +
        '</div>';
    document.getElementById('list_comment').prepend(el);
    $('.commentar').val('');
}

$(document).ready(function () {
    // owl carousel
    $('.owl-two').owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                items: 4

            }
        }
    });
    // owl mobile
    $('.owl-mobile-only').owlCarousel({
        loop: true,
        nav: true,
       items:1
    });
    //owl training
    $('.owl-training').owlCarousel({
        loop: true,
        nav: true,
        items:1,
    });

    // owl custom
    //trigger on click
    var $owl = $('.owl-carousel.owl-three');

    $owl.children().each(function (index) {
        $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
        loop: true,
        nav: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 5
            },
            1200: {
                items: 7
            }
        }
    });

    $(document).on('click', '.owl-item>div', function () {
        $owl.trigger('to.owl.carousel', $(this).data('position'));
    });
    // slider control text
    var owlthree = $('.owl-three');
    $('.owl-three .owl-item').on('click', function(e){
        $('.hocvien_desc').removeClass('block');
        var carousel = $('.owl-three').data('owl.carousel');
        e.preventDefault();
        carousel.to(carousel.relative($(this).index()));
        var id = $(this).children('.item_hocvien').attr('href');
        $('.hocvien_desc'+id).addClass('block');
    });
    owlthree.on('translated.owl.carousel', function(event) {
        $('.hocvien_desc').removeClass('block');
        $('.owl-three .owl-item.center').each(function(){
            var id = $(this).children('.item_hocvien').attr('href');
            $('.hocvien_desc'+id).addClass('block');
        });
    })
    $('.owl-three .owl-item.center').each(function(){
        var id = $(this).children('.item_hocvien').attr('href');
        $('.hocvien_desc'+id).addClass('block');
    });
});

function submit_reply() {
    var comment_replay = $('.comment_replay').val();
    el = document.createElement('li');
    el.className = "box_reply row";
    el.innerHTML =
        '<div class=\"avatar_comment col-md-1\">' +
        '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\"/>' +
        '</div>' +
        '<div class=\"result_comment col-md-11\">' +
        '<h4>Anonimous</h4>' +
        '<p>' + comment_replay + '</p>' +
        '<div class=\"tools_comment\">' +
        '<a class=\"like\" href=\"#\">Like</a><span aria-hidden=\"true\"> · </span>' +
        '<i class=\"fa fa-thumbs-o-up\"></i> <span class=\"count\">0</span>' +
        '<span aria-hidden=\"true\"> · </span>' +
        '<a class=\"replay\" href=\"#\">Reply</a><span aria-hidden=\"true\"> · </span>' +
        '<span>1m</span>' +
        '</div>' +
        '<ul class="child_replay"></ul>' +
        '</div>';
    $current.closest('li').find('.child_replay').prepend(el);
    $('.comment_replay').val('');
    cancel_reply();
}

function cancel_reply() {
    $('.reply_comment').remove();
}