import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { selectAllNotifications } from "./notificationsSlice";

const NotificationsList = () => {
  const notifications = useSelector(selectAllNotifications);
  const users = useSelector(selectAllUsers);

  const renderedNotifications = notifications.map((notification) => {
    const date = parseISO(notification.date);
    const timeAgo = formatDistanceToNow(date);
    const user = users.find((user) => user.id === notification.user) || {
      name: "Unknown User",
    };

    return (
      <div key={notification.id} className="notification">
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
