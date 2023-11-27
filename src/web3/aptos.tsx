import { Types, AptosClient } from 'aptos';

// Create an AptosClient to interact with devnet.
const client = new AptosClient('https://fullnode.testnet.aptoslabs.com/v1');
const ADDRESS = "0x5ab467111e876a49c2b20d7b4dd891a9a50f8cb4efbbcb55ed5a00e8ee960e89";

export const getWalletAddress = async () => {
    const { address, publicKey } = await window.aptos.connect();
    return { address, publicKey };
};

export const getAccount = async (address: string) => {
    return client.getAccount(address);
};

export const getCount = async (address: string) => {
    const resourceType = `${ADDRESS}::counter::CounterResource`;
    const resources = await client.getAccountResources(address);
    console.log(resources)
    const resource = resources.find((r) => r.type === resourceType);
    const data = resource?.data as any;
    const message = data?.count;
    return message;
};

export const getMessage = async (address: string) => {
    const resourceType = `${ADDRESS}::message::MessageHolder`;
    const resources = await client.getAccountResources(address);
    console.log(resources)
    const resource = resources.find((r) => r.type === resourceType);
    const data = resource?.data as { message: string } | undefined;
    const message = data?.message;
    return message;
};

export const setFnMessage = async (address: string, message: string) => {
    const transaction = {
        type: "entry_function_payload",
        function: `${ADDRESS}::message::set_message`,
        arguments: [message],
        type_arguments: [],
    };

    return window.aptos.signAndSubmitTransaction(transaction);
};

export const setFnCount = async (address: string) => {
    const transaction = {
        type: "entry_function_payload",
        function: `${ADDRESS}::counter::set_count`,
        arguments: [],
        type_arguments: [],
    };

    return window.aptos.signAndSubmitTransaction(transaction);
};