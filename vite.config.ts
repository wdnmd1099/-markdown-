import vue from '@vitejs/plugin-vue'
import { md } from "./plugins/md";

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [vue(), md()],
};
