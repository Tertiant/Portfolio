
const TH_Context = document.querySelector('#TH_Context');

//@ts-ignore
fs.readFile('../../textContent/TH_Context', (err, data) => {
    if (err) throw err;
    
    //@ts-ignore
    TH_Context.innerHTML = data.toString();
})



