const Basic = () => {
  const value1: string = "Hello Universe!";
  const value2: number = 42;
  const value3: boolean = true;

  return(
    <>
      <p>{value1} typeof {typeof value1}</p>
      <p>{value2} typeof {typeof value2}</p>
      <p>{value3} typeof {typeof value3}</p>
    </>
  )
}

export default Basic;