# Logical Operations

## Logic gates

The four basic logic gates are AND, OR, NOT and XOR. Each takes binary inputs (0 or 1) and produces a binary output.

| Gate | Symbol | Behaviour |
|------|--------|-----------|
| AND  | A AND B | Output is 1 only when **all** inputs are 1 |
| OR   | A OR B  | Output is 1 when **at least one** input is 1 |
| NOT  | NOT A   | Output is the **opposite** of the input |
| XOR  | A XOR B | Output is 1 when inputs are **different** |

## Truth tables

**NOT gate**

| A | NOT A |
|---|-------|
| 0 | 1     |
| 1 | 0     |

**AND gate**

| A | B | A AND B |
|---|---|---------|
| 0 | 0 | 0       |
| 0 | 1 | 0       |
| 1 | 0 | 0       |
| 1 | 1 | 1       |

**OR gate**

| A | B | A OR B |
|---|---|--------|
| 0 | 0 | 0      |
| 0 | 1 | 1      |
| 1 | 0 | 1      |
| 1 | 1 | 1      |

**XOR gate**

| A | B | A XOR B |
|---|---|---------|
| 0 | 0 | 0       |
| 0 | 1 | 1       |
| 1 | 0 | 1       |
| 1 | 1 | 0       |

## Combined logic expressions

Logical operators can be combined to form more complex expressions. Work through each gate in order, using intermediate columns to track results.

**Example:** `(A AND B) OR (NOT C)`

| A | B | C | A AND B | NOT C | (A AND B) OR (NOT C) |
|---|---|---|---------|-------|----------------------|
| 0 | 0 | 0 | 0       | 1     | 1                    |
| 0 | 0 | 1 | 0       | 0     | 0                    |
| 0 | 1 | 0 | 0       | 1     | 1                    |
| 0 | 1 | 1 | 0       | 0     | 0                    |
| 1 | 0 | 0 | 0       | 1     | 1                    |
| 1 | 0 | 1 | 0       | 0     | 0                    |
| 1 | 1 | 0 | 1       | 1     | 1                    |
| 1 | 1 | 1 | 1       | 0     | 1                    |

A truth table for *n* inputs has **2ⁿ rows**.

## Boolean algebra

Boolean expressions can be simplified using identities and rules to reduce the number of gates or terms needed.

**Key identities**

| Rule | Expression |
|------|-----------|
| Identity | A AND 1 = A · A OR 0 = A |
| Null | A AND 0 = 0 · A OR 1 = 1 |
| Idempotent | A AND A = A · A OR A = A |
| Complement | A AND NOT A = 0 · A OR NOT A = 1 |
| Double negation | NOT (NOT A) = A |
| De Morgan's (1) | NOT (A AND B) = NOT A OR NOT B |
| De Morgan's (2) | NOT (A OR B) = NOT A AND NOT B |

Simplification is useful in digital circuit design — fewer gates means less cost, less power and faster circuits.

## Historical context

- George Boole developed Boolean algebra in the 19th century as a branch of mathematics.
- Claude Shannon showed in the 1930s that Boolean algebra could describe electrical switching circuits.
- This connection underpins all modern digital electronics.
