import conf from '../conf/conf';
import { Client, Account, Databases, ID, Query } from 'appwrite';

export class AppwriteService {
    client = new Client();
    account;
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
    }

    // authentication methods

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

    // databases methods

    async createUserPreference({workoutDaysPerWeek, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteUserPrefCollectionID,
                ID.unique(),
                {
                    workoutDaysPerWeek,
                    userId
                }
            )
        } catch (error) {
            console.log('Appwrite service :: createUserPreference :: error', error);
        }
    }

    async updateUserPreference(documentId, {workoutDaysPerWeek}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteUserPrefCollectionID,
                documentId,
                {
                    workoutDaysPerWeek
                }
            )
        } catch (error) {
            console.log('Appwrite service :: updateUserPreference :: error', error);
            return false;
        }
    }

    async getUserPreference(userId) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteUserPrefCollectionID,
                [
                    Query.equal('userId', userId)
                ]
            )
        } catch (error) {
            console.log('Appwrite service :: getUserPreference :: error', error);
            return false;
        }
    }

    async createSavedWorkout({userId, workoutTitle, workoutDaysPerWeek}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteWorkoutCollectionID,
                ID.unique(),
                {
                    userId,
                    workoutTitle,
                    workoutDaysPerWeek
                }
            )
        } catch (error) {
            console.log('Appwrite service :: createSavedWorkout :: error', error);
        }
    }

    async deleteSavedWorkout(documentId) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteWorkoutCollectionID,
                documentId
            )
        } catch (error) {
            console.log('Appwrite service :: deleteSavedWorkout :: error', error);
            return false;
        }
    }

    async getSavedWorkouts(userId) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteWorkoutCollectionID,
                [
                    Query.equal('userId', userId)
                ]
            )
        } catch (error) {
            console.log('Appwrite service :: getSavedWorkouts :: error', error);
            return false;
        }
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;