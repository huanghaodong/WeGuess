/**
 * Created by apple on 2017/6/7.
 */

/**
 * 所有 component 整个框架内只有此处引入
 * navigator 统一进行路由显示
 * 将全部 component 的引用从老式的层级式改为统一入口的扁平式
 */
/*
 * 路由配置项
 * 可配置默认参数 props: params
 */
import Login from './Login/page/login'
import MainTabbar from './MainTabbar/page/mainTabbar'
import AudioExample from './Recode/page/index'
import Xmpp from './Xmpp/page/index'
import XmppMain from './Xmpp/page/xmpp'
import TestRefresh from './testRefresh'
import Socket from './socket'


export const MainPage = {
    key:'TestRefresh',
    routeId:'TestRefresh'
}


export const InitialRoute = {
    key:'Login',
    routeId:'Login'
}

export const RouteMap = {
    'Root': {
        'Root':{component:MainTabbar,params:{}}
    },
    'MainTabbar':{
        'TabOne':{component: AudioExample, params: {}},
        'TabTwo':{component: Xmpp, params: {}}
    },
    'Xmpp':{
       'Xmpp':{component:XmppMain,params:{}},
       'Login':{component: Login, params: {}},
        'TestRefresh':{component: TestRefresh, params: {}}
    },
    'Socket':{
        'Socket':{component: Socket, params: {}}
    },
    'Login':{
        'Login':{component: Login, params: {}}
    },
    'TestRefresh':{
        'TestRefresh':{component: TestRefresh, params: {}}
    }


};


// 'module/login': {component: Login, params: {}},
// 'module/maintabbar':{component:MainTabbar,params:{}},
// 'module/recode': {component: AudioExample, params: {}},
// 'module/xmpp': {component: Xmpp, params: {}},