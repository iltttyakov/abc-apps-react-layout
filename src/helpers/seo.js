const DEFAULT_TITLE = 'ABC Apps'

export default function setTitle(interfaceName) {
    document.title = `${DEFAULT_TITLE}.${interfaceName}`
}