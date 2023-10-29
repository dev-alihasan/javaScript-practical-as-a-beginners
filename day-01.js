// Print numbers from 1 to 100

for( let nmbr= 0; nmbr <= 100; nmbr++ ){

    console.log(nmbr)
}

// print a to z 

for (let i = 97; i <= 122; i++) {
    let letter = String.fromCharCode(i);
    console.log(letter);
}

// print even number 

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// if u change the value i = 1 then u can print odd

for (let i = 1; i < 10; i += 2) {
    console.log(i);
}

// print number name

const myArray = ['one', 'two', 'three', 'four', ' five', 'six',' seven', ' eight', 'nine', 'ten'];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
