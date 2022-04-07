import { useState } from "react"
import "./Navbar.css";
import { CSSTransition } from "react-transition-group"



export default function DropDownMenu() {

    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height)
    }

    function DropDownItem(props) {
        return(
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>

                { props.chidren }

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }


    return(
        <div className="dropdown" style={{ height: menuHeight}}>
            <CSSTransition 
                in={activeMenu === "main"} 
                unmountOnExit 
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
                >
                    <div className="menu">

                    <DropDownItem>Home</DropDownItem>
                    <DropDownItem
                        leftIcon="🧐"
                        goToMenu="settings"
                    >About</DropDownItem>
                    <DropDownItem>Services</DropDownItem>
                    <DropDownItem>Services</DropDownItem>
                    <DropDownItem>Services</DropDownItem>
                    <DropDownItem>Services</DropDownItem>
                    <DropDownItem>Services</DropDownItem>
                    <DropDownItem>Services</DropDownItem>

                    </div>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === "settings"} 
                unmountOnExit 
                timeout={500}
                classNames="menu-secondary"
                >
                    <div className="menu">

                    <DropDownItem>Home</DropDownItem>
                    <DropDownItem
                        leftIcon="🧐"
                        goToMenu="main"
                    >About</DropDownItem>
                    <DropDownItem>Services</DropDownItem>

                    </div>
            </CSSTransition>
        </div>
    )
}