const messages = [
  {
    code: 'system',
    data: {
      text: '小雨智能对话机器人为您服务',
    },
  },
  {
    code: 'knowledge',
    data: {
      text: '我是小雨智能客服机器人',
    },
    meta: {
      evaluable: true,
    },
  },
];

export default {
  config: {
    messages: messages,
    avatarWhiteList: ['all'],
    robot: {
      avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg',
    },
    feedback: {
      // 点赞后出的文本
      textOfGood: '感谢您的评价，我们会继续努力的哦！',
      // 点踩后出的文本
      textOfBad: '',
      // 点踩后是否显示反馈表单
      needFeedback: true,
      // 不满意原因列表
      options: [
        {
          // 选项值
          value: '我没有得到我想要的答案',
          // 选项显示文本，当与 value 相同时可省略
          label: '我没有得到我想要的答案',
        },
        {
          value: '界面太难用了',
        },
        {
          value: '我不认可这个规则',
        },
      ],
      // 原因是否必选
      isReasonRequired: true,
      modalable: true,
      // 提交反馈后出的文本
      textAfterSubmit: '',
    },
  },
  requests: {
    // send(msg) {
    //   console.log('msg:', msg);
    //   return {
    //     code: 'text',
    //     data: {
    //       text: `好的, ${msg.data.text}`,
    //     },
    //   };
    // },
    send: function send(msg) {
      let sessionId = 'M9u913BFyxIuTdRv7O73nx9SfkWgerhk';

      return {
        url: 'https://9uhzdu3h-7oisghme-nxvskn0rc919.c1.mcprev.cn/ai',
        data: {
          userInput: msg.content.text,
          // sessionId: sessionId,
        },
        method: 'POST'
      };
    }
  }
};