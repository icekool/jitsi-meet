// @flow

import React, { Component } from 'react';
import { connect } from '../../base/redux';
import type { Dispatch } from 'redux';
import { appNavigate } from '../../app';
import Item from '@atlaskit/dropdown-menu/dist/cjs/components/item/DropdownItem';

/**
 * {@code Room}'s React {@code Component} prop types.
 */
type Props = {

    /**
     * The Redux dispatch Function.
     */
    roomName: String,

    /**
     * The Redux dispatch Function.
     */
    dispatch: Dispatch<any>,

    /**
     * Function the returns action to navigate to new roomUrl
     */
    _appNavigate: Function
};

/**
 * Responsible room layout
 */
export class Room extends Component<Props> {
    /**
     * Renders a room layout.
     *
     * @returns {void}
     * @type {Function}
     */
    render() {

        return (
            <span
                className = 'roomItem'>
                <Item
                    onClick = { this._onJoinBreakoutRoom(this.props.roomName) }>
                    <p>{this.props.roomName}</p>
                </Item>
            </span>
        );
    }

    /**
     * Join a breakout room.

     * @param {string} roomName - The room name to join.
     * @returns {Function} - An anonymous function that navigates to new room.
     */
    _onJoinBreakoutRoom(roomName) {
        return () => {
            this.props._appNavigate(roomName);
        };
    }

}

/**
 * Maps dispatching of some action to React component props.
 *
 * @param {Function} dispatch - Redux action dispatcher.
 * @private
 * @returns {{
 *     _appNavigate: Function
 * }}
 */
function _mapDispatchToProps(dispatch) {
    return {
        _appNavigate: payload => dispatch(appNavigate(payload))
    };
}

export default connect(null, _mapDispatchToProps)(Room);
