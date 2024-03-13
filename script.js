const link = document.getElementById('p-link');

const linkDisplay = () => {
    let linkArr = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram'];

    for (let i = 0 ; i < linkArr.length ; i++) {
        //turn every item in the array into a li element
        const li = document.createElement('li');
        li.textContent = linkArr[i];
        link.appendChild(li);
        li.classList.add('pro-links');
    }
}

linkDisplay();