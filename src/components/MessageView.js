import React, {useState, useEffect} from 'react';
import '../App.css';

const MessageView = (props) => {

    const botId = props.match.params.botId;
    const userId = props.match.params.userId;

    const [messagelist, setMesaageList] = useState([]);

    useEffect(() => {
        fetch(`https://26bd54883ad3.ngrok.io/api/bot${botId}/${userId}/`)
        .then(response => response.json())
        .then(data => setMesaageList(data))
    }, [])

    const returnDate = messagedate => {
        let date = new Date(messagedate);
        let hours = String(date.getHours());
        let minutes = String(date.getMinutes()).length > 1 ? String(date.getMinutes()) : '0'+String(date.getMinutes());
        let seconds = String(date.getSeconds()).length > 1 ? String(date.getSeconds()) : '0'+String(date.getSeconds());
        let day = String(date.getDay());
        let month = String(date.getMonth()).length > 1 ? String(date.getMonth()) : '0'+String(date.getMonth());
        let year = String(date.getFullYear());
        return (<div>{hours}:{minutes}:{seconds} {day}.{month}.{year}</div>)
    }

    const createMessageList = messagelist => {
        let response = messagelist.map(message => {
            let date = returnDate(message.date)
            return(
            <div className = {message.is_bot ? "bot-list" : "user-list"}>
                <div>from: {message.is_bot ? message.bot_name : message.username}</div>
                <div>{message.text}</div>
                {date}
            </div>)
        })
        return response.reverse()
    }

    return (
        <div className = 'container'>
            
            <div>{createMessageList(messagelist)}</div>
        </div>
    )
}


export default MessageView