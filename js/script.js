const $ = (id) => document.getElementById(id)

window.addEventListener('load',()=>{
    const form = document.getElementById('empForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formVal = [$('id').value, $('name').value, $('ext').value, $('email').value, $('department').value]
        console.log(`ID: ${formVal[0]}\nName: ${formVal[1]}\nExtension: ${formVal[2]}\nEmail: ${formVal[3]}\nDepartment: ${formVal[4]}`);
        })
    })
