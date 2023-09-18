type IsNull<T> = T extends null ? true : false;

type R1 = IsNull<null>;