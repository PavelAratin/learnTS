interface Car {
  wheel: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key:string]:unknown
}
const car:Car = {
  wheel:4,
  brand:'BMW',
  type:'Sedan',
}

const car2:Car = {
  type:'Sedan',
  brand:'BMW',
  wheel:4,
}

car2.go = true