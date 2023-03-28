let information = document.querySelector('#name')

async function getData () {
    console.log('check')
    let data = await fetch('http://127.0.0.1:5000/data').then((response) => response.json())
    information.innerText = `Name: ${data.name}`
}

getData()
