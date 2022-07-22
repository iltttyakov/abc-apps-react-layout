const validatePassword = (str) => {
    const re = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\x21-\x7E]{8,})$/
    return re.test(str)
}

export default validatePassword