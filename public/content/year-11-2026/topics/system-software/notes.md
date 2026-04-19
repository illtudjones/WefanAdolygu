# System Software

## What is system software?

System software manages the hardware and provides a platform for application software to run. The two main types are the **operating system** and **utility software**.

## Operating system functions

The operating system (OS) performs six main functions:

### 1. Managing the processor (CPU)
- The OS schedules which process uses the CPU and for how long.
- **Multi-tasking** allows several processes to appear to run simultaneously by rapidly switching between them.
- **Interrupts** are signals to the CPU that something needs attention (e.g. a keystroke or completed I/O). The OS handles interrupts so the CPU can respond to events efficiently.

### 2. Managing memory
- The OS allocates areas of RAM to each running program.
- When RAM is full, the OS can use **virtual memory** — a section of secondary storage (hard disk) used as though it were RAM.
- **Paging** divides memory into fixed-size blocks (pages) so memory can be allocated efficiently.

### 3. Managing backing store (secondary storage)
- The OS uses a **file system** to organise data on disks into files and folders.
- It handles reading, writing, creating, deleting and searching for files.
- The file system maintains a directory structure and tracks where each file is stored.

### 4. Managing peripherals
- The OS communicates with devices (printers, keyboards, monitors) through **device drivers** — small programs that translate OS requests into device-specific instructions.
- Without device drivers, hardware would not function.

### 5. Providing security
- The OS manages user accounts, passwords and access levels to prevent unauthorised use.
- It may log activity for auditing purposes.

### 6. Providing an interface
- The OS provides a way for users and programs to interact with the hardware.

## User interfaces

| Interface | Description | Example |
|-----------|-------------|---------|
| **GUI** (Graphical User Interface) | Uses windows, icons, menus and a pointer (WIMP). Easy to use without training. | Windows, macOS |
| **CLI** (Command Line Interface) | User types text commands. Powerful and fast, but requires knowledge of commands. | Linux terminal, cmd.exe |
| **Menu-driven** | User selects from options. Common in embedded systems and ATMs. | Supermarket self-checkout |

## Utility software

Utility software performs maintenance and housekeeping tasks:

| Utility | Purpose |
|---------|---------|
| **Anti-malware / antivirus** | Detects and removes malicious software |
| **Backup software** | Copies data to a safe location to protect against loss |
| **Disk defragmenter** | Reorganises fragmented files to speed up disk access |
| **Disk formatter** | Prepares a storage device by creating a file system |
| **Compression tool** | Reduces file sizes for storage or transmission |
| **Encryption tool** | Scrambles data so only authorised users can read it |
| **Firewall** | Monitors and controls incoming/outgoing network traffic |
