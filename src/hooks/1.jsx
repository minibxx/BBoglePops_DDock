
const onDrop = (files)=>{

     let formData = new FormData;
    const config={

         header:{'content-type' : 'multipart/form-data'}
    }
    formData.append("file", files[0])

//위 내용들이 있어야, axios.post 할 때 오류가 생기지 않는다.


Axios.post('/api/video/uploadfiles', formData, config)
   .then(response=>{
         if(response.data.success){
         }else{
             alert('비디오 업로드를 실패했습니다.')
         }

    })

}

