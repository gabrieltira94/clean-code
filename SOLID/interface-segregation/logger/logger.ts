import { ILogger } from "./logger.interface";

export default class Logger implements ILogger {
  error(error: Error): void {
    console.log(`[error]: ${error.message}`, error.stack);
  }

  warn(message: string): void {
    console.log(`[warn]: ${message}`);
  }

  info(message: string): void {
    console.log(`[info]: ${message}`);
  }

  debug(message: string): void {
    console.log(`[debug]: ${message}`);
  }
}
