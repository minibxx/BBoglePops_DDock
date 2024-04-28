import axios from "axios";

const url = 'naver.com'

export const postMyJob = async (input_field, input_job) => {
    // const response = await axios.post(`${url}/api/chatgpt`, {
    //     input_field: input_field,
    //     input_job: input_job
    // })
    // return response.data;
    return {
        "id": "chatcmpl-9IfKhP7YQGo7aWFAzow66eTb5Wt6x",
        "object": "chat.completion",
        "created": 1714235815,
        "model": "gpt-3.5-turbo-0125",
        "choices": [
          {
            "index": 0,
            "message": {
              "role": "assistant",
              "content": "1. 웹 개발 경험이 어디까지인가요?\n2. 웹 표준과 웹 접근성에 대해 어떤 이해를 가지고 계신가요?\n3. HTML5, CSS3, JavaScript 등의 기술에 익숙한가요? 어떤 프레임워크나 라이브러리를 주로 사용하시나요?\n4. 크로스 브라우징에 대한 고려사항을 알고 계신가요?\n5. 반응형 웹 디자인에 대한 이해도가 어느 정도인가요? 어떤 방식으로 구현하시나요?\n6. 웹 최적화 및 성능 향상을 위해 어떤 기법을 사용하시나요?\n7. 웹 보안에 대한 이해와 관련된 경험은 어떤 것이 있나요?\n8. 디자이너와의 협업 경험이 있으신가요? 어떻게 소통하고 협업하시는지 설명해주세요.\n9. 프로젝트 관리 및 버전 관리 도구를 사용한 경험이 있으신가요? 어떤 도구를 주로 사용하시나요?\n10. 새로운 기술 및 트렌드를 습득하고 적용하는 능력에 대해 어떤 자신감을 가지고 계신가요?"
            },
            "logprobs": null,
            "finish_reason": "stop"
          }
        ],
        "usage": {
          "prompt_tokens": 53,
          "completion_tokens": 407,
          "total_tokens": 460
        },
        "system_fingerprint": "fp_3b956da36b"
      }
};

