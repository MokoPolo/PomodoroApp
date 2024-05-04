const Timer: React.FC = () => {
  function sendNotification() {
    // setTimeout(() => {
    //   addNotification({
    //     title: "Pomodoro Timer",
    //     // subtitle: "This is a subtitle",
    //     message: "Time to take a break!",
    //     theme: "red",
    //     native: true, // when using native, your OS will handle theming.
    //   });
    // }, 2000);
    alert("Notification sent!");
  }
  return (
    <div>
      Timer
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
};

// https://www.npmjs.com/package/@bdhamithkumara/react-push-notification
export default Timer;
