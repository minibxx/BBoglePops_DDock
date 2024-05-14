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

export const postMyAnswer = async (formData, questionId = 0) => {
    console.log(formData.keys)
    console.log(formData.values)
    const response = await axios.post(`${url}/interview/responses/${questionId}/`, formData
    ,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
        'Content-Type': 'multipart/form-data',
    }
    })
    return response.data;
};