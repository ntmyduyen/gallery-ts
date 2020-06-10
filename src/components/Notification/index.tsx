import React from 'react';
import ReactDOM from 'react-dom';
import {useSelector} from 'react-redux';
import {Item} from './Item';

interface RootState {
  notification: {
    notification: object;
  };
}

const Notification: React.SFC<{}> = () => {
  const notifications = useSelector((state: RootState) => {
    return state.notification.notification;
  });

  return (
    <div className="alert">
      {Object.values(notifications).map((notification) => (
        <Item key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

var root = document.getElementById('toasts');

export const NotificationContainer = () => {
  if (root) {
    return ReactDOM.createPortal(<Notification />, root);
  }
  return <Notification />;
};
