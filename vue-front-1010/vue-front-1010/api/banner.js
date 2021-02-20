import request from '@/utils/request'

export default {  
    getBannerList() {    
        return request({      
            url: `/cms/bannerFront/getBanner`,      
            method: 'get'    
        })  
    }
}