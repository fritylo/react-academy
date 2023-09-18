type User = {
    id: number;
    age: number;
    fullName: string;
    hasParent: boolean;
}

type R4 = Omit<User, 'id' | 'age'>;
type R5 = Pick<User, 'id' | 'fullName'>;

type R6 = Partial<User>;
type R7 = Required<User>;

type R8 = Readonly<User>;

type R9 = Record<'hello' | 'world', string>;
type R10 = Record<string, number>;

type UserKeys = keyof User;
type R11 = Exclude<UserKeys, 'age' | 'fullName'>;

