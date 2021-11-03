// Code your solution here

function findMatching(drivers, string){
    const answer = drivers.filter((element) => element.toLowerCase() === string.toLowerCase())
    return answer
}
//===============================
function fuzzyMatch(drivers, letter){
    return drivers.filter(element => {
        return element.slice(0, letter.length).toLowerCase() === letter.toLowerCase() ? element : null
    })
}
//================================
function matchName(drivers, input){
    let inputInfo = drivers.filter(object => object.name === input)
        return inputInfo
}
