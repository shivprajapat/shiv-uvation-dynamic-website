
import axios from 'axios';
export const NEW_API_URL = 'https://cms.uvation.com/all-apis-new/?method';

/**
 * @param  {HomeData}
 */

export const HomeData = {
    fetchHomeData: () => {
        return axios.get(`${NEW_API_URL}=home_page&section_name=section1`);
    },
}
