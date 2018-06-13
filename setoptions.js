$(document).ready(function() {
    $('input[type=radio][name=side]').change(function() {
    	$('body').removeClass('front');
    	$('body').removeClass('back');
    	$('body').addClass(this.value);
    });

    $('input[type=radio][name=border]').change(function() {
        $('body').removeClass('border_black');
        $('body').removeClass('border_white');
        $('body').addClass(this.value);
    });

	$('#size_opt').on('change', function() {
		$("body").removeClass (function (index, css) {
    		return (css.match (/(^|\s)size_\S+/g) || []).join(' ');
		});
		$('body').addClass(this.value);
	})
});