

arr = [2,1,5,4,7,8,22,9,10];
large = arr[0]
slarge = arr[0]
for(i=0;i<arr.length;i++){
    if(large > arr[i]){
        large = arr[i];
    }
}

for(i=0;i<arr.length;i++){
    if(large < arr[i] && arr[i]!=large){
        slarge = arr[i]
    }
}
console.log(slarge);
