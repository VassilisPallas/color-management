import React from 'react';

import ColorList from '../../containers/ColorList';
import Input from '../../containers/Input';

export const App = () => {
    return (
        <div className="container">
            <Input/>
            <ColorList/>
        </div>
    )
};