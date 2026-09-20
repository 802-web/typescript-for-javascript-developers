export {};

type DebugType = () => void;
type SomeType = string | number | DebugType;
type FunctionType = Exclude<SomeType, string | number>;
type NonFunctionType = Exclude<SomeType, DebugType>;
type TypeExcludingFunction = Exclude<SomeType, Function>;

type ExtractType = Extract<SomeType, DebugType>;
type nonFunctionTypeByEctract = Extract<SomeType, string | number>;
type FunctionTYpeExtracting = Extract<SomeType, Function>;

type Nullabletypes = string | number | null | undefined;
type NOnNullableTypes = NonNullable<Nullabletypes>;
