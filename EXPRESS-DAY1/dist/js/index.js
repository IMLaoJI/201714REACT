// $.ajax({
//     url: 'http://localhost:1234/getAllList',
//     method: 'GET',
//     dataType: 'json',
//     cache: false,
//     success: result => {
//         console.log(result);
//     }
// });

/*
 * 页面地址：http://localhost:63342/...
 * 接口地址：http://localhost:1234/...
 * [ 跨域 ]
 *
 * 使用AJAX调取，会报错（AJAX不能直接进行跨域请求）
 * Failed to load http://localhost:1234/getAllList?_=1520051826723: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:63342' is therefore not allowed access.
 */

/*
 * 在跨域的环境下，客户端如何获取服务器端API接口地址返回的数据 “跨域处理”
 *
 * 1、JSONP
 * > 通过JSONP这种方式获取的数据一般都是JSON格式的
 *
 * 原理：利用SCRIPT不存在域的限制完成的（IMG/LINK/IFRAME/VIDEO/AUDIO...这些标签也不存在域的限制）-> '不管当前自己的页面是在哪个域下，我们可以把任何一个域下的文件获取到使用'
 *
 * 操作步骤：
 *   1)把需要请求的API地址，赋值给一个SCRIPT标签的SRC，当浏览器加载这个SCRIPT标签的时候，就会向对应的服务发送请求，把需要的数据获取到（目前存储在浏览器中）
 *
 *   2)我们还需要在JS代码中，把获取的数据也得到，此时需要客户端和服务器端都做一下处理
 *    ->客户端在发送请求的时候，通过问号传递参数的方式，把当前页面中的某一个函数发送给服务器
 *    <script>
        function fn() {}
      </script>
      <script src="http://localhost:1234/getAllList?callback=fn"></script>
      函数名自己起的，属性名也不一定是callback，也是自己起的（需要和后台协商好，一般都叫做callback）

      ->服务器端接受客户端传递的函数，准备数据，最后返回 `函数名(数据)` 这样的字符串给客户端即可
      let {callback} = query;
      ...
      let data = JSON.stringify({
            code: 0,
            msg: 'success'
      });
      res.end(`${callback}(${data})`);

      ->客户端获取到 '函数名(数据) =>fn({code:0...})' 这样的字符串，这是一个函数执行的操作，浏览器把这个函数执行，传递的数据其实就是我们需要从服务器端获取的数据
 *
 *
 *
 * =======================
 *
 * JSONP特点：
 * 1、可以实现跨域传输
 * 2、需要服务器端做特殊的支持(把数据拼接成 "函数(数据)" 这种模式返回)
 * 3、客户端传递函数的那个属性名，一般叫做callback，但是这个可以改，和服务器协商好即可
 * 4、JSONP都是GET请求（大小/安全/缓存等问题） =>SCRIPT的SRC本身就是GET请求，JSONP中没有POST请求
 * ...
 *
 * 目前很多项目都采用CORS(跨域资源共享)模式来代替JSONP
 */
//=>JQ中的JSONP请求 （在原有AJAX基础上，把dataType设置为JSONP即可）
/*$.ajax({
    url: 'http://localhost:1234/getAllList',
    method: 'GET',
    dataType: 'jsonp',
    success: result => {
        console.log(result);
    }
});*/

//=>http://localhost:1234/getAllList?callback=jQuery1113022343902015954642_1520054169117&_=1520054169118  属性名是常用的callback，函数名是JQ随机生成的一个

/*function fn(result) {
    console.log(result);
}//=>这样写法代替SUCCESS
$.ajax({
    url: 'http://localhost:1234/getAllList',
    method: 'GET',
    dataType: 'jsonp',
    jsonpCallback: 'fn',//=>修改随机函数名
    // jsonp: 'cb'//=>修改callback为cb
});*/

$.ajax({
    url: 'http://localhost:666/add',
    method: 'POST',
    data: {
        data: {
            lx: 1
        }
    }
});



