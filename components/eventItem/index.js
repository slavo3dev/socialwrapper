import Link from "next/link";

export function EventItem(props) {
  const { title, image, date, location, id } = props.items;

  const dateFormat = new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressFormat = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li key={id}>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h1>{title}</h1>
          <div>
            <time>{dateFormat}</time>
          </div>
          <div>
            <address>{addressFormat}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
