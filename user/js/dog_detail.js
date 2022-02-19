$(document).ready(function() {
    var date = Date.now();
    const dtfUS = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit',minute: '2-digit', second: '2-digit' });
    $('.time-comment').text(dtfUS.format(date));

    $('[data-toggle="collapse"]').on('click', function() {
        var $this = $(this),
            $parent = typeof $this.data('parent')!== 'undefined' ? $($this.data('parent')) : undefined;
        if($parent === undefined) { /* Just toggle my  */
            $this.find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
            return true;
        }

        /* Open element will be close if parent !== undefined */
        var currentIcon = $this.find('.glyphicon');
        currentIcon.toggleClass('glyphicon-plus glyphicon-minus');
        $parent.find('.glyphicon').not(currentIcon).removeClass('glyphicon-minus').addClass('glyphicon-plus');

    });
});