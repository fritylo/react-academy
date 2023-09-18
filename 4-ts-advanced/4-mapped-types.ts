type Optional<T> = {
    [Key in keyof T]: T[Key];
}

type Example1 = {
    id: number;
    age: number;
    name: string;
    surname: string;
};

type R3 = Optional<Example1>;