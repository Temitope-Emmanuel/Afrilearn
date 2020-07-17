const { signout } = require("./api-auth")

authenticate(jwt,callback){
    if(typeof window !== "undefined"){
        sessionStorage.setItem('jwt',JSON.stringify(jwt))
    }
    callback()
}

isAuthenticated(){
    if(typeof window === "undefined"){
        return false
    }
    if(sessionStorage.getItem('jwt')){
        return JSON.parse(sessionStorage.getItem('jwt'))
    }else{
        return false
    }
}

clearJWT(callback){
    if(typeof window !== "undefined"){
        sessionStorage.removeItem('jwt')
    }
    callback()
    signout.then((data) => {
        document.cookiev= 't=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    })
}

export default {clearJWT,isAuthenticated,authenticate}