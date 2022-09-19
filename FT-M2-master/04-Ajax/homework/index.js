var URL = 'http://localhost:5000/amigos';
let list = $('#lista')
let input = $('#input')
let amigo = $('#amigo')
let inputDelete = $('#inputDelete')
let success = $('#success')

function refreshList(friends){
    list.empty()
    friends.forEach((friend) => {
        list.append(`<li>${friend.name}</li>`)
    })
}

$('#boton').click(function(){
    $.get(URL, function(listFriend){
        refreshList(listFriend);
    })
})

$('#search').click(function(){
    let id = input.val();
    if (id){
        $.get(`${URL}/${id}`, function(friend){
            amigo.text(friend.name)
        })
    }
    else {
        amigo.text('Es necesario un id para buscar')
    }
})

$('#delete').click(function(){
    let id = inputDelete.val();
    if (id){
        $.ajax({
            url: `${URL}/${id}`,
            type: "DELETE",
            success: function(friends){
                refreshList(friends)
            }
        })
    }
    else {
        success.text('Es necesario un id para eliminar')
    }
})