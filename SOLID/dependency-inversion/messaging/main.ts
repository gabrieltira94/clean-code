import EmailSender from "./email.sender";
import MessagingService from "./messaging.service";

const emailSender = new EmailSender();
const messagingService = new MessagingService(emailSender);

messagingService.sendMessage("Hello, world!");
