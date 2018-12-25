import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  constructor() {}

  saveData(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  public retrieveData(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return console.error('Error getting data from localStorage', e);
    }
  }
}
