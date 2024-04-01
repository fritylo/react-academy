const callbackNum = (a: number, b: number) => a + b;
const callbackStr = (a: string, b: string) => a + b;

type TCallbackNum = typeof callbackNum;
type TCallbackStr = typeof callbackStr;


type GetReturnType<T> = T extends (...args: any) => infer R
    ? R 
    : never;

type R2 = GetReturnType<TCallbackStr>;