export function dateFormatter(dateString:string) {
    // dateString = "2023-06-02T04:22:36.787Z";
    const [date, time] = dateString.split('T')
    const formattedTime = time.split('.')[0]
    return date + ' at ' + formattedTime
}

export const chunkSubArrays = (array:any[], chunkSize:number):any[] => {
    // takes in 2 args:
    // 1. array Array
    // 2. chunkSize number
    // returns chunks of arrays whose max length is the chunkSize 
    let item = array.shift()
    if (typeof array[array.length-1] === 'object' && array[array.length-1].length < chunkSize) {
        array[array.length-1].push(item)
    }
    else{
        array.push([item])
    }
    return typeof array[0] === 'object'? array : chunkSubArrays(array, chunkSize)
}

// console.log(chunkSubArrays(['wed', 232, '44e4', '3', 7],3))

