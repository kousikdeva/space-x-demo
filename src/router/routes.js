import Layout from "../slides/Layout";
import Home from "../slides/Home";
import History from "../slides/History";
import Launches from "../slides/Launches";
import Rockets from "../slides/Rockets";
import LaunchersMoreInfo from "../slides/LaunchersMoreInfo";
import HistoryMoreInfo from "../slides/HistoryMoreInfo";
import RocketsMoreInfo from "../slides/RocketsMoreInfo";

export default [
    {
        path:'/',
        component:Layout,
        children:[
            {
                path:'',
                component:Home
            },
            {
                path:'history',
                component:History
            },
            {
                path:'history/:id',
                component:HistoryMoreInfo
            },
            {
                path:'launches',
                component:Launches
            },
            {
                path:'launches/:id',
                component:LaunchersMoreInfo
            },
            {
                path:'rockets',
                component:Rockets
            },
            {
                path:'rockets/:id',
                component:RocketsMoreInfo
            },
        ]
    }
]