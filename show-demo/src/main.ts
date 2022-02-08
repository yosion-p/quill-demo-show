import './style.css'

// 引入
import Quill from 'quill';

// 使用
// const quill = new Quill('#editor');

var editor = new Quill('#editor', {
  modules: {
      toolbar: ['bold', 'italic']
  },
  theme: 'snow',
});

// const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
