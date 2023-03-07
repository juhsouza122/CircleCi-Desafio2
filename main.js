function add(a, b){
    return a + b;
}

function sayHello() {
    console.log("sup world from srcmake");
}

if (typeof require !== 'undefined' && require.main === module) {
    sayHello();
}