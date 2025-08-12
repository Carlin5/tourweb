import React, { useState } from 'react';
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
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const Tours: React.FC = () => {
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [duration, setDuration] = useState('all');
  const [category, setCategory] = useState('all');

  // Sample tour data
  const tours = [
    {
      id: 1,
      title: 'Bwindi Gorilla Trekking',
      image: 'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Experience the thrill of tracking mountain gorillas in their natural habitat. This tour takes you deep into Bwindi Impenetrable Forest, home to half of the world\'s remaining mountain gorilla population.',

      duration: 3,
      category: 'Wildlife',
      highlights: ['Gorilla trekking permit included', 'Expert local guides', 'Comfortable accommodation', 'All meals included'],
      difficulty: 'Moderate'
    },
    {
      id: 2,
      title: 'Murchison Falls Safari',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Explore the magnificent Murchison Falls and spot diverse wildlife including elephants, giraffes, lions, and hippos. Enjoy boat safaris on the Nile and game drives in Uganda\'s largest national park.',

      duration: 4,
      category: 'Safari',
      highlights: ['Game drives', 'Boat safari on the Nile', 'Visit to the top of the falls', 'Rhino tracking at Ziwa Rhino Sanctuary'],
      difficulty: 'Easy'
    },
    {
      id: 3,
      title: 'Queen Elizabeth National Park',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Discover the rich biodiversity of Queen Elizabeth National Park, famous for its tree-climbing lions and abundant bird species. Enjoy game drives, boat safaris, and stunning crater lake views.',

      duration: 3,
      category: 'Safari',
      highlights: ['Tree-climbing lions', 'Kazinga Channel boat cruise', 'Chimpanzee tracking', 'Crater lake exploration'],
      difficulty: 'Easy'
    },
    {
      id: 4,
      title: 'Jinja Adventure Package',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Get your adrenaline pumping with white water rafting, bungee jumping, and kayaking at the source of the Nile in Jinja, the adventure capital of East Africa.',

      duration: 2,
      category: 'Adventure',
      highlights: ['Grade 5 white water rafting', 'Bungee jumping', 'Jet boating', 'Sunset cruise on the Nile'],
      difficulty: 'Challenging'
    },
    {
      id: 5,
      title: 'Rwenzori Mountains Trek',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Trek through the stunning "Mountains of the Moon" with its unique flora and breathtaking landscapes. This challenging hike rewards you with some of Africa\'s most spectacular mountain scenery.',

      duration: 7,
      category: 'Hiking',
      highlights: ['Summit Margherita Peak (5,109m)', 'Unique afro-alpine vegetation', 'Glaciers and snow at the equator', 'Professional mountain guides'],
      difficulty: 'Very Challenging'
    },
    {
      id: 6,
      title: 'Kibale Forest Chimpanzee Tracking',
      image: 'https://images.unsplash.com/photo-1544298621-30b64bd32b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Track chimpanzees in Kibale Forest, home to the highest concentration of primates in Africa. Learn about these fascinating great apes and their behavior in the wild.',

      duration: 2,
      category: 'Wildlife',
      highlights: ['Chimpanzee tracking permit included', 'Guided forest walks', 'Bigodi Wetland Sanctuary visit', 'Cultural encounters'],
      difficulty: 'Moderate'
    },
    {
      id: 7,
      title: 'Lake Mburo Wildlife Safari',
      image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Explore the savannah plains and acacia woodlands of Lake Mburo National Park, home to zebras, impalas, and over 300 bird species. Enjoy walking safaris, boat trips, and horseback riding.',

      duration: 2,
      category: 'Safari',
      highlights: ['Walking safari', 'Boat trip on Lake Mburo', 'Horseback safari option', 'Night game drive'],
      difficulty: 'Easy'
    },
    {
      id: 8,
      title: 'Cultural Tour of Uganda',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      description: 'Immerse yourself in Uganda\'s rich cultural heritage with visits to local communities, traditional performances, and historical sites. Learn about the diverse ethnic groups that make up modern Uganda.',

      duration: 5,
      category: 'Cultural',
      highlights: ['Visit to the Kasubi Tombs', 'Traditional dance performances', 'Community visits', 'Craft workshops'],
      difficulty: 'Easy'
    }
  ];

  // Filter tours based on search and filter criteria
  const filteredTours = tours.filter(tour => {
    // Search term filter
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tour.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tour.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    // No price filter
    
    // Duration filter
    let matchesDuration = true;
    if (duration === '1-2') {
      matchesDuration = tour.duration >= 1 && tour.duration <= 2;
    } else if (duration === '3-5') {
      matchesDuration = tour.duration >= 3 && tour.duration <= 5;
    } else if (duration === 'over5') {
      matchesDuration = tour.duration > 5;
    }
    
    // Category filter
    const matchesCategory = category === 'all' || tour.category === category;
    
    return matchesSearch && matchesDuration && matchesCategory;
  });

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
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
            Our Tours
          </Typography>
          <Typography variant="h5" component="h2" sx={{ maxWidth: 800, mx: 'auto' }}>
            Discover the best of Uganda with our carefully crafted tours
          </Typography>
        </Box>
      </Box>

      {/* Search and Filter Section */}
      <Container sx={{ mb: 6 }}>
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FilterListIcon sx={{ mr: 1 }} />
                <Typography variant="body1" sx={{ mr: 2 }}>
                  Filters:
                </Typography>

                <FormControl size="small" sx={{ minWidth: 120, mr: 2 }}>
                  <InputLabel>Duration</InputLabel>
                  <Select
                    value={duration}
                    label="Duration"
                    onChange={(e) => setDuration(e.target.value)}
                  >
                    <MenuItem value="all">All Durations</MenuItem>
                    <MenuItem value="1-2">1-2 Days</MenuItem>
                    <MenuItem value="3-5">3-5 Days</MenuItem>
                    <MenuItem value="over5">Over 5 Days</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value="all">All Categories</MenuItem>
                    <MenuItem value="Wildlife">Wildlife</MenuItem>
                    <MenuItem value="Safari">Safari</MenuItem>
                    <MenuItem value="Adventure">Adventure</MenuItem>
                    <MenuItem value="Hiking">Hiking</MenuItem>
                    <MenuItem value="Cultural">Cultural</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Results Section */}
        <Typography variant="h5" component="h2" gutterBottom>
          {filteredTours.length} Tours Found
        </Typography>
        <Divider sx={{ mb: 4 }} />
        
        <Grid container spacing={4}>
          {filteredTours.map((tour) => (
            <Grid item key={tour.id} xs={12} md={6} lg={4}>
              <Card className="tour-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={tour.image}
                  alt={tour.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {tour.title}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {tour.duration} days
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label={tour.category} 
                      size="small" 
                      color="primary" 
                      variant="outlined" 
                    />
                    <Chip 
                      label={tour.difficulty} 
                      size="small" 
                      sx={{ ml: 1 }}
                      color={
                        tour.difficulty === 'Easy' ? 'success' : 
                        tour.difficulty === 'Moderate' ? 'info' : 
                        tour.difficulty === 'Challenging' ? 'warning' : 'error'
                      }
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {tour.description.substring(0, 150)}...
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Highlights:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                    {tour.highlights.slice(0, 2).map((highlight, index) => (
                      <Typography component="li" variant="body2" key={index}>
                        {highlight}
                      </Typography>
                    ))}
                    {tour.highlights.length > 2 && (
                      <Typography variant="body2">
                        And more...
                      </Typography>
                    )}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    color="primary" 
                    component={RouterLink} 
                    to={`/tours/${tour.id}`}
                    sx={{ ml: 'auto' }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {filteredTours.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No tours found matching your criteria. Please try different filters.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Tours;
