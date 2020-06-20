import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const MainView = () => {

    const [botlist, setBotList] = useState([]);

    useEffect(() => {
        fetch('https://26bd54883ad3.ngrok.io/api')
        .then(response => response.json())
        .then(data => setBotList(data))
    }, [])

    const createBotList = botlist => {
        let component = botlist.map(bot => {
            return (
            <Link to = {{pathname: `/bot${bot.bot}`, params:{bot_id: bot.bot}}}>
                <div className = "element-list">{bot.bot_name}</div>
            </Link>);
        })
        return component
    }

    return (
        <div>
            <div>MainView</div>
        <div>{createBotList(botlist)}</div>
        </div>
    )
}


export default MainView