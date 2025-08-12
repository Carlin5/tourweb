import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LuggageIcon from '@mui/icons-material/Luggage';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const Transfers: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const transferServices = [
    {
      title: 'Airport to Hotel',
      icon: <FlightLandIcon color="primary" />,
      description: 'Comfortable and timely transfers from Entebbe International Airport to your hotel in Kampala or Entebbe.',
      features: [
        'Meet and greet at the airport',
        'Flight monitoring for delays',
        '45-60 minutes to Kampala',
        '20-30 minutes to Entebbe hotels'
      ]
    },
    {
      title: 'Hotel to Airport',
      icon: <FlightTakeoffIcon color="primary" />,
      description: 'Reliable transfers from your hotel to Entebbe International Airport with ample time for check-in.',
      features: [
        'Timely pick-up from your hotel',
        'Flight schedule monitoring',
        'Professional drivers',
        'Luggage assistance'
      ]
    },
    {
      title: 'Hotel to Hotel',
      icon: <HotelIcon color="primary" />,
      description: 'Seamless transfers between hotels within Kampala, Entebbe, and other major towns.',
      features: [
        'Door-to-door service',
        'Flexible timing',
        'Professional drivers',
        'Real-time traffic updates'
      ]
    },
    {
      title: 'VIP & Group Transfers',
      icon: <AirportShuttleIcon color="primary" />,
      description: 'Exclusive transfer services for VIP clients and groups with customized requirements.',
      features: [
        'Luxury vehicle options',
        'Bilingual driver/guide',
        'Complimentary water',
        'Customized sightseeing options'
      ]
    }
  ];

  const vehicleTypes = [
    {
      name: 'Standard Sedan',
      capacity: '1-3 passengers',
      luggage: '2-3 suitcases',
      features: ['Air conditioning', 'Comfortable seating', 'Professional driver']
    },
    {
      name: 'Executive SUV',
      capacity: '1-4 passengers',
      luggage: '4-5 suitcases',
      features: ['Luxury vehicle', 'Extra legroom', 'Bottled water', 'Wi-Fi']
    },
    {
      name: 'Minivan',
      capacity: '1-7 passengers',
      luggage: '7-10 suitcases',
      features: ['Spacious interior', 'Ideal for groups', 'Child seats available']
    },
    {
      name: 'Coaster Bus',
      capacity: 'Up to 25 passengers',
      luggage: 'Storage compartment',
      features: ['Large groups', 'Tour groups', 'Airport shuttles']
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 12,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
            Airport & Hotel Transfers
          </Typography>
          <Typography variant="h5" component="h2" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
            Safe, comfortable, and reliable transportation services across Uganda
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            component={RouterLink} 
            to="/contact"
            startIcon={<ContactSupportIcon />}
          >
            Book Your Transfer
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 600, mb: 6 }}>
          Our Transfer Services
        </Typography>
        
        <Grid container spacing={4}>
          {transferServices.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                elevation={3} 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2, color: 'primary.main' }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  <List dense>
                    {service.features.map((feature, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 600, mb: 6 }}>
            Why Choose Our Transfer Services
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center" sx={{ px: isMobile ? 0 : 4 }}>
                <AccessTimeIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Punctual Service
                </Typography>
                <Typography>
                  We monitor all flights and ensure our drivers arrive on time, even for early morning or late-night transfers.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box textAlign="center" sx={{ px: isMobile ? 0 : 4 }}>
                <LuggageIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Luggage Handling
                </Typography>
                <Typography>
                  Our professional drivers will assist with your luggage and ensure everything is safely loaded and unloaded.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box textAlign="center" sx={{ px: isMobile ? 0 : 4 }}>
                <LocalAtmIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  No Hidden Costs
                </Typography>
                <Typography>
                  Transparent pricing with no hidden fees. The price you see is the price you pay.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vehicle Fleet */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 600, mb: 6 }}>
          Our Vehicle Fleet
        </Typography>
        
        <Grid container spacing={4}>
          {vehicleTypes.map((vehicle, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                  {vehicle.name}
                </Typography>
                <Box sx={{ mb: 2, textAlign: 'center' }}>
                  <AirportShuttleIcon color="primary" sx={{ fontSize: 60 }} />
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ textAlign: 'center' }}>
                  <strong>Capacity:</strong> {vehicle.capacity}<br />
                  <strong>Luggage:</strong> {vehicle.luggage}
                </Typography>
                <List dense>
                  {vehicle.features.map((feature, i) => (
                    <ListItem key={i} disableGutters>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Ready to Book Your Transfer?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
            Contact us now to book your airport or hotel transfer. Our team is available 24/7 to assist you.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large" 
            component={RouterLink} 
            to="/contact"
            sx={{ 
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: '#f5f5f5',
              }
            }}
          >
            Contact Us Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Transfers;
