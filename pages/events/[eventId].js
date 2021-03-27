import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

function event() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const envet = getEventById(eventId);

  if (!event) {
    return <p>No event found</p>;
  }
  return (
    <div>
      <h1>Event Page</h1>
    </div>
  );
}

export default event;
