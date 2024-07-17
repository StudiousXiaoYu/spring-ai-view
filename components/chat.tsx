import React, { useEffect, useRef } from 'react';
import options from './options';

export default function ChatHome() {
  const wrapper = useRef<any>();
  useEffect(() => {
    const bot = new ChatSDK({
      root: wrapper.current,
      ...options,
    });

    bot.run();
  }, []);
  return <div style={{ height: '100%' }} ref={wrapper} />;
}