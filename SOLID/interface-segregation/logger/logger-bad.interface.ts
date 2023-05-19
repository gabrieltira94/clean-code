// Bad approach - Monolithic interface
interface ILogger {
  error(error: Error): void;
  warn(message: string): void;
  info(message: string): void;
  debug(message: string): void;
  notifySuccess(message: string): void;
  notifyWarn(message: string): void;
  notifyFailed(message: string): void;
}
