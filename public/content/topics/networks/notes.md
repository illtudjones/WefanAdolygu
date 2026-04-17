# Networks & Infrastructure

## Types of Networks

### LAN (Local Area Network)
- Covers a **small geographical area** (e.g. a school, office, or home)
- Usually owned and managed by a single organisation
- Connected using physical cables (Ethernet) or Wi-Fi
- High data transfer speeds; low cost

### WAN (Wide Area Network)
- Covers a **large geographical area** (e.g. a city, country, or the whole world)
- The **internet** is the world's largest WAN
- Often uses infrastructure owned by telecoms providers
- Slower and more expensive than LAN; higher latency

| Feature | LAN | WAN |
|---|---|---|
| Area | Small (building/campus) | Large (national/global) |
| Ownership | Single organisation | Multiple providers |
| Speed | High | Lower |
| Cost | Low | High |
| Example | School network | The internet |

---

## Network Topologies

A **topology** describes how devices (nodes) are physically or logically arranged and connected.

### Bus Topology
- All devices connect to a single central cable (the **backbone**)
- Data travels along the bus; all devices receive it, but only the addressed device accepts it
- **Advantage:** Simple and cheap to install
- **Disadvantage:** If the backbone fails, the whole network fails; performance degrades with more devices

### Ring Topology
- Each device connects to exactly two others, forming a closed loop
- Data travels in one direction around the ring
- **Advantage:** No collisions; equal access for all devices
- **Disadvantage:** If one device/connection fails, the whole ring is broken

### Star Topology
- All devices connect to a central **switch** or **hub**
- Data passes through the central device to reach its destination
- **Advantage:** If one cable fails, only that device is affected; easy to add/remove devices
- **Disadvantage:** If the central switch fails, the whole network fails; requires more cable

### Mesh Topology
- Devices connect to multiple other devices (partial mesh) or to every other device (full mesh)
- **Advantage:** Highly resilient — data can reroute around failures
- **Disadvantage:** Very expensive and complex to install; lots of cabling

| Topology | Failure resilience | Cost | Use case |
|---|---|---|---|
| Bus | Low | Low | Small/legacy networks |
| Ring | Low | Medium | Token Ring networks |
| Star | Medium | Medium | Most modern LANs |
| Mesh | High | High | Critical infrastructure, WANs |

---

## Network Hardware

| Device | Role |
|---|---|
| **Router** | Connects different networks together (e.g. LAN to internet); directs data packets between networks |
| **Switch** | Connects devices within the same LAN; sends data only to the intended device (unlike a hub) |
| **Hub** | Connects devices in a LAN; broadcasts data to **all** devices (less efficient than a switch) |
| **Bridge** | Connects two separate LAN segments together |
| **Gateway** | Connects networks that use different protocols (e.g. a corporate LAN to the internet) |
| **WAP** (Wireless Access Point) | Allows wireless (Wi-Fi) devices to connect to a wired network |
| **NIC** (Network Interface Card) | Hardware in a device that allows it to connect to a network |

---

## Protocols

A **protocol** is a set of rules that govern how data is transmitted between devices on a network. Both sender and receiver must follow the same protocol.

### Key Protocols

| Protocol | Full Name | Purpose |
|---|---|---|
| **TCP** | Transmission Control Protocol | Reliable, ordered delivery of data; checks for errors |
| **IP** | Internet Protocol | Addressing and routing packets across networks |
| **HTTP** | HyperText Transfer Protocol | Transfers web pages (unencrypted) |
| **HTTPS** | HTTP Secure | Encrypted HTTP using TLS/SSL |
| **FTP** | File Transfer Protocol | Transfers files between client and server |
| **SMTP** | Simple Mail Transfer Protocol | Sends email from client to server, and between servers |
| **POP3** | Post Office Protocol v3 | Downloads email from server to client; deletes from server |
| **IMAP** | Internet Message Access Protocol | Reads email on server without downloading; stays synced |
| **DNS** | Domain Name System | Translates domain names (e.g. bbc.co.uk) to IP addresses |
| **BGP** | Border Gateway Protocol | Routes data between different networks on the internet (inter-AS routing) |

### TCP vs UDP

**TCP** — connection-oriented; guarantees delivery, order, and error-checking. Used for web browsing, email.

**UDP** — connectionless; faster but no delivery guarantee. Used for live video/audio streaming, online gaming.

---

## The TCP/IP Model

The **TCP/IP model** describes how data communication works across a network in four layers:

| Layer | Role | Example protocols |
|---|---|---|
| **Application** | Interface for applications; formats user data | HTTP, SMTP, FTP, DNS |
| **Transport** | Breaks data into segments; ensures reliable delivery | TCP, UDP |
| **Internet** | Addressing and routing of packets | IP |
| **Network Access** | Physical transmission over hardware | Ethernet, Wi-Fi |

---

## Packet Switching

Rather than sending data as one large block, networks break it into small **packets**.

### What is in a TCP/IP Packet?

| Field | Contents |
|---|---|
| **Source IP address** | Where the packet came from |
| **Destination IP address** | Where the packet is going |
| **Sequence number** | Order of this packet within the whole message |
| **TTL** (Time to Live) | How many routers it can pass through before being discarded |
| **Protocol** | Which protocol is being used (TCP/UDP) |
| **Checksum** | Error-detection value |
| **Payload** (data) | The actual data being sent |

### Advantages of Packet Switching
- Packets can take **different routes** through the network — if one router is busy/down, packets go another way
- Multiple communications can share the same network links simultaneously
- Failed/corrupted packets can be **resent individually** without resending the whole file

---

## Routing

**Routers** direct packets from one network to another. They use **routing tables** to decide the best path.

### Routing Cost

Routers assign a **cost** (metric) to each possible path. Lower cost = preferred path. Costs may be based on:
- Number of hops (how many routers to pass through)
- Link speed / bandwidth
- Current congestion / latency

**Example:**
- Path A → B → D: cost 4 + 3 = **7**
- Path A → C → D: cost 2 + 2 = **4** ← preferred

Routing protocols (like OSPF and BGP) automatically calculate and update routing tables as network conditions change.

---

## IP Addresses

An **IP address** uniquely identifies a device on a network.

- **IPv4** — 32-bit address written as four decimal numbers (e.g. `192.168.1.1`)
  - About 4.3 billion possible addresses — running out
- **IPv6** — 128-bit address written in hexadecimal (e.g. `2001:0db8:85a3::8a2e:0370:7334`)
  - 340 undecillion possible addresses — essentially unlimited

**MAC address** — a unique hardware identifier burned into every NIC. Used at the Network Access layer to identify devices on a local network.
