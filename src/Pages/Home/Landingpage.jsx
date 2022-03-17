import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { landingPageDataStart } from '../../redux/action/index';

export function Landingpage() {
    const { landingData } = useSelector((state) => state.landingPageReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(landingPageDataStart())
    }, [dispatch])

    return (
        <div>
            <h1>{landingData.banner_heading}</h1>
        </div>
    )
}
