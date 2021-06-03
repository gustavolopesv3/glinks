import axios from 'axios'



const key = 'e6b5549eaae8114b7ec693b41034d7648af170c1'


export const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
}
})


