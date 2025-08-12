import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="footer" sx={{ mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FlightTakeoffIcon sx={{ mr: 1 }} />
              <Typography variant="h6" component="div">
                Wise Tours and Travel
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Explore the beauty of Uganda with our premium travel and tour services. We offer unforgettable experiences with expert guides.
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="div" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <List dense disablePadding>
              <ListItem disableGutters>
                <ListItemText>
                  <Link component={RouterLink} to="/" color="inherit" underline="hover">
                    Home
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link component={RouterLink} to="/about" color="inherit" underline="hover">
                    About Us
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link component={RouterLink} to="/tours" color="inherit" underline="hover">
                    Tours
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link component={RouterLink} to="/contact" color="inherit" underline="hover">
                    Contact Us
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="div" sx={{ mb: 2 }}>
              Popular Tours
            </Typography>
            <List dense disablePadding>
              <ListItem disableGutters>
                <ListItemText>
                  <Link component={RouterLink} to="/tours/1" color="inherit" underline="hover">
                    Bwindi Gorilla Trekking
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link component={RouterLink} to="/tours/2" color="inherit" underline="hover">
                    Murchison Falls Safari
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link component={RouterLink} to="/tours/3" color="inherit" underline="hover">
                    Queen Elizabeth National Park
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem disableGutters>
                <ListItemText>
                  <Link component={RouterLink} to="/tours/4" color="inherit" underline="hover">
                    Lake Mburo Wildlife
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="div" sx={{ mb: 2 }}>
              Contact Info
            </Typography>
            <List dense disablePadding>
              <ListItem disableGutters sx={{ mb: 1 }}>
                <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2">
                  123 Kampala Road, Kampala, Uganda
                </Typography>
              </ListItem>
              <ListItem disableGutters sx={{ mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2">
                  +256 750 061 926
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2">
                  info@wisetoursandtravel.com
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', pt: 3, mt: 3, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Wise Tours and Travel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
