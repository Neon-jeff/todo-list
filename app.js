const addBtn=$('.add-btn');

$('.add-btn').click(function(){
const container=$('<div></div>')
const title=$('<div></div>').text($('.title').val())
const text=$('<div></div>')
text.addClass('text-content')
const context=$('<p></p>').text($('.disc').val())
text.append(context);
const bttn=$('<button>Delete</button>')
    $('.section').after(container)
    container.addClass('list')
    container.append(title,text,bttn)
    bttn.addClass('delete-btn')
    container.remove($('<div></div>'))
    bttn.click(function(){
        container.remove()
    })
})