function checkRepeater(role_class, inputfield_class, limit) {
	if(!inputfield_class) return;
	var $repeater_items = $('body' + role_class + ' ' + inputfield_class + ' .InputfieldRepeaterItem').not('.InputfieldRepeaterNewItem');
	var $add_button = $('body' + role_class + ' ' + inputfield_class + ' > div > .InputfieldRepeaterAddItem');
	if($repeater_items.length > limit - 1) {
		$add_button.addClass('button-hide');
	} else {
		$add_button.removeClass('button-hide');
	}
}
