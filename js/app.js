/* Capitalize every first character of an input */
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

/* Adding an item */
function addListItem() {
    var write = $('#newItem').val();
    var list = $('#itemList');
    var item = $('<li><input class="checkbox" type="checkbox"><span class="item">' + toTitleCase(write) + '</span><button class="delete">x</button></li>');
    var newItem = $("#newItem");

    if (write.length === 0 || write.length > 24) {
        return false;
    }

    list.prepend(item);
    $(newItem).val('');
}

/* Removing a single item */
function removeItem() {
    $(this).parent().remove();
}

/* Clearing the whole item list */
$(document).on('click', '#resetButton',
    function() {
        $('#itemList').empty();
    }
);

/* Checking items off makes strikethrough */
function tickItem() {
    $(this).parent().toggleClass('checked-off');
}

/* Implementing functions */
$(function() {
    var add = $('#addItem');
    var newItem = $('#newItem');
    var list = $('#itemList');

    add.on('click', addListItem);
    list.on('click', '.delete', removeItem);
    list.on('click', '.checkbox', tickItem);
    newItem.on('keypress', function(e) {
        if (e.which == 13) {
            addListItem();
        }
    });
});