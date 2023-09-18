function setProperty<T>(object: T, property: string, value: any) {
    return object[property] = value;
}

const obj = {
    a: 10,
    b: 'hello',
    c: true,
};

setProperty(obj, 'a', false);

// Remove any
// Use keyof
// Add constraint
function setProp<T>(object: T, property: string, value: any) {
    return object[property] = value;
}