class User {
    constructor(isloggedIn = false, username = '', password = '', fullname = '', email = '', number = null, address = '', state = '', city = '', pincode = null, orders = []) {
        this.isloggedIn=isloggedIn
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.number = number;
        this.address = address;
        this.state = state;
        this.city = city;
        this.pincode = pincode;
        this.orders = orders;
    }

    setLogin(flag){
        this.isloggedIn=flag;
    }
    setUsername(username) {
        this.username = username;
    }

    setPassword(password) {
        this.password = password;
    }

    setFullname(fullname) {
        this.fullname = fullname;
    }

    setEmail(email) {
        this.email = email;
    }

    setNumber(number) {
        this.number = number;
    }

    setAddress(address) {
        this.address = address;
    }

    setState(state) {
        this.state = state;
    }

    setCity(city) {
        this.city = city;
    }

    setPincode(pincode) {
        this.pincode = pincode;
    }

    setOrders(orders) {
        this.orders = orders;
    }
}

export default User;