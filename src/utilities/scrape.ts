

export function getStock(type:string, symbol:string):Array<number>{
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
    return [1, 2]

}
