const cl = console.log;


// api url

const BASE_URL = `https://api.themoviedb.org/3`;
const IMG_URL = `https://image.tmdb.org/t/p/`;
const API_KEY = `72df7708b0060d308acb2be6b8dc5db4`;
const TRENDING_URL = `${BASE_URL}/trending/all/week?api_key=${API_KEY}`;


const makeAPIcall = async (apiUrl , methodName , msgbody) => {
    msgbody = msgbody ? JSON.stringify(msgbody) : null
    let res = await fetch(apiUrl ,{
        method : methodName,
        body : msgbody
    })
    return res.json()
}

