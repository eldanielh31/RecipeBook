import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * Save the data to local storage.
   * @param {string} key - The key to store the data under.
   * @param {string} value - The value to be stored.
   */
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  /**
   * It returns the value of the key passed to it
   * @param {string} key - The key of the data you want to retrieve.
   * @returns The value of the key in localStorage.
   */
  public getData(key: string) {
    return localStorage.getItem(key)
  }

  /**
   * It removes the data from the local storage
   * @param {string} key - The key of the data you want to remove.
   */
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  /**
   * It clears all the data from the local storage
   */
  public clearData() {
    localStorage.clear();
  }
}
