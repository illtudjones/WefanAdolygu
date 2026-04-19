# Software Engineering

## The Software Development Life Cycle (SDLC)

The SDLC is a structured process for planning, creating, testing and delivering software. It has six main stages:

| Stage | Description |
|-------|-------------|
| **1. Analysis** | Understand the problem; identify user requirements; produce a requirements specification |
| **2. Design** | Plan the solution — data structures, algorithms, interface, testing strategy |
| **3. Development** | Write the code according to the design |
| **4. Testing** | Verify the software works correctly and meets requirements |
| **5. Implementation** | Deploy the software for users; train staff if needed |
| **6. Maintenance** | Fix bugs, update for new requirements and operating environments |

## SDLC models

### Waterfall model
- Strictly **linear** — each stage must be completed before the next begins.
- Advantages: clear milestones, easy to manage, good documentation.
- Disadvantages: difficult to go back and fix earlier stages; client sees the product only at the end.

### Iterative / agile model
- Software is developed in **repeated cycles** (iterations or sprints), each producing a working version.
- Client reviews progress at the end of each iteration and feedback shapes the next.
- Advantages: flexible to changing requirements; client involvement throughout; early working software.
- Disadvantages: harder to predict final cost and timeline; requires active client participation.

### Spiral model
- Combines iterative development with risk analysis at each cycle.
- Each spiral passes through planning, risk analysis, development and evaluation.
- Advantages: suitable for large, high-risk projects; risk is managed throughout.
- Disadvantages: complex, expensive, requires expertise in risk assessment.

## Testing strategies

### Types of testing

| Type | Description |
|------|-------------|
| **Unit testing** | Test each individual module or function in isolation |
| **Integration testing** | Test that modules work correctly together |
| **System testing** | Test the complete system against the requirements |
| **Acceptance testing** | Client checks the system meets their requirements |
| **Regression testing** | Re-run tests after a change to check nothing is broken |

### Black-box vs white-box testing

- **Black-box testing** — tester does not know the internal code; tests inputs and expected outputs only.
- **White-box testing** — tester knows the code structure; tests that every path through the code is exercised.

### Test data

Good testing uses three categories of test data:

| Category | Meaning | Example (age 0–120) |
|----------|---------|---------------------|
| **Normal / valid** | Values that should be accepted | `25` |
| **Boundary / extreme** | Values at the edge of valid range | `0`, `120` |
| **Erroneous / invalid** | Values that should be rejected | `-1`, `200`, `"abc"` |

## IDE tools

An Integrated Development Environment (IDE) provides tools in one application to support the full development process:

- **Code editor** — syntax highlighting, auto-complete
- **Translator** — compiler or interpreter built in
- **Debugger** — step through code line by line; set breakpoints; inspect variable values
- **Error diagnostics** — highlight syntax errors as you type
- **Version control integration** — track changes and collaborate (e.g. Git)
- **Run environment** — execute the program without leaving the IDE

## Documentation

Good documentation is produced throughout the SDLC:

- **Requirements specification** — what the system must do
- **Design documentation** — data structures, algorithms, screen layouts
- **Technical documentation** — how the code works; for future developers
- **User documentation** — how to use the finished system
