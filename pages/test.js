const Test = (props) => {
  return <div style={`background:${bg}; fontSize:${size};`}>{children}</div>;
};

const TestT = () => {
  return (
    <Test bg="red" size="2rem">
      content
    </Test>
  );
  // return Test({children:'child', bg='red', size='2rem'})
};
let props = {
  bg: "red",
  size: "2rem",
};
