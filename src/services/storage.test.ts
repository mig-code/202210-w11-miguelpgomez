import { fullFormDataMock } from '../features/form/mocks/form.data.mocks';
import { getStoreData, setStore } from './storage';

describe('Given getStore Data', () => {
    describe('When I call it with data in local storage', () => {
        const mockData = ['test'];
        const mockKey = 'test';

        beforeEach(() => {
            const mockDataString = JSON.stringify(mockData);
            Storage.prototype.getItem = jest
                .fn()
                .mockReturnValue(mockDataString);
        });
        test('Then the data should be obtained', () => {
            const result = getStoreData(mockKey);
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(result).toEqual(mockData);
        });
    });
    describe('When I call it without data in local storage', () => {
        const mockKey = 'test';
        beforeEach(() => {
            Storage.prototype.getItem = jest.fn().mockReturnValue(null);
            Storage.prototype.setItem = jest.fn();
        });
        test('Then should return []', () => {
            const result = getStoreData(mockKey);
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
    });
});

describe('Given setStore', () => {
    describe('When I call it', () => {
        test('Then localStorage should save the data', () => {
            Storage.prototype.setItem = jest.fn();
            const mockTasks = [fullFormDataMock];
            const username = fullFormDataMock.userName;

            const mockTasksString = JSON.stringify(mockTasks);
            setStore(username, mockTasks);
            expect(localStorage.setItem).toHaveBeenCalledWith(
                username,
                mockTasksString
            );
        });
    });
});
