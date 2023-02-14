import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTU2NDhhODk3MTllODdlNGVlY2ExMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjMyNjE4NywiZXhwIjoxNjc2NTg1Mzg3fQ.ad-Z4Y3vjevbjw-5Kfm42UO7Oe6Qw7_Zp47yc3LMBfo";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const UserRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer${TOKEN} `}
});
