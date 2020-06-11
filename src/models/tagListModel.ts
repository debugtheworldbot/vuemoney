import stringMatching = jasmine.stringMatching;

const localStorageKeyName='tagList'
type TagListModel={
    data: string[]
    fetch: ()=>string[]
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
if(this.data){
            if (this.data.indexOf(name!) >= 0) {
                window.alert('标签名已存在')
            }else if(name){
                this.data.push(name)
                this.save()

            }
        }
        return name

    }

}
export {tagListModel}