class ImenikItem {

    id:string;

    constructor( public ime:string, public broj:string) {
        this.id = Math.random().toString(36).substring(7);
    }
    
    static fromJSON(json: { ime: string; broj: string; id: string; }){

        let imenikItem = new ImenikItem(json.ime, json.broj);
        imenikItem.id = json.id;

        
        return imenikItem;
    }
    
}

export default ImenikItem;