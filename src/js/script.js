function imageComparison(selector) {

    let comparison = $(selector)
        .addClass('image-comparison')
        .prepend('<div class="image-comparison__before"></div>')
        .append('<button class="image-comparison__slider"></button>');

    let images = comparison
        .find('img')
        .addClass('image-comparison__image')
        .css('max-width', comparison.width());

    let before = comparison
        .find('.image-comparison__before')
        .append(images.eq(0));

    comparison
        .find('.image-comparison__slider')
        .on('dragstart', () => false) // отмена станд. drug&drop 
        .on('mousedown', function(e) {
            let slider = $(this);
            let doc = $(document).on('mousemove', (e) => {
                let offset = e.pageX - comparison.position().left;
                let width = comparison.width();

                // установим границы, чтобы ползунок не выходил 
                if (offset < 0) offset = 0;
                if (offset > width) offset = width;

                slider.css('left', offset + 'px');
                before.css('width', offset + 'px');
            });

            doc.on('mouseup', () => doc.off('mousemove'));
        });
};

imageComparison('#image-comparison');

$('.button_class').click(function(){
    alert('click');
 })

$(window).on('load resize', function () {
   

    if ($(window).width() < 1400) {
        $('#brief-info').insertAfter('#project-house');
        $('.row').removeClass('ms-3');
    }
    else {
        $('#brief-info').insertAfter('#menu');
        $('.row').addClass('ms-3');
    }

    if ($(window).width() < 992) {
        $('.row').removeClass('ms-3');
        $('.feedbacks').insertAfter('.video-player');
        $('#price').insertBefore('#num-machin');
    } else {
        $('.row').addClass('ms-3');
        $('.video-player').insertAfter('.feedbacks');
        $('#price').insertAfter('.group__cars');
    }

});