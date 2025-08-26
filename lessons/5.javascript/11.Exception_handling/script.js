// try {
//     let num1 = 50
//     let num2 = 20
//     let sum = num1 + num2
//     if(sum < 50){
//         throw ("sum is less than 50")
//     }
//     console.log(sum)
// }catch(e){
//     console.log("got an error " + e)
// }

function askedQuestion(question) {
    return { you_have_asked: question, status: true }
}

try {
    let answer = askedQuestion("how are you !")
    if (!answer.status) {
        throw ("invalid answer !")
    }
    console.log(answer)
} catch (e) {
    // console.log("got a error " + e)
    // console.info("got a error " + e)
    console.error("got a error " + e)
    // console.warn("got a error " + e)
}finally{
    console.log("program completed !")
}

// try catch finally

function division(n,d){
    return n/d
}

try{
    let result = division(1,0)
    if(result == Infinity){
        throw({reason:"denominator is 0", solution : "increement denominator by 1"})
    }
    console.log(result)
}catch(e){
    console.log("got an exception while dividing : " , e)
}