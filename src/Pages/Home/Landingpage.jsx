import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { landingPageDataStart } from '../../redux/actions';
import { Grid, Row } from 'carbon-components-react';
import { H1 } from '../../ui'
export function Landingpage() {
    const { landingData } = useSelector((state) => state.landingPageReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(landingPageDataStart())
    }, [dispatch])
    console.log(landingData);
    return (
        <section>
            <Grid fullWidth className='homepage' condensed>
                <Row
                    className='landing_div'
                    style={{
                        backgroundImage: `url(${landingData && landingData.banner_image})`,
                    }}
                >
                    <H1 className={`h1`} style={{ color: "red" }}>{landingData.banner_heading}</H1>
                </Row>
            </Grid>
        </section>
    )
}
