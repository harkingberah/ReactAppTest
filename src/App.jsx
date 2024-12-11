import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Heading />
      <Note img="https://imgur.com/TAjPsyg.png" name="Different Heading" myPara="changed Paragraph"/>
      <Note img="https://imgur.com/aURbCXq.png" name="Different Heading" myPara="changed Paragraph"/>
      <Note img="https://imgur.com/aURbCXq.png" name="Different Heading" myPara="changed Paragraph"/>
      <Note img="https://imgur.com/aURbCXq.png" name="Different Heading" myPara="changed Paragraph"/>
      <Note img="https://imgur.com/aURbCXq.png" name="Different Heading" myPara="changed Paragraph"/>
      <Note img="https://imgur.com/aURbCXq.png" name="Different Heading" myPara="changed Paragraph"/>
      <Note img="https://imgur.com/aURbCXq.png" name="Different Heading" myPara="changed Paragraph"/>
      <Note img="https://imgur.com/aURbCXq.png" name="Different Heading" myPara="changed Paragraph"/>
      <Footer />
    </div>
  );
}
export default App;