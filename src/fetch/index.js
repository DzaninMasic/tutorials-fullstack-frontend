import axios from 'axios';

const baseLink = 'http://localhost:8000'

const fetchData = async(method, url, data) => {
    try{
        const response = await axios({
            method,
            url: `${baseLink}${url}`,
            data
          });
    
        return response.data
    }catch(e){
        return undefined
    }
}

export default fetchData;