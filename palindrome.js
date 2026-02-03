n=151
sum =0 
while(n>0){
    digit = n%10
    sum*=10
    sum+=digit
    
    n = Math.floor(n/10)


}
if(sum==151){
    
    console.log("palindrome")
}
else{
    console.log("not palindrome");
    
}