const downloadCsvFile = (fileName, content) => {
    const file = new Blob([content], {type: "text/plain"})

    const element = document.createElement('a')
    element.href = URL.createObjectURL(file)
    element.download = `${fileName}.csv`

    document.body.appendChild(element)
    element.click()
}

export default downloadCsvFile