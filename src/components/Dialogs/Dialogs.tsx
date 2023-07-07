import React, { ChangeEvent, useRef } from 'react';
import s from './Dialogs.module.css'
import { useNavigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsDateType, MassagePageType, MessagesDateType } from '../store/state';



type DialogsPropsType = {
    state: MassagePageType
    updateMessage: (newMessage: string)=> void
    addMessage: (message: string)=> void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const navigate = useNavigate();

    let newMessage = useRef<HTMLTextAreaElement>(null)

    const addMessageHandler = () => {
        if (newMessage.current) props.addMessage(newMessage.current.value)
    }

    const  updateMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateMessage(e.currentTarget.value)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.state.dialogsData.map((dialog: any) => {
                        return (
                            <DialogItem name={dialog.ame} id={dialog.yd} />
                        )
                    })
                }


            </div>

            <div className={s.messages}>
                {/* {
                   props.state.messagesData.map((message: MessagesDateType) => {<Message message={message.message} id={message.id} />

                    })
                } */}

            </div>
            <div>
                <textarea value={props.state.updateMassage} onChange={updateMessageTextHandler} ref={newMessage}></textarea>
                <button onClick={ addMessageHandler}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;
