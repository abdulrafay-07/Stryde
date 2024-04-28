import conf from '../conf/conf';
import { Client, Account, Databases, ID } from 'appwrite';

export class AppwriteService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.loginAccount({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log('Appwrite service :: createAccount :: error', error);
        }
    }

    async loginAccount({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log('Appwrite service :: loginAccount :: error', error);
        }
    }

    async logoutAccount() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log('Appwrite service :: logoutAccount :: error', error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error', error);
        }
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;