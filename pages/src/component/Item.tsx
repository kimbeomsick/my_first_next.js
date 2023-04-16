


export default function Item(props:any){


    const {item} = props
    return (
        <div dangerouslySetInnerHTML={{__html: item}} />
    )
}