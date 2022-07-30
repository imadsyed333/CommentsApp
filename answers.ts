function remove_odd(arr: number[]) {
    arr = arr.filter(num => num % 2 !== 0)
    console.log(arr)
}

function sum_odd(arr: number[]) {
    arr = arr.filter(num => num % 2 !== 0)
    const sum = arr.reduce((num1, num2) => num1 + num2, 0)
    return sum
}

