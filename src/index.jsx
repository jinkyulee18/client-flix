import React from 'react'
import { createRoot } from 'react-dom/client';
import { MainView }  from './components/main-view/main-view'
import './index.scss';



import './index.scss'

export default class FlixApp extends React.Component {
    render() {
        return (
            
                <MainView />
            
        );
    }
};

const container = document.getElementsByClassName('app-container')[0];
const root = createRoot(container);

root.render(React.createElement(FlixApp));