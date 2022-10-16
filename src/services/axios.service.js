import axios from "axios";

import {baseURL} from "../configs";
import bearer_token from "../configs/bearer_token";

const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer ' + bearer_token
    }
});

export {axiosService};
