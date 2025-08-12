import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

interface Submission {
  id: number;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  message: string;
  submittedAt: string;
}

const Admin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/view-submissions', {
        headers: {
          Authorization: `Basic ${btoa(`Admin:${password}`)}`,
        },
      });

      if (response.status === 401) {
        throw new Error('Invalid password. Please try again.');
      }

      if (!response.ok) {
        throw new Error('An error occurred while fetching submissions.');
      }

      const data = await response.json();
      setSubmissions(data);
      setIsLoggedIn(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Optional: Check if already logged in from a previous session
    // This is a simple implementation. For production, use more secure session management.
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        // You might want to re-validate the session here
    }
  }, []);

  if (isLoggedIn) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Form Submissions
        </Typography>
        <Paper elevation={3} sx={{ mt: 4 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {submissions.length > 0 ? (
                  submissions.map((sub) => (
                    <TableRow key={sub.id}>
                      <TableCell>{new Date(sub.submittedAt).toLocaleString()}</TableCell>
                      <TableCell>{sub.name}</TableCell>
                      <TableCell>{sub.email}</TableCell>
                      <TableCell>{sub.phone || 'N/A'}</TableCell>
                      <TableCell>{sub.country || 'N/A'}</TableCell>
                      <TableCell sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                        {sub.message}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No submissions yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Admin Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            required
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={loading}
            fullWidth
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default Admin;
