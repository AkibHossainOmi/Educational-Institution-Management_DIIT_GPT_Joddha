import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useAuth();

    if (!user) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Redirect if the user's role is not allowed
        return <Navigate to="/" />;
    }

    // Allow access if authenticated and role matches
    return children;
};

export default ProtectedRoute;
