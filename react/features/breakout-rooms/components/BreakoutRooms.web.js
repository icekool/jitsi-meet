// @flow

import React, { Component } from 'react';
import { connect } from '../../base/redux';
import Room from './Room';

/**
 * {@code BreakoutRooms}'s React {@code Component} prop types.
 */
type Props = {

    /**
     * Room name to join to.
     */
    _room: string,

    /**
     * Function the returns action to navigate to new roomUrl
     */
    _appNavigate: Function
};

/**
 * Responsible for showing all breakout rooms of a joined room
 */
export class BreakoutRooms extends Component<Props> {


    /**
     * Renders all breakout rooms of joined room.
     *
     * @returns {void}
     * @type {Function}
     */
    render() {
        const BREAKOUT_ROOM_NAMES = this._createBreakoutRoomNames();

        return (
            <div id = 'breakout_room_space'>
                {
                    BREAKOUT_ROOM_NAMES.map(roomName => (<Room
                        key = { roomName }
                        roomName = { roomName } />))
                }
            </div>);
    }

    /**
     * Returns breakout room names prepared from current room.

     * @returns {Array} - An array of breakout room names.
     */
    _createBreakoutRoomNames() {
        return [ 1, 2, 3 ].map(suffix => `${this.props._room}${suffix}`);
    }

}

/**
 * Maps (parts of) the redux state to the React {@code Component} props of
 * {@code BreakoutRooms}.
 *
 * @param {Object} state - The redux state.
 * @protected
 * @returns {{
 *     _room: string
 * }}
 */
function _mapStateToProps(state) {
    return {
        _room: state['features/base/conference'].room
    };
}

export default connect(_mapStateToProps)(BreakoutRooms);
