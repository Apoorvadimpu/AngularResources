export class AuthService{
     loggedin=false;
        
login(){
    this.loggedin=true;
}
logout()
{
    this.loggedin=false;

}

Authenticaton(){
    const promise= new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve(this.loggedin);
        }, 800);

    });
    return promise;
}

}