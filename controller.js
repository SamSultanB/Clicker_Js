let button = document.getElementById('Play');
let dolist = document.getElementById('image')


button.addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then (result => {
        console.log(result)
        dolist.src = result.message
    })
    .catch(err => console.log(err))
})