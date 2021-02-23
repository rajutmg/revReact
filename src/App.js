import React from 'react';
import Manage, {Text1, Text2, Calculation} from './components/basic/Manage';
import Cards from './components/understaingProps/Cards';
import Sdata from './components/understaingProps/Sdata';


import Webseries from './components/understaingProps/compare/Webseries';
import Netflix from './components/understaingProps/compare/Netflix';
const favSeries = 'netflix';

const FavS = () => {
  if (favSeries === 'netflix') {
    return <Netflix />;
  } else {
    return <Webseries />;
  }
};

// with ternary Operator
const favSeries1 = 'webserise';

const FavS1 = () => (favSeries1 === 'netflix' ? <Netflix /> : <Webseries />);
function App() {
  return (
    <div className="App">
    {/* basic  */}
      {/* <Manage/>
      <Text1/>
      <Text2/>
      <Calculation/> */}
      {/* props */}
      <h2>My Heading</h2>
      {/* <Cards imgsrc="https://filmdaily.co/wp-content/uploads/2020/06/moneyheist-lede-5.jpg" title="A Netflix Original Series" sname="Money Heist" link="https://www.netflix.com/watch/80205343?trackId=13752289&tctx=0%2C1%2Ceba6a78d1b7bef160c402d5a6a5a6a80243f918d%3Ae37179fe876d5aa3502fb570d2160e3c5ddc7044%2Ceba6a78d1b7bef160c402d5a6a5a6a80243f918d%3Ae37179fe876d5aa3502fb570d2160e3c5ddc7044%2C%2Cs"/>
       */}
       {/* <Cards imgsrc={Sdata[0].imgsrc} title={Sdata[0].title} sname={Sdata[0].sname} link={Sdata[0].link}/> */}
               {Sdata.map((val, index) => {
          return (
            <Cards
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
        })};
        <FavS/>
        <FavS1/>
    </div>
  );
}

export default App;
