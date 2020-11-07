import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import { selectAllUsers } from "../users/usersSlice";
import {
  allNotificationsRead,
  selectAllNotifications,
} from "./notificationsSlice";
import { useEffect } from "react";

const NotificationsList = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectAllNotifications);
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(allNotificationsRead());
  });

  const renderedNotifications = notifications.map((notification) => {
    const date = parseISO(notification.date);
    const timeAgo = formatDistanceToNow(date);
    const user = users.find((user) => user.id === notification.user) || {
      name: "Unknown User",
    };

    const notificationClassname = classnames("notification", {
      new: notification.isNew,
    });

    return (
      <div key={notification.id} className={notificationClassname}>
        <div>
          <strong>{user.name}</strong> {notification.message}
        </div>
        <div title={notification.date}>
          <em>{timeAgo} ago</em>
        </div>
      </div>
    );
  });

  return (
    <section>
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  );
};

export default NotificationsList;
