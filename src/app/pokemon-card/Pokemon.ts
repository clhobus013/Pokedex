export class Pokemon {

    national_number:number
    sprites: {
        normal: string
        large: string
        animated: string
    }
    name:string   
    type: string[]
    favorito: boolean

    constructor(values: Object){
        Object.assign(this, values);
    }

}