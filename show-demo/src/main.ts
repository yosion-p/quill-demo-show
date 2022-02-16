import './style.css'

// 引入
import Quill from 'quill';
import Counter from './counter';
Quill.register('modules/counter', Counter);

// 使用
var editor = new Quill('#editor', {
  modules: {
    toolbar: ['bold', 'italic'],
    counter: true,
    // 新增-一个添加删除线的快捷键
    keyboard: {
      bindings: {
        strike: {
          key: 'X',
          ctrlKey: true,
          shiftKey: true,
          handler: function (range, context) {
            // 获取当前光标所在文本的格式
            const format = this.quill.getFormat(range);
            // 增加/取消删除线
            this.quill.format('strike', !format.strike);
          }
        },
      },
    },
  },
  theme: 'snow',
});

