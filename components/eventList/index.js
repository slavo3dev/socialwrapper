import { EventItem } from "../index";

export function EventList(props) {
  const { featuredEvents } = props;

  return (
    <ul>
      {featuredEvents.map((event) => (
        <EventItem key={event.id} items={event} />
      ))}
    </ul>
  );
}
