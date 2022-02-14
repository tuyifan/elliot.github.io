const axios = require('axios');
const cheerio = require('cheerio')
const iconv = require('iconv-lite')
const fs = require('fs')
// let url = 'https://github.com/ruanyf/webpack-demos'
let baseUrl = 'https://www.sbiquge.com'
let url = 'https://www.sbiquge.com/32_32878/'
async function getHtml() {
    const res = await axios({
        url: url,
        responseType: 'stream'
    })
    return new Promise(resolve => {
        const chunks = [];
        res.data.on('data', chunk => {
            chunks.push(chunk)
        })
        res.data.on('end', () =>{
            const buffer = Buffer.concat(chunks)
            const str = iconv.decode(buffer, 'gbk')
            resolve(str)
        })
    })
}
async function fetchData(url) {
    let html = await getHtml(url);
    let $ = cheerio.load(html, {decodeEntities: false})
    console.log($('dd a').find('a').length)
    let res = $('dd a');
    for(let i = 0; i < res.length; i++) {
        let result = res.eq(i)
        
        console.log(result.html())
        console.log(result.attr('href'))
    }
    // console.log($('dd a').attr('href'))
}


fetchData();