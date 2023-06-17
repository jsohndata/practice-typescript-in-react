
interface UserMessage {
  name: string;
  message: string;
}

const Interface = (props: UserMessage) => {

  return(
    <>
      <p>{props.name} {props.message}</p>
    </>
  )
}

export default Interface;