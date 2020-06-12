const localStorageKeyName='tagList'
type Tag={
    id:string
    name:string
}
type TagListModel={
    data: Tag[]
    fetch: ()=>Tag[]
    create: (name:string)=>string
    save:()=>void
}
const tagListModel:TagListModel=  {
    data:[],
    fetch(){
        this.data =JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        return this.data
    },
    save(){
        return  window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data))
    },
    create(name){
        const names=this.data.map(item=>item.name)
            if (names.indexOf(name!) >= 0) {
                window.alert('标签名已存在')
            }else if(name){
                this.data.push({id:name,name:name})
                this.save()
            }
        return name
    }

}
export {tagListModel}