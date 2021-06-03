import axios from 'axios'
import {BITLY_TOKEN} from '@env'


export const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${BITLY_TOKEN}`,
    'Content-Type': 'application/json'
}
})


