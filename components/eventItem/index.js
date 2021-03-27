import classes from "./eventItem.module.css";
import { Button } from "../index";
import { DateIcon, AddressIcon, ArrowRightIcon } from "../icons";

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
            <DateIcon />
            <time>{dateFormat}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{addressFormat}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
