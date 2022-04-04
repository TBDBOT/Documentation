import React from 'react'; 

export default function ColoredLine({ color, height }) {
    return (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: parseInt(height),
                border: 'none'
            }}
        />
    );
}