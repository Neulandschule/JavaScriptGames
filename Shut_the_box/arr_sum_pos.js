
function arrSumPossibilities(sum, arr) {
    //const sum = sum;
    //const arr = arr;
    const key = [];
    let erg = [];

    function rec(i) {
        for (key[i]=0; key[i]<2; key[i]++) {
            
            if (arr.length - 1 > i) {
                rec(i+1);
            } else {

                let temp_arr = [];                
                let temp_sum = 0;
                
                for(let i = 0; i < arr.length; i++) {  
                    temp_arr.push(key[i]*arr[i]);
                    temp_sum += (key[i]*arr[i]);
                }
                if (temp_sum == sum) {
                    erg.push(temp_arr);
                } 
            }
        }
        
    }
    rec(0);

    //erg = erg.map(JSON.stringify).filter((e,i,a) => i === a.indexOf(e)).map(JSON.parse);

    return erg;
}

