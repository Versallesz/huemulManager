import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('68d095a4002f0e9ea51f');

export const account = new Account(client);
export { ID } from 'appwrite';
