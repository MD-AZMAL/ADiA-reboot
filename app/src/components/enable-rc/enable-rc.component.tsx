import React from 'react'
import { Button } from 'rsuite';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsConnected } from '../../redux/fc/fc.selectors';

const EnableRC = ({isConnected} :any) => {
    return (
        <Button appearance='primary' disabled={!isConnected} >Enable RC</Button>
    )
}

const mapStateToProps = createStructuredSelector({
    isConnected: selectIsConnected
});

export default connect(mapStateToProps)(EnableRC);
