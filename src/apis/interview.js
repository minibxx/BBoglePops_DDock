import axios from "axios";

const url = 'http://34.22.107.112:8000'

export const postMyJob = async (input_field, input_job) => {
    const response = await axios.post(`${url}/api/chatgpt`, {
        input_field: input_field,
        input_job: input_job
    })
    return response.data;
};

