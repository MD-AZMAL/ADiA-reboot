import React, {useEffect} from 'react'
import { Container } from 'rsuite'
import { connect } from 'react-redux';

import GcsSidebar from '../../components/gcs-sidebar/gcs-sidebar.component';
import GcsHeader from '../../components/gcs-header/gcs-header.component';
import GcsCommandCenter from '../../components/gcs-command-center/gcs-command-center.component';
import { createFlightController, createFlightControllerProperty } from '../../redux/fc/fc.actions';


const GcsPage = ({createFlightController, createFlightControllerProperty} :any) => {

    useEffect(() => {
        createFlightController();
        createFlightControllerProperty();
    },[]);

    return (
        <Container>
            <GcsSidebar />
            <Container >
                <GcsHeader />
                <GcsCommandCenter />
            </Container>
        </Container>
    )
};

const mapDispatchToProps = (dispatch: any) => ({
    createFlightController: () => dispatch(createFlightController()),
    createFlightControllerProperty: () => dispatch(createFlightControllerProperty()),
});

export default connect(null,mapDispatchToProps)(GcsPage);
