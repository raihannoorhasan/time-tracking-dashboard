function activeTimeFrame(checkedTrack) {
    if (checkedTrack === 'daily') {
        return 'Yesterday'
    } else if (checkedTrack === 'weekly') {
        return 'Last Week'
    } else {
        return 'Last Month'
    }
}

export default function editItem(item, i, checkedTrack) {
    const trackingBoxes = document.querySelectorAll('.tracking-box')
    trackingBoxes[i].querySelector('#current').textContent = item.timeframes[checkedTrack].current
    trackingBoxes[i].querySelector('#previous-state').textContent =
        `${activeTimeFrame(checkedTrack)} - ${item.timeframes[checkedTrack].previous}hrs`
}
