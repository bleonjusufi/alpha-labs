// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   // Check if user is authenticated (You may replace this with your authentication logic)
//   const isAuthenticated = !!localStorage.getItem('authToken');

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Element /> : <Navigate to="/admin-login" replace />}
//     />
//   );
// };

// export default ProtectedRoute;
