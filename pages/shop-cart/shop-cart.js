//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    carts: [],               // 购物车列表
    hasList: false,          // 列表是否有数据
    totalPrice: 0,          // 总价，初始为0
    totalCount: 0            // 总数，初始为0
  },
  onShow() {
    this.setData({
      hasList: true,
      carts: [
        { id: 1, title: 'MERCY 独家定制V领微喇叭袖拼接黑色长袖丝绒连衣裙A字裙礼服女', image: '/image/chat/屏幕快照 2018-06-14 下午2.24.39.png', num: 4, price: 0.01, selected: true },
        { id: 2, title: 'MERCY 夏季新品原创欧美百搭AA版型高腰显瘦红格子百褶短裙半身裙', image: '/image/chat/屏幕快照 2018-06-14 下午2.24.44.png', num: 1, price: 0.03, selected: true },
        { id: 2, title: 'MERCY 独家自制 经典小黑裙赫本复古风泡泡袖一字领短款连衣裙A裙', image: '/image/chat/屏幕快照 2018-06-14 下午2.24.50.png', num: 1, price: 0.03, selected: true },
        { id: 2, title: 'MERCY2017春款新款欧美露背无袖背心裙黑色五角星连衣裙女夏A字裙', image: '/image/chat/屏幕快照 2018-06-14 下午2.24.55.png', num: 1, price: 0.03, selected: true },
        { id: 2, title: 'MERCY 独家定制复古吊带连衣裙夏性感露背交叉系带女夏A字裙短裙', image: '/image/chat/屏幕快照 2018-06-14 下午2.25.01.png', num: 1, price: 0.03, selected: true },
        { id: 2, title: 'MERCY 独家设计 千鸟格吊带胸衣欧美复古风黑白格纹绑带露脐背心', image: '/image/chat/屏幕快照 2018-06-14 下午2.25.07.png', num: 1, price: 0.03, selected: true }
      ]
    });
    this.getTotalPrice();
  },
  /**
 * 当前商品选中事件
 */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    });
    if (!carts.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice();
    }
  },
  /**
 * 绑定加数量事件
 */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                     // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2),
      totalCount: carts.length
    });
  }

})
