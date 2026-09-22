import { Notification, INotification } from "../models/Notification.model";

export class NotificationService {
  async send(data: {
    recipientId: string;
    recipientRole: string;
    type: any;
    title: string;
    message: string;
    relatedEntityId?: string;
  }): Promise<INotification> {
    console.log(`[Notification Engine] To ${data.recipientRole} (${data.recipientId}): [${data.type}] ${data.title}`);
    return Notification.create(data);
  }

  async listForUser(userId: string) {
    return Notification.find({ recipientId: userId }).sort({ createdAt: -1 }).limit(20);
  }

  async markAsRead(id: string) {
    return Notification.findByIdAndUpdate(id, { read: true }, { new: true });
  }
}

export const notificationService = new NotificationService();
