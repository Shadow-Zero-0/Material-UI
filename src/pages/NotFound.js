
import { Box, Typography, useTheme } from '@mui/material';
const NotFound = () => {
    const theme = useTheme()
    return (
        <Box>
            <Typography variant="h4" color={theme.palette.mode.main}>Not Found</Typography>
        </Box>
    );
}

export default NotFound;
