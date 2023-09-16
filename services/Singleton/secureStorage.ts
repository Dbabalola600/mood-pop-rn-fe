import * as SecureStore from 'expo-secure-store';

type SecureStorageKeys = "email" | "_id"

export class SecureStorage {

    private static instance: SecureStorage;



    private constructor() { }

    public static getInst(): SecureStorage {
        if (!SecureStorage.instance) {
            SecureStorage.instance = new SecureStorage();
        }

        return SecureStorage.instance;
    }




    async save(key: SecureStorageKeys, value: string):Promise<boolean> {
        try{
            await SecureStore.setItemAsync(key, value);
            return true;
        }catch (e){
            return false
        }
    }

    async getValueFor(key: SecureStorageKeys): Promise<string | null> {
        let result = await SecureStore.getItemAsync(key);
        return result
    }

    async deleteItemAsync(key: SecureStorageKeys): Promise<boolean> {
        try {
            await SecureStore.deleteItemAsync(key);
            return true;
        } catch (error) {
            console.error('Error deleting stored data:', error);
            return false;
        }
    }


}