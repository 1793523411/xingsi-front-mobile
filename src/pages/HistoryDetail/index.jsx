import React,{useState,useEffect} from 'react';
import QueueAnim from "rc-queue-anim";
import {WhiteSpace} from 'antd-mobile'

import axios from 'axios'

import HistoryPersonCard from '../../components/HistoryPersonCard'

export default function HistoryDetail(props){

    const [personData,setPersonData] = useState([])

    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        console.log(props.match.params.id)
        axios.get('http://101.201.125.229:8081/history/'+props.match.params.id).then(res => {
        setPersonData(res.data.data)
        })
    }

    return (
        <div>
                    <WhiteSpace size="lg" />
            <QueueAnim>
         {
             personData.map(item =>{
                 return (
                    <HistoryPersonCard person={item} key={item.personId}/>
                 )
             })
         }
         </QueueAnim>
        </div>
    )
}