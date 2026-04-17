# Data Representation

## Data Types

All data in a computer is ultimately stored as binary (1s and 0s). Different **data types** determine how that binary pattern is interpreted.

| Data Type | Description | Example |
|---|---|---|
| **Boolean** | True or False (1 or 0) | `TRUE` |
| **Character (char)** | A single text character | `'A'` |
| **Integer** | A whole number | `42` |
| **Real (float)** | A number with a decimal part | `3.14` |
| **String** | A sequence of characters | `"Hello"` |

---

## Number Systems

### Denary (Base 10)
The number system humans use, with digits 0–9.

### Binary (Base 2)
Used internally by computers. Digits are only **0** and **1**.

Each position is a **power of 2**:

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|
| 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |

**Example:** Convert 10110101 to denary
- 128 + 32 + 16 + 4 + 1 = **181**

**Example:** Convert 45 to binary
- 45 ÷ 2 = 22 r **1**
- 22 ÷ 2 = 11 r **0**
- 11 ÷ 2 = 5 r **1**
- 5 ÷ 2 = 2 r **1**
- 2 ÷ 2 = 1 r **0**
- 1 ÷ 2 = 0 r **1**
- Read remainders bottom-up: **101101**

### Hexadecimal (Base 16)
Uses digits 0–9 and letters A–F (where A=10, B=11, C=12, D=13, E=14, F=15).

Used in computing because one hex digit = exactly 4 binary bits (one **nibble**).

| Hex | Binary | Denary |
|---|---|---|
| 0 | 0000 | 0 |
| 9 | 1001 | 9 |
| A | 1010 | 10 |
| F | 1111 | 15 |

**Binary → Hex:** Split into groups of 4 bits from the right, convert each group.
- `1010 1111` → `A F` → `0xAF`

**Hex → Denary:** Multiply each digit by its positional value (powers of 16).
- `0xB4` = (11 × 16) + (4 × 1) = 176 + 4 = **180**

---

## Binary Addition

Rules:
- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 0, carry 1
- 1 + 1 + 1 (carry) = 1, carry 1

**Example:** 01101010 + 00110101

```
  01101010
+ 00110101
----------
  10011111
```

### Overflow

**Overflow** occurs when the result of an arithmetic operation is **too large** to store in the available number of bits.

- With 8 bits, the maximum unsigned value is 255 (11111111)
- Adding 200 + 100 = 300, but 300 > 255 — the 9th bit is lost → **overflow error**

**Underflow** occurs when the result is too small (negative overflow in unsigned systems, or exceeds the negative limit in signed systems).

---

## Arithmetic Shifts

A **shift** moves all bits left or right by a given number of positions.

- **Shift left by 1** — multiply by 2 (pad with 0 on the right)
- **Shift right by 1** — divide by 2 (pad with 0 on the left, discard rightmost bit)

**Example:** 00001010 (= 10)
- Shift left 1: 00010100 = **20** (×2)
- Shift right 1: 00000101 = **5** (÷2)

---

## Character Encoding

### ASCII (American Standard Code for Information Interchange)
- Uses **7 bits** per character (extended ASCII uses 8)
- Represents 128 characters: uppercase/lowercase letters, digits, punctuation, control codes
- Examples: `A` = 65, `a` = 97, `0` = 48
- **Limitation:** Only covers English and basic Western characters

### Unicode
- Designed to represent characters from **all world languages**
- Common variants: UTF-8 (1–4 bytes), UTF-16 (2–4 bytes), UTF-32 (4 bytes)
- UTF-8 is backward-compatible with ASCII for the first 128 characters
- Contains over **140,000 characters** including emoji

| Feature | ASCII | Unicode (UTF-8) |
|---|---|---|
| Bits per character | 7 (or 8) | 8–32 |
| Characters supported | 128 | 140,000+ |
| Languages | English only | All world languages |

---

## Storing Graphics

A digital image is made up of **pixels** (picture elements). Each pixel has a colour value stored in binary.

Key terms:

| Term | Definition |
|---|---|
| **Resolution** | Total number of pixels (e.g. 1920 × 1080) |
| **Bit depth / colour depth** | Number of bits used per pixel; determines how many colours are possible |

**Colours possible** = 2^(bit depth)

Examples:
- 1-bit depth: 2 colours (black and white)
- 8-bit depth: 256 colours
- 24-bit depth: 16,777,216 colours (true colour)

**File size** (uncompressed):
> File size (bits) = Width × Height × Bit depth

**Example:** 800 × 600 image, 24-bit colour
- 800 × 600 × 24 = 11,520,000 bits = 1,440,000 bytes ≈ **1.37 MB**

---

## Storing Sound

Digital audio is created by **sampling** an analogue sound wave at regular intervals.

Key terms:

| Term | Definition |
|---|---|
| **Sample rate** | Number of samples taken per second (Hz or kHz) |
| **Bit depth** | Number of bits used per sample |

**File size** (uncompressed):
> File size (bits) = Sample rate × Bit depth × Duration (seconds)

For stereo, multiply by 2.

**Example:** 44,100 Hz sample rate, 16-bit depth, 60 seconds, stereo
- 44,100 × 16 × 60 × 2 = 84,672,000 bits ≈ **10.1 MB**

Higher sample rate and bit depth → **better quality** but **larger file size**.

---

## Data Units

| Unit | Equivalent |
|---|---|
| 1 **bit** | Smallest unit (0 or 1) |
| 1 **nibble** | 4 bits |
| 1 **byte** | 8 bits |
| 1 **kilobyte (KB)** | 1,024 bytes |
| 1 **megabyte (MB)** | 1,024 KB |
| 1 **gigabyte (GB)** | 1,024 MB |
| 1 **terabyte (TB)** | 1,024 GB |
| 1 **petabyte (PB)** | 1,024 TB |

---

## Compression

Compression reduces file size. There are two types:

### Lossy Compression
- **Permanently removes** data that is deemed less important
- The original file **cannot be perfectly reconstructed**
- Results in smaller files at the cost of some quality
- Used for: images (JPEG), audio (MP3), video (MP4/H.264)

### Lossless Compression
- **No data is lost** — the original file can be perfectly reconstructed
- Achieves smaller sizes by encoding repeated patterns more efficiently (e.g. run-length encoding)
- Used for: text (ZIP), images (PNG), audio (FLAC)

| Feature | Lossy | Lossless |
|---|---|---|
| Data loss | Yes | No |
| Reconstruction | Not possible | Possible |
| File size | Smaller | Larger |
| Common use | Media (images, video, audio) | Text, archives |

### Compression Ratio

> Compression ratio = Original size ÷ Compressed size

**Example:** A 10 MB file compressed to 2 MB has a compression ratio of **5:1**.
