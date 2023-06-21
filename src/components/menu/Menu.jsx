import React, { Component } from 'react';
import { dataRoutes } from '../../data/routers';
import "./Menu.css";

export default class Menu extends Component {
    render() {
        const routeLi = dataRoutes
            .map(item =>
            (<li className='Menu-item'>
                <a href={item.url}>{item.label}</a>
            </li>))

        return (
            <ul className='Menu'>{routeLi}</ul>
        );
    }
}
