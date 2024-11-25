import axios from "axios";


const categories = {
    getData() {
        return axios({
            method: 'get',
            url: 'https://learning.sonthanh.net.vn/api/product-categories',
        });
    }
};

export default categories;