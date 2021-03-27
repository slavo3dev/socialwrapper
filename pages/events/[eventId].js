import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";

import {
  EventSummary,
  EventLogistics,
  EventContent,
} from "../../components/eventDetail";

function event() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.data}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default event;
