import { Card, CardActions, CardContent, CardMedia, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './Data.css'

const Data = () => {
  const [shoe, setShow] = useState([]) || '';
  const [many, setMany] = useState('') || '';
  const [country, setCountry] = useState([]) || '';

  const url = `https://api.covid19api.com/countries`;
  const countryurl = `https://api.covid19api.com/dayone/country/${many ? many : 'Bangladesh'}`


  useEffect(() => {
    //  fetch('https://api.tvmaze.com/search/shows?q=all')
    fetch(url)
      .then(res => res.json())
      .then(data => setShow(data))
  }, [url, setShow])
  // console.log(shoe)

  // useEffect(()=>{
  //   fetch(`https://api.covid19api.com/dayone/country/${many}`)
  //   .then(res=>res.json())
  //   .then(data=>setCountry(data))
  // },[])
  // console.log(country)
  useEffect(() => {
    fetch(countryurl)
      .then(res => res?.json())
      .then(data => setCountry(data?.reverse()[0]))
  }, [countryurl, setCountry])






  const buttons = (event) => {
    const store = event.target.value;
    setMany(store)

  }
  return (
    <div>

      <div className='container '>

        <hr />
        <FormControl className="mans" sx={{ minWidth: 1 }}>
          <InputLabel style={{ color: 'black' }} id="demo-simple-select-autowidth-label">Select County</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            // value={singleCounty ? singleCounty : 'Bangladesh'}
            onChange={buttons}
            autoWidth
            label='Select'

          >

            {
              shoe?.map((country, index) =>
                <MenuItem key={index} value={country?.Country}>

                  {country?.Country}
                </MenuItem>
              )
            }

          </Select>
        </FormControl>
      </div>


      <div className="container moves">
        <Container>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>

            <Grid item xs={2} sm={4} md={4}>
              <Card className='uses' sx={{ minWidth: 275, border: 0, boxShadow: 0, background: "blanchedalmond" }}>
              

                <CardContent>

                  {/* <Typography variant="h5">
           {country.Active}
        </Typography>
         */}
         <h1>Confirmed</h1>
                  <h2 className="
                                                title-font
                                                font-medium text-3xl
                                                text-white">
                    <CountUp start={0} end={country?.Confirmed} duration={3} seperator="," />
                  </h2>

                </CardContent>
                <CardActions>

                </CardActions>
              </Card>

            </Grid>



            {/* reverse  */}
            <Grid item xs={2} sm={4} md={4}>
              <Card className="parts" sx={{ minWidth: 275, border: 0, boxShadow: 0, background: "burlywood" }}>
                

                <CardContent>

                  {/* <Typography variant="h5">
           {country.Active}
        </Typography>
         */}
         <h1>Deaths</h1>
                  <h2 className="
                                                title-font
                                                font-medium text-3xl
                                                text-white">
                    <CountUp start={0} end={country?.Deaths} duration={3} seperator="," />
                  </h2>

                </CardContent>
                <CardActions>

                </CardActions>
              </Card>

            </Grid>



            {/* dead  */}

            <Grid item xs={2} sm={4} md={4}>
              <Card className="good" sx={{ minWidth: 275, border: 0, boxShadow: 0, background: "skyblue" }}>
               

                <CardContent>

                  {/* <Typography variant="h5">
           {country.Active}
        </Typography>
         */}
         <h1>Active</h1>
                  <h2 className="
                                                title-font
                                                font-medium text-3xl
                                                text-white">
                    <CountUp start={0} end={country?.Active} duration={3} seperator="," />
                  </h2>

                </CardContent>
                <CardActions>

                </CardActions>
              </Card>

            </Grid>


            {/* recoverd  */}
            <Grid item xs={2} sm={4} md={4}>
              <Card className="values" sx={{ minWidth: 275, border: 0, boxShadow: 0, background: "darkgrey" }}>
               

                <CardContent>

                  {/* <Typography variant="h5">
           {country.Active}
        </Typography>
         */}
         <h1>Recoverd</h1>
                  <h2 className="
                                                title-font
                                                font-medium text-3xl
                                                text-white">
                    <CountUp start={0} end={country?.Recoverd} duration={3} seperator="," />
                  </h2>

                </CardContent>
                <CardActions>

                </CardActions>
              </Card>

            </Grid>



          </Grid>


         
          
        </Container>

      </div>


    </div>
  );
};

export default Data;