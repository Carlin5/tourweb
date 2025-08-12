import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent,
  Avatar,
  Divider
} from '@mui/material';

const About: React.FC = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'John Mapera',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'With over 15 years of experience in the tourism industry, John founded Wise Tours to share his passion for Uganda\'s natural beauty with the world.'
    },
    {
      id: 2,
      name: 'Sarah Nambi',
      position: 'Head Tour Guide',
      image: '/images/img1.avif',
      bio: 'Sarah is a certified wildlife expert with extensive knowledge of Uganda\'s national parks and wildlife. She leads our most challenging expeditions.'
    },
    {
      id: 3,
      name: 'David Ochen',
      position: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'David ensures that all our tours run smoothly, handling logistics and ensuring the highest standards of service and safety for our clients.'
    },
    {
      id: 4,
      name: 'Grace Atim',
      position: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      bio: 'Grace is dedicated to making your experience with Wise Tours exceptional from the first inquiry to your return home.'
    }
  ];

  // Company values
  const values = [
    {
      id: 1,
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible tourism that preserves Uganda\'s natural heritage for future generations.'
    },
    {
      id: 2,
      title: 'Authenticity',
      description: 'We provide genuine cultural experiences that respect and celebrate local communities and traditions.'
    },
    {
      id: 3,
      title: 'Excellence',
      description: 'We strive for the highest standards in all aspects of our tours, from accommodations to guides to customer service.'
    },
    {
      id: 4,
      title: 'Safety',
      description: 'The safety and well-being of our clients is our top priority on every expedition and adventure.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          mb: 6
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}
        />
        <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', px: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            About Wise Tours and Travel
          </Typography>
          <Typography variant="h5" component="h2" sx={{ maxWidth: 800, mx: 'auto' }}>
            Your trusted partner for unforgettable adventures in Uganda
          </Typography>
        </Box>
      </Box>

      {/* Our Story Section */}
      <Container sx={{ mb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              Founded in 2010, Wise Tours and Travel began with a simple mission: to share the incredible beauty and diversity of Uganda with travelers from around the world. What started as a small operation with just two guides has grown into one of Uganda's premier tour companies.
            </Typography>
            <Typography variant="body1" paragraph>
              Our founder, John Mukasa, grew up near Queen Elizabeth National Park and developed a deep appreciation for Uganda's wildlife and landscapes from an early age. After working as a guide for several international companies, he decided to create a tour company that would showcase Uganda through the eyes of locals, providing authentic experiences while supporting local communities.
            </Typography>
            <Typography variant="body1">
              Today, Wise Tours and Travel employs over 30 staff members and has helped thousands of travelers discover the wonders of Uganda. We remain committed to our founding principles of sustainability, authenticity, and excellence in everything we do.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Wise Tours and Travel Story"
              sx={{ 
                width: '100%', 
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Our Values Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value) => (
              <Grid item key={value.id} xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3" color="primary">
                      {value.title}
                    </Typography>
                    <Typography variant="body2">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Team Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item key={member.id} xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                  <Avatar 
                    src={member.image} 
                    alt={member.name}
                    sx={{ width: 120, height: 120 }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" align="center">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" align="center" gutterBottom>
                    {member.position}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body2">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Why Choose Wise Tours and Travel
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Local expertise"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    Local Expertise
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our guides are all Ugandan nationals with deep knowledge of local culture, wildlife, and hidden gems that most tourists never discover.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Personalized service"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    Personalized Service
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We tailor each tour to meet your specific interests, needs, and preferences, ensuring a truly personalized experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Responsible tourism"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    Responsible Tourism
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We are committed to sustainable practices that protect Uganda's natural environment and benefit local communities.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
