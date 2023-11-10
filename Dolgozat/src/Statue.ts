import {Artwork} from './Artwork';

export class Statue implements Artwork{
    height: number;
    


    
    constructor ( title:string, year:number, price:number,height:number)
    {

        if  (title.trim()=="" || !title.match(regexp))
        {
            throw new Error('Nem megfelelő cím');
        }
        else if(year>=aktualisev)
        {
            throw new Error('Nem megfelelő év');

        }
        else if(price<=5 )
        {
            throw new Error('Nem megfelelő ár');

        }
        else if(height<=15)
        {
            throw new Error('Nem megfelelő magasság');

        }
        this.height=height;
        this.title=title;
        this.year=year;
        this.price=price;
    }
    title: string;
    year: number;
    price: number;

    
}
const d=new Date();
let aktualisev=d.getFullYear();

const regexp=/^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
