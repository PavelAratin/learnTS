function sum(a:number,b:number):number{
  return a + b
}

const sum2 = (a:number,b:number):number => a + b;

sum(2,4)

function log(name:string,userId?:string):void{
  console.log('hello',name,'with id',userId || 'anonym'); 
}
log('pavel','123');


function crash():never{
  throw new Error('crash')
}

function avarage(...nums:number[]){
  const sum = nums.reduce((current,total)=>current+total,0)
  return sum/nums.length;
}