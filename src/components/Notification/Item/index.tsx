import React, {useEffect} from 'react';
import classnames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import {useDispatch} from 'react-redux';
import { removeNotification } from '../../../redux/actions/notification';

interface Props {
  notification: {
    id: string;
    type: string;
    text: string;
  };
}

export const Item: React.SFC<Props> = ({notification}: Props) => {
    const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeNotification(notification.id))
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={classnames('alert__item', `alert__item-${notification.type}`)}
    >
      {notification.type === 'success' ? <CheckCircleIcon /> : <ErrorIcon />}
      <span>{notification.text}</span>
    </div>
  );
};
