# canvas

#### drawImage

##### 作用： 把Img绘制到canvas上

> 在画布上定位图像：

```javascript
context.drawImage(img,x,y);
```

> 在画布上定位图像，并规定图像的宽度和高度： ✔️

```
context.drawImage(img,x,y,width,height);
```

> 剪切图像，并在画布上定位被剪切的部分：

```
context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
```

 **context ： document.createElement('canvas').getContext('2d')** 

| *img*     | 规定要使用的图像、画布或视频。               |
| --------- | -------------------------------------------- |
| *sx*      | 可选。开始剪切的 x 坐标位置。                |
| *sy*      | 可选。开始剪切的 y 坐标位置。                |
| *swidth*  | 可选。被剪切图像的宽度。                     |
| *sheight* | 可选。被剪切图像的高度。                     |
| *x*       | 在画布上放置图像的 x 坐标位置。              |
| *y*       | 在画布上放置图像的 y 坐标位置。              |
| *width*   | 可选。要使用的图像的宽度。（伸展或缩小图像） |
| *height*  | 可选。要使用的图像的高度。（伸展或缩小图像） |



#### getImageData 

##### 作用：getImageData() 方法返回 ImageData 对象，该对象拷贝了画布指定矩形的像素数据。就是把canvas的一部分转成Img

> 用法

```
var imgData=context.getImageData(x,y,width,height);
```

| 参数     | 描述                            |
| -------- | ------------------------------- |
| *x*      | 开始复制的左上角位置的 x 坐标。 |
| *y*      | 开始复制的左上角位置的 y 坐标。 |
| *width*  | 将要复制的矩形区域的宽度。      |
| *height* | 将要复制的矩形区域的高度。      |



#### putImageData

##### 作用： putImageData() 方法将图像数据（从指定的 ImageData 对象）放回画布上。

> 用法

```
context.putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight);
```

| 参数          | 描述                                                  |
| ------------- | ----------------------------------------------------- |
| *imgData*     | 规定要放回画布的 ImageData 对象。                     |
| *x*           | ImageData 对象左上角的 x 坐标，以像素计。             |
| *y*           | ImageData 对象左上角的 y 坐标，以像素计。             |
| *dirtyX*      | 可选。水平值（x），以像素计，在画布上放置图像的位置。 |
| *dirtyY*      | 可选。水平值（y），以像素计，在画布上放置图像的位置。 |
| *dirtyWidth*  | 可选。在画布上绘制图像所使用的宽度。                  |
| *dirtyHeight* | 可选。在画布上绘制图像所使用的高度。                  |