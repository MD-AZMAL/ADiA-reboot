import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTestValue } from '../redux/test/test.selectors';


const TestDisplay = (props) => {
    console.log(props);
    
    return (
        <div>
            Value is {props.value}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    value: selectTestValue 
});

// const mapStateToProps = state => ({
//     value: state.test.value
// })

export default connect(mapStateToProps,null)(TestDisplay);
