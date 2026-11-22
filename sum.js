function sum(...args) {

    let res = 0;

    for (let i = 0; i < args.length; i++){

        res= res+args[i]

    }



    return res

}



// let res = sum(100, 200, 300, 400);

let res = sum(500, 500, 400);



console.log(res)







module.exports = sum;
