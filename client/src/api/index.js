import axios from 'axios';

const url = 'https://attractions-around.herokuapp.com/attractions';

export const fetchAttractions = () => axios.get(url);