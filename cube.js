function cubeNumber(number){

    
    // if(isNaN(number) == true){
    if ( typeof number == 'number') {
        const cube = Math.pow(number,3);
        return cube;
    }
    else{
        console.log("Please input a Valid Number !!");
    }
      
}

const result = cubeNumber("R");
console.log(result);