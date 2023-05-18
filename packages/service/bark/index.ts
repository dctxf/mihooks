
/**
 * 详细文档请查看
 * @see https://bark.day.app/#/tutorial?id=%e8%af%b7%e6%b1%82%e6%96%b9%e5%bc%8f
 */
export type MessageData = {
  apiUrl?: string
  // 推送标题
  title?: string
  // 推送内容
  body?: string
  // 推送中断级别。
  level?: string
  //  默认值，系统会立即亮屏显示通知
  active?: string
  //  时效性通知，可在专注状态下显示通知。
  timeSensitive?: string
  //  仅将通知添加到通知列表，不会亮屏提醒。
  passive?: string
  // 推送角标，可以是任意数字
  badge?: string
  // iOS14.5以下自动复制推送内容，iOS14.5以上需手动长按推送或下拉推送
  autoCopy?: string
  // 复制推送时，指定复制的内容，不传此参数将复制整个推送内容。
  copy?: string
  // 可以为推送设置不同的铃声
  sound?: string
  // 为推送设置自定义图标，设置的图标将替换默认Bark图标。图标会自动缓存在本机，相同的图标 URL 仅下载一次。
  icon?: string
  // 对消息进行分组，推送将按group分组显示在通知中心中。也可在历史消息列表中选择查看不同的群组。
  group?: string
  // 传 1 保存推送，传其他的不保存推送，不传按APP内设置来决定是否保存。
  isArchive?: string
  // 点击推送时，跳转的URL ，支持URL Scheme 和 Universal Link
  url?: string
};


/**
 * 推送消息
 * @see https://bark.day.app/#/tutorial?id=%e8%af%b7%e6%b1%82%e6%96%b9%e5%bc%8f
 * @param param0
 * @param params
 * @returns
 */
export const pushByBark = async ({ title, body, apiUrl, ...params }: MessageData) => {
  let url = apiUrl || process.env.BARK_API;
  if (!url) {
    return Promise.reject(new Error('please set bark api url'));
  }
  // if (title) {
  //   url = `${url}/${encodeURIComponent(title)}`;
  // }
  // if (body) {
  //   url = `${url}/${encodeURIComponent(body)}`;
  // }
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ title, body, ...params }),
  });
  return res.json()
};
