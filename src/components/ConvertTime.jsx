import React from 'react';

const ConvertTime = ({ timestamp }) => {
    const date = new Date(timestamp);
    const formattedTime = date.toLocaleString();

    return (
        <div>
            {formattedTime}
        </div>
    );
};

export default ConvertTime;
