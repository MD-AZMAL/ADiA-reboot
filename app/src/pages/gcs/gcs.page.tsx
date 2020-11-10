import React from 'react'
import { Container } from 'rsuite'

import GcsSidebar from '../../components/gcs-sidebar/gcs-sidebar.component';
import GcsHeader from '../../components/gcs-header/gcs-header.component';
import GcsCommandCenter from '../../components/gcs-command-center/gcs-command-center.component';


const GcsPage = () => {
    return (
        <Container>
            <GcsSidebar />
            <Container >
                <GcsHeader />
                <GcsCommandCenter />
            </Container>
        </Container>
    )
}

export default GcsPage
