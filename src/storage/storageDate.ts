import 'react-native-get-random-values';

import { getMealsByDate } from './storageMeal';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { UserDTO } from 'src/dtos/UserDTO';
import { db } from '../../firebaseConfig';
import { storageGetUser, storageUpdateUser } from './storageUser';

export async function createDateFB(newDate: string, key: string) {
    try {

        const storedDates = await getAllDatesFB(key);

        const datesAlreadyRegistered = storedDates ? storedDates.filter((date: string) => date === newDate) : [];

        if (datesAlreadyRegistered.length > 0) {
            return;
        }

        const userRef = doc(db, "users", key);

        // Atomically add a new date to the dates array field.
        await updateDoc(userRef, {
            dates: arrayUnion(newDate),
        });

        const userLogged = await storageGetUser();

        await storageUpdateUser({
            ...userLogged,
            dates: [...userLogged.dates, newDate]
        });

    } catch (error) {
        throw error;
    }
}

export async function getAllDatesFB(key: string) {

    try {
        const querySnapshot = await getDoc(doc(db, "users", key));
        const userFB = querySnapshot.data() as UserDTO;

        return userFB.dates;
    } catch (error) {
        throw error;
    }
}

export async function removeEmptyDatesFB(date: string, key: string) {
    try {

        const storedMeals = await getMealsByDate(date, key);

        if (storedMeals.length === 0) {
            const storedDates = await getAllDatesFB(key);

            const updatedDates = storedDates.filter(item => item !== date);

            const userRef = doc(db, "users", key);

            await updateDoc(userRef, {
                dates: updatedDates
            });

            const userLogged = await storageGetUser();

            await storageUpdateUser({
                ...userLogged,
                dates: updatedDates
            });
        }

    } catch (error) {
        throw error;
    }
}
