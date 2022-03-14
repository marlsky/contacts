const modal = document.querySelector(".modal")


const inputs = document.querySelectorAll('input')

inputs.forEach(el =>{
    el.addEventListener("click", ()=>{
       el.previousElementSibling.classList.add('focused')
        
        
    })
})
inputs.forEach(el =>{
    el.addEventListener("blur", ()=>{
       el.previousElementSibling.classList.remove('focused')
        
        
    })
})
//modal//////////////////////////////////
function openModal(modal) {
    if (modal == null) return
    modal.classList.add("enable")
    
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove("enable")
    
}

let isClicked = false
document.querySelector('.add').addEventListener('click', () =>{
    if(!isClicked){
    
    openModal(modal)
    isClicked = true
    }else{
        closeModal(modal)
        isClicked = false
    }
})

///contacts/////////////////////

let list = [
    {
        name: "Adam Kowalski",
        phone: "+48 123 123 123"
    },
    {
        name: "Tomek Kowalski",
        phone: "+48 123 123 123"
    },
    {
        name: "Mariusz Jagielski",
        phone: "+48 123 123 123"
    },
    {
        name: "Wiktor Zborawski",
        phone: "+48 123 123 123"
    },
    {
        name: "Julisz Słowacki",
        phone: "+48 123 123 123"
    },
    {
        name: "Cezary Kowalski",
        phone: "+48 123 123 123"
    },
    {
        name: "Wiktor Zborawski",
        phone: "+48 123 123 123"
    },
    {
        name: "Julisz Słowacki",
        phone: "+48 123 123 123"
    },
    {
        name: "Cezary Kowalski",
        phone: "+48 123 123 123"
    }
]

const renderContacts = ()=>{
    const contact = document.querySelector('.contacts')
    contact.innerHTML = ""
    list.sort((a, b) => a.name.localeCompare(b.name))
    list.forEach((cont) =>{
    contact.innerHTML += `
        <ul>
            <div>
                <li class="contact-name">${cont.name}</li>
                <li class="contact-phone">${cont.phone}</li>
            </div>
            <div class="trash">
           
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6625 21.0833H8.3375C7.37917 21.0833 6.56458 20.4125 6.42083 19.4542L4.3125 5.27083H18.6875L16.5312 19.4542C16.3875 20.4125 15.5729 21.0833 14.6625 21.0833Z" fill="#B39DDB"/>
                <path d="M18.2083 6.22917H4.79166C4.26458 6.22917 3.83333 5.79792 3.83333 5.27083C3.83333 4.74375 4.26458 4.3125 4.79166 4.3125H18.2083C18.7354 4.3125 19.1667 4.74375 19.1667 5.27083C19.1667 5.79792 18.7354 6.22917 18.2083 6.22917Z" fill="#7E57C2"/>
            </svg>
           
            </div>
        </ul>
        
    `
})

}
renderContacts()


    const nameField = document.querySelector('.name')
    const phoneField = document.querySelector('.phone')
    const add = document.querySelector('.add-contact')
    const h4 = document.querySelector("h4")

    add.addEventListener("click", ()=>{
        if(!nameField.value && !phoneField.value){
            h4.innerHTML += "Enter Name and Number!"
           
        }else{
            const newContact = {
                name: nameField.value,
                phone: phoneField.value
                
            }
        list.unshift(newContact)
        
        renderContacts()
        closeModal(modal)
        nameField.value = ""
        phoneField.value = ""
        }
        
    
    })

    
document.querySelector('.contacts').addEventListener('click', (e)=>{
    if(e.target.tagName === "svg"){
       
        e.target.closest('ul').classList.add('anime')
        const trashes = [...document.querySelectorAll('.trash svg')]
        const trashIndex = trashes.indexOf(e.target)
       console.log(trashIndex);
        list = list.filter((el, index)=>{
        return index !== trashIndex
        })
        setTimeout(renderContacts, 1000);
        
    }
})

///search///////////////////

const clearResults = ()=>{
    const results = document.querySelector(".contacts")
    results.innerHTML = ""
}

const getResults = ()=>{
    const search = document.querySelector(".search-input").value
    const h3 = document.querySelector("h3")

    if(search === ""){
        h3.innerHTML = "A"
    }else{
        let firstChar = search.charAt(0)
        h3.innerHTML = firstChar.toUpperCase()
    }
    clearResults()
 
    for(let i = 0; i < list.length; i++){
        if(list[i].name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            const results = document.querySelector(".contacts")
           
            results.innerHTML += `
            <ul>
            <div>
                <li class="contact-name">${list[i].name}</li>
                <li class="contact-phone">${list[i].phone}</li>
            </div>
            <div class="trash">
           
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6625 21.0833H8.3375C7.37917 21.0833 6.56458 20.4125 6.42083 19.4542L4.3125 5.27083H18.6875L16.5312 19.4542C16.3875 20.4125 15.5729 21.0833 14.6625 21.0833Z" fill="#B39DDB"/>
                <path d="M18.2083 6.22917H4.79166C4.26458 6.22917 3.83333 5.79792 3.83333 5.27083C3.83333 4.74375 4.26458 4.3125 4.79166 4.3125H18.2083C18.7354 4.3125 19.1667 4.74375 19.1667 5.27083C19.1667 5.79792 18.7354 6.22917 18.2083 6.22917Z" fill="#7E57C2"/>
            </svg>
           
            </div>
        </ul>
            `
        }
    }
}

const search = document.querySelector(".search-input")
search.addEventListener("keyup", getResults)

