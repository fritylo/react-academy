const r1 = 'aaaabbbbaaaaabbbbaaaaa'.replace(/(a+)/g, '$1.');
console.log({ r1 });

const r2 = 'aaaabbbbaaaaabbbbaaaaa'.replace(/(a+)/g, (...args) => {
    console.log({ args });
    const [fullMatch, group1, position, fullString] = args;
    return 'C'.repeat(group1.length);
});
console.log({ r2 });

const r3 = '1625ahdaa758283aha12hd12h12hhh3123123'.split(/[^\d]+/);
console.log({ r3 });

const r4 = '+7(000)111-22-33'.match(/* ... */);