import React from "react";
import {InitialStateType,sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
   dialogsPage: InitialStateType
}

type mapDispatchToPropsType = {
   updateNewMessageBody: (body: string) => void
   sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      dialogsPage: state.dialogsPage
   }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
   return {
      updateNewMessageBody: (body) => dispatch(updateNewMessageBodyCreator(body)),
      sendMessage: () => dispatch(sendMessageCreator()),
   }
}

export default compose<React.FC>(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs)