import { FormDataType } from '../features/form/types/form.data';

export function getStoreData(key: string): Array<FormDataType> {
    const dataString = localStorage.getItem(key);
    if (!dataString) return [];
    return JSON.parse(dataString);
}

export function setStore(userName: string, data: Array<FormDataType>) {
    localStorage.setItem(userName, JSON.stringify(data));
}
