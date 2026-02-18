class Calculation{
    add(a,b){
        console.log("result = " , a+b);
        
    }
}
class Add1 extends Calculation{
       add(a,b,c){
        console.log("result = " , a+b+c);
        
    }
}
class Add2 extends Calculation{
    add(a,b,c,d){
        super.add(a,b)
     console.log("result = " , a+b+c+d);
     
    }
    
}

let a1 =new Add2
a1.add(1,2,34,4)

let a2 = new Add1()
a2.add(1,2,3)


