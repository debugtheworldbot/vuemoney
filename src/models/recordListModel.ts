const localStorageKeyName='recordList'
const recordListModel=  {
    data:[] as RecordItem[],
    fetch(){
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[]
        return this.data
    },
    create(record:RecordItem){
        const deepClone=recordListModel.clone(record)
        deepClone.createdAt=new Date()
        this.data.push(deepClone)
        this.save()
    },
    save(){
        return  window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data))
    },
    clone(data:RecordItem | RecordItem[]){
        return JSON.parse(JSON.stringify(data))
    }
}
export {recordListModel}