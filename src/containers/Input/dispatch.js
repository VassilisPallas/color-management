import {bindActionCreators} from 'redux';
import {editColor,addColor} from '../../actions/colors';

export default dispatch => (bindActionCreators({editColor,addColor}, dispatch));