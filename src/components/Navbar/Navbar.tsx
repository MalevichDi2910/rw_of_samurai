import React from "react";
import s from "./Navbar.module.css";
import "./Navbar.css";
import {NavLink} from 'react-router-dom';
import userPhoto from './../../assets/images/user.png'

const Navbar = () => {

    const friends = [
      {id: 1, name: 'Dima'},
      {id: 2, name: 'Egor'},
      {id: 3, name: 'Vlad'},
    ]

  let friendsNav = friends.map(f => {
      return (
          <div key={f.id} className={s.nameFriend}>
              <img
                  src={userPhoto}
                  alt={f.name}/>
              {f.name}
          </div>
      )
  })

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile"> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs"> Messages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users"> Users </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news"> News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music"> Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings"> Settings </NavLink>
            </div>
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
