import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faHouse,
	faUserGroup,
	faBookOpen,
	faEnvelope,
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Book = () => <FontAwesomeIcon icon={faBookOpen} className="styleIcons" />;
export const Email = () => <FontAwesomeIcon icon={faEnvelope} className="styleIcons" />;
export const GitHub = () => <FontAwesomeIcon icon={faGithub} className="styleIcons" />;
export const Home = () => <FontAwesomeIcon icon={faHouse} className="styleIcons" />;
export const LinkedIn = () => <FontAwesomeIcon icon={faLinkedin} className="styleIcons" />;
export const Menu = () => <FontAwesomeIcon icon={faBars} />;
export const Next = () => <FontAwesomeIcon icon={faChevronRight} />;
export const Previous = () => <FontAwesomeIcon icon={faChevronLeft} />;
export const Users = () => <FontAwesomeIcon icon={faUserGroup} className="styleIcons" />;
