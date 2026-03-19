const searchInput = document.getElementById('searchInput');
const posters = document.querySelectorAll('.poster');

searchInput.addEventListener('input',function() {
    let searchTerm = this.value.toLowerCase();

    posters.forEach(poster => {

        let imgTag = poster.querySelector('img')
        let filename = imgTag.getAttribute('src').toLowerCase();
    
        if (filename.includes(searchTerm)) {
            poster.style.display = 'block';
        } else {
            poster.style.display = 'none';
        }
    });
});

