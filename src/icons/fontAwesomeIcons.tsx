import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faUserGroup, faBookOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Book = () => <FontAwesomeIcon icon={faBookOpen} className="menuDrawer" />;
export const Email = () => <FontAwesomeIcon icon={faEnvelope} className="menuDrawer" />;
export const Home = () => <FontAwesomeIcon icon={faHouse} className="menuDrawer" />;
export const Menu = () => <FontAwesomeIcon icon={faBars} />;
export const Users = () => <FontAwesomeIcon icon={faUserGroup} className="menuDrawer" />;
