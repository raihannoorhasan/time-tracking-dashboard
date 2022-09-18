import data from './data.json' assert { type: 'json' };


// console.log(data.length);


const trackingBoxTemplate = document.querySelector('#tracking-box')
const container = document.querySelector('.container')

function renderItem(item) {
    const trackingBox = trackingBoxTemplate.content.cloneNode(true)
    const className = item.title.includes(' ') ? item.title.replace(/\s/g, '-').toLowerCase() : item.title.toLowerCase()
    trackingBox.querySelector('.tracking-box').classList.add(className)
    const title = trackingBox.querySelector('#category-title')
    title.textContent = item.title
    const current = trackingBox.querySelector('#current')
    current.textContent = item.timeframes.weekly.current
    const previous = trackingBox.querySelector('#previous')
    previous.textContent = item.timeframes.weekly.previous
    container.appendChild(trackingBox)
}


data.forEach(item => {
    // console.log(item.timeframes.weekly.previous);

    renderItem(item)

})
