import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query){
        this.query = query;
    } 
    
    async getResults(){
        // const proxy = 'https://cors-anywhere.herokuapp.com/'; 
        // const key = '4c7e3ed06f60c462a366c8033869a0c0'; 
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
         console.log(res);
         
         this.result = res.data.recipes;
        //  console.log(this.result);
         
        } catch (err) {
            alert(error);
        }
     }
    
}

