import data from './data.json' assert { type: 'json' };
import editItem from './utilities/editItem.js';
import renderItem from './utilities/renderItem.js';


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