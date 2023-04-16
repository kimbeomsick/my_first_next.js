import { Icon } from "semantic-ui-react"

// 이파일은 빌드타임에 정적 생성된다. 즉 변할 필요가 없는 파일이기 때문에 정적 생성 되는것이다. 
// 다만 404는 static 파일로 두는게 좋다. 
export default function Error404(){
    
    return <div style={{ padding:"200px 0", textAlign:"center", fontSize:30}}>
        <Icon name="warning circle" color="red"></Icon>
        404 : 페이지를 찾을 수 없습니다.
         </div>
}