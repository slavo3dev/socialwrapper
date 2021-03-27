import { EventItem } from "../index";
import classes from "./eventList.module.css";

export function EventList(props) {
  const { featuredEvents } = props;

  return (
    <ul className={classes.list}>
      {featuredEvents.map((event) => (
        <EventItem key={event.id} items={event} />
      ))}
    </ul>
  );
}
