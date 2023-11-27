import { User } from "../interfaces";
import {
  getCount
} from '../web3/aptos';

import _ from 'lodash';

const ACCOUNTS = [
  "0x3f712ab9d323c9eff10e23412b0d3a60fe20b9cb5585fa7d780b26d0a8892540",
  "0x5ab467111e876a49c2b20d7b4dd891a9a50f8cb4efbbcb55ed5a00e8ee960e89",
  "0xe7dc0cff2e59ee23c2434c2c43c56df3cde15a59ae30a9d8bcf5d5d40f0b6044"
]

export const fetchTopUsers = async (): Promise<User[]> => {
    const promises = ACCOUNTS.map(async (address: string) => {
        const count = await getCount(address);
        return { address, clicks: count }
    });

    const result =  await Promise.all(promises);

    return _.sortBy(result, 'clicks');
};