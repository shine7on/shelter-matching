import axios from 'axios';
import type { Dog } from "../../types/dog.ts";

export async function fetchDogs(): Promise<Dog[]> {
    const response = await axios.get<Dog[]>("http://localhost:3000/api/v1/dogs");
    return response.data;
};