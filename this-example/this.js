console.log(this === window);

function foo() {
    console.log(this === window);
}

foo();
var poodle = {
    bark: function () {
        console.log("bow wow wow");
    },
    walk: function () {
        console.log("I'm walking here");
    },
    all: function () {
        this.walk();
        this.bark();
    },
    bounce: foo
}

poodle.all();
poodle.bounce();