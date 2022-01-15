import axios from "axios";

export default class EuroCot {
    
    static async getValue(){

        const { data } = await axios.get("https://economia.awesomeapi.com.br/last/EUR-BRL");
        return data.EURBRL;

    }

}