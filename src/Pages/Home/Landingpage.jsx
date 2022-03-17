import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { landingPageDataStart } from '../../redux/action/index';
import { Grid, Row } from 'carbon-components-react';
export function Landingpage() {
    const { landingData } = useSelector((state) => state.landingPageReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(landingPageDataStart())
    }, [dispatch])

    return (
        <section>
            <Grid fullWidth className='homepage' condensed>

                <Row
                    className='landing_div'
                    style={{
                        backgroundImage: `url(${landingData && landingData.banner_image})`,
                    }}
                >
                </Row>
            </Grid>
        </section>
    )
}
