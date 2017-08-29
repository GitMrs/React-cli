import React,{Component} from "react";
import Nav from "../nav/nav.jsx";
import Home from "../home/home.jsx";
import Menu from "../menu/menu.jsx"
import List from "../list/list.jsx"
export default class Header extends Component{
    constructor(props){
        super(props)
        this.show = this.show.bind(this)
    }
    show(){
        this.refs.menu.show()
    }
    render(){
        return (
             <div className="wrap">
                 <Menu ref="menu" />
                <header>
                <i onClick={this.show}><img src="./img/首页_r3_c1.jpg" /></i>
                <label><img src="./img/首页_r1_c3.jpg" /></label>
                <b><img src="./img/首页_r2_c5.jpg" /></b>
                </header>
                <main>
                <Nav />
                   {this.props.children}
                </main>
            </div>
             
        )
    }
}