// import React from 'react';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import { makeStyles } from "@material-ui/core/styles";
// import { BrowserRouter as Route,Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import shops from "./AppF";
// import NestedList from "./list"
// import "./App.css"
// import Navbar from "./Nav";
// function Copyright() {
    
//   return (
  
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
// HOJOZAT.COM      </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
// const useStyles = makeStyles(theme => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));
// const cards = ["https://media.kempinski.com/1755/weddings-nl.jpg;width=340;height=245;mode=crop;anchor=middlecenter;autorotate=true;quality=75;scale=both;progressive=true;encoder=freeimage;format=jpg",
// "https://beuhairsalon.com/wp-content/uploads/2017/09/beuhair-interior-3-min-cropped.jpg",
// "https://jclao.com/wp-content/uploads/2017/07/Ministry-To-Close-Foreign-Clinics.jpg",
// "https://www.dssh.jo/uploads/1/1/2/9/112964589/2_176_orig.jpg","https://www.olegcassinistore.com/12351/satin-cummerbund-ball-gown-wedding-dress-v3848.jpg",
// "http://img.cakesdecor.com/njiycfnx7mwavxipx5jt.jpg",
// "https://hypowerfuel.com/wp-content/uploads/2019/10/best-restaurants.jpg",
// "https://1001freedownloads.s3.amazonaws.com/vector/thumb/70148/1380565708.png"]
// const categories=["Halls","Saloons","Clinics","Spas","Wedding Dresses","Cakes","Restaurants","Extras"]
// const describe =["wedding Halls for unforgetable moments",
// "To be a queen in your special day",
// "Best medical centers available",
// "Relaxation, massage and comfort centers",
// "latest designs wedding dresses",
// "most delecious cakes",
// "spectacular views, delecious food",
// "extra categories"]

// export default function Album() {
//   const classes = useStyles();
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main>
//       <Navbar />
        
//         <div className={classes.heroContent}>
//           <Container maxWidth="sm">
//             <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//             HOJOZAT.COM           
//              </Typography>
//           </Container>
//           <NestedList />
//         </div>
//         <Container className={classes.cardGrid} maxWidth="md">          
//           <Grid container spacing={4}>
//             {cards.map((card,i)=> (
              
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card className={classes.card}>
//                   <CardMedia
//                     className={classes.cardMedia}
//                     image={card}
//                     title="Image title"
//                   />
//                   <CardContent className={classes.cardContent}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       {categories[i]}
//                     </Typography>
//                     <Typography>
//                   {describe[i]}
//                    </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <div>
//                     <ul>
//                         <Link to="/shops"><Button size="small" color="primary">
//                                     Book Now
//                                     </Button></Link>
//                     </ul>
//                     </div>
//                     <Button size="small" color="primary">
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
    
//       <footer className={classes.footer}>
//         <Typography variant="h6" align="center" gutterBottom>
//                     HOJOZAT.COM        </Typography>
//         <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
//         Just a couple of clicks away </Typography>
//         <Copyright />
//       </footer>
//     </React.Fragment>
//   );
// }

import React from "react";
import "./App.css";
import $ from "jquery";
// import Album from "./album";
// import PrimarySearchAppBar from "./NavBar";
import { red } from "@material-ui/core/colors";
// import NavBar from "./NavBar";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from './Nav'


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    var that = this;

  }

  componentDidMount() {
    var that = this;
    var id = window.location.href.split('=')[1];
    $.ajax({
      url:"http://localhost:8000/",
      type: "GET",
      dataType: "JSON",
      success: function(data) {
        //   console.log(data);
        that.setState({ data: data });
        console.log(that.state.data);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  render(){
    console.log(this.state.data)
    const listItems = this.state.data.map((mainSchema) =>
    <div >
    <img className='img' src={mainSchema.mainComImg} ></img>
    <p >{mainSchema.mainComDis}</p>
    <button><Link to={`/${mainSchema.id}`}>EXPLORE MORE</Link>
</button>    <br></br>

    <br></br>
    </div>
  );
    return (
      <div>
                  <Navbar/>

         <ul className='yara' >
            {listItems}
        </ul>
      </div>
       
    )
}
}          

export default Home;
