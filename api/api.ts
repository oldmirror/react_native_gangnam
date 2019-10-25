import axios from 'axios';

const API_HOST = 'https://reqres.in/api/users';

const getUserInfoList = ({page}) =>
    axios.get(API_HOST, {
        params: {
            page,
            per_page: 3
        }});

export default {
    getUserInfoList
};
