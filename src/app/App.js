import './App.css';
import React from 'react'
import Header from '../components/header'
import NewsList from '../components/newsList'
import News,{ newsCategory } from '../news/index'
import Pagination from '../components/pagination'
import Loading from '../components/loading'
import axios from 'axios'

class App extends React.Component {

  state = {
    news: [],
    category: newsCategory.technology
  }

  changeCategory = (category) => {
    this.setState({ category })
  }

  componentDidMount() {
    // const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=5`
    // axios.get(url)
    //   .then(response => {
    //     this.setState({
    //       news: response.data.articles,
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    const news = new News(newsCategory.technology)
    news.getNews().then((data) => {
      console.log(data)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.category != this.state.category) {
    //   const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=5`
    //   axios.get(url)
    //     .then(response => {
    //       this.setState({
    //         news: response.data.articles,
    //       })
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={this.state.category} changeCategory={this.changeCategory} />
            <div className="d-flex">
              <p className="text-black-50">
                About {0} results found
              </p>
              <p className="text-black-50 ml-auto">
                {1} page of {100}
              </p>
            </div>
            <NewsList news={this.state.news} />
            <Pagination />
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
