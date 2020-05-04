
const ul = document.getElementById('films')
const url = 'https://swapi.dev/api/films/'


function createNode(element) {
    return document.createElement(element)
}

function append(parent, el) {
    return parent.appendChild(el)
}


fetch(url)
.then(response => response.json())
.then(data => {
    let films = data.results
    return films.map((film) => {
        let li = createNode('li'),
         span = createNode('span')

         span.innerHTML = `<h1 class="title">${film.title}</h1>
                           <p class="crawl">${film.opening_crawl}</p>
                           <h3 class="director">Director:  ${film.director}</h3>
                           <h4 class="producer">Producer: ${film.producer}</h4>
                           <h4 class="release_date">Released: ${film.release_date}</h4>

                         <a class="stream" href="https://www.justwatch.com/us/search?q=${film.title}">Stream</a>
                         <a class="buy" href="https://www.amazon.com/s?k=${film.title}">Buy</a>
                        
         `



         append(li, span)
         append(ul, li)
    })

})