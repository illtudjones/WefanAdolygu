# Algorithms

## What is an Algorithm?

An **algorithm** is a step-by-step set of instructions designed to solve a problem or complete a task. Every program you write is ultimately an implementation of one or more algorithms.

Good algorithms are:
- **Correct** — they produce the right output for all valid inputs
- **Efficient** — they use as little time and memory as possible
- **Clear** — they are easy to read and understand

---

## Representing Algorithms

### Pseudocode

Pseudocode is an informal, English-like way of describing an algorithm's logic without worrying about the exact syntax of a programming language. WJEC uses a specific pseudocode convention in exams.

**Key WJEC pseudocode conventions:**

| Construct | Example |
|---|---|
| Assignment | `x ← 5` |
| Input | `INPUT name` |
| Output | `OUTPUT "Hello"` |
| If/else | `IF x > 0 THEN ... ELSE ... ENDIF` |
| For loop | `FOR i ← 1 TO 10 ... NEXT i` |
| While loop | `WHILE x > 0 ... ENDWHILE` |
| Procedure | `PROCEDURE DoThing(param) ... ENDPROCEDURE` |
| Function | `FUNCTION Add(a, b) ... RETURN result ENDFUNCTION` |
| Array | `numbers[0] ← 42` |
| 2D array | `grid[row][col] ← value` |
| String length | `LEN(str)` |
| Substring | `SUBSTRING(str, start, length)` |
| String to int | `INT(str)` |
| Random | `RANDOM(low, high)` |

**Example — find the largest number in a list:**
```
PROCEDURE FindMax(numbers[], size)
  max ← numbers[0]
  FOR i ← 1 TO size - 1
    IF numbers[i] > max THEN
      max ← numbers[i]
    ENDIF
  NEXT i
  OUTPUT max
ENDPROCEDURE
```

### Flowcharts

Flowcharts use standard shapes to represent algorithm steps visually:

| Shape | Meaning |
|---|---|
| Oval / Rounded rectangle | Start / Stop (terminator) |
| Rectangle | Process (a step or calculation) |
| Diamond | Decision (yes/no question) |
| Parallelogram | Input / Output |
| Arrow | Flow of control |

---

## Algorithm Design

### Sequence, Selection, and Iteration

All algorithms are built from three fundamental constructs:

- **Sequence** — steps executed one after another in order
- **Selection** — choosing a path based on a condition (`IF`, `CASE`)
- **Iteration** — repeating steps (`FOR`, `WHILE`)

### Subroutines (Procedures and Functions)

A **subroutine** is a named block of code that can be called from elsewhere in a program.

- A **procedure** performs a task but does **not** return a value
- A **function** performs a task **and** returns a value

Benefits of subroutines:
- **Modularity** — breaks programs into manageable chunks
- **Reusability** — write once, call many times
- **Easier testing** — test each subroutine independently

### Local vs Global Variables

| Type | Scope | Where declared |
|---|---|---|
| **Local** | Only inside the subroutine it is declared in | Inside a procedure/function |
| **Global** | Accessible from anywhere in the program | Outside all subroutines |

Use local variables by default — global variables can cause hard-to-find bugs.

### Counting and Rogue Values

- A **count-controlled loop** runs a fixed number of times (`FOR i ← 1 TO 10`)
- A **condition-controlled loop** runs until a condition is met (`WHILE x ≠ -1`)
- A **rogue value** (sentinel value) is a special input that signals the end of data — e.g., entering `-1` to stop a list

```
total ← 0
INPUT number
WHILE number ≠ -1
  total ← total + number
  INPUT number
ENDWHILE
OUTPUT total
```

### String Handling

Common string operations:

| Operation | WJEC pseudocode |
|---|---|
| Length | `LEN("Hello")` → 5 |
| Substring | `SUBSTRING("Hello", 1, 3)` → "Hel" |
| Concatenation | `"Hello" & " " & "World"` |
| Convert to int | `INT("42")` → 42 |

---

## Searching Algorithms

### Linear Search

Checks each element one by one from the start until the target is found or the list ends.

```
FUNCTION LinearSearch(list[], size, target)
  FOR i ← 0 TO size - 1
    IF list[i] = target THEN
      RETURN i
    ENDIF
  NEXT i
  RETURN -1
ENDFUNCTION
```

| Property | Value |
|---|---|
| **Pre-condition** | List does NOT need to be sorted |
| **Best case** | Target is first element — 1 comparison |
| **Worst case** | Target is last or not found — n comparisons |
| **Use when** | List is unsorted or small |

### Binary Search

Repeatedly halves the search space. Requires the list to be **sorted**.

```
FUNCTION BinarySearch(list[], size, target)
  low ← 0
  high ← size - 1
  WHILE low ≤ high
    mid ← (low + high) DIV 2
    IF list[mid] = target THEN
      RETURN mid
    ELSE IF list[mid] < target THEN
      low ← mid + 1
    ELSE
      high ← mid - 1
    ENDIF
  ENDWHILE
  RETURN -1
ENDFUNCTION
```

