import React,{useState,useEffect} from 'react';
import QueueAnim from "rc-queue-anim";

import axios from 'axios'

import LinkCard from '../../components/LinkCard'

export default function Link(){

    const [linkData,setLinkData] = useState([])

    useEffect(() => {
        axios.get('http://101.201.125.229:8081/navi').then(res => {
            setLinkData(res.data.data)
        })
    },[])

    return (
        <div>
            <QueueAnim animConfig={[
            { opacity: [1, 0], translateX: [0, 50] }
          ]} duration="1500">
                
            {linkData.map(item => {
                return <LinkCard linkData={item} key={item.typeId}/>
            })}
            </QueueAnim>
        </div>
    )
}