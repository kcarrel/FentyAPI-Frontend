import React, { Component} from 'react';
import logo from './logo.png';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './App.css';



class App extends Component {
  render () {

    return (
      <React.Fragment>
        <CssBaseline />
          <Container style={{ backgroundColor: '#E8C0AE', height: '90vh' }} fixed>
            <header className="center">
              <h1>
                Fenty Beauty API
              </h1>
            </header>
            <table className="center">
              <tr>
                <th className="header">Routes and Queries</th>
                <th className="header">What it does </th>
              </tr>
              <tr>
                <td ><span>GET https://fenty-api.herokuapp.com/products </span></td>
                <td>Gets all products</td>
               </tr>
               <tr>
                 <td ><span>GET https://fenty-api.herokuapp.com/products/$ProductId</span></td>
                 <td>Gets a product by id</td>
                </tr>
                <tr>
                  <td ><span>GET https://fenty-api.herokuapp.com/name/$ProductName </span></td>
                  <td>Gets a product by name </td>
                 </tr>
                 <tr>
                   <td ><span>GET https://fenty-api.herokuapp.com/collection/$ProductCollection </span></td>
                   <td>Gets products in a collection (example: Pro Kiss'r)</td>
                  </tr>
                <tr>
                  <td ><span>GET https://fenty-api.herokuapp.com/random </span></td>
                  <td>Gets a random product</td>
                </tr>
                <tr>
                  <td ><span>GET https://fenty-api.herokuapp.com/ingredient/$Ingredient</span></td>
                  <td>Gets products containing a specific ingredient  (example: polybutene)</td>
                 </tr>
                 <tr>
                   <td ><span>GET https://fenty-api.herokuapp.com/color/$Color</span></td>
                   <td>Gets products within a specific color family (example: blue)</td>
                  </tr>
                  <tr>
                    <td ><span>GET https://fenty-api.herokuapp.com/price/$Price</span></td>
                    <td>Gets products by a price point (example: 20)</td>
                   </tr>
                   <tr>
                     <td ><span>GET https://fenty-api.herokuapp.com/type/$Type</span></td>
                     <td>Gets products within a specific product type (ex: foundation)</td>
                    </tr>
            </table>
          </Container>
          <footer>
            <nav>
              <a href="https://github.com/kcarrel/FentyAPI" alt="Github">Github</a>
              <a href="https://twitter.com/ktcarrel18" alt="Twitter">Twitter</a>
              <a href="https://kcarrel.github.io/" alt="Personal Website">Personal Website</a>
              <a href="https://www.linkedin.com/in/katie-carrel/" alt="LinkedIn">LinkedIn</a>
            </nav>
            <p>Created by: Katie Carrel</p>
          </footer>
      </React.Fragment>
    );
  }
}

export default App;
