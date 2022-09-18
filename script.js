import data from './data.json' assert { type: 'json' };

const trackingBoxTemplate = document.querySelector('#tracking-box')
const container = document.querySelector('.container')
const timeTracks = document.querySelectorAll('.time-track')

let checkedTrack = 'weekly';

function activateTrack(track) {
    timeTracks.forEach(t => t.classList.remove('active'))
    track.classList.add('active')
}

timeTracks.forEach(track => {
    track.addEventListener('click', () => {
        checkedTrack = track.dataset.option
        console.log(checkedTrack);
        activateTrack(track)
        data.forEach((item, i) => editItem(item, i))
    })
})


function activeTimeFrame() {
    if (checkedTrack === 'daily') {
        return 'Yesterday'
    } else if (checkedTrack === 'weekly') {
        return 'Last Week'
    } else {
        return 'Last Month'
    }
}

console.log(activeTimeFrame());


function editItem(item, i) {

    const activeTimeFrameText = activeTimeFrame();

    const trackingBoxes = document.querySelectorAll('.tracking-box')
    trackingBoxes[i].querySelector('#current').textContent = item.timeframes[checkedTrack].current
    trackingBoxes[i].querySelector('#previous-state').textContent = activeTimeFrameText + ' - ' + item.timeframes[checkedTrack].previous + 'hrs'


    // const current = document.querySelector('#current')
    // current.textContent = item.timeframes[checkedTrack].current
    // const previous = document.querySelector('#previous')
    // previous.textContent = item.timeframes[checkedTrack].previous
    // container.appendChild(trackingBox)
}


function renderItem(item, checkedTrack) {

    const trackingBox = trackingBoxTemplate.content.cloneNode(true)
    const className = item.title.includes(' ') ? item.title.replace(/\s/g, '-').toLowerCase() : item.title.toLowerCase()
    trackingBox.querySelector('.tracking-box').classList.add(className)
    const title = trackingBox.querySelector('#category-title')
    title.textContent = item.title

    const timeFramesTrack = item.timeframes[checkedTrack];
    // console.log(timeFramesTrack);

    const current = trackingBox.querySelector('#current')
    current.textContent = item.timeframes[checkedTrack].current

    // console.log(current);
    const previous = trackingBox.querySelector('#previous')
    previous.textContent = item.timeframes[checkedTrack].previous
    container.appendChild(trackingBox)
}

data.forEach(item => renderItem(item, checkedTrack))