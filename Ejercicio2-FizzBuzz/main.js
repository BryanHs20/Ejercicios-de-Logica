// Pantalla
for(i = 1; i <= 100; i++) {
    let fizzBuzz = document.querySelector("#fizzbuzz");
    if(i % 3 == 0 && i % 5 == 0){
        fizzBuzz.innerHTML += "<h3>Fizz Buzz</h3>";
    } else if(i % 3 == 0) {
        fizzBuzz.innerHTML += "<h3>Fizz</h3>";
    } else if(i % 5 == 0) {
        fizzBuzz.innerHTML += "<h3>Buzz</h3>"
    } else {
        fizzBuzz.innerHTML += `<h3>${i}</h3>`;
    }
};

// Consola
for(i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("Fizz Buzz");
    } else if(i % 3 == 0) {
        console.log("Fizz");
    } else if(i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
};