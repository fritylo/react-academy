type GetReturnType<T> = T extends (...args: any) => infer R ? R : never;

type R2 = GetReturnType<() => void>;