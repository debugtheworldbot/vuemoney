
let id:number = JSON.parse(window.localStorage.getItem('idMax') || '0') || 0

function createId() {
    id+=1
    return id
}

export {createId}