import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  msg: string[] = [];

  constructor() {}

  getMsg(): string[] {
    return this.msg;
  }

  addMsg(m: string): void {
    this.msg.push(m);
    setTimeout(() => this.deleteMsg(), 3000);
  }

  deleteMsg(): void {
    this.msg.shift();
  }
}
