import DJIA from '../asset/djia.json';
import SPX from '../asset/spx.json';
import COMP from '../asset/comp.json';
import RUT from '../asset/rut.json';
import XAU from '../asset/xau.json';
import BX from '../asset/bx.json';

export function getStockURL(type:string, symbol:string):string{
    let url1;
    if(type === "company"){
        url1 = "";
    }
    else{
        url1 = type.toLocaleLowerCase().concat("/");
    }
    //get date format, from https://www.codegrepper.com/code-examples/javascript/get+current+date+in+typescript+in+mm%2Fdd%2Fyyyy+format
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const day2 = mm + '/' + dd + '/' + yyyy;
    let url = "https://www.wsj.com/market-data/quotes/" + url1 + symbol + "/historical-prices/download?num_rows=365&range_days=365&endDate=" +day2;
    console.log(url);
    //run get request
    return url
}

export function getStock(type:string, symbol:string):Array<number>{
    let file;
    if(symbol === "DJIA"){
        file = DJIA;
    }
    else if(symbol === "SPX"){
        file = SPX;
    }
    else if(symbol === "COMP"){
        file = COMP;
    }
    else if(symbol === "RUT"){
        file = RUT;
    }
    else if(symbol === "XAU"){
        file = XAU;
    }
    else if(symbol === "BX/TMUBMUSD10Y"){
        file = BX;
    }
    else{
        file = DJIA
    }
    let numDays = file.length;
    let returnVals =  new Array<number>();
    for(let i:number = 0; i < numDays; i++){
        returnVals = returnVals.concat(file[i]["Close"]);
    }
    return returnVals;
}
