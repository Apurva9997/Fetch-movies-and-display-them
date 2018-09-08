import React from "react"
import './index.css'
import uuidv1 from 'uuid/v1'

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://starlord.hackerearth.com/movieslisting')
            .then(response => response.json())
            .then(data => this.setState({ data:data }));
    }
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                    </thead>
                    <tbody>
                    <tr>
                    <th>Serial number</th>
                    <th>Movie title</th>
                    <th>Director name</th>
                    <th>Actor 1 name</th>
                    <th>Actor 2 name</th>
                    <th>Genres</th>
                    <th>Language</th>
                    <th>Country</th>
                    <th>Content Rating</th>
                    <th>Budget</th>
                    <th>Title Year</th>
                    <th>Plot Keywords</th>
                    <th>Movie imdb link</th>
                    </tr>
                {
                    this.state.data.map((line,index)=>{
                        return(
                            <tr key={uuidv1()}>
                            <td>{index}</td>
                            <td>{line.movie_title}</td>
                            <td>{line.director_name}</td>
                            <td>{line.actor_1_name}</td>
                            <td>{line.actor_2_name}</td>
                            <td>{line.genres}</td>
                            <td>{line.language}</td>
                            <td>{line.country}</td>
                            <td>{line.content_rating}</td>
                            <td>{line.budget}</td>
                            <td>{line.title_year}</td>
                            <td>{line.plot_keywords}</td>
                            <td>{line.movie_imdb_link}</td>
                            </tr>
                        )
                    })
                }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default App
