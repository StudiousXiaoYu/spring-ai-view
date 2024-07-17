import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
     inject: 'body',
    scriptLoading: 'blocking',
    template: './public/index.html',
  },
  // output: {
  //   externals: {
  //     "react": "React",
  //     "react-dom": "ReactDOM",
  //     "react-dom/client": "ReactDOM",
  //     "ChatUI": "ChatSDK",
  //     "chatui/core": "ChatSDK",
  //     "@ali/chatui-sdk": "ChatSDK"
  //   }
  // },
  plugins: [pluginReact()],
  dev: {
    client: {
      port: '',
    },
  }
});
