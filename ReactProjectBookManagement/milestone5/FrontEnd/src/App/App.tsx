import React, { useContext } from 'react';
import './App.css';
import HeaderBMS from "./header/HeaderBMS";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookAdd from './Pages/BookAdd';
import BookList from './Pages/BookList';
import NotFound from './Pages/NotFound';
import PerticularBookDetails from './perticular-book-details';
import AuthorList from './Pages/Authors';
import SearchPerticularBook from './Pages/search-perticular-book';
import Login from './Pages/login';
import Sinup from './Pages/sinup';
// import { PostsContext } from '../Providers/Posts/posts.provider';
import BooksProvider from '../Providers/books/books.provider';


function App() {
  // const { posts } = useContext(PostsContext);
  return (
    <Router>
      <div className="App">
        <BooksProvider>
          <HeaderBMS />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Sinup} />
            <Route exact path="/" component={BookList} />
            <Route exact path="/books/:searchBy" component={SearchPerticularBook} />
            <Route exact path="/bookAdd" component={BookAdd} />
            <Route exact path="/authors" component={AuthorList} />
            <Route exact path="/perticularBookDetails/:id" component={PerticularBookDetails} />
            <Route component={NotFound} />
          </Switch>
        </BooksProvider>
      </div>
    </Router>
  );
}

export default App;