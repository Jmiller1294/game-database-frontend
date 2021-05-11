import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
   
  const loggedIn = useSelector(state => state.user.loggedIn)
  
  
  return (
    <Route 
      {...rest} 
      render={props => {
        console.log(loggedIn)
        if(props && loggedIn === true) {
          console.log(props)
          return <Component {...props} />
        }
        else {
          console.log(props)
          return <Redirect to={
            {
              pathname: "/",
              state: {
                from: props.location
              }
            }
          }/>
        }
      }}
    />
  );
};

export default ProtectedRoute