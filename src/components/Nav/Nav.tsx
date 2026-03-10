import menuIcon from "../../assets/ic_menu.svg";

export const Nav = () => {
    return (
        <div className="nav-container">
            <img src={menuIcon} alt="menu" className="hamburger-menu" />
            <nav className="nav">
                <ul className="nav-list">
                    <li className="list_element"><a href="#projects" >Hello</a></li>
                    <li className="list_element"><a href="#projects" >Projects</a></li>
                    <li className="list_element"><a href="#about">About</a></li>
                    <li className="list_element"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}