import request from "@/utils/request"
export  function projectDetail(id){
    console.log("id",id)
    return request ({
        url:"glps/api/project/itemDetail?token=14",
        method:'get',
        params:{id:id}
    })
}
export function drawSubmit(projectId,imgUrls){
    return request ({
        url:"glps/api/design/uploadImg?token=14",
        method:'post',
        data:{
            projectId,
            imgUrls
        }
    })
}