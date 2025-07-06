const RegisterAction = (newUser) => {
    return {
        type:"REGISTER",
        payload: newUser
    }
}

export default RegisterAction