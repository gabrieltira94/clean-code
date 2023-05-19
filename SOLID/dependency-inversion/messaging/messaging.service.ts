import { IMessageSender } from "./message.sender.interface";

export default class MessagingService {
  constructor(private messageSender: IMessageSender) { }

  sendMessage(message: string) {
    this.messageSender.sendMessage(message);
  }
}
