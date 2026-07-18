

export const checkValidData = (email, password, name)=>{

    const isEmailVaild = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    const isNameValid = /^[a-zA-ZÀ-ÿ][-a-zA-ZÀ-ÿ' ]+$/.test(name)

    if(!isEmailVaild) return "* Email ID is not valid."
    if(!isPasswordValid) return "* Password is not valid."
    if(!isNameValid) return "* Name is not valid."

    return null
}