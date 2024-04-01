// 1. import area

import { Component } from "react";

// 2. class defination

export class BComp2 extends Component
{
    // 1. Properties/Variables
    fullname = 'Roman Reigns';
    // 2. Constructor

    // 3. Methods
    // Every Class Component must have render method
    render()
    {
        let n ='React';
        // Every function/method return something
        return <span>Hello {this.fullname}, How are you?</span>
    }
}


// 3. export area