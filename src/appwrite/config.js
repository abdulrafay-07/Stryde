import conf from '../conf/conf';
import { Client, Account, Databases, Storage, ID, Query } from 'appwrite';

export class AppwriteService {
    client = new Client();
    account;
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
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

    // User Preference

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

    // Saved Workouts

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

    // User Info

    async createUserInformation({userId, profilePicId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteUserInfoCollectionID,
                ID.unique(),
                {
                    userId,
                    profilePicId
                }
            )
        } catch (error) {
            console.log('Appwrite service :: createUserInformation :: error', error);
        }
    }

    async updateUserInformation(documentId, {profilePicId}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteUserInfoCollectionID,
                documentId,
                {
                    profilePicId
                }
            )
        } catch (error) {
            console.log('Appwrite service :: updateUserInformation :: error', error);
            return false;
        }
    }

    async getUserInformation(userId) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteUserInfoCollectionID,
                [
                    Query.equal('userId', userId)
                ]
            )
        } catch (error) {
            console.log('Appwrite service :: getUserInformation :: error', error);
            return false;
        }
    }

    // storage methods

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwritePFPBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwritePFPBucketID,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwritePFPBucketID,
            fileId
        )
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;