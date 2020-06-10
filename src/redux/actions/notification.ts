import {
  AddNotificationAction,
  ADD_NOTIFICATION,
  RemoveNotificationAction,
  REMOVE_NOTIFICATION,
  NOTIFICATION_TYPE,
} from '../actionTypes/notification';

export function addNotification(data: NOTIFICATION_TYPE): AddNotificationAction {
  return {
    type: ADD_NOTIFICATION,
    data,
  };
}

export function removeNotification(id: string): RemoveNotificationAction {
  return {
    type: REMOVE_NOTIFICATION,
    id,
  };
}
