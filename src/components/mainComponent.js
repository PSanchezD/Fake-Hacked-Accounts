import { Component } from "react"
import Test from './axios'

class Main extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <>
                <div>
                    <Test/>
                </div>
            </>
        )
    }

}
export default Main