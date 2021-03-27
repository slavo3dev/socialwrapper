import Link from "next/link";
import classes from "./eventItem.module.css";

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
    <li className={classes.item} key={id}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h1>{title}</h1>
          <div className={classes.date}>
            <time>{dateFormat}</time>
          </div>
          <div className={classes.address}>
            <address>{addressFormat}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
