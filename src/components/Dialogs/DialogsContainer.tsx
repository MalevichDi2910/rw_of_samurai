import React from "react";
import {InitialStateType,sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer;