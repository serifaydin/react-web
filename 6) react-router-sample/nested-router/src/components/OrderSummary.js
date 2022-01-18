import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>OrderSummary Page</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    );
}

export default OrderSummary;