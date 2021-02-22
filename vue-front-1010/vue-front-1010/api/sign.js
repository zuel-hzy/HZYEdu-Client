import request from '@/utils/request'

export default {  
    login(info) {    
        return request({      
            url: `/account/user-account/login`,      
            method: 'post',
            data:info
        })  
    },
    register(info) {    
        return request({      
            url: `/account/user-account/register`,      
            method: 'post',
            data:info
        })  
    },
    getInfo() {    
        return request({      
            url: `/account/user-account/getUserInfo`,      
            method: 'get'
        })  
    }
}