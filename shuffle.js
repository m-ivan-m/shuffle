let arr = ['aaa', 'bebe', 'ulo', 'lala', 'sosos', 'migter']
let newArr = []

while (newArr.length < arr.length) {
  let random = Math.floor(Math.random() * arr.length)
  if (newArr.includes(arr[random]) === false) {
    newArr.push(arr[random])
  }
}

console.log(newArr)
