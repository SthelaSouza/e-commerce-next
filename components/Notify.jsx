import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from "./Loading"; //procurar um loading legl na net
import Toast from './Toast'

const Notify = () => {
    const {state, dispatch } = useContext(DataContext)
    const {notify } = state
    return (
        <>
            {notify.loading && <Loading />}
            {notify.error && (
                <Toast
                    msg={{ msg: notify.error, title: 'Error' }}
                    handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                    bgColor="bg-danger"
                />
            )}
             {notify.sucess && (
                <Toast
                    msg={{ msg: notify.sucess, title: 'TÁ DE PARABÉNS' }}
                    handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                    bgColor="bg-sucess"
                />
            )}
        </>
    );
}

export default Notify;