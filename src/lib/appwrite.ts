import { Client, Account} from 'appwrite';

export const client = new Client();
export const databaseId = '68d155780015a0a75ae5';

client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1')
    .setProject('68d095a4002f0e9ea51f');

export const account = new Account(client);
export { ID } from 'appwrite';
