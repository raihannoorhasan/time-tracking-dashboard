const trackingBoxTemplate = document.querySelector('#tracking-box')
const container = document.querySelector('.container')

export default function renderItem(item, checkedTrack) {
    const trackingBox = trackingBoxTemplate.content.cloneNode(true)
    const className = item.title.includes(' ') ? item.title.replace(/\s/g, '-').toLowerCase() : item.title.toLowerCase()
    trackingBox.querySelector('.tracking-box').classList.add(className)
    const title = trackingBox.querySelector('#category-title')
    title.textContent = item.title
    const current = trackingBox.querySelector('#current')
    current.textContent = item.timeframes[checkedTrack].current
    const previous = trackingBox.querySelector('#previous')
    previous.textContent = item.timeframes[checkedTrack].previous
    container.appendChild(trackingBox)
}