import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import {ThemeProvider} from "next-themes"
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps , router}) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
      <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
        {/* the component below represent a static side bar */}
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
        <NavBar />
        {/* the component below represent all pages that will be rendered dynamically */}
        <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}/>
       
        </AnimatePresence>
      </div>
    </div>
    </ThemeProvider>
    
  );
}

export default MyApp;
/*
 
*/