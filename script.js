const trackingBoxTemplate = document.querySelector('#tracking-box')
const container = document.querySelector('.container')
const timeTracks = document.querySelectorAll('.time-track')
let checkedTrack = 'weekly';

const data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]

function renderItem(item, checkedTrack) {
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

data.forEach(item => renderItem(item, checkedTrack))


function activeTimeFrame(checkedTrack) {
    if (checkedTrack === 'daily') {
        return 'Yesterday'
    } else if (checkedTrack === 'weekly') {
        return 'Last Week'
    } else {
        return 'Last Month'
    }
}

function editItem(item, i, checkedTrack) {
    const trackingBoxes = document.querySelectorAll('.tracking-box')
    trackingBoxes[i].querySelector('#current').textContent = item.timeframes[checkedTrack].current
    trackingBoxes[i].querySelector('#previous-state').textContent =
        `${activeTimeFrame(checkedTrack)} - ${item.timeframes[checkedTrack].previous}hrs`
}


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

