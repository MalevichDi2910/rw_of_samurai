import React from "react";
import s from "./Navbar.module.css";
import "./Navbar.css";
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    const friends = [
      {id: 1, name: 'Dima'},
      {id: 2, name: 'Pavel'},
      {id: 3, name: 'Vlad'},
    ]

  let friendsNav = friends.map(f => {
    return (
        <div className={s.nameFriend}>
          <img
              src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
              alt={f.name}/>{f.name}
          </div>
          )
          })

                return(
                    <nav className={s.nav}>
                        <div className={s.item}>
                            <NavLink to="/profile"> Profile </NavLink>
                        </div>
                        <div className={`${s.item}`}>
                            <NavLink to="/dialogs"> Messages </NavLink>
                        </div>
                        <div className={`${s.item}`}>
                        <NavLink to="/users"> Users </NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/"> News </NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/"> Music </NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/"> Settings </NavLink>
                        </div>
                        <hr/>
                        <div className={s.friends}>
                            <div className={s.nameSelection}>Friends</div>
                            <div className={s.infoFriends}>
                                {friendsNav}
                            </div>
                        </div>
                    </nav>
                )
                };

                export default Navbar;
