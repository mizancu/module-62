import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceID} = useParams();
    return (
        <div>
           <h2>Service detail: {serviceID}</h2> 
        </div>
    );
};

export default ServiceDetail;