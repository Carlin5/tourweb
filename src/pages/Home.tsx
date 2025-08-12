import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button,
  Paper,
  Avatar,
  Rating
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Globe from 'react-globe.gl';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: React.FC = () => {
  // Sample tour data
  const tours = [
    {
      id: 1,
      title: 'Bwindi Gorilla Trekking',
      image: 'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Experience the thrill of tracking mountain gorillas in their natural habitat.',
      duration: '3 days'
    },
    {
      id: 2,
      title: 'Murchison Falls Safari',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Explore the magnificent Murchison Falls and spot diverse wildlife.',
      duration: '4 days'
    },
    {
      id: 3,
      title: 'Queen Elizabeth National Park',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Discover the rich biodiversity of Queen Elizabeth National Park.',
      duration: '3 days'
    }
  ];

  // Sample locations data
  const locations = [
    {
      id: 1,
      name: 'Kampala',
      image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'The vibrant capital city of Uganda.'
    },
    {
      id: 2,
      name: 'Jinja',
      image: 'https://images.unsplash.com/photo-1565109698955-47a3acedd48e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'The adventure capital and source of the Nile.'
    },
    {
      id: 3,
      name: 'Entebbe',
      image: 'https://images.unsplash.com/photo-1517351313872-69dae3f86635?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'A peaceful town on the shores of Lake Victoria.'
    }
  ];

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 5,
      text: 'Our gorilla trekking experience was absolutely incredible! The guides were knowledgeable and the whole trip was well organized. Highly recommend Wise Tours!'
    },
    {
      id: 2,
      name: 'Michael Brown',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 5,
      text: 'The safari at Queen Elizabeth National Park exceeded all our expectations. We saw lions, elephants, and so many other animals. An unforgettable experience!'
    },
    {
      id: 3,
      name: 'Emily Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 4,
      text: 'Wise Tours provided excellent service from start to finish. Their attention to detail and customer care made our Uganda trip special.'
    },
    {
      id: 4,
      name: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      rating: 5,
      text: 'The white water rafting experience in Jinja was amazing! The team was professional and safety was their priority. Will definitely book with Wise Tours again!'
    }
  ];

  // Globe data
  const markerData = [
    { lat: 0.3476, lng: 32.5825, name: 'Kampala' },
    { lat: 0.4478, lng: 33.2026, name: 'Jinja' },
    { lat: 0.0512, lng: 32.4637, name: 'Entebbe' },
    { lat: -1.0583, lng: 29.6750, name: 'Bwindi' },
    { lat: 2.2884, lng: 31.7784, name: 'Murchison Falls' },
    { lat: -0.1962, lng: 30.0572, name: 'Queen Elizabeth NP' }
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        className="hero-section"
        sx={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }}
      >
        <Box className="hero-overlay">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Discover the Pearl of Africa
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ maxWidth: 800, mb: 4 }}>
            Experience unforgettable adventures with Wise Tours and Travel in Uganda
          </Typography>
          <Box>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              component={RouterLink} 
              to="/tours"
              sx={{ mr: 2 }}
            >
              Explore Tours
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large" 
              component={RouterLink} 
              to="/contact"
              sx={{ 
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>

      {/* About Us Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" className="section-title">
              About Wise Tours and Travel
            </Typography>
            <Typography variant="body1" paragraph>
              Wise Tours and Travel is a premier tour operator based in Uganda, specializing in creating unforgettable travel experiences across East Africa. With our deep local knowledge and passion for showcasing Uganda's natural beauty, we offer exceptional tours that connect travelers with the heart of Africa.
            </Typography>
            <Typography variant="body1" paragraph>
              Our experienced guides and carefully crafted itineraries ensure that you'll experience the best that Uganda has to offer, from thrilling wildlife safaris to cultural immersions and adventure activities.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              component={RouterLink} 
              to="/about"
              sx={{ mt: 2 }}
            >
              Learn More About Us
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="About Wise Tours and Travel"
              sx={{ 
                width: '100%', 
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Sample Tours Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" className="section-title" sx={{ mb: 4 }}>
            Popular Tours
          </Typography>
          <Grid container spacing={4}>
            {tours.map((tour) => (
              <Grid item key={tour.id} xs={12} sm={6} md={4}>
                <Card className="tour-card">
                  <CardMedia
                    className="tour-card-media"
                    image={tour.image}
                    title={tour.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                      {tour.title}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {tour.duration}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {tour.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small" 
                      color="primary" 
                      component={RouterLink} 
                      to={`/tours/${tour.id}`}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary" 
              component={RouterLink} 
              to="/tours"
            >
              View All Tours
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Sample Locations Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" className="section-title" sx={{ mb: 4 }}>
          Popular Destinations
        </Typography>
        <Grid container spacing={4}>
          {locations.map((location) => (
            <Grid item key={location.id} xs={12} sm={6} md={4}>
              <Card className="location-card">
                <CardMedia
                  className="location-card-media"
                  image={location.image}
                  title={location.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {location.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {location.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" className="section-title" sx={{ mb: 4 }}>
            What Our Clients Say
          </Typography>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <Paper 
                  elevation={2} 
                  className="testimonial-card"
                  sx={{ 
                    p: 3, 
                    m: 1,
                    height: 280,
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      sx={{ width: 60, height: 60, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6" component="h3">
                        {testimonial.name}
                      </Typography>
                      <Rating value={testimonial.rating} readOnly size="small" />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    "{testimonial.text}"
                  </Typography>
                </Paper>
              </div>
            ))}
          </Slider>
        </Container>
      </Box>

      

      {/* CTA Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white', 
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Start Your Adventure?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
            Contact us today to plan your perfect Ugandan safari or adventure. Our team is ready to create a customized itinerary just for you.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large" 
            component={RouterLink} 
            to="/contact"
          >
            Contact Us Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
