
import Mock from 'mockjs'
import { resolve, reject } from '_any-promise@1.3.0@any-promise';

var Random = Mock.Random;
var kk = '失败'

function homeImg() {
    var list = [];
    list.push(
        {
            id: Random.guid(),
            img: require('../../assets/imgs/app-home-image/banner-home-1.png')
        }
    )
    list.push(
        {
            id: Random.guid(),
            img: require('../../assets/imgs/app-home-image/banner-home-2.png')
        }
    )
    list.push(
        {
            id: Random.guid(),
            img: require('../../assets/imgs/app-home-image/banner-home-3.png')
        }
    )

    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(list);
        }, 1000);
        // reject(kk)
    }).catch(function (reason) {
        // 有选择性的在此处抛出错误或不抛出
        // console.log('catch:', reason);
    });
    return promise;
}

export default {
    homeImg
}