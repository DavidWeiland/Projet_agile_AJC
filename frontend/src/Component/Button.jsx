export const Button = ({action, text})=>{
return(
    <div onClick={action}>{text}</div>
)
}