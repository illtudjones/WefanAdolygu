# Computer Architecture

## Inside a Computer System

A modern computer contains many hardware components working together. The main internal components are:

| Component | Purpose |
|---|---|
| **CPU** (Central Processing Unit) | Executes instructions — the "brain" of the computer |
| **Motherboard** | The main circuit board; connects all components |
| **RAM** (Random Access Memory) | Temporary, fast storage for data currently in use |
| **PSU** (Power Supply Unit) | Converts mains electricity to voltages the PC needs |
| **GPU** (Graphics Processing Unit) | Handles rendering of images, video, and 3D graphics |
| **Expansion cards** | Add extra functionality (e.g. sound card, network card) |
| **Ports** | Physical connectors (USB, HDMI, Ethernet, audio jack) |

---

## Von Neumann Architecture

The **Von Neumann architecture** is the design model used by almost all modern computers. Its key principle is that **data and instructions are stored together in the same memory**.

The four main components:

1. **CPU** — processes instructions
2. **Main memory** — stores data and instructions
3. **Input devices** — send data to the CPU
4. **Output devices** — receive data from the CPU

Data flows between them along three buses:

| Bus | Carries |
|---|---|
| **Data bus** | Actual data and instructions (bidirectional) |
| **Address bus** | Memory addresses (one-way: CPU → memory) |
| **Control bus** | Timing and control signals (bidirectional) |

---

## CPU Components

The CPU contains several key internal registers and units:

| Component | Abbreviation | Role |
|---|---|---|
| **Arithmetic Logic Unit** | ALU | Performs arithmetic (+, -, ×, ÷) and logic (AND, OR, NOT) operations |
| **Control Unit** | CU | Coordinates all CPU activities; sends control signals |
| **Program Counter** | PC | Stores the memory address of the **next** instruction to be fetched |
| **Current Instruction Register** | CIR | Holds the instruction **currently being decoded/executed** |
| **Accumulator** | ACC | Temporarily holds the result of calculations |
| **Memory Address Register** | MAR | Holds the address of the memory location being accessed |
| **Memory Data Register** | MDR | Holds data being transferred to/from memory |
| **Cache** | — | Very fast, small memory built into the CPU; stores frequently used data |

---

## The Fetch-Decode-Execute Cycle

Every instruction a CPU runs passes through this three-stage cycle:

### 1. Fetch
- The PC value (address of next instruction) is copied into the **MAR**
- The instruction at that address is fetched from main memory into the **MDR**
- The MDR contents are copied into the **CIR**
- The **PC is incremented** to point to the next instruction

### 2. Decode
- The **Control Unit** decodes the instruction in the CIR
- It determines what operation needs to be performed and what operands are needed

### 3. Execute
- The decoded instruction is executed (e.g. the **ALU** performs a calculation)
- Results may be stored in the **ACC** or written back to memory

This cycle repeats billions of times per second in a modern CPU.

---

## CPU Performance Factors

Three main factors affect how fast a CPU can process instructions:

| Factor | Effect |
|---|---|
| **Clock speed** (GHz) | More cycles per second → faster execution |
| **Number of cores** | Multiple cores can process different instructions simultaneously (parallel processing) |
| **Cache size** | Larger cache → fewer slow RAM accesses → faster execution |

> **Clock speed** is measured in GHz (gigahertz). 3 GHz = 3 billion clock cycles per second.

---

## Primary Storage

Primary storage is directly accessible by the CPU. It is **fast** but **volatile** (data lost when power is cut) in most cases.

| Type | Volatile? | Writable? | Use |
|---|---|---|---|
| **RAM** | Yes | Yes | Working memory — holds active programs and data |
| **ROM** | No | No (read only) | Firmware — stores the BIOS/boot instructions |
| **Flash memory** | No | Yes | USB drives, SSDs, memory cards |
| **Cache** | Yes | Yes | CPU's ultra-fast scratch pad |
| **Virtual memory** | — | — | A portion of secondary storage used as extra RAM when RAM is full |

---

## Secondary Storage

Secondary storage is **non-volatile** (persists without power) and used for long-term data storage. It is slower than primary storage.

### Types

**Magnetic (HDD — Hard Disk Drive)**
- Spinning magnetic platters read by a moving head
- Large capacity, low cost per GB
- Slower than SSD; fragile (moving parts)

**Solid State Drive (SSD)**
- No moving parts; stores data in flash memory chips
- Faster, lighter, more durable than HDD
- More expensive per GB

**Optical (CD, DVD, Blu-ray)**
- Data encoded as pits/lands on a reflective disc, read by laser
- Cheap to manufacture; portable
- Slow; easily scratched; lower capacity

**Cloud storage**
- Data stored on remote servers accessed over the internet
- Accessible from anywhere; no physical device needed
- Requires internet connection; ongoing subscription cost; privacy concerns

### Comparison Table

| Type | Speed | Capacity | Cost/GB | Durability | Portability |
|---|---|---|---|---|---|
| HDD | Medium | Very high | Low | Medium | Low |
| SSD | High | High | Medium | High | Medium |
| Optical | Low | Low | Very low | Low | High |
| Cloud | Varies | Unlimited | Subscription | High | Very high |

---

## Input and Output Devices

### Input Devices
Keyboards, mice, touchscreens, microphones, scanners, cameras, sensors.

### Output Devices
Monitors, printers, speakers, projectors, actuators.

### Storage Devices
Act as both input and output (read and write).
