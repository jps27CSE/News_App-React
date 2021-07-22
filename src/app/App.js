import './App.css';
import React from 'react'
import Header from '../components/header'
import NewsList from '../components/newsList'
import { newsCategory } from '../news/index'
import Pagination from '../components/pagination'
import Loading from '../components/loading'
import axios from 'axios'


const fakeNews = [
  {
    title: 'Title',
    content: 'Content',
    url: 'https://linktonews.com',
    urlToImage: 'https://linktoimage.com',
    publishedAt: 'published date and time',
    source: {
      name: 'CNN'
    }
  },
  {
    title: 'Title',
    content: 'Content',
    url: 'https://linktonews.com',
    urlToImage: 'https://linktoimage.com',
    publishedAt: 'published date and time',
    source: {
      name: 'CNN'
    }
  }
]

const URL = 'https://jsonplaceholder.typicode.com/users'
axios.get(URL).then(response => {
  console.log(response.data)
})

const user = {
  name: 'test',
  email: 'test@gmail.com',
  username: 'test123'
}

axios.post(URL, user).then(response => {
  console.log(response)
})

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={newsCategory.technology} />
            <div className="d-flex">
              <p className="text-black-50">
                About {0} results found
              </p>
              <p className="text-black-50 ml-auto">
                {1} page of {100}
              </p>
            </div>
            <NewsList news={fakeNews} />
            <Pagination />
            <Loading />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
