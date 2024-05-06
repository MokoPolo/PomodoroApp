const Timer: React.FC = () => {
  async function sendNotification() {
    // A service worker must be registered in order to send notifications on iOS
    const registration = await navigator.serviceWorker.register(
      "serviceworker.js",
      {
        scope: "./",
      }
    );
    const result = await window.Notification.requestPermission();
    // If the user rejects the permission result will be "denied"
    if (result === "granted") {
      alert("Permission granted");
      // You must use the service worker notification to show the notification
      // Using new Notification("Hello World", { body: "My first notification on iOS"}) does not work on iOS
      // despite working on other platforms
      await registration.showNotification("Hello World", {
        body: "My first notification on iOS",
      });
    } else {
      alert("Permission denied");
    }
  }
  return (
    <div>
      Timer
      <button onClick={sendNotification}>Send Notification</button>
      {/* <div>
        lule1
        <img
          className="rounded-lg"
          src="./images/favicon-32x32.png"
          alt="QR Code"
        />
      </div> */}
    </div>
  );
};

export default Timer;

// https://devtails.xyz/@adam/how-to-setup-web-push-notifications-in-ios-safari
