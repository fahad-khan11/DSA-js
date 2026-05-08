var secondHighest = function(s) {

    let arr = [];
    for(let ch of s){
        if(!isNaN(ch))
        arr.push(Number(ch))
    }

    console.log('newarr',arr)
    let firstLargest=-1;
    let secondLargest=-1;

    for(let i=0;i<arr.length ;i++){
       if(arr[i]>firstLargest){
        secondLargest = firstLargest
        firstLargest = arr[i];

       }
       else if(arr[i]>secondLargest && arr[i]<firstLargest){
        secondLargest = arr[i]
    }

    }
    return secondLargest

};