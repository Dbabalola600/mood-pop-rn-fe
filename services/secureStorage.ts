import * as SecureStore from 'expo-secure-store';


type SecureStorageKeys = "userId"|"email"| "image"|"userName"





export class SecureStorage {
    private static instance: SecureStorage;


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


    async clearAll(): Promise<boolean> {
        try {
          const keys: SecureStorageKeys[] = ["userId", "email", "image","userName"]; // Add other keys if needed
    
          // Iterate over keys and remove them
          await Promise.all(keys.map(async (key) => await SecureStore.deleteItemAsync(key)));
    
          return true;
        } catch (e) {
          return false;
        }
      }
    



}