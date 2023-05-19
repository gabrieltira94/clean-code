import Logger from "./logger";
import { ILogger } from "./logger.interface";
import Notifier from "./notifier";
import { INotifier } from "./notifier.interface";

const logger: ILogger = new Logger();
logger.info("Log message");
logger.error(new Error("Something went wrong"));

const notifier: INotifier = new Notifier();
notifier.notifySuccess("Notification message");
