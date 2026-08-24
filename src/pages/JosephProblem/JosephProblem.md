# Joseph Problem

## Problem Statement

There are `n` people standing in a circle waiting to be executed. The counting out begins at some point in the circle and proceeds around the circle in a fixed direction. In each step, a certain number of people are skipped and the next person is executed. The elimination proceeds around the circle (which is becoming smaller and smaller as the executed people are removed), until only the last person remains, who is given freedom.

Given the total number of persons `n` and a number `k` which indicates that `k-1` persons are skipped and the `k`-th person is killed in a circle. The task is to choose the place in the initial circle so that you are the last one remaining and so survive.

## Example 1
**Input:** n = 5, k = 2
**Output:** 3

## Constraints
- `1 <= n <= 100`
- `1 <= k <= 100`
