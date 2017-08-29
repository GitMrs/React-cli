import React,{Component} from "react";
import Swiper from "swiper";
import "./swiper.css";
import "./nav.css"
import {Link} from "react-router";
export default class Nav extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(Swiper)
        new Swiper(".swiper-container",{
            freeMode:true,
            slidesPerView:6.5
        })
    }
    render(){
        return ( <nav className="menu swiper-container">
                    <ul className="swiper-wrapper">
                        <li className="swiper-slide"><Link activeClassName="active" to="/">全部</Link> </li>
                        <li className="swiper-slide"><Link activeClassName="active" to="/list">财经</Link> </li>
                        <li className="swiper-slide"><Link activeClassName="active" to="/all">社会</Link></li>
                        <li className="swiper-slide"><Link activeClassName="active" to="/all">经济</Link> </li>
                        <li className="swiper-slide"><Link activeClassName="active" to="/all">科技</Link> </li>
                        <li className="swiper-slide"><Link activeClassName="active" to="/all">产品</Link> </li>
                        <li className="swiper-slide"><Link activeClassName="active" to="/all">其他</Link> </li>
                        <li className="swiper-slide"><Link activeClassName="active" to="/all">其他</Link> </li>
                        <li className="swiper-slide"><Link activeClassName="active" to="/all">其他</Link> </li>                       
                    </ul>
                    <span className="mask"></span>
                </nav>)
    }
}
