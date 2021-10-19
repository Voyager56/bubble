function sleep(time){
  return new Promise(resolve => setTimeout(resolve,time));
}

function generatenumbers(columns){
  let array = new Array(columns)
  for(let i=0;i<columns; i++){
    array[i] = Math.floor(random(columns))
  }
  return array
}

async function swap(arr,i,j){
  await sleep(50);
  [arr[i],arr[j]] = [arr[j],arr[i]];
}

async function bubblesort(array){
  for(let i =0; i<array.length;i++){
    for(let j =0; j<array.length-1;j++){
      if(array[j]>array[j+1]){
        await swap(array,j,j+1)  
     }
   }
  }
}
const columns = 40;
let numbers;
function setup() {
  numbers = generatenumbers(columns)
  createCanvas(400, 400);
  bubblesort(numbers)
}

function draw() {
  const resolution = width / columns;
  background(220);
  translate(0,height)
  for(let k=0;k<columns;k++){
    rect(k*resolution,0,resolution,-numbers[k])
  }
}
