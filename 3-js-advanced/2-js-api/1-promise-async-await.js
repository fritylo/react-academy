function example1() {
    let resolveOuter, rejectOuter;

    const promise = new Promise((resolve, reject) => {
        resolveOuter = resolve;
        rejectOuter = reject;
    });

    promise
        .then((result) => console.log('Result from resolve:', result))
        .catch((result) => console.log('Result from reject:', result))
        .finally(() => console.log('Status "fulfilled" or "rejected"'));

    debugger;
}

function example2() {
    function sleep(ms) {
        // ...
    }

    sleep(100).then(() => console.log('After 100ms delay'));

    // await
}

function example3() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}

async function example4() {
    const json = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json());

    console.log({ json });
}

// MAIN

function main() {
    example1();
}