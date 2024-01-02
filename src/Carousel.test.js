import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("moves to the previous image when the left arrow is clicked", function() {
  const { container } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);

  // Move forward in the carousel to the second image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // Now move back to the first image
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // Expect the first image to show, and the second image not to show
  expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
  expect(container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument();
});

handleLeftArrowClick = () => {
  this.setState((prevState) => ({
    currentImageIndex: prevState.currentImageIndex > 0 ? prevState.currentImageIndex - 1 : 0,
  }));
};

<button onClick={this.handleLeftArrowClick} className="bi-arrow-left-circle">...</button>

it("hides the left arrow when on the first image", function() {
  const { container } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
  const leftArrow = container.querySelector(".bi-arrow-left-circle");

  expect(leftArrow).not.toBeInTheDocument();
});

it("hides the right arrow when on the last image", function() {
  const { container } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />);
  
  // Navigate to the last image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  while (rightArrow) {
    fireEvent.click(rightArrow);
  }

  expect(rightArrow).not.toBeInTheDocument();
});
