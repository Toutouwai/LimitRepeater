function checkRepeater(inputfield_class, limit, limit_clone) {
	var $inputfield_content = $(inputfield_class + ' > .InputfieldContent');
	var $repeater_items = $inputfield_content.find('> .Inputfields > .InputfieldRepeaterItem').not('.InputfieldRepeaterNewItem');
	var $add_button = $inputfield_content.find('> .InputfieldRepeaterAddItem');
	var $insert_buttons = $repeater_items.find('> .InputfieldHeader').find('.InputfieldRepeaterInsertAfter, .InputfieldRepeaterInsertBefore');
	if($repeater_items.length >= limit) {
		if(limit_clone) $repeater_items.find('> .InputfieldHeader .InputfieldRepeaterClone').hide();
		$add_button.removeClass('lr-show');
		$insert_buttons.hide();
	} else {
		if(limit_clone) $repeater_items.find('> .InputfieldHeader .InputfieldRepeaterClone').show();
		$add_button.addClass('lr-show');
		$insert_buttons.show();
	}
}
