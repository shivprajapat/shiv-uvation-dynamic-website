
import axios from 'axios';

/**
 * @param  {HomeData}
 */

export const HomeData = {
    fetchHomeData: async () => {
        return await axios.get(`${process.env.REACT_APP_API_END_POINT}home_page&section_name=section1`);
    },

}
