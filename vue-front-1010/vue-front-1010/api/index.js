import request from '@/utils/request'

export default {  
    getIndexList() {    
        return request({      
            url: `/edu/index/getIndex`,      
            method: 'get'    
        })  
    }
}