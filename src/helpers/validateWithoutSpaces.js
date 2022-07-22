const validateWithoutSpaces = str => {
    const re = /^\S*$/
    return re.test(str)
}

export default validateWithoutSpaces