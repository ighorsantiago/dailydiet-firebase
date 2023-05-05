import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserDTO } from "../dtos/UserDTO";


import { USER_COLLECTION } from "./storageConfig";

export async function storageGetUser() {
    const storage = await AsyncStorage.getItem(USER_COLLECTION);

    const user: UserDTO = storage ? JSON.parse(storage) : {};

    return user;
}

export async function storageUpdateUser(user: UserDTO) {
    AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(user));
}

export async function storageUserRemove() {
    await AsyncStorage.removeItem(USER_COLLECTION);
}
