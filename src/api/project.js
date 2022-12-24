import request from "@/utils/request"

export default function projectList(){
    return request({
        url:'glps/api/project/itemList?token=14',
        method:'get',

    })
}
