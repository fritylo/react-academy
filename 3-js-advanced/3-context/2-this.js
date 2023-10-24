function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}

// Objects

const dog = {
    position: {
        x: 0,
        y: 0,
    },

    run() {
        this.position.x += 3;
    },

    async jump() {
        this.position.y += 2;

        await sleep(100);

        this.position.y -= 2;
    },
}

dog.run(); // position.x = 3
dog.jump(); // position.y = 2 >>> position.y = 0

const run = dog.run;
run(); // this = window || globalThis

const validRun1 = () => dog.run();
const validRun2 = dog.run.bind(dog);

// Functions

function foo() {
    console.log(this);
}

foo(); // globalThis
foo.call(/* ... */);
foo.apply(/* ... */);
foo.bind(/* ... */)();

// Closures

const a = 5;

export function bar() {
    return a + 5;
}