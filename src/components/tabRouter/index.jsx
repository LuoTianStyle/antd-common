import RouterContext from '@/context/RouterContext';
import React from 'react';
const TabRouter = (Component) => {
    return (props) => {
        return (
            <RouterContext.Consumer>
                {(context) => <Component {...props} remove={context.remove} />}
            </RouterContext.Consumer>
        );
    };
};
export default TabRouter;
