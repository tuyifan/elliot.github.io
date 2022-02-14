let arr = [133, 11, 11, 7, 52, 4, 2, 5, 55]
console.log(arr)
function bubbleSort(arr) {
  let len = arr.length
  for(let i = 0; i < len - 1; i++) {
    for(let j = 0; j < len - i - 1; j++) {
      if(arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++){
    let index = i
    let tmp = arr[i]
    for (let j = i + 1; j < len; j++){
      if(arr[j] < tmp) {
        tmp = arr[j]
        index = j
      }
    }
    arr[index] = arr[i]
    arr[i] = tmp
  }
  return arr
}

function insertSort(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++ ) {
    let cIndex = i - 1
    let current = arr[i]
    while(cIndex >= 0 && (arr[cIndex] > current)){
      arr[cIndex + 1] = arr[cIndex]
      cIndex --
    }
    arr[cIndex + 1] = current
  }
  return arr
}
function shellSort(arr) {
  let len = arr.length
  for (let skip = Math.floor(len / 2); skip > 0; skip = Math.floor(skip / 2)){
    for(let i = skip; i < len; i++){
      let cIndex = i - skip;
      let current = arr[i]
      while(cIndex >= 0 && arr[cIndex] > current) {
        let tmp = arr[cIndex + skip]
        arr[cIndex + skip] = arr[cIndex]
        arr[cIndex] = tmp
        cIndex -= skip
      }
      arr[cIndex + skip] = current
    }
    console.log(skip, arr)
  }
  return arr
}

function mergeSort(arr) {
  let len = arr.length
  if (len < 2){
    return arr
  }
  let mid = Math.floor(len / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right){
  let result = []
  while(left.length > 0 && right.length > 0) {
    if(left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while(left.length) {
    result.push(left.shift())
  }
  while(right.length) {
    result.push(right.shift())
  }
  return result
}
function quickSort(arr) {
  let len = arr.length
  if(len < 2) {
    return arr
  }
  let left = []
  let right = []
  for(let i = 1; i < len; i++) {
    if (arr[i] < arr[0]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), arr[0], ...quickSort(right)]
}
function heapSort(arr) {
  let len = arr.length;
  for(let i = Math.floor( len / 2); i >=0; i--) {
    heapify(arr, i, arr.length)
  }
  for(let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i);
  }
  return arr;
}
function heapify(arr, i, len) {
  console.log(len)
  let left = 2 * i + 1
  let right = 2 * i + 2
  let largest = i
  if(left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if(right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if(largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest, len);
  }
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function countingSort(arr, maxValue){
  let bucket = new Array(maxValue + 1)
  let sortedIndedx = 0
  let arrLen = arr.length
  let bucketLen = maxValue + 1
  for(let i = 0; i< arrLen; i++){
    if(!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]] ++
  }
  for(let i = 0; i < bucketLen; i++){
    while(bucket[i] > 0) {
      arr[sortedIndedx++] = i
      bucket[i]--
    }
  }
  return arr
}
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
      return arr
    }

    let i
    let minValue = arr[0]
    let maxValue = arr[0]
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i]                // 输入数据的最小值
      } 
      else if (arr[i] > maxValue) {
          maxValue = arr[i]                // 输入数据的最大值
      }
    }

    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5            // 设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
    var buckets = new Array(bucketCount)
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = []
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])
    }

    arr.length = 0
    for (i = 0; i < buckets.length; i++) {
        insertSort(buckets[i])                      // 对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j])                      
        }
    }
    return arr
}
var counter = []
function radixSort(arr, maxDigit) {
  var mod = 10
  var dev = 1
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for(var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev)
      if(counter[bucket]==null) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }
    var pos = 0
    for(var j = 0; j < counter.length; j++) {
      var value = null
      if(counter[j]!=null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value
        }
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr))