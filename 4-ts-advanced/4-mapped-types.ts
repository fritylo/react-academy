const dog = {
    eyeColor: 'blue',
    age: 12,
    isMale: true,
};

type Dog = typeof dog;

type Optional<T> = {
    [K in keyof T]?: T[K]; 
}

type DogOptional = Optional<Dog>;

const dogOptional: DogOptional = {
    age: 12,
};

//type Optional<T> = {
//    [Key in keyof T]: T[Key];
//}

type Example1 = {
    id: number;
    age: number;
    name: string;
    surname: string;
};

type R3 = Optional<Example1>;