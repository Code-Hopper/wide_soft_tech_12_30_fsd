// bubble sort

function bubbleSort(arr, order) {

    let steps = 0

    let swap = true

    for (let i = 0; i < arr.length; i++) {

        swap = false

        for (let j = 0; j < arr.length - i; j++) {

            steps++

            if (order == "A") {

                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                    swap = true
                }
            } else {
                if (arr[j] < arr[j + 1]) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                    swap = true
                }
            }
        }

        if (!swap) {
            return `sort array is [${arr}] in ${steps} steps`
        }
    }

    return `sort array is [${arr}] in ${steps} steps`
}

console.log(bubbleSort([3, 1, 2, 10, 7, 4, 9, 8, 5, 6], "A"))
console.log(bubbleSort([3, 1, 2, 10, 7, 4, 9, 8, 5, 6], "D"))

console.log(bubbleSort(["bhavesh", "amey", "sahil", "rohit"], "A"))

console.log(bubbleSort(["bhavesh", "amey", "sahil", "rohit"], "D"))

// selection sort

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > arr[minIndex]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

let numbers = [1, 5, 2, 3, 4]

console.log("selection sort array : ", selectionSort(numbers))

// 5(0) 2(1) 1(2) 3(3) 4(4)

// 0 - 5, 2 - 1

// swap

// 1(0) 2(1) 5(2) 3(3) 4(4)

// 2 - 5

// 3 - 3

// swap

// 1 2 3 5 4