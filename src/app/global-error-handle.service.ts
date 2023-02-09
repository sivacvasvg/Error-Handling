import { ErrorHandler ,Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandleService implements ErrorHandler {

  constructor() { }
  handleError(error: any): void {
    console.log('An error occured:',error.message);
    console.error(error);
    alert(error);
  }
}
