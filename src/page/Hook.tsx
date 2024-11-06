import { Box, Button, ButtonGroup, Link, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";



const Hook = () => {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      <Typography variant="h4" component="h2">
        Hook
      </Typography>
     
        <Button>
          <Link href="/hooks/usestate" underline="none">
            useState
          </Link>
        </Button>
        <Button>
          <Link href="/hooks/usecontext" underline="none">
            useContext
          </Link>
        </Button>
        <Button>
          <Link href="/hooks/usecallback" underline="none">
            useCallback
          </Link>
        </Button>
        <Button>
          <Link href="/hooks/useeffect" underline="none">
          useEffect
          </Link>
        </Button>
        <Button>
          <Link href="/hooks/usememo" underline="none">
            useMemo
          </Link>
        </Button>
        
   

      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Hook;
