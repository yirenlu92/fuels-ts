import { Provider, Contract } from '@fuels-ts/fuels';

import mainSwAbi from './main.sw.abi.json';
import type { MainSwAbi } from './main.sw.types';

async function main() {
  const provider = new Provider('http://127.0.0.1:4000/graphql');

  // const asd: MainSwAbi = new Contract(mainSwAbi);

  // asd['mint(u64,u64,b256,(b256,u64))']()
}

main();
