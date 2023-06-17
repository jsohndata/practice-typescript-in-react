const Array = () => {
  const array1: number[] = [1, 2, 3, 4, 5];
  const array2: Array<string> = ["a", "b", "c", "d", "e"];

  // Tuple
  const array3: [string, number] = ["Hello", 43];


  return (
    <>
    {array1} typeof {typeof array1}
    {array2} typeof {typeof array2}
    {array3} typeof {typeof array3}
    </>
  );

}

export default Array;