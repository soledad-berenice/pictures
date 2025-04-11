import axios from "axios";

const searchImagenes = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=z52jHjWpwcozRLNPq19sPyJJEkjrjnLfefU2fPDMMG8'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImagenes