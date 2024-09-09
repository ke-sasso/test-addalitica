const students = [
    { firstName: 'Aldous', lastName: 'Huxley', age: 19, grades: [8.5, 7, 9] },
    { firstName: 'José', lastName: 'Ingenieros', age: 67, grades: [4, 6.5, 8] },
    { firstName: 'Albert', lastName: 'Hoffman', age: 44, grades: [7.5, 8, 8] },
    { firstName: 'George', lastName: 'Orwell', age: 54, grades: [5.5, 6, 7] },
    { firstName: 'Slavoj', lastName: 'Zizek', age: 28, grades: [5, 6, 9] },
];

const calculateAverage = (grades) => {
    return grades.reduce((a, b) => a + b, 0) / grades.length;
};

students.forEach(student => {
    student.average = calculateAverage(student.grades);
});
students.sort((a, b) => a.average - b.average);

const averages = students.map(student => student.average);
const calculateMedian = (arr) => {
    const mid = Math.floor(arr.length / 2);
    arr.sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};
const medianAverage = calculateMedian(averages);

const grid = document.getElementById('grid');
students.forEach(student => {
    const card = document.createElement('div');
    card.className = 'card';
    if (student.average > calculateAverage(averages)) {
        card.classList.add('above-average');
    }
    card.innerHTML = `
        <h2>${student.firstName} ${student.lastName}</h2>
        <p>Age: ${student.age}</p>
        <p>Average: ${student.average.toFixed(2)}</p>
    `;
    grid.appendChild(card);
});