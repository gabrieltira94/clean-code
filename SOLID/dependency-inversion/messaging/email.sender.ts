import { IMessageSender } from "./message.sender.interface";

export default class EmailSender implements IMessageSender {
  sendMessage(message: string) {
    console.log("Sending email:", message);
  }
}
