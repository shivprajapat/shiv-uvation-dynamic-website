import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { historyPageDataStart } from '../redux/action';
import { Landingpage } from './Home/Landingpage';

const HomePage = () => {
  const { landingData } = useSelector((state) => state.landingPageReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(historyPageDataStart())
  }, [dispatch])


  return (
    <div>
      <Landingpage landingData={landingData} />
    </div>
  )
}

export default HomePage
