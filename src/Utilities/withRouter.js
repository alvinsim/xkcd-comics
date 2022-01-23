import { useNavigate } from 'react-router-dom';
import React from 'react';

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();
        return (
            <Component
                history={history}
                {...props}
            />
        );
    };
    return Wrapper;
};
