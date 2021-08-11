import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

export enum NotifyMethod {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error'
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastrService: ToastrService
  ) { }
  public notify(title: string, method: NotifyMethod = NotifyMethod.Error, description: string = ''): void {
    this.toastrService[method](title, description);
  }
}
