import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoadingState } from '../index';

const AuthLayout = ({children, authentication = true}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }
        setLoading(false);
    }, [authStatus, navigate, authentication])

    return loading ? <LoadingState /> : <>{children}</>
}

export default AuthLayout;