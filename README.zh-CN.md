# dsh-web-ui-mobile

[English](./README.md) | 简体中文

`dsh-web-ui-mobile` 是基于 DeepSeek Harness 官方 Web UI 的移动端适配插件，主要面向普通手机，同时兼顾平板和折叠屏设备。插件以独立 DSH bundle 的形式发布，不修改 DeepSeek Harness 源文件；在桌面宽度下仍使用官方布局。

## 功能

### 视口宽度不超过 760px

- 会话侧边栏和详情面板以覆盖层形式打开，让会话区域保留可用的页面宽度。
- 选择会话后，侧边栏会自动关闭并进入对应会话。
- 点击侧边栏右侧的遮罩会关闭侧边栏。

### 视口宽度不超过 600px

- 收起的官方侧边栏不再占用左侧空间。
- 会话标题左侧显示侧边栏开关和设置入口，空会话标题栏中也会显示这些入口。
- 侧边栏打开时会覆盖会话，设置页提供随布局显示的返回按钮。
- 设置页使用完整的全屏手机布局，导航、内容和控件均可清晰阅读和操作，页面不会横向滚动。
- 模型选择和上下文消耗浮层限制在可见视口内。
- 输入框使用紧凑的模型名称，同时为辅助技术保留完整名称。
- 空的详情面板收起后不会遮挡会话内容。

### 视口宽度超过 760px

- 保持 DeepSeek Harness 官方桌面布局不变。

## 优化前后对比

### 会话布局和侧边栏

| 优化前 | 优化后 |
| --- | --- |
| ![优化前：官方收起侧边栏仍占用左侧的一整条空间](./docs/assets/before-conversation-sidebar.png)<br>官方收起侧边栏仍占用左侧的一整条空间，压缩手机上的会话内容区域。 | ![优化后：会话使用完整宽度，入口位于标题左侧](./docs/assets/after-conversation-sidebar.png)<br>会话默认使用完整宽度，侧边栏开关和设置入口位于标题左侧；侧边栏按需覆盖显示。 |

### 模型选择

| 优化前 | 优化后 |
| --- | --- |
| ![优化前：模型选择浮层超出手机可见区域](./docs/assets/before-model-picker.png)<br>模型选择浮层超出手机可见区域，文字和选项被裁切。 | ![优化后：模型选择浮层适合手机视口](./docs/assets/after-model-picker.png)<br>浮层宽度和位置适合手机视口，模型名称可以完整、清晰地显示。 |

### 设置页面

| 优化前 | 优化后 |
| --- | --- |
| ![优化前：设置导航将内容挤压到狭窄区域](./docs/assets/before-settings.png)<br>导航栏挤压内容区，设置文字和控件过窄，页面难以阅读。 | ![优化后：设置导航和内容使用移动端布局](./docs/assets/after-settings.png)<br>设置导航和内容改为移动端布局，设置项可以完整显示和操作。 |

## 安装

将本地检出添加到现有 profile：

```sh
dsh plugin --profile web add ./dsh-web-ui-mobile
```

软件包发布到 npm 后，也可以按包名安装：

```sh
dsh plugin --profile web add dsh-web-ui-mobile
```

安装后请重启该 profile。浏览器入口以 JavaScript 源文件形式发布，因此不需要单独构建。

## 卸载

```sh
dsh plugin --profile web remove dsh-web-ui-mobile
```

卸载后请重启该 profile。

## 开发

安装本地检出前，请运行软件包检查：

```sh
npm run check
```

浏览器端实现在 `src/client.js` 中，`src/index.js` 是 DSH 宿主入口。`cordis.patch.yml` 负责将插件挂载到选定的 profile。

## 兼容性

插件依赖官方 Web UI 暴露的 DOM slot。如果这些 slot 发生变化，插件可能需要同步更新。

## 许可证

MIT
