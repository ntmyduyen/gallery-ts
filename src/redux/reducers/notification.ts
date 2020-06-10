import {
  AddNotificationAction,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  RemoveNotificationAction,
} from '../actionTypes/notification';

import omit from 'lodash/omit'

export interface NotificationState {
  notification: object;
  nextId: number
}

export default function notificationReducer(
  state: NotificationState = {
    notification: {},
    nextId: 0
  },
  action: AddNotificationAction | RemoveNotificationAction,
): NotificationState {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        nextId: state.nextId + 1,
        notification: {
            ...state.notification,
            [state.nextId] : {
                id: state.nextId,
                text: action.data.text,
                type: action.data.type
            }
        }
      };
    case REMOVE_NOTIFICATION:
        let notification = state.notification
        if((state.notification as any)[action.id]){
            notification = omit(state.notification, action.id)
        }
      return {
        ...state,
        notification
      };
    default:
      return state;
  }
}
