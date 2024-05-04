const Timer: React.FC = () => {
  function sendNotification() {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        new Notification("Pomodoro", {
          body: "Time to take a break!",
          icon: "/favicon.ico",
        });
      }
    });
    //alert("Notification sent!");
  }
  return (
    <div>
      Timer
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
};

export default Timer;
