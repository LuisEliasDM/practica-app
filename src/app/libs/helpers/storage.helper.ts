export class StorageHelper{
    public static getItem(key: string){
        return JSON.parse(localStorage.getItem(key)!)
    }

    public static setItem(key: string, value: any){
        try{
            return localStorage.setItem(key, JSON.stringify(value)!)
        }catch(error){
            return null
        }
    }

    public static logout(){
        localStorage.removeItem("session")
    }
}