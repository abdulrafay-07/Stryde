const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteUserPrefCollectionID: String(import.meta.env.VITE_APPWRITE_USER_PREF_COLLECTION_ID),
    appwriteWorkoutCollectionID: String(import.meta.env.VITE_APPWRITE_WORKOUT_COLLECTION_ID),
    appwriteUserInfoCollectionID: String(import.meta.env.VITE_APPWRITE_USER_INFO_COLLECTION_ID),
    appwriteForumsCollectionID: String(import.meta.env.VITE_APPWRITE_FORUMS_COLLECTION_ID),
    appwritePFPBucketID: String(import.meta.env.VITE_APPWRITE_PFP_BUCKET_ID),
    appwriteDefaultImageID: String(import.meta.env.VITE_APPWRITE_DEFAULT_IMAGE_ID),
    appwriteForumImagesBucketID: String(import.meta.env.VITE_APPWRITE_FORUM_IMAGES_BUCKET_ID),
    exercisesApiKey: String(import.meta.env.VITE_EXERCISES_API_KEY),
}

export default conf;