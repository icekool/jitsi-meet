// @flow

import React, { Component } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import { connect } from '../../base/redux';
import type { Dispatch } from 'redux';
import { appNavigate } from '../../app';

/**
 * {@code BreakoutRooms}'s React {@code Component} prop types.
 */
type Props = {

    /**
     * Room name to join to.
     */
    _room: string,

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
                <ButtonGroup appearance = 'primary'>
                    {
                        BREAKOUT_ROOM_NAMES.map(roomName => (<Button
                            key = { roomName }
                            onClick = { this._onJoinBreakoutRoom(roomName) }>
                            {roomName}</Button>))
                    }
                </ButtonGroup>
            </div>);
    }

    /**
     * Returns breakout room names prepared from current room.

     * @returns {Array} - An array of breakout room names.
     */
    _createBreakoutRoomNames() {
        return [ 1, 2, 3 ].map(suffix => `${this.props._room}${suffix}`);
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

export default connect(_mapStateToProps, _mapDispatchToProps)(BreakoutRooms);
