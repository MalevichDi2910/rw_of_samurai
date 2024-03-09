import React, {ComponentType} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import store, {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component<ownPropsType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <React.Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path={"/dialogs"} element={<DialogsContainer/>}/>
                            <Route path={"/profile"} element={<ProfileContainer/>}>
                                <Route path={':userId'} element={<ProfileContainer/>}/>
                            </Route>
                            <Route path={"/users"} element={<UsersContainer/>}/>
                            <Route path={"/login"} element={<Login/>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        )
    }
}

type mapDispatchToProps = {
    initializeApp: () => void
}

type mapStateToPropsType = {
    initialized: boolean
}

type ownPropsType = mapDispatchToProps & mapStateToPropsType;

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(connect(mapStateToProps, {initializeApp}),withRouter)(App);

export const SamuraiJSApp = () => {
return <React.StrictMode>
    <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
</React.StrictMode>
}
