export const showElement = (element) => {
    element.dataset.open = 'true'
    element.style.maxHeight = `${element.scrollHeight}px`
}

export const hideElement = (element) => {
    element.dataset.open = 'false'
    element.style.maxHeight = '0px'
}