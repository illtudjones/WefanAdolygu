# Principles of Programming

## Variables and constants

- A **variable** is a named storage location whose value can change while the program runs.
- A **constant** is a named value that is set once and cannot be changed during execution.
- Good practice is to give variables and constants meaningful names.

## Data types

| Data type | Description | Example |
|-----------|-------------|---------|
| **Integer** | Whole number (positive or negative) | `42`, `-7` |
| **Real / Float** | Number with a decimal point | `3.14`, `-0.5` |
| **Boolean** | True or False only | `True` |
| **Character** | A single character | `'A'`, `'3'` |
| **String** | A sequence of characters | `"Hello"` |

The correct data type must be chosen for each piece of data — using the wrong type wastes memory or causes errors.

## Operators

**Arithmetic operators:** `+` `-` `*` `/` `MOD` (remainder) `DIV` (integer division)

**Comparison operators:** `=` `≠` `<` `>` `≤` `≥`

**Logical operators:** `AND` `OR` `NOT`

**String operator:** `&` or `+` for concatenation — joining strings together.

## Sequence

- Instructions are executed **one after another** in the order they are written.
- This is the default flow of any program.

## Selection

- Selection lets a program choose between different paths based on a condition.

**IF statement:**
```
IF score >= 50 THEN
    PRINT "Pass"
ELSE
    PRINT "Fail"
END IF
```

**CASE / SELECT statement** — used when testing one variable against many possible values:
```
CASE grade OF
    'A': PRINT "Excellent"
    'B': PRINT "Good"
    OTHERWISE: PRINT "See teacher"
END CASE
```

## Iteration (loops)

Iteration repeats a block of code. There are three types:

**Count-controlled (FOR loop)** — repeats a fixed number of times:
```
FOR i = 1 TO 10
    PRINT i
NEXT i
```

**Condition-controlled (WHILE loop)** — repeats while a condition is true, checked **before** each iteration:
```
WHILE answer <> "yes"
    INPUT answer
END WHILE
```

**Post-condition (REPEAT…UNTIL)** — repeats until a condition is true, checked **after** each iteration (always runs at least once):
```
REPEAT
    INPUT answer
UNTIL answer = "yes"
```

## Subroutines

A subroutine is a named, reusable block of code that can be called from elsewhere in the program.

- **Procedures** perform an action but do not return a value.
- **Functions** perform an action and **return** a value.

```
FUNCTION square(n)
    RETURN n * n
END FUNCTION
```

**Benefits of subroutines:**
- Avoids repeating the same code (code reuse)
- Makes programs shorter and easier to read
- Easier to test and debug individual sections
- Can be reused across multiple programs

## Parameters and arguments

- A **parameter** is the variable name used in the subroutine definition.
- An **argument** is the actual value passed in when the subroutine is called.
- **Local variables** exist only within the subroutine and are destroyed when it ends.
- **Global variables** are accessible throughout the entire program.

Using local variables is preferred as it avoids unintended side-effects on the rest of the program.
