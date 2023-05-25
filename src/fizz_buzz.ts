export function fizz(num: number) {
    console.log("Fizz" + num)
    
    var count = 0
    if (num % 3 == 0) {
        count+=1
    }
    
    let nString = num.toString();
    count += (nString.match(/3/g) || []).length

    return count;

}

export function fizzToStr(num: number){
    var result = `${num}`
    if( num % 3 == 0){
        result += "Fizz"
    }
    result.replace('3', 'Fizz')
    return result
}

export function buzz(num: number) {
    console.log("Buzz" + num)
    
    var count = 0
    if (num % 5 == 0) {
        count+=1
    }
    
    let nString = num.toString();
    count += (nString.match(/5/g) || []).length

    return count;

}


export function generateAll() {
    var result = ""
    for (var i=1;i<100;i++){
      result += "\n"
    }
    return result
  }