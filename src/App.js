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
