arr=[1,3,17,8,15,27]
arr1=[]

for (i=0;i<arr.length;i++){
    for(j=0;j<arr[i];j++){
    if(arr[i]%j!=0){
        arr1.push(arr[i])
        break;
    }
    }
}
console.log(arr1)