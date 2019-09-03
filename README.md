# react-crop

#### 基于react的图像剪裁

> 技术栈

- React ^16.9.0
- Antd ^3.22.2
- Scss

> 目录结构

├── README.md
├── README.old.md
├── canvas.md                               所用到的vanvas命令
├── config                                  项目启动配置
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── droparea_dom层参考.png   
├── package-lock.json
├── package.json
├── public          
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── scripts         命令脚本
│   ├── build.js
│   ├── start.js
│   └── test.js
└── src
​    ├── App.jsx
​    ├── App.scss
​    ├── App.test.js
​    ├── components                          组件文件夹
​    │   └── imgcrop
​    │       ├── Imgcrop.jsx
​    │       ├── Imgcrop.scss
​    │       ├── cut                         剪裁框
​    │       │   ├── Cut.jsx
​    │       │   └── Cut.scss
​    │       ├── droparea                    剪裁区域
​    │       │   ├── Droparea.jsx
​    │       │   └── Droparea.scss
​    │       ├── option                      选项信息
​    │       │   ├── Option.jsx
​    │       │   └── Option.scss
​    │       └── result                      右侧的实时剪裁结果
​    │           ├── Result.jsx
​    │           └── Result.scss
​    ├── index.css
​    ├── index.js                            入口文件
​    ├── logo.svg
​    ├── page
​    │   └── imgcrop                         图片剪裁页面组件 父组件
​    │       ├── index.jsx
​    │       ├── index.scss
​    │       └── index.test.js
​    └── serviceWorker.js
