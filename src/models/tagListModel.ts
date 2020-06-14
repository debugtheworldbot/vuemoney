import {createId} from "@/lib/createId";

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
    update:(id:string,name:string)=>'success'|'not found'|'duplicated'
    remove:(id:string)=>'success'|'not found'
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
                const id=createId().toString()
                this.data.push({id:id,name:name})
                this.save()
            }
        return name
    },
    update(id,name){
        const idList=tagListModel.data.map(item=>item.id)
        if(idList.indexOf(id)>=0){
            const nameList=tagListModel.data.map(item=>item.name)
            if(nameList.indexOf(name)>=0){
                alert('标签名已存在')
                return  'duplicated'
            }else {
                const tag=tagListModel.data.filter(item=>item.id===id)[0]
                tag.name=name
                this.save()
                return  'success'
            }
        }else{
            return 'not found'
        }
    },
    remove(id){
        const tag=tagListModel.data.filter(item=>item.id===id)[0]
        const index = this.data.indexOf(tag)
        this.data.splice(index,1)
        this.save()
        return 'success'

    }

}
export {tagListModel}