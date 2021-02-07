import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import Container from "./components/Container/Container";
import Loader from "react-loader-spinner";
import Searchbar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "react-toastify/dist/ReactToastify.css";

import apiService from "./services/hits-api";

export default class App extends Component {
  state = {
    query: "",
    images: [],
    largeImageURL: "",
    page: 1,
    error: null,
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [], page: 1, error: null });
    }
  }

  searchImages = async () => {
    const { query, page } = this.state;

    if (query.trim() === "") {
      return toast.info("Please enter search query to find images!");
    }

    this.setState({ isLoading: true });

    try {
      const request = await apiService(query, page);

      this.setState(({ images, page }) => ({
        images: [...images, ...request],
        page: page + 1,
      }));
      if (request.length === 0) {
        this.setState({ error: `No results found ${query}!` });
      }
    } catch (error) {
      this.setState({ error: error });
    } finally {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      this.setState({ isLoading: false });
    }
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchImages();
  };

  onLoadMore = () => {
    this.searchImages();
    this.scrollPage();
  };

  onOpenModal = (e) => {
    this.setState({ largeImageURL: e.target.dataset.source });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: "smooth",
      });
    }, 1000);
  };

  render() {
    const {
      query,
      images,
      largeImageURL,
      isLoading,
      showModal,
      error,
    } = this.state;

    return (
      <Container>
        <Searchbar
          onHandleSubmit={this.handleSubmit}
          onSearchQueryChange={this.handleChange}
          value={query}
        />

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        )}

        {isLoading && (
          <Loader
            type="Oval"
            color="#00BFFF"
            height={100}
            width={100}
            style={{ textAlign: "center" }}
          />
        )}

        {!isLoading && images.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}

        {showModal && (
          <Modal
            onToggleModal={this.toggleModal}
            largeImageURL={largeImageURL}
          />
        )}
        <ToastContainer autoClose={2000} />
      </Container>
    );
  }
}

// import React, { useState, useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import apiService from './services/api-service';
// import Container from './component/Container/Container';
// import Searchbar from './component/Searchbar/SearchBar';
// import ImageGallery from './component/ImageGallery/ImageGallery';
// import Button from './component/Button/Button';
// import LoaderComponent from './component/Loader/Loader';
// import Modal from './component/Modal/Modal';
// import ErrorView from './component/ShowError/ShowError';

// function App() {
//   const [query, setQuery] = useState('');
//   const [images, setImages] = useState([]);
//   const [largeImageURL, setLargeImageURL] = useState('');
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     if (!query) return;
//     const fetchImages = async () => {
//       try {
//         const request = await apiService(query, page);
//         if (request.length === 0) {
//           return setError(`No results were found for ${query}!`);
//         }
//         setImages(prevImages => [...prevImages, ...request]);
//       } catch (error) {
//         setError('Something went wrong. Try again.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchImages();
//   }, [page, query]);

//   const searchImages = newSearch => {
//     setQuery(newSearch);
//     setImages([]);
//     setPage(1);
//     setError(null);
//     setIsLoading(true);
//   };

//   const onLoadMore = () => {
//     setIsLoading(true);
//     setPage(prevPage => prevPage + 1);
//     scrollPage();
//   };

//   const onOpenModal = e => {
//     setLargeImageURL(e.target.dataset.source);
//     toggleModal();
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const scrollPage = () => {
//     setTimeout(() => {
//       window.scrollBy(0, window.innerHeight + 150);
//     }, 1000);
//   };

//   return (
//     <Container>
//       <Searchbar onHandleSubmit={searchImages} />

//       {error && <ErrorView texterror={error} />}

//       {images.length > 0 && (
//         <ImageGallery images={images} onOpenModal={onOpenModal} />
//       )}

//       {isLoading && <LoaderComponent />}

//       {!isLoading && images.length > 0 && <Button onLoadMore={onLoadMore} />}

//       {showModal && (
//         <Modal onToggleModal={toggleModal} largeImageURL={largeImageURL} />
//       )}
//       <ToastContainer autoClose={3700} />
//     </Container>
//   );
// }

// export default App;
