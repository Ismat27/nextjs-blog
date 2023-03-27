const axios = require('axios')

const fetchPosts = async () => {
    try {
        const response = await axios.get('https://node-express-post-api.onrender.com/api/posts')
        const data = response.data
        console.log(data);
    } catch (error) {
        console.log('error');
    }
}

fetchPosts()
