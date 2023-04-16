//에러페이지를 정적으로 최적화 되지 않는다. 
//서버페이지에서 에러페이지를 정적으로 처리하지 않는이유는 에러가 발생했을 경우에 서버쪽으로 에러를 동반한 메시지를 보내는 경우가 있다. 
// 어떤 에러가 나왔다는걸 log로 남기기위해서다
// 근데 정적페이지로 만들면 서버로 에러가 가지 않기 때문에 안됨

function Error({statusCode}:any){
    console.log("statusCode >>> ",statusCode)
    return(
        <>
            <p>
                {statusCode?(
                    `An error ${statusCode} occurred on server`
                ) : (
                    "An error occurred on clinet"
                )}
            </p>
        </>
    )
}

//클라이언트와 서버측 에러를 모두 여기서 관리할 수 있다. 
Error.getInitialProps = ({res,err}:any) =>{
    //여기서 404도 처리할 수 있지만 404는 굳이 서버까지 다녀오지 않아도 되기때문에 404.tsx파일로 만들어 주었다. 
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {statusCode};
}

export default Error;