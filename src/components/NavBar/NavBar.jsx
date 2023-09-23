import Button from "../Button/Button"
import Logo from "../Logo/Logo"
import Search from "../Search/Search"
import styles from './NavBar.module.css'
const NavBar = ({songs}) => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <Search songs={songs} />
        <Button children={"Give Feedback"} />
    </nav>
  )
}

export default NavBar