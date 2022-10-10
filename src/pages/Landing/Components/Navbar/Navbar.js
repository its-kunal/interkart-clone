import React, { Component } from 'react'
import Logo from "../../../../assets/logo.png"
import styles from "./Navbar.module.css"
import MenuIcon from "../../../../assets/Menu.svg"

export default class Navbar extends Component {


    constructor() {
        super()
        this.state = {
            navList: ["Solutions", "Integrations", "Pricing", "Rescources", "About Us", "Login"],
            navActions: ["Start Free Trial"]
        }
    }
    render() {
        return (
            <nav>
                <div className={styles.container}>
                    <div className={styles.navBrand}>
                        <img src={Logo} alt="Technoboot" className={styles.navLogo} />
                    </div>
                    <div className={styles.navListWrapper}>
                        <ul className={styles.navList}>
                            {this.state.navList.map((v, indec) => {
                                return (<li className={styles.navItem} key={indec}>
                                    {v}
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.navAction}>
                        {this.state.navActions.map((v, index) => {
                            return (<button className={styles.btn} key={index}>
                                {v}
                            </button>)
                        })}
                    </div>
                    <div className={styles.togglerBtn}>
                        <button className={styles.iconBtn}>
                            <img src={MenuIcon} alt="" height={'40px'} />
                        </button>
                    </div>
                </div>


            </nav>
        )
    }
}
