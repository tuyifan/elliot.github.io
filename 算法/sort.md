#### 排序算法可分为两大类:
* **比较类排序:** 通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn)，因此也称为非线性时间比较类排序
* **非比较类排序:** 不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此也称为线性时间非比较类排序
![排序算法](./img/sort.png)
#### 算法复杂度
![算法复杂度](./img/diff.png)
> 递归算法中假设执行x次，2^x < n => x < log2n, 即递归算法复杂度O(log2n) 
#### 1. 冒泡排序
* 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
* 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
* 针对所有的元素重复以上的步骤，除了最后一个；
* 重复步骤1~3，直到排序完成。
![冒泡排序](./img/bubble.gif)
```js
function bubbleSort(arr) {
  let len = arr.length
  for(let i = 0; i < len - 1; i++) {
    for(let j = 0; j < len - i - 1; j++) {
      if(arr[j] > arr[j + 1]){
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp;
      }
    }
  }
  return arr
}
```
#### 2. 选择排序
* 初始状态：无序区为R[1..n]，有序区为空；
* 第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
* n-1趟结束，数组有序化了。
![选择排序](./img/selection.gif)
```js
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
```
#### 3. 插入排序
* 从第一个元素开始，该元素可以认为已经被排序；
* 取出下一个元素，在已经排序的元素序列中从后向前扫描；
* 如果该元素（已排序）大于新元素，将该元素移到下一位置；
* 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
* 将新元素插入到该位置后；
* 重复步骤2~5。
![插入排序](./img/insert.gif)
```js
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
```
#### 4. 希尔排序
**先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述**
* 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
* 按增量序列个数k，对序列进行k 趟排序；
* 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
![希尔排序](./img/shell.gif)
```js
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
```
#### 5. 归并排序
* 把长度为n的输入序列分成两个长度为n/2的子序列；
* 对这两个子序列分别采用归并排序；
* 将两个排序好的子序列合并成一个最终的排序序列。
![归并排序](./img/merge.gif)
```js
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
```
#### 6. 快速排序
* 从数列中挑出一个元素，称为 “基准”（pivot）；
* 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
* 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
![快速排序](./img/quick.gif)
```js
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
```
#### 7. 堆排序
* 将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；
* 将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足R[1,2…n-1]<=R[n]；
* 由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
![堆排序](./img/heap.gif)
```js
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
```
#### 8. 计数排序
* 找出待排序的数组中最大和最小的元素；
* 统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
* 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
* 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
![计数排序](./img/counting.gif)
```js
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
```
#### 9. 桶排序
* 设置一个定量的数组当作空桶；
* 遍历输入数据，并且把数据一个一个放到对应的桶里去；
* 对每个不是空的桶进行排序；
* 从不是空的桶里把排好序的数据拼接起来。 
![桶排序](./img/bucket.png)
```js
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
```
#### 10. 基数排序
* 取得数组中的最大数，并取得位数；
* arr为原始数组，从最低位开始取每个位组成radix数组；
* 对radix进行计数排序（利用计数排序适用于小范围数的特点）；
![基数排序](./img/radix.gif)
```js
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
```
