class Country{
    constructor(cname){
        this.cname = cname
    }
    dis1(){
        console.log("country name ="+ this.cname);
        
    }
}
class State extends Country{
   
    constructor(cname,sname){
        super(cname)
        this.sname = sname
        
    }
      dis2(){
        console.log("state name ="+ this.cname);
        console.log("state name ="+ this.sname);
        
    }
}
class City extends State{
    constructor(cname,sname,cityname){
        super(cname,sname)
        this.cityname = cityname
    }
      dis3(){
          
          console.log("City name ="+ this.cityname);
          console.log("City name ="+ this.sname);
          console.log("City name ="+ this.cname);
    }
}

let obj1 = new City("India","Maharashtra","Pune")
obj1.dis3()


