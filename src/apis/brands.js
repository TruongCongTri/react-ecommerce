import axios from "axios";


const brands = {
    getData() {
        return axios({
            method: 'get',
            url: 'https://learning.sonthanh.net.vn/api/brands',
        });
    }
};

export default brands;