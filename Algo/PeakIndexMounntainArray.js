var peakIndexInMountainArray = function(arr) {
    let l = 0, r = arr.length-1
    while(l <= r){
        let mid = Math.floor((l+r)/2)
        if(arr[mid] < arr[mid+1])   l = mid+1
        else    r = mid-1
    }
    return l
};

let arr = [0,2,1,0];
console.log(peakIndexInMountainArray(arr));

arr = [0,1,0];
console.log(peakIndexInMountainArray(arr));

arr = [0,10,15,2];
console.log(peakIndexInMountainArray(arr));