import '../../App.css';
import * as React from 'react';
import {Stack} from "@mui/material";

function Timer(){
  const [counter, setCounter] = React.useState(10);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <Stack direction="column" alignItems="center" justifyContent="center" fontSize="100px" color="white">
        {counter}
    </Stack>
  );
}
  
  export default Timer;