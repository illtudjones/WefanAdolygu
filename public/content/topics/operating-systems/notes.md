# Operating Systems

## What is an Operating System?

An **operating system (OS)** is system software that acts as an intermediary between the user/applications and the computer hardware. Without an OS, users would need to interact directly with hardware in machine code.

Examples: Windows 11, macOS Sequoia, Linux (Ubuntu), Android, iOS.

---

## Purposes of an Operating System

The OS has two main roles:
1. **Managing hardware resources** — allocates CPU time, memory, and devices between applications
2. **Providing an interface** — gives users and applications a way to interact with the hardware

---

## What the OS Manages

### CPU Management

The OS decides which program gets CPU time and for how long using **scheduling algorithms** (e.g. round-robin, priority scheduling).

**Multi-tasking** is the ability to run multiple programs apparently simultaneously. The OS rapidly switches the CPU between processes — so fast it appears simultaneous.

**Interrupts:** When a hardware device or process needs the CPU's attention, it sends an **interrupt signal**. The OS pauses the current process, handles the interrupt, then resumes the process. This allows:
- A keypress to be registered while a program is running
- A network packet to be received mid-computation
- A printer to signal it has finished a job

### Memory Management

The OS controls which programs use which areas of RAM:
- Prevents one application from accessing another's memory space (protection)
- Allocates memory when a program starts; frees it when the program closes
- **Virtual memory:** If RAM is full, the OS uses a section of the hard drive as an extension of RAM. This is slower but allows more programs to run than physical RAM alone would permit.

### Storage Management

The OS handles the **file system** — how data is organised on storage devices:
- Reading and writing files
- Creating directories and organising files
- Managing access permissions (who can read/write/execute a file)

### Peripheral Management

The OS communicates with peripherals (keyboard, mouse, printer, monitor, etc.) via **device drivers** — small software programs that translate the OS's generic commands into device-specific instructions.

Without drivers, the OS would need custom code for every piece of hardware.

### User Interface

The OS provides a way for users to interact with the system:

| Interface type | Description | Example |
|---|---|---|
| **GUI** (Graphical User Interface) | Windows, icons, menus, pointer (WIMP) | Windows, macOS |
| **CLI** (Command Line Interface) | Text commands typed at a prompt | Linux terminal, Windows PowerShell |

**Advantages of GUI:** Intuitive, easy for beginners, no need to memorise commands.

**Advantages of CLI:** Faster for experienced users; scriptable; uses fewer resources.

### Security Management

The OS enforces:
- **User authentication** — login with username/password, biometrics, or PIN
- **Access control** — different user accounts with different permissions (e.g. standard user vs administrator)
- **Encryption** — some OS features encrypt stored data (e.g. BitLocker, FileVault)

---

## Utility Software

**Utility software** performs maintenance and support tasks on a computer. It is often provided with or alongside the OS.

| Utility | Purpose |
|---|---|
| **Disk defragmenter** | Rearranges fragmented files on a HDD for faster access (not needed for SSDs) |
| **Disk cleanup** | Removes temporary files, cache, and other unnecessary data to free space |
| **Antivirus / anti-malware** | Detects and removes malicious software |
| **Backup software** | Creates copies of important data for recovery |
| **Compression software** | Reduces file sizes (e.g. ZIP files) |
| **Firewall** | Monitors and controls network traffic |
| **Task manager** | Shows running processes, CPU and memory usage; allows killing unresponsive apps |

---

## OS vs Application Software

| Type | Role | Examples |
|---|---|---|
| **System software** | Runs the computer; provides platform for applications | OS, device drivers, utilities |
| **Application software** | Performs tasks for the user | Word processor, browser, games |

The OS is the foundation that all application software runs on top of.
