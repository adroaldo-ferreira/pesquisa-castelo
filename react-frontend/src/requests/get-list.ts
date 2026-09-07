import axios from "axios";
import type { EstatisticaDescritiva, EstatisticaNumerica } from "../types/api-requests";

const API_BASE_URL = "http://localhost:8080/api/respostas";

export async function getList(url: string): Promise<EstatisticaDescritiva[]> {
    const response = await axios.get<EstatisticaDescritiva[]>(`${API_BASE_URL}/${url}`);
    console.log("Response data:", response.data); // Log the response data for debugging
    return response.data;
}

export async function getNumericList(url: string): Promise<EstatisticaNumerica[]> {
    const response = await axios.get<EstatisticaNumerica[]>(`${API_BASE_URL}/${url}`);
    console.log("Response data:", response.data); // Log the response data for debugging
    return response.data;
}