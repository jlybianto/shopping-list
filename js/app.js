$(document).ready(function() {
$('#newItem').focus();
$('#addItem').click(submit);
$('#newItem').keydown(function(e) {
	if (e.keyCode == 13) {
		submit();
	}
});