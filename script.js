
const array = [100, 55, 15, 300, 20];
let el = 0;

for (let i = 0; i < array.length ; i++) {
    
    console.log(el+' + '+array[i] + ' = ');
    
    el += array[i]
    console.log(el);
    
}