| Property | Value |
|---|---|
| **Pre-condition** | List **must** be sorted |
| **Best case** | Target is the middle element — 1 comparison |
| **Worst case** | ~log₂(n) comparisons |
| **Use when** | List is sorted and large |

**Trace example** — searching for 7 in [1, 3, 5, 7, 9, 11, 13]:

| Iteration | low | high | mid | list[mid] | Action |
|---|---|---|---|---|---|
| 1 | 0 | 6 | 3 | 7 | Found! Return 3 |

---

## Sorting Algorithms

### Bubble Sort

Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

```
PROCEDURE BubbleSort(list[], size)
  FOR i ← 0 TO size - 2
    FOR j ← 0 TO size - 2 - i
      IF list[j] > list[j+1] THEN
        temp ← list[j]
        list[j] ← list[j+1]
        list[j+1] ← temp
      ENDIF
    NEXT j
  NEXT i
ENDPROCEDURE
```

**Trace example** — sorting [5, 3, 8, 1]:

| Pass | List after pass |
|---|---|
| 1 | [3, 5, 1, 8] |
| 2 | [3, 1, 5, 8] |
| 3 | [1, 3, 5, 8] |

| Property | Value |
|---|---|
| **Passes needed** | At most n-1 |
| **Swaps per pass** | Reduces each pass |
| **Best for** | Small or nearly-sorted lists |

### Selection Sort

Finds the smallest element and places it at the start, then repeats for the remaining unsorted portion.

```
PROCEDURE SelectionSort(list[], size)
  FOR i ← 0 TO size - 2
    minIndex ← i
    FOR j ← i + 1 TO size - 1
      IF list[j] < list[minIndex] THEN
        minIndex ← j
      ENDIF
    NEXT j
    IF minIndex ≠ i THEN
      temp ← list[i]
      list[i] ← list[minIndex]
      list[minIndex] ← temp
    ENDIF
  NEXT i
ENDPROCEDURE
```

**Trace example** — sorting [5, 3, 8, 1]:

| Pass | Minimum found | Swap | List |
|---|---|---|---|
| 1 | 1 (index 3) | list[0]↔list[3] | [1, 3, 8, 5] |
| 2 | 3 (index 1) | no swap needed | [1, 3, 8, 5] |
| 3 | 5 (index 3) | list[2]↔list[3] | [1, 3, 5, 8] |

### Insertion Sort

Builds a sorted sub-list one element at a time by inserting each new element into its correct position.

```
PROCEDURE InsertionSort(list[], size)
  FOR i ← 1 TO size - 1
    key ← list[i]
    j ← i - 1
    WHILE j ≥ 0 AND list[j] > key
      list[j+1] ← list[j]
      j ← j - 1
    ENDWHILE
    list[j+1] ← key
  NEXT i
ENDPROCEDURE
```

**Trace example** — sorting [5, 3, 8, 1]:

| Step | Key | List |
|---|---|---|
| i=1 | 3 | [3, 5, 8, 1] |
| i=2 | 8 | [3, 5, 8, 1] |
| i=3 | 1 | [1, 3, 5, 8] |

### Sorting Algorithm Comparison

| Algorithm | Best case | Worst case | Good for |
|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | Nearly sorted data |
| Selection Sort | O(n²) | O(n²) | Small lists |
| Insertion Sort | O(n) | O(n²) | Small or nearly sorted data |

---

## Data Validation and Verification

### Validation

**Validation** checks that data is **reasonable and within expected rules** before it is accepted.

| Check | What it does | Example |
|---|---|---|
| **Range check** | Is the value within an acceptable range? | Age must be 0–120 |
| **Type check** | Is the data the correct type? | Must be a number |
| **Length check** | Is the data the correct length? | Password must be 8–20 chars |
| **Presence check** | Has the field been filled in? | Name cannot be blank |
| **Format check** | Does it match a required pattern? | Date must be DD/MM/YYYY |
| **Lookup check** | Is the value in an accepted list? | Gender: M or F only |

Validation **cannot** detect all errors — a valid value can still be wrong (e.g., correct type but wrong number).

### Verification

**Verification** checks that data has been **entered correctly** (same as source).

Two common methods:
- **Double entry** — data is typed twice; the system flags any mismatch
- **Proofreading** — a human reads through to check for mistakes

> **Key distinction:** Validation checks whether data is *reasonable*. Verification checks whether data matches the *original source*.

---

## Using 2D Arrays

A **2D array** stores data in a grid (rows and columns).

```
DECLARE grid[3][3]
grid[0][0] ← 1
grid[0][1] ← 2
grid[1][0] ← 3
```

To traverse a 2D array, use nested loops:

```
FOR row ← 0 TO 2
  FOR col ← 0 TO 2
    OUTPUT grid[row][col]
  NEXT col
NEXT row
```

**Example use cases:** seating plans, game boards, pixel grids, times tables.
