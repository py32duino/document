---
title: PY32Duino 的调试方法
order: 1
icon: fa fa-flask
---

## 使用 VSCode 的`Crotex-Debug`插件

### 先决条件

- 安装 VSCode
- 有一个支持的调试器，可以是 JLink，ST-Link，CMSIS-DAP 等，这里我们使用 DAPLink 作为例子
- 安装 PY32Duino 的 SDK
- 安装`PyOCD`

### VSCode 的配置

#### 安装插件

在 VSCode 的插件市场中搜索`Cortex-Debug`，或者在<https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug>安装即可。

同样，搜索 [`Arduino`](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino)，安装`Arduino`插件。

#### 安装 PyOCD

安装 PyOCD 比较简单，在拥有 Python 环境的情况下，直接输入

```bash
pip install --pre -U git+https://github.com/pyocd/pyOCD.git
```

命令安装最新版的PyOCD即可。

注意：py32目前并不在PyOCD的targets中，也不在develop中，因此，稍后我们需要下载CMSIS Pack用于调试。

#### 建立工程

不管是新建一个工程还是用之前老的工程都行，这里我们以新建工程为例。

点击`F1`按钮，输入`Arduino: Initialize`

![](image/2023-10-05-01-11-32.png)

这里输入文件名，需要注意的是，这个文件名必须和父目录的名字一样，我们这里就修改为`Py32DebugTest.ino`。

![](image/2024-02-11-180751.jpg)

芯片型号我们以`Generic PY32F030 Series`为例。

建立完成之后，我们随便写一些测试代码，例如：

```cpp
void setup()
{
    Serial.begin(115200);
    pinMode(PB0, OUTPUT);
    Serial.println("Hello World!");
}

void loop()
{
    digitalWrite(PB0, HIGH);
    delay(1000);
    digitalWrite(PB0, LOW);
    delay(1000);
}
```

对于 Arduino Board Configuration，我们选择如下的配置：

![](image/2024-02-11-181028.jpg)

最后一个芯片的具体型号（Board part number），比如32K ROM + 4K RAM应选择x6，64K ROM + 8K RAM应选择x8。**选择错误的flash大小可能会导致Hard Fault。**具体请参看数据手册：[MCU 相关文档 | OpenPuya (py32.org)](https://py32.org/mcu/)

切记，Debug symbols and logs 选项中一定要选择有带`-g`的选项，这样才能生成调试符号。

#### 调试配置

在自动生成的`.vscode/arduino.json`文件中，我们需要添加一个属性`output`，这样才能获得编译出来的文件，一个典型的配置如下：

```json
{
    "sketch": "Py32DebugTest.ino",
    "output": "build",
    "configuration": "UploadSpeed=115200,ClockSourceAndFrequency=HSI24M_HCLK48M,LowSpeedClockSource=None,xserial=generic,dbg=enable_sym,opt=osstd,SupplyVoltage=3V3,BootConnection=defaule,pnum=PY32F030x6",
    "board": "PY32Duino:PY32:GenF030"
}
```

然后，我们点击上方的`Upload`按钮，编译并上传代码。

![](image/2023-10-05-01-23-50.png)

接下来，我们需要配置调试器，点击`F1`按钮，输入`Debug: Add Configuration`（不是C/C++插件那个），然后选择`Cortex-Debug`。

这样，在`.vscode`文件夹下就会自动生成一个`launch.json`文件。
1. 我们需要修改其中的`serverpath`属性为`pyocd`

2. 添加一个`armToolchainPath`属性，该属性的含义是一个`arm-none-eabi-gcc`套件的地址，需要注意的是其中需要包含 gdb，我们这里可以直接使用 PY32Duino sdk 自带的，可以从`.vscode\c_cpp_properties.json`的`compilerPath`复制，但是注意最后的地方必须指向bin文件夹而不是exe。

   比如：`C:\\Users\\YourUserName\\AppData\\Local\\Arduino15\\packages\\PY32Duino\\tools\\xpack-arm-none-eabi-gcc\\13.2.1-1.1\\bin`   [请注意Json中`\`为转义符，请检查你的Json是否正确]

3. 修改`executable`属性，属性的值为编译出来的 elf 文件的地址，我们这里使用`${workspaceRoot}/build/Py32DebugTest.ino.elf`。

4. 修改`runToEntryPoint`属性，该属性为调试时自动运行到入口点，我们这里设置为`setup`。

5. 下载PY32的CMSIS Pack（MDK Pack）：[PY32F030 系列 | OpenPuya  ](https://py32.org/mcu/PY32F030xx.html#pack-mdk)或 [PY32_Docs/Pack](https://github.com/decaday/PY32_Docs/tree/main/Pack) ，放在任意位置均可，建议放在工程附近。

6. 添加`cmsisPack`，值设置为你下载的Pack路径，例如 `E:\\path\\to\\your\\pack\\Puya.PY32F0xx_DFP.1.1.9.pack`

7. 添加`targetId`属性，属性的值为 pyocd 的 target，我们这里使用`py32f030x6`。

   

一个可能的`launch.json`文件如下：

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Cortex Debug",
            "cwd": "${workspaceFolder}",
            "executable": "${workspaceRoot}/build/Py32DebugTest.ino.elf",
            "request": "launch",
            "type": "cortex-debug",
            "runToEntryPoint": "setup",
            "servertype": "pyocd",
            "targetId": "py32f030x6",
            "cmsisPack": "E:\\path\\to\\your\\pack\\Puya.PY32F0xx_DFP.1.1.9.pack",
            "armToolchainPath": "C:\\Users\\YourUserName\\AppData\\Local\\Arduino15\\packages\\PY32Duino\\tools\\xpack-arm-none-eabi-gcc\\13.2.1-1.1\\bin"
        }
    ]
}
```

   

最后，我们点击 vscode 左边的`运行与调试`图标，或者是直接按`F5`，就可以开始调试了。

![](image/2024-02-11-182755.jpg)

享受调试的乐趣吧！
