import Link from 'next/link'
import classes from "./header.module.css"

export function Header(){
    return (
        <header className={classes.header}>
            <div>
                <div className={classes.logo}>
                   <i>Social Wrapper</i>
                </div>
                <div>
                   <Link href="/">Next Events</Link>
                </div>  
                <nav className={classes.navigation}>
                    <ul>
                        <li>
                            <Link href="/events" >All Events</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}