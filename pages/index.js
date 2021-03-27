import { getFeaturedEvents } from "../dummy-data";
import { EventList } from "../components";

function Home() {
  const featuredEvents = getFeaturedEvents();

  console.log(featuredEvents);

  return (
    <div>
      <h1>Hello Home Page</h1>
      <EventList featuredEvents={featuredEvents} />
    </div>
  );
}

export default Home;
