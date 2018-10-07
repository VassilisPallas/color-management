import React, {Component} from 'react';
import {connect} from 'react-redux';

import state from './state';
import dispatch from './dispatch';

export class ColorList extends Component {

    /**
     * @constructor
     * @param {object} props - Component props.
     * @returns {undefined}
     */
    constructor(props) {
        super(props);

        this._deleteColor = this._deleteColor.bind(this);
        this._selectColor = this._selectColor.bind(this);
    }

    _selectColor(index) {
       this.props.selectColor(index);
    }

    /**
     * calls action creator to delete the selected color
     * @method
     * @param {number} index - color index
     * @returns null
     */
    _deleteColor(index) {
        this.props.deleteColor(index);
    }

    /**
     * Render the component
     * @method
     * @returns {JSX.Element} - Renders component
     */
    render() {
        let content;
        const {colors} = this.props;

        if (!colors.length) {
            content = (<span id="empty-colors-message">Add some colors on the list!</span>)
        } else {
            content = (
                <div id="colors">
                    <table className="table table-responsive-sm">
                        <thead className="thead-light">
                        <tr>
                            <th>View</th>
                            <th>Hex</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {colors.map((hex, index) => (
                            <tr key={index} className="color">
                                <td>
                                    <div className="view-div" style={{backgroundColor: hex}}/>
                                </td>
                                <td>{hex}</td>
                                <td>
                                    <button className="btn btn-success btn-space btn-sm edit-button"
                                            onClick={() => this._selectColor(index)}>Edit
                                    </button>
                                    <button className="btn btn-danger btn-space btn-sm delete-button"
                                            onClick={() => this._deleteColor(index)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
        }

        return (
            <div className="text-center color-list">
                {content}
            </div>
        )
    }
}

export default connect(state, dispatch)(ColorList);