import React, {useState, useEffect} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import '../App.css';


const BotView = (props) => {
    console.log(props);
    const botToken = props.match.params.botId;

    const [botinfo, setBotInfo] = useState([]);
    const [userlist, setUserList] = useState([]);

    useEffect(() => {
        fetch(`https://26bd54883ad3.ngrok.io/api/bot_info${botToken}`)
        .then(response => response.json())
        .then(data => setBotInfo(data));
        fetch(`https://26bd54883ad3.ngrok.io/api/bot${botToken}`)
        .then(response => response.json())
        .then(data => setUserList(data));
    }, [])


    let createUserList = userlist => {
        let response = userlist.map(user => {
            return (
            <Link key = {user.bot_user} to = {`/${botToken}/user${user.bot_user}`}>
                <div className = "element-list">{user.username}</div>
            </Link>
            )
        })

        return response
    }

    return (
        <div>
            <div>BotView</div>
            <div>{createUserList(userlist)}</div>
        </div>
    )

}

export default BotView