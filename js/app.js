function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

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

function removeItem() {
    $(this).parent().remove();
}

$(document).on('click', '#resetButton',
    function() {
        $('#itemList').empty();
    }
);

function tickItem() {
    $(this).parent().toggleClass('checked-off');
}

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