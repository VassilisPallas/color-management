import {bindActionCreators} from 'redux';
import {deleteColor} from '../../actions/colors';
import {selectColor} from '../../actions/selectedColor';

export default dispatch => (bindActionCreators({deleteColor, selectColor}, dispatch));