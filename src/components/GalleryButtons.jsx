import { ArrowLeft, ArrowRight } from "../components/Icons";

function Button({ children, ...props }) {
  return (
    <button
      className="bg-black size-[55px] xl:size-[90px] flex justify-center items-center hover:bg-veryDarkGray"
      {...props}
    >
      {children}
    </button>
  );
}

export default function GalleryButtons({ setPageNum, ...props }) {
  const maxPageNum = 2;
  const minPageNum = 0;

  function decreasePageNum() {
    setPageNum((prevNum) =>
      prevNum === minPageNum ? maxPageNum : prevNum - 1
    );
  }

  function increasePageNum() {
    setPageNum((prevNum) =>
      prevNum === maxPageNum ? minPageNum : prevNum + 1
    );
  }

  return (
    <div id="container--arrows" {...props}>
      <Button onClick={decreasePageNum}>
        <ArrowLeft />
      </Button>

      <Button onClick={increasePageNum}>
        <ArrowRight />
      </Button>
    </div>
  );
}
