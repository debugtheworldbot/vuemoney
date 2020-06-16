type RecordItem={
    tags:string[]
    types:'-'|'+'
    notes:string
    amount:number
    createdAt?:Date
}
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
interface Window {
    tagList:Tag[]
    createTag:(name:string)=>void
}