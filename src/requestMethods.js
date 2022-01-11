import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGQ5M2MxMTIyNTBlNzgzNzA5NTIwYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTkxMTI1NywiZXhwIjoxNjQyMTcwNDU3fQ.chacWZo0nwwiSb7ZEwmGKuqqmKmArgqLY7mB_Uxqnzg";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    },
});