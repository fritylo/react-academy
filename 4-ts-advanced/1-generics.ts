function setProperty<Obj extends object, Keys extends keyof Obj>(object: Obj, property: Keys, value: Obj[Keys]) {
    return object[property] = value;
}

const obj = {
    a: 10,
    b: 'hello',
    c: true,
};

setProperty(obj, 'b', 'asdasd');

// Remove any
// Use keyof
// Add constraint
function setProp<T>(object: T, property: string, value: any) {
    return object[property] = value;
}