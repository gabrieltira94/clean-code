import { INotifier } from "./notifier.interface";

export default class Notifier implements INotifier {
  notifySuccess(message: string): void {
    console.log(`[NOTIFY] ${message}`);
  }

  notifyWarn(message: string): void {
    console.log(`[NOTIFY] ${message}`);
  }

  notifyFailed(message: string): void {
    console.log(`[NOTIFY] ${message}`);
  }
}
