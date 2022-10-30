import React from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 530,
      md: 800,
      lg: 1050,
      xl: 1536,
    },
  },
});

const Progress = () => {
  return (
    <>
       
       <ThemeProvider theme={theme}>
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={"3rem"} columnSpacing={"3rem"}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item>
                  <Skeleton variant="rectangular" width={"100%"} height={150} />
                  <div style={{padding: 16}}>
                    <div style={{marginBottom: 16}}>
                      <Skeleton variant="text" sx={{ fontSize: '.8rem' }} />
                    </div>
                    <div style={{paddingBottom: 46}}>
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                      <Skeleton variant="text" sx={{ fontSize: '.5rem' }} />
                    </div>
                    
                  </div>
                </Item>
              </Grid>
              
              
            </Grid>
          </Box>
        </ThemeProvider>
    </>
  )
}

export default Progress