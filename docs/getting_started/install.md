---
title: 安装
order: 2
icon: download
---

此文档旨在介绍关于 `PY32Duino` 的相关安装方式。

## Arduino IDE 的安装

Arduino IDE 支持 Windows、Mac OS X 及 Linux 等平台，下载地址为 [Software > Arduino](https://www.arduino.cc/en/software)，本文仅介绍 Windows 下的安装方式，其他系统大同小异，请读者自行研究，接下来针对两种方式分别介绍如何安装。

:::tip

Windows 系统下的 IDE 有 EXE 安装版和 ZIP 压缩包免安装版。EXE 安装版需要按步骤安装，ZIP 压缩包免安装版解压后即可使用（但不会在桌面建立 IDE 启动图标），后者无须管理员权限也可运行使用。

:::

### Windows 下 exe 版本安装

在 [Software > Arduino](https://www.arduino.cc/en/software) 可以获取最新的 IDE 目前版本是 2.10，点击如图所示的区域，下载 exe 版本安装包。

:::tip

注：现在大部分电脑都是 64 位因此可以直接下载最新版本，对于 32 位的电脑可以在页面下翻，选择老版本进行下载安装。

:::

![image-20230609164109637](img/image-20230609164109637.png)

选择`JUST DOWNLOAD`仅下载，根据网速等待片刻即可下载完成。

![image-20230609164252675](img/image-20230609164252675.png)

双击安装包进行安装，点击我同意。

![image-20230609164821984](img/image-20230609164821984.png)

仅为自己安装即可。

![image-20230609164900031](img/image-20230609164900031.png)

默认安装位置不用动，直接点击安装，稍等一会就可以安装好了。

![image-20230609164926761](img/image-20230609164926761.png)

最后点击完成即可。

![image-20230609165202809](img/image-20230609165202809.png)

### windows 下 zip 版本安装

在 [Software > Arduino](https://www.arduino.cc/en/software) 可以获取最新的 IDE 目前版本是 2.10，点击如图所示的区域，下载 zip 版本免安装包。

:::tip

注：现在大部分电脑都是 64 位因此可以直接下载最新版本，对于 32 位的电脑可以在页面下翻，选择老版本进行下载安装。

:::

![image-20230612140840851](img/image-20230612140840851.png)

下载完成以后直接解压即可，双击解压后的文件夹中的`Arduino_IDE.exe`即可运行。为了方便日后使用，可以右键添加到开始菜单或者在桌面创建快捷方式。

![image-20230617205905523](img/image-20230617205905523.png)

#### 修改语言

首次安装默认语言为英文，可以点击`File/Preference`。

![image-20230612140357459](img/image-20230612140357459.png)

在 Language 选项卡下拉，选择语言为`中文（简体）`。点击右下角 OK，IDE 将自动重启，语言将切换为中文。

![image-20230612140452011](img/image-20230612140452011.png)

## 安装 PY32Duino 支持包

### 添加开发板地址

点击 Arduino IDE 左上角的**文件**-**首选项**

![1](img/2023-05-08-23-12-46.png)

在**其它开发板管理器地址**中输入 PY32Duino 的地址：

```log
https://arduino.py32.halfsweet.cn/package_py32_cn_index.json
```

:::tip

海外用户可以使用这个：

```log
https://github.com/PY32Duino/Arduino-pack-json-ci/releases/download/Nightly/package_py32_index.json
```

:::

### 安装开发板

在**开发板管理器**中搜索** PY32**

安装最新版的`PY32 Arduino`即可

:::tip

安装过程需要安装多个工具链，可能会稍慢，请耐心等待

:::

---

接下来可以继续查看下一章节，进行开发测试
