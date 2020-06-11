const localStorageKeyName='recordList'
const recordListModel=  {
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[]
    },
    save(recordList:RecordItem[]){
        return  window.localStorage.setItem(localStorageKeyName,JSON.stringify(recordList))
    },
    clone(data:RecordItem | RecordItem[]){
        return JSON.parse(JSON.stringify(data))
    }
}
export {recordListModel}