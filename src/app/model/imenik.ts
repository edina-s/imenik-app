import ImenikItem from "./imenikItem"
class Imenik {
    
    items:any;

    constructor(){
        this.items  = this.loadFromLocalStorage();
    }

    add(item:any) {
        this.items.push(item);
        this.saveToLocalStorage();
    }

    delete(item:any) {
        this.items.splice(this.items.indexOf(item), 1);
        this.saveToLocalStorage();
    }

    changeState(item: { completed: boolean; }) {
        item.completed = !item.completed;
        this.saveToLocalStorage();
    }

    
    saveToLocalStorage(){
        localStorage.setItem('imenik-data', JSON.stringify(this.items));
    }

   loadFromLocalStorage(){
        var json = localStorage.getItem('imenik-data');

        if(json === null)
            return [];

            let jsonParsed = JSON.parse(json, (key, value) => {

                return value;   
    
            })
            
            if (jsonParsed.length === 0) {

            return [];

        } 

        let imenikItems = [];
        for (let i = 0; i < jsonParsed.length; i++) {
           imenikItems.push(ImenikItem.fromJSON(jsonParsed[i]));
            
        }

        return imenikItems;

    }

}
    
    
export default Imenik;
