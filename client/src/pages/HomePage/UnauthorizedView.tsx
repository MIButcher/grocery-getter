import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UnauthorizedView() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 4,
        backgroundColor: '#28343C',
        color: 'var(--text-primary)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        🚫 Unauthorized Access
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 400, marginBottom: 3 }}>
        You don’t have permission to view this page. Please check your access level or return to a safe location.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/user')}>
        Go to Home
      </Button>
    </Box>
  );
}