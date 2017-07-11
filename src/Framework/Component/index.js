/**
 * Created by apple on 2017/6/29.
 */

import React, { Component } from 'react';
import ReactNative from 'react-native';
import StyleSheetHelper from '../../Common/StyleSheet/index'
import Style from '../../Common/StyleSheet/style'
import Route from '.././route/router'


export default class BaseComponent extends Component {

    constructor(props){
        super(props);
        this.viewModel = {};
        //关联路由组件
        this.route = Route;
    }

    componentDidMount(){
        console.log( this.constructor.name + "已经加入展示界面" )
    }

    componentWillMount(newStyles){
        const styles = StyleSheetHelper.mergeStyleSheets(Style,newStyles);
        return styles;
    }

    render(){

    }

}
