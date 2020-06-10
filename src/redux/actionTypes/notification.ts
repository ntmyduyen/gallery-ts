export const ADD_NOTIFICATION = 'notification/ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'notification/REMOVE_NOTIFICATION';

export interface NOTIFICATION_TYPE {
  type: string,
  text: string
}

export interface AddNotificationAction {
  type: typeof ADD_NOTIFICATION;
  data: NOTIFICATION_TYPE;
}

export interface RemoveNotificationAction {
  type: typeof REMOVE_NOTIFICATION;
  id: string;
}
