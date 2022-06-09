import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { Loading } from 'carbon-components-react';

const HomePage = React.lazy(() => import('../Pages/HomePage'));

const Routers = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Suspense>
    );
}

export default Routers;
