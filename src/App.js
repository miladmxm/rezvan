// import "./reset.scss";
// import Test from "./components/test";
// import Br from "./components/br";
// import LoadScroll from "./components/didmount";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useRef } from "react";

// const App = () => {
//   const load = useRef(null);

//   const goToLoad = () => {
//     window.scrollBy(0, window.innerHeight);

//     // load.current.scrollIntoView({ behavior: "smooth" });
//   };
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });

//     let lastScrollTop = 0;


//     window.addEventListener(
//       "scroll",
//       function () {
//         // or window.addEventListener("scroll"....
//         const st = window.pageYOffset || document.documentElement.scrollTop;
//         if (st > lastScrollTop) {
//           if(window.scrollY < 20){
//             goToLoad()
//           }
//         } else {
//         }
//         lastScrollTop = st <= 0 ? 0 : st;
//       },
//       false
//     );
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   });
//   return (
//     <div
//       onScroll={() => {
//         console.log("hh");
//       }}
//     >
//       <Test />
//       <Br />
//       <button onClick={goToLoad}>click</button>
//       <Br />
//       <LoadScroll refd={load} aos={"zoom-in"} />
//       <Br />
//     </div>
//   );
// };
// const headerAstop = header.offsetTop
// window.addEventListener('scroll', () => {
//   if (window.pageYOffset > headerAstop) {
//       header.classList.add('stiky')
//   } else {
//       header.classList.remove('stiky')
//   }
// })


// export default App;

import "./main.scss";
import Index from './components/home/index';
const App = () => {
  return (
    <>
      <Index />
      
    </>
  )
}
export default App