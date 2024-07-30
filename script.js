//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let highest = -Infinity;
    let secondHighest = -Infinity;

    for (const num of arr) {
        if (num > highest) {
            secondHighest = highest;
            highest = num;
        } else if (num > secondHighest && num < highest) {
            secondHighest = num;
        }
    }

    return secondHighest === -Infinity ? -Infinity : secondHighest;
}

function calculateSecondHighest() {
    const input = document.getElementById('arrayInput').value;
    let array;

    try {
        array = JSON.parse(input);
        if (!Array.isArray(array)) throw new Error();
    } catch (e) {
        document.getElementById('result').textContent = 'Invalid input. Please enter a valid array.';
        return;
    }

    const result = secondHighest(array);
    document.getElementById('result').textContent = result === -Infinity ? 'No valid second highest element' : `Second highest element is: ${result}`;
}
