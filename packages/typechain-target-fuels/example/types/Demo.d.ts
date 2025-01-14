/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Interface, FunctionFragment, DecodedValue } from "@fuel-ts/abi-coder";
import { Contract, Overrides } from "@fuel-ts/contract";
import { Provider } from "@fuel-ts/providers";
import { BigNumberish } from "@ethersproject/bignumber";
import { BytesLike } from "@ethersproject/bytes";

export type PersonStruct = { name: string; address: string };

interface DemoInterface extends Interface {
  functions: {
    "name(str[12][2],address[2],bool)": FunctionFragment;
    "tuple_function((str[20],address))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "name",
    values: [[string, string], [string, string], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "tuple_function",
    values: [PersonStruct]
  ): string;

  decodeFunctionData(functionFragment: "name", data: BytesLike): DecodedValue;
  decodeFunctionData(
    functionFragment: "tuple_function",
    data: BytesLike
  ): DecodedValue;
}

export class Demo extends Contract {
  interface: DemoInterface;
  functions: {
    name(
      name: [string, string],
      addresses: [string, string],
      foo: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    "name(str[12][2],address[2],bool)"(
      name: [string, string],
      addresses: [string, string],
      foo: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    tuple_function(
      person: PersonStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;

    "tuple_function((str[20],address))"(
      person: PersonStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<any>;
  };

  name(
    name: [string, string],
    addresses: [string, string],
    foo: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  "name(str[12][2],address[2],bool)"(
    name: [string, string],
    addresses: [string, string],
    foo: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  tuple_function(
    person: PersonStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;

  "tuple_function((str[20],address))"(
    person: PersonStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<any>;
}
