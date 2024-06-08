import axios from "axios";
import { getCookie } from "../utils/cookieUtil";

const url = 'http://34.64.35.81:8000'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.headers.common['X-CSRFToken'] = getCookie("csrftoken");
console.log(getCookie("csrftoken"))

export const postMyJob = async (input_field, input_job) => {
  const response = await axios.post(`${url}/interview_questions/`, {
    input_field: input_field,
    input_job: input_job
  }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Authorization")}`
    }
  })
  return response.data;
};

export const postMyAnswer = async (formData) => {
  const response = await axios.post(`${url}/interview/voice/`, formData
    , {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
        'Content-Type': 'multipart/form-data',
      }
    })
  return response.data;
};

export const getMyAnalyze = async (userId, interviewId) => {
  const response = await axios.get(`${url}/mylog/${userId}/${interviewId}/scripts`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
        'Content-Type': 'multipart/form-data',
      }
    })
  return response.data;
}

export const postMyAnswerText = async (results, questionId = 0) => {
  const reqData = {}
  results.forEach((item, index) => {
    reqData[`script_${index + 1}`] = item;
  })
  const response = await axios.post(`${url}/interview/responses/${questionId}/`, reqData
    , {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
      }
    })
  return response.data;
};

export const postMyAnswerVideo = async (formData) => {
  const response = await axios.post(`${url}/eyetrack/upload/`, formData
    , {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
        'Content-Type': 'multipart/form-data',
      }
    })
  return response.data;
};

export const getEyeTrackingStart = async (userId, interviewId) => {
  const response = await axios.get(`${url}/eyetrack/start/${userId}/${interviewId}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
        'Content-Type': 'multipart/form-data',
      }
    })
  return response.data;
}