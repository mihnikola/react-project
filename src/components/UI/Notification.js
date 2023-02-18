import { useEffect, useState } from "react";
import classes from "./Notification.module.css";

const Notification = (props) => {
  const {status, title, message} = props;
  const [showNotify, setShowNotify] = useState(false);
  let specialClasses = "";

  if (status === "error") {
    specialClasses = classes.error;
  }
  if (status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;
  useEffect(()=>{
    setShowNotify(true);
    const timer = setTimeout(() => {
      setShowNotify(false);
    }, 3000);
    return () => clearTimeout(timer);
  },[status]);
  return (
    <>
      {showNotify && (
        <section className={cssClasses}>
          <h2>{title}</h2>
          <p>{message}</p>
        </section>
      )}
    </>
  );
};

export default Notification;
