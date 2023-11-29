---
title: 关于 PY32Duino
order: 1
icon: info-circle
---

PY32Duino 是一个由社区推动，旨在适配上海普冉半导体有限公司的 Arm-Cortex 系列 MCU 的 Arduino 框架。

## 支持芯片

目前我们支持的 MCU 如下：

| MCU 系列  | 是否支持 |      详细链接       |
| :-------: | :------: | :-----------------: |
|  PY32F002A   |    ✅     |  |
| PY32F003 |    ✅     |  |
| PY32F030    |    ✅     ||

有关开发板的更多资料，请查看所述链接中的开发板内容。

## Arduino 核心参考

本文档基于 PY32Duino，兼容官方的 Arduino API，同时也可以调用芯片专用的接口如`HAL`库。

:::tip

PY32Duino特有的接口，可以参考左侧的 [API 参考](/library/)，余下的接口，可以参考 [Arduino 官方文档](https://www.arduino.cc/reference/en/)

:::

## 支持的操作系统

|  系统   |  包   | 编译器 | 烧录工具 |
| :-----: | :---: | :----: | :------: |
| Windows |   ✅   |   ✅    |    ✅     |
|  Linux  |   ✅   |   ✅    |    ✅     |
|  MacOS  |   ✅   |   ✅    |    ✅     |

## 相关支持

这是一个开放项目，由 [PY32Duino](https://github.com/PY32Duino) 社区支持。

## 问题报告

::: tip

提交前请务必在 Issue 列表中提前搜索，这可以避免在 GitHub 问题报告中重复或产生不必要的噪音。  
我们还提供[常见问题指南](/FAQ)，以节省您解决常见问题的时间。

:::

上报新的问题或框架中的错误，请前往[问题模板](https://github.com/PY32Duino/Arduino-PY32/issues/new?assignees=&labels=%E5%BE%85%E5%88%86%E7%B1%BB&projects=&template=bug-report.yml)。

如果您有任何新想法或者功能建议，请前往[功能请求模板](https://github.com/PY32Duino/Arduino-PY32/issues/new?assignees=&labels=%E5%BE%85%E5%88%86%E7%B1%BB&projects=&template=feature-request.yml)。
