import React from 'react';
import {WhiteSpace} from'antd-mobile'

import AboutHeader from '../../components/AboutHeader'
import AboudCard from '../../components/AboutCard'

import './index.css'

export default function About(){

    const data = [
        {
            name:"程序组",
            img:"assets/1.png",
            desc:"这里是行思工作室最大的一个组，可谓是人丁兴旺，人才济济！所谓程序组，主力当然就是搞软件发啦！无论是前端，亦是后台，或是两者兼顾的全栈开发，各种方向我们都有，这里都有优秀的学长学姐，最新的前沿技术，有无所不能的it大佬。如果你想变成传说中那个无所不能的hacker的话，来吧，我们在这儿等你！只要你想，一切都会变成真的！"
        },
        {
            name:"设计组",
            img:"assets/2.png",
            desc:"分为两个方向：前端和PS。前端包括HTML，CSS，JavaScript等，做好网页开发，布局和色彩搭配；PS方向主要运用photoshop，以AI，AE为辅助，设计海报，宣传资料。以有限的技术呈现视觉美感，表达内涵以及展现自己的设计想法。"
        },
        {
            name:"视创组",
            img:"assets/3.png",
            desc:"视创组以adobe系列pr为主，活用AE,Flash,Au等软件去打造视频，同时致力于以兴趣开发为根基的视频创作，用简单的技术做当初令自己心动的视频类型。以扎实的技术为核心，新奇的创意为灵魂，通过视频表达生活。"
        },
        {
            name:"游戏开发组",
            img:"assets/4.png",
            desc:"使用c#编程配合unity游戏引擎开发游戏或者使用c++、蓝图编程配合UE4游戏开发引擎开发游戏。"
        },
        {
            name:"文案运营组",
            img:"assets/5.png",
            desc:"文案运营组负责社团推广写推文，官Q官微公众号，office软件手里拿，社团生活真奇妙。"
        },
    ]
    return (
        <div className="aboutCon">
            <div className="aboutBgc"></div>
            <AboutHeader/>
            {
                data.map(item =>{
                    return (
                        <>
                            <WhiteSpace size="lg" />
                        <AboudCard name={item.name} img={item.img} desc={item.desc}/>
                        </>
                    )
                })
            }
        </div>
    )
}