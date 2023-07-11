import { StoreType } from '../store/reduxStore/storeRedux';
import { addMessageAC, updateMessageAC } from '../store/reducers/dialogsReducer';
import Dialogs from './Dialogs';



type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
    // const navigate = useNavigate();
    const state = props.store.getState().dialogsPage
    const dispatch = props.store.dispatch

    const updateMessage = (newMessage: string) => {
        props.store.dispatch(updateMessageAC(newMessage))
    }

    const addMessage = (message: string) => {
        props.store.dispatch(addMessageAC(message))
    }

    return (
        <Dialogs state={state} updateMessage={updateMessage} addMessage={addMessage} />
    )
}

export default Dialogs;
