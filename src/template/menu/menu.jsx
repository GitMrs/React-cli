import React,{Component} from "react";
import "./menu.css"
export default class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            mask:"mask",
            menu:"menulist"
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    }
    show(){
        this.setState({
            mask:"mask mask-active",
            menu:"menulist menulist-active"
        })
    }
    hide(){
        this.setState({
            mask:"mask",
            menu:"menulist"
        })
    }
    render(){
        const mask = this.state.mask
        const menu = this.state.menu
        return (
            <div>
                <div onClick={this.hide} className={mask}></div>
                <div className={menu}>
                    <ul>
                        <li>11111</li>
                        <li>22222</li>
                        <li>323333</li>
                        <li>444444</li>                        
                    </ul>
                </div>
            </div>
        )
    }
}