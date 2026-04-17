# Logical Operations

## What is Boolean Logic?

**Boolean logic** is a system of logic based on two values: **TRUE** (1) and **FALSE** (0). It was developed by mathematician George Boole in the 19th century and forms the mathematical foundation of all digital computers — every operation a CPU performs can ultimately be described in terms of Boolean logic gates.

---

## Logic Gates

A **logic gate** is a basic building block of digital circuits. It takes one or more binary inputs and produces a single binary output according to a fixed rule.

### AND Gate

Output is TRUE only if **all** inputs are TRUE.

| A | B | A AND B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

> "Both must be on"

### OR Gate

Output is TRUE if **at least one** input is TRUE.

| A | B | A OR B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | **1** |

> "At least one must be on"

### NOT Gate (Inverter)

Output is the **opposite** of the input. Takes a single input.

| A | NOT A |
|---|---|
| 0 | **1** |
| 1 | **0** |

> "Flips the bit"

### XOR Gate (Exclusive OR)

Output is TRUE if inputs are **different** (exactly one is TRUE).

| A | B | A XOR B |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | 0 |

> "One or the other, but not both"

---

## Truth Tables

A **truth table** shows every possible combination of inputs and the corresponding output for a logical expression.

For n inputs, there are **2ⁿ rows** in the truth table (e.g. 2 inputs → 4 rows, 3 inputs → 8 rows).

### Example: Combined Expression

Find the truth table for `(A AND B) OR (NOT C)`:

| A | B | C | A AND B | NOT C | (A AND B) OR (NOT C) |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | **1** |
| 0 | 0 | 1 | 0 | 0 | **0** |
| 0 | 1 | 0 | 0 | 1 | **1** |
| 0 | 1 | 1 | 0 | 0 | **0** |
| 1 | 0 | 0 | 0 | 1 | **1** |
| 1 | 0 | 1 | 0 | 0 | **0** |
| 1 | 1 | 0 | 1 | 1 | **1** |
| 1 | 1 | 1 | 1 | 0 | **1** |

*Tip: work out intermediate columns first, then combine them.*

---

## Logic Gate Symbols

Logic gates are represented with standard symbols in circuit diagrams:

| Gate | Symbol description |
|---|---|
| AND | D-shape with flat input side |
| OR | Curved "shield" shape |
| NOT | Triangle with a small circle (bubble) at output |
| XOR | OR shape with an extra curved line at the input |
| NAND | AND shape with a bubble at the output |
| NOR | OR shape with a bubble at the output |

---

## NAND and NOR Gates

### NAND (Not AND)
The output is FALSE only when **all** inputs are TRUE — the inverse of AND.

| A | B | A NAND B |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | **0** |

NAND gates are **universal** — any other gate can be built from NAND gates alone.

### NOR (Not OR)
The output is TRUE only when **all** inputs are FALSE — the inverse of OR.

| A | B | A NOR B |
|---|---|---|
| 0 | 0 | **1** |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

---

## From Boolean Algebra to Digital Circuits

George Boole (1815–1864) developed Boolean algebra as a system of symbolic logic. Over half a century later, Claude Shannon showed in his 1937 master's thesis that Boolean algebra could be applied to electrical circuits — each logic gate corresponds to a Boolean operation.

This insight is why:
- Every CPU is made of billions of transistors acting as logic gates
- Binary addition, memory storage, and instruction decoding all reduce to combinations of AND, OR, and NOT operations
- Boolean logic is truly the foundation of all computing

### Practical Applications

| Application | Logic used |
|---|---|
| CPU's ALU | Arithmetic via combinations of gates |
| Memory (flip-flops) | NOR/NAND combinations to store bits |
| Access control | `IF (card_valid AND pin_correct) THEN open_door` |
| Search engines | Boolean queries: `python AND tutorial NOT advanced` |
