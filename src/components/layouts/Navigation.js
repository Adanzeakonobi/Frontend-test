import styles from "./styles/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAnglesRight,
	faBookOpen,
	faLock,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAnglesRight, faBookOpen, faLock, faChevronDown);
const Navigation = () => {
	return (
		<nav className={styles.navHeader}>
			<ul className={styles.navList}>
				<li>
					<FontAwesomeIcon
						icon={faAnglesRight}
						style={{ color: "#6d7380", marginLeft: "-40px", fontSize: "12px" }}
					/>
				</li>
				<li>
					<FontAwesomeIcon icon={faBookOpen} style={{ paddingRight: "5px" }} />
					Main <span>/</span>
				</li>
				<li>
					Getting Started <span>/</span>
				</li>
				<li>Frontend Developer test proj...</li>
			</ul>

			<ul className={styles.navList}>
				<li>
					<FontAwesomeIcon icon={faLock} style={{ paddingRight: "4px" }} />
					Editing
				</li>
				<span className={styles.division}></span>
				<li style={{ color: "#4974b1" }}>
					Publish Space{" "}
					<FontAwesomeIcon
						icon={faChevronDown}
						style={{
							paddingRight: "4px",
							marginRight: "25px",
							paddingLeft: "17px",
						}}
					/>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;