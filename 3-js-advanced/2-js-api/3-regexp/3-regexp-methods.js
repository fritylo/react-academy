// Test

const r1 = /a/.test('man');
console.log({ r1 });

// Exec

const regex = /a/g;
const string = 'banana';

let result, i = 0;

while (result = regex.exec(string)) {
    console.log(`Result #${++i}:`, result);
}
