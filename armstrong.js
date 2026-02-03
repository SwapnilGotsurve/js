n=153
sum=0
while(n>0){
lastdigit=n%10
i=lastdigit*lastdigit*lastdigit

sum=sum+i
n=Math.floor(n/10)

}
// console.log(sum)
if(sum==153){
    console.log("Armstrong number")
}