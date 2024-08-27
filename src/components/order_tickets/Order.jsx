import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Order () {
    
    const navigation = useNavigate();

    useEffect(() => {
      navigation("/order/train");   
    }, []);

    return (
        <div className="order">
            <div className="order__aside_widget-container">

            </div>
            <div className="order__content-container">
                <Outlet />
            </div>
        </div>
    )
}