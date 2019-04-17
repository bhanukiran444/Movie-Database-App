import React, { Component } from 'react'
import "./Navigation.css";
import Selection from './Selection'
import Slider from './Slider'
import Button from './Button'

class Navigation extends Component {
  
  componentDidMount(){
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => this.props.setGenres(data.genres))
    // .then(data => this.setState({
    //   genres:data.genres
    // }))
    .catch(err => console.log(err))
  }
  
  render() {
    const { genre, genres, onGenreChange, onChange, year, rating, runtime } = this.props;

    return (
      <div>
        <section className="navigation">
         
          <Selection onGenreChange={onGenreChange} genre={genre}  genres={genres}  />
          <Slider data={year} onChange={onChange} />
        <Slider data={rating} onChange={onChange} />
        <Slider data={runtime} onChange={onChange} /> 
        <Button onClick={this.props.onSearchButtonClick} >
        Search
        </Button>
        </section>
      </div>
    )
  }
}

export default Navigation