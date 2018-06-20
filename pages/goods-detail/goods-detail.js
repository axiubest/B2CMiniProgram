// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_swiper: ['../../image/goods-detail/TB2KJ7mrGmWBuNjy1XaXXXCbXXa_!!1605905120.jpg', 
                   '../../image/goods-detail/TB2QDxrgfiSBuNkSnhJXXbDcpXa_!!1605905120.jpg',
                   '../../image/goods-detail/TB2xZ1Vd79WBuNjSspeXXaz5VXa_!!1605905120.jpg',
                   '../../image/goods-detail/TB24IKJrMmTBuNjy1XbXXaMrVXa_!!1605905120.jpg',
                   '../../image/goods-detail/TB2PfhgbGagSKJjy0FhXXcrbFXa_!!195434695.png' 
    ],
    img_item: [ '../../image/goods-detail/model1/53434.png',
                '../../image/goods-detail/model1/112312.png',
                '../../image/goods-detail/model1/564756.png',
                '../../image/goods-detail/model1/1232131.png',
                '../../image/goods-detail/model1/3423424.png',
                '../../image/goods-detail/model1/3423424.png',
                '../../image/goods-detail/model1/3423424.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.13.42.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.15.05.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.12.56.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.12.56.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.14.32.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.11.38.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.12.02.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.12.12.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.12.30.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.12.39.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.12.48.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.13.06.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.13.13.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.13.25.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.13.33.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.13.49.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.13.56.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.14.22.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.14.50.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.14.58.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.15.15.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.15.25.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.16.08.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.14.40.png',
                '../../image/goods-detail/model1/屏幕快照 2018-06-14 下午3.12.19.png'
               
              ],

    you_like_item: [
              '../../image/may_you_like0.png',
              '../../image/may_you_like1.png',
              '../../image/may_you_like2.png',
              '../../image/may_you_like3.png',
              '../../image/may_you_like4.png',
              '../../image/may_you_like5.png'
    ],
    clothes_size:['X','XL','S','XXL','M'],
    clothes_type: [true, false, false, false,false],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  //图片点击事件
  imgYu: function (e) {
    var that = this,
       //获取当前图片的下表
    index = e.currentTarget.dataset.index
    console.log(index),
    //图片预览
    wx.previewImage({
      current: this.data.goods_swiper[index],
      urls: this.data.goods_swiper // 需要预览的图片http链接列表
    })
  },


  choseTxtColor: function(e) {
    
    var id = e.currentTarget.id;  //获取自定义的ID值 
    var tmpArr = [false, false, false, false, false];

    
    for (var i = 0; i < this.data.clothes_size.length;i++) {
      
      if (this.data.clothes_size[i] == id) {
        for (var j = 0; j < this.data.clothes_type.length; j++) {
          if (i == j) {
            tmpArr[i] = true;
            this.setData({
              clothes_type: tmpArr,
            })
            return;
          }
        }
      }
    }
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})