import { useContext } from "react";
import MyContext from './MyContext';

export default function Message() {
    let message = useContext(MyContext)
    return (
        <h3>{message}</h3>
    );
}