import auth0 from 'auth0-js'

export default class Auth {
    auth0=new auth0.WebAuth({
        domain:"aosreact.us.auth0.com",
        clientID:"ZcgJIYeV35FopZWyRA7QRzcaxqtZd7op",
        redirectUri:"http://localhost:3000/callback",
        audience:"https://aosreact.us.auth0.com/userinfo",
        responseType:"token id_token",
        scope:"openid"
    })

    constructor(){
        this.login = this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }
}