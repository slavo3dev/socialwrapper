import { Fragment } from "react";
import { Header } from "../header";

export function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
}
