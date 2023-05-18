document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    console.log(data);
    let res = await fetch('index.php' , {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
    })
    let resp = await res.json()
    console.log(resp);
}) 