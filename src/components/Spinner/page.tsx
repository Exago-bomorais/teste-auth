import styled from './page.module.css';

interface Props {
  width?: string;
  height?: string;
}

const Spinner = ({ width, height }: Props) => {
  return (
    <div
      className={styled.spinner}
      style={{ width: width, height: height }}
    ></div>
  );
};

export default Spinner;
