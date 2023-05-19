export interface INotifier {
  notifySuccess(message: string): void;
  notifyWarn(message: string): void;
  notifyFailed(message: string): void;
}
