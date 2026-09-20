export {};

/**
 * Exclude from T those types that are assignable to U
 */
type MyExclude = DebugType;

type DebugType = () => void;
type SomeType = string | number | DebugType;
type FunctionType = Exclude<SomeType, string | number>;

type MyFunctionType = MyExclude;

type FunctionTYpeByExtract = Extract<SomeType, DebugType>;

type Nullabletypes = string | number | null | undefined;
type NOnNullableTypes = NonNullable<Nullabletypes>;
