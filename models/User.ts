import loginData from '../data/loginData.json';

export class User{
    private username: string;
    private password: string;

    constructor(role: string, type: string){
        const userData = (loginData as any)[role];

        if(!userData || !userData[type]){
            throw new Error(`There are not any date for role="${role}", type="${type}"`);

        }

        this.username = userData[type].username;
        this.password = userData[type].password;

    }

    getUserName(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

}