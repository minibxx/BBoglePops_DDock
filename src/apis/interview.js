import axios from "axios";

const url = 'http://34.22.107.112:8000'

export const postMyJob = async (input_field, input_job) => {
    const response = await axios.post(`${url}/interview_questions/`, {
        input_field: input_field,
        input_job: input_job
    },{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`
    }
    })
    return response.data;
};

