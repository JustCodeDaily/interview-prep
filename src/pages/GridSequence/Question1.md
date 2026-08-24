# Problem Statement: Grid Sequence Selector Component

## Overview

Build a React component that displays an interactive 3×3 grid of clickable squares where users can select squares in any order, with visual feedback and automatic reverse deselection once all squares are selected.

---

## Requirements

### Functional Requirements

#### 1. Grid Layout
- Display a 3×3 grid (9 total positions)
- Center square (position 4) is **non-interactive** and invisible (does not appear)
- Remaining 8 squares are **clickable buttons**
- Grid positions numbered 1–9 (skip 5 for center)

#### 2. Square Styling
- Size: 30×30 pixels (or equivalent)
- Default state: transparent background + outline border (gray)
- Selected state: green background + green border
- Appearance: button-like (hover effects, pointer cursor)
- Responsive to user interaction

#### 3. Selection Behavior
- **Click unselected square** → Turn green + add to sequence list
- **Click selected square** → Turn back to outline (deselect) + **do not** add to sequence list
- Squares can be toggled in any order, unlimited times
- User can build and rebuild selections freely

#### 4. Sequence Memory
- Track **only** selections (when a square is clicked to turn green)
- **Ignore** deselections (when a square is clicked to turn off)
- Sequence list records the order: `[0, 3, 7, 2, ...]`
- Display sequence in real-time: "Sequence: 1 → 4 → 8 → 3"

#### 5. Terminal Condition (All 8 Selected)
- When all 8 non-center squares are selected (green):
  - Trigger **reverse auto-deselect** animation
  - Deselect squares in reverse order of selection
  - 200ms delay between each deselect
  - Block user clicks during animation

#### 6. Reverse Animation
- Query the sequence list in reverse order
- Example: if user selected `[0, 3, 7, 2]`, reverse deselect as `[2, 7, 3, 0]`
- Animate each deselect (smooth color transition)
- Delay: 200ms between each square turning off
- Once complete: clear sequence, reset to "none", allow new clicks

#### 7. Reset Functionality
- Button to manually reset all selections
- Clear the `selected` set
- Clear the `sequence` array
- Stop any ongoing animation
- Return to initial state

---

## State Management

### State Variables Required

```
selected: Set<number>
  - Tracks which squares are currently green
  - Positions: 0-3, 5-8 (skip 4)
  - Example: {0, 2, 5}

sequence: Array<number>
  - Tracks order of selections only
  - Grows when user clicks to select
  - Does not change when user deselects
  - Reversed for auto-deselect animation
  - Example: [0, 3, 7, 2]

isReverting: boolean (optional)
  - True during reverse animation
  - Prevents user clicks while animating
  - Example: true while squares fade out
```

---

## User Interaction Flow

### Flow 1: Normal Selection
```
User clicks square 1 (position 0)
  → Check if position 0 is in `selected`
  → If NO: add to `selected`, add to `sequence`
  → Update UI: square 1 turns green
  → Display: "Selected: 1/8 | Sequence: 1"
```

### Flow 2: Deselection
```
User clicks green square 1 (position 0)
  → Check if position 0 is in `selected`
  → If YES: remove from `selected`, DO NOT modify `sequence`
  → Update UI: square 1 turns back to outline
  → Display: "Selected: 0/8 | Sequence: 1" (sequence unchanged!)
```

### Flow 3: All Selected (Auto-Reverse)
```
User clicks 8th square to complete selection
  → Detect: selected.size === 8
  → Trigger reverse animation:
    - For each position in reverse(sequence):
      - Wait 200ms
      - Remove from `selected`
      - Update UI: square turns outline
  → After all deselect:
    - Clear `sequence` array
    - Display: "Sequence: none"
    - Allow new clicks
```
---

## Success Criteria

### Display
- [ ] 3×3 grid renders correctly
- [ ] Center square is invisible but space is preserved
- [ ] All 8 squares are visible and labeled (1-9, skip 5)
- [ ] Grid is centered and well-spaced

### Interaction
- [ ] Clicking unselected square turns it green
- [ ] Clicking selected square turns it back to outline
- [ ] Squares toggle correctly in any order
- [ ] Sequence counter updates in real-time

### Sequence Tracking
- [ ] Sequence shows only selections, not deselections
- [ ] Sequence displays in order with arrow separators (1 → 4 → 8)
- [ ] Sequence updates live as user clicks

### Terminal Behavior
- [ ] When all 8 selected, reverse animation triggers automatically
- [ ] Squares deselect in reverse order
- [ ] 200ms delay between each deselect
- [ ] Animation is smooth and visible
- [ ] User clicks are blocked during animation
- [ ] After animation completes, sequence resets to "none"
- [ ] New clicks are accepted after reset

### Reset
- [ ] Reset button clears all selections
- [ ] Reset button clears sequence
- [ ] Reset can interrupt animation
- [ ] Grid returns to initial state

---

## Technical Constraints

### Technology Stack
- React (Hooks: `useState`)
- Tailwind CSS for styling
- TypeScript (recommended but optional)

### Performance
- Grid should render instantly (9 items is trivial)
- Animations should be smooth (no jank)
- No external animation libraries required (CSS transitions OK)

### Accessibility
- Buttons should have `title` attributes
- Cursor should indicate clickability
- Disabled state should be visually distinct during animation

### Browser Support
- Modern browsers (ES6+)
- CSS Grid support required
- CSS Transitions support required

---

## Out of Scope

- Mobile touch optimizations (desktop-first)
- Sound effects
- Difficulty levels or game modes
- High score persistence
- Multiplayer features
- Mobile app version

---

## Deliverable

A single React component (`App.tsx` or `GridSequence.tsx`) that:
1. Accepts no props (self-contained)
2. Exports as default export
3. Works in a Vite + Tailwind environment
4. Includes all functionality described above
5. Is production-ready (clean code, no console errors)

---

## Example User Session

```
1. User sees: "Selected: 0/8 | Sequence: none"
2. User clicks square 1 → "Selected: 1/8 | Sequence: 1"
3. User clicks square 5 → "Selected: 2/8 | Sequence: 1 → 5"
4. User clicks square 1 (deselect) → "Selected: 1/8 | Sequence: 1 → 5" (unchanged!)
5. User clicks square 3 → "Selected: 2/8 | Sequence: 1 → 5 → 3"
6. User continues until all 8 selected → Animation triggers
7. Squares deselect in reverse: 3, 5, 1, [and so on]
8. When done → "Selected: 0/8 | Sequence: none"
9. User can start over
```
