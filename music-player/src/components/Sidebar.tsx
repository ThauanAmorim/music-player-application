import React from 'react';

interface Props {
    text: string;
}

export const SideBar: React.FC<Props> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    ); 
}