import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
     inject: 'body',
    scriptLoading: 'blocking',
    template: './index.html',
  },
  output: {
    externals: {
      "react": "React",
      "react-dom": "ReactDOM",
      "react-dom/client": "ReactDOM",
      "ChatUI": "ChatSDK",
      "chatui/core": "ChatSDK",
      "@ali/chatui-sdk": "ChatSDK"
    },
    // assetPrefix: 'file:///D:/dist/',
  },
  plugins: [pluginReact()],
  dev: {
    client: {
      port: '',
    },
  }
});
