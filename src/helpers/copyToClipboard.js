const copyToClipboard = str => {
    let area = document.createElement('textarea')

    document.body.appendChild(area)
    area.value = str
    area.select()
    document.execCommand('copy')
    document.body.removeChild(area)
}

export default copyToClipboard