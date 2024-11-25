import axios from "axios";


const products = {
    getData() {
        return axios({
            method: 'get',
            url: 'https://learning.sonthanh.net.vn/api/products',
        });
    }
};

export default products;