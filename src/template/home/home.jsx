import React,{Component} from "react";
import {Link} from "react-router"
import "./home.css"
export default class Home extends Component{
    constructor(props){
        super(props)
        this.change = this.change.bind(this)
        this.state = {
           index:0,
           flog:false
        }
    }
    change(index){
       return index === this.state.index ? "selected" : "select"
    }
    render(){
        const select = this.state.select
        return (
            <div>
             <section className="events">
                    <div className="title">
                        <h2>EVENTS</h2>
                        <b><img src="./img/back.jpg" /></b>
                    </div>
                    <nav>
                      <ul>
                        <li onClick={()=>{this.setState({index:0})}} className={this.change(0)} data-value="0" >事件形态</li>
                        <li onClick={()=>{this.setState({index:1})}} className={this.change(1)} data-value="1">传播渠道</li>                      
                      </ul>
                     {this.state.index==0 ? <div>1111</div> : <div>2222</div>}
                      <div className="show">
                            <p className="bottom">
                                <span>中国 贵州</span>
                                <time>2017-6-8 20:8</time>
                            </p>
                      </div>
                    </nav>
                    <div className="news">
                            <h6>吃大盘鸡</h6>
                            <p className="bottom">
                                <span>中国 贵州</span>
                                <time>2017-6-8 20:8</time>
                            </p>
                    </div>
                     <div className="news">
                            <h6>吃大盘鸡</h6>
                            <p className="bottom">
                                <span>中国 贵州</span>
                                <time>2017-6-8 20:8</time>
                            </p>
                    </div>
                </section>
                 <section className="NEWS">
                    <div className="title">
                        <h2>NEWS</h2>
                        
                    </div>
                    <div className="news">
                            <h6>吃大盘鸡</h6>
                            <p className="bottom">
                                <span>中国 贵州</span>
                                <time>2017-6-8 20:8</time>
                            </p>
                    </div>
                     <div className="news">
                            <h6>吃大盘鸡</h6>
                            <p className="bottom">
                                <span>中国 贵州</span>
                                <time>2017-6-8 20:8</time>
                            </p>
                    </div>
                </section>
                </div>
        )
    }
}