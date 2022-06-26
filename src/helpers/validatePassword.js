const validatePassword = (str) => {
    const re = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9!#$%&?]{8,32}$/
    return re.test(str)
}

export default validatePassword