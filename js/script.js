// import data from './data.json' assert { type: 'json' }; // assert not supporting firefox that's why using fetch method to load data.

import editItem from './utilities/editItem.js';
import renderItem from './utilities/renderItem.js';


async function loadData() {
    const res = await fetch("/frontend-mentor-challenges/time-tracking-dashboard/js/data.json");
    return await res.json()
}
const data = await loadData()


const timeTracks = document.querySelectorAll('.time-track')
let checkedTrack = 'weekly';

function removeActiveTrack() {
    timeTracks.forEach(t => t.classList.remove('active'))
}

function activateTrack(track) {
    removeActiveTrack()
    track.classList.add('active')
}

timeTracks.forEach(track => {
    track.addEventListener('click', () => {
        checkedTrack = track.dataset.option
        activateTrack(track)
        data.forEach((item, i) => editItem(item, i, checkedTrack))
    })
})

data.forEach(item => renderItem(item, checkedTrack))