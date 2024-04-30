const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteUserPrefCollectionID: String(import.meta.env.VITE_APPWRITE_USER_PREFERENCE_COLLECTION_ID),
    appwriteWorkoutCollectionID: String(import.meta.env.VITE_APPWRITE_WORKOUT_COLLECTION_ID),
}

export default conf;