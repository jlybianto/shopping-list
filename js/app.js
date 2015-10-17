function addListItem() {
    var write = $('#newItem').val();
    var list = $('#itemList');
    var item = $('<li><input class="checkbox" type="checkbox">
                <span class="item">' + write + '</span>
                <button class="delete">x</button></li>')
    var newItem = $("#newItem");

    if (write.length === 0 || write.length > 24) {
        return false;
    }

    list.prepend(item);
    $(newItem).val('');
}

$(function() {
    var add = $('#addItem');
    var newItem = $('#newItem');
    var list = $('#itemList');

    add.on('click', addListItem);
    list.on('click', '.delete', removeItem);
    newItem.on('keypress', function(e) {
        if (e.which == 13) {
            addListItem();
        }
    });
});